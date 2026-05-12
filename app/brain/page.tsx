// 'use client';

// import { useEffect } from 'react';
// import { BrainGraph } from '@/components/BrainGraph';
// import type { Metadata } from 'next';



// export default function BrainPage() {
//   useEffect(() => {
//     // Load brain data from static JS file — makes window.BRAIN_DATA available for BrainGraph
//     if (typeof window !== 'undefined' && !window.BRAIN_DATA) {
//       const script = document.createElement('script');
//       script.src = '/brain-data.js';
//       script.async = true;
//       script.onload = () => {
//         if (window.BRAIN_DATA) {
//           console.log('Brain data loaded:', window.BRAIN_DATA.nodes?.length, 'nodes,', window.BRAIN_DATA.edges?.length, 'edges');
//         }
//       };
//       script.onerror = () => {
//         console.error('Failed to load brain-data.js');
//       };
//       document.head.appendChild(script);
//     }
//     // Import Satoshi font
//     const fontLink = document.createElement('link');
//     fontLink.rel = 'preconnect';
//     fontLink.href = 'https://fonts.cdnfonts.com';
//     const styleLink = document.createElement('link');
//     styleLink.rel = 'stylesheet';
//     styleLink.href = 'https://fonts.cdnfonts.com/css/satoshi';
//     document.head.appendChild(styleLink);
//   }, []);

//   return (
//     <main className="w-screen h-screen overflow-hidden" style={{ fontFamily: 'Satoshi, sans-serif' }}>
//       <BrainGraph />
//     </main>
//   );
// }
