'use client';

import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import { KeplrController, WalletType } from '@goblinhunt/cosmes/wallet';
import { CHAIN_CONFIG, COSMES_CHAIN_INFO, CHAIN_SUGGEST } from './config';

declare global {
  interface Window {
    keplr?: {
      experimentalSuggestChain(chainInfo: unknown): Promise<void>;
    };
  }
}

const STORAGE_KEY = 'terp-docs-wallet';

export interface WalletState {
  address: string | null;
  isConnecting: boolean;
  connect: () => Promise<void>;
  disconnect: () => void;
}

export const WalletContext = createContext<WalletState | null>(null);

export function WalletProvider({ children }: { children: ReactNode }) {
  const [address, setAddress] = useState<string | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const controllerRef = useRef<KeplrController | null>(null);

  const getController = useCallback(() => {
    if (!controllerRef.current) {
      controllerRef.current = new KeplrController('');
    }
    return controllerRef.current;
  }, []);

  const connect = useCallback(async () => {
    if (typeof window === 'undefined') return;
    if (!window.keplr) {
      window.open('https://www.keplr.app/download', '_blank');
      return;
    }

    setIsConnecting(true);
    try {
      await window.keplr.experimentalSuggestChain(CHAIN_SUGGEST);
      const controller = getController();
      const wallets = await controller.connect(
        WalletType.EXTENSION,
        [...COSMES_CHAIN_INFO],
      );
      const wallet = wallets.get(CHAIN_CONFIG.chainId);
      if (wallet) {
        setAddress(wallet.address);
        localStorage.setItem(STORAGE_KEY, wallet.address);
      }
    } catch (err) {
      console.error('Wallet connect failed:', err);
    } finally {
      setIsConnecting(false);
    }
  }, [getController]);

  const disconnect = useCallback(() => {
    controllerRef.current?.disconnect([CHAIN_CONFIG.chainId]);
    setAddress(null);
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  // Auto-reconnect if previously connected
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && window.keplr) {
      connect();
    }
  }, [connect]);

  // Listen for account changes
  useEffect(() => {
    const controller = controllerRef.current;
    if (!controller) return;

    const unsub = controller.onAccountChange((wallets) => {
      const wallet = wallets.find(
        (w) => w.chainId === CHAIN_CONFIG.chainId,
      );
      if (wallet) {
        setAddress(wallet.address);
        localStorage.setItem(STORAGE_KEY, wallet.address);
      }
    });

    return unsub;
  }, [address]); // re-attach when address changes (controller initialized)

  const value = useMemo<WalletState>(
    () => ({ address, isConnecting, connect, disconnect }),
    [address, isConnecting, connect, disconnect],
  );

  return (
    <WalletContext.Provider value={value}>{children}</WalletContext.Provider>
  );
}
