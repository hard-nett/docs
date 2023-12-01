import React, { useState, useEffect } from "react";
import axios from "axios";
// fetch binary version being used

export const MoroccoBinaryVersion = () => {
  const [version, setVersion] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://rest.nodejumper.io/terpnetwork/cosmos/base/tendermint/v1beta1/node_info" // uses rpc proxy
        );

        const versionValue =
          response.data?.application_version?.version || "N/A";
        setVersion(versionValue);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
}, []);

return <div>{version}</div>;
};

export const TestnetBinaryVersion = () => {
    const [version, setVersion] = useState("");
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            "https://terp-testnet-api.itrocket.net/cosmos/base/tendermint/v1beta1/node_info" //TODO: PLUGIN COSMOS DIRECTORY API
          );
  
          const versionValue =
            response.data?.application_version?.version || "N/A";
          setVersion(versionValue);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      fetchData();
  }, []);
  
  return <div>{version}</div>;
  };