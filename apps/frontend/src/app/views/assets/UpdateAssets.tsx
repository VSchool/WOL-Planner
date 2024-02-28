import { useState, useEffect } from 'react';
import { useData } from './AssetContext';
import axios from 'axios';
// import Assets from './Assets.json'

interface Assets {
  asset: string;
  amount: number;
}

export const UpdateAssets = () => {
//   const [assets, setAssets] = useState<Assets[]>([]);
//   useEffect(() => {
//     const fetchJson = async () => {
//       try {
//         const response = await fetch('./Assets.json');
//         const data = await response.json();
//         setAssets(data);
//       } catch (error) {
//         console.error('Error fetching JSON:', error);
//       }
//     };
//     fetchJson();
//   }, []);

  return (
    // <div>
    //   {assets.map((asset, index) => (
    //     <div key={index}>
    //       <div>Asset: {asset.asset}</div>
    //       <div>Amount: {asset.amount}</div>
    //     </div>
    //   ))}
    // </div>

    <div>Assets deletion page</div>
  );
};
