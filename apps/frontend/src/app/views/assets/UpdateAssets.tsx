import { useContext } from 'react';
import { AssetContext } from './AssetContext';



export const UpdateAssets = (props: any) => {
  const assetContext = useContext(AssetContext);
  if (!assetContext) {
    throw new Error('AssetContext is not provided');
  }
  const { assets } = assetContext;
  console.log(assets)
  if (!assets) { 
    return <div>Loading...</div>
  }

  return (
    <div>
      {assets.map(asset => (
        <div key={asset.asset}>
          <p>Asset: {asset.asset}</p>
          <p>Amount: {asset.amount}</p>
        </div>
      ))}
    </div>
  );
};



