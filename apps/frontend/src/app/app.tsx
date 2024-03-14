import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Router from './views/router/router';
import './app.module.scss';

// eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-explicit-any
export const UserContext = React.createContext({
  user: {
    firstName: null,
    lastName: null,
    id: null,
    joinDate: null,
    email: null,
    userType: 'Reader',
    picture: null,
    name: null,
    roles: ['None'],
  },
  setUser: (user: any) => {},
});
interface Asset {
  id: string;
  asset: string;
  amount: number;
}

//   interface AssetsInputProps {
//     saveAssets: (assets: Asset[]) => void; // Adjust the type of saveAssets function
//   }

interface AssetContextType {
  assets: Asset[];
  setAssets: React.Dispatch<React.SetStateAction<Asset[]>>;
  addNewAsset: (newAsset: Asset) => void;
  saveAssets: (assets: Asset[]) => void;
  removeAsset: (asset: Asset) => void;
  getAllAssets: () => void;
}

export const AssetContext = React.createContext<AssetContextType>({
  assets: [],
  setAssets: () => {},
  addNewAsset: () => {},
  removeAsset: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  saveAssets: () => {},
  getAllAssets: () => {},
});

interface AssetProviderProps {
  children: React.ReactNode; // Define children prop explicitly
}
export function App() {
  const [user, setUser] = React.useState<any>({
    firstName: null,
    lastName: null,
    id: null,
    joinDate: null,
    email: null,
    userType: 'Reader',
    picture: null,
    name: null,
    roles: ['None'],
  });
  const [assets, setAssets] = useState<Asset[]>([]);

  const addNewAsset = (newAsset: Asset) => {
    return setAssets((prev: Asset[]) => {
      const newAssets: Asset[] = [...prev, newAsset];
      setAssets(newAssets);
      saveAssets(newAssets);
      console.log(newAssets);
      return newAssets;
    });
  };

  console.log(assets);

  const saveAssets = (assets: Asset[]) => {
    try {
      localStorage.setItem('assets', JSON.stringify(assets));
    } catch (err) {
      console.error('error saving to local storage', err);
    }
  };

  const removeAsset = (asset: Asset) =>
    setAssets((prev) => {
      const newAssets = prev.filter((as) => as.id !== asset.id);
      saveAssets(newAssets);
      console.log('deleted asset');
      return newAssets;
    });

  const getAllAssets = () => {
    try {
      const storedAssetsString: string | null = localStorage.getItem('assets');

      if (storedAssetsString !== null) {
        const storedAssets: Asset[] | Asset = JSON.parse(storedAssetsString);

        if (Array.isArray(storedAssets)) {
          setAssets(storedAssets);
        } else {
          setAssets([storedAssets]);
          console.log('not saved');
        }
      }
    } catch (err) {
      console.error(err);
    }
  };

  console.log(assets);

  useEffect(() => {
    getAllAssets();
  }, []);

  const assetContextValue: AssetContextType = {
    assets,
    setAssets,
    addNewAsset,
    saveAssets,
    removeAsset,
    getAllAssets,
  };

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setUser(JSON.parse(user));
    }
  }, []);

  useEffect(() => {
    console.log(user);
  }, [user]);

  // this is for cypress testing, to have a test user logged in
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (window.Cypress) {
      const user = {
        firstName: 'Test',
        lastName: 'User',
        id: 'test',
        joinDate: '05/05/2023',
        email: 'testUser@test.com',
        userType: 'Reader',
        picture: 'www.google.com',
        name: 'Test User',
        roles: ['None'],
      };
      setUser(user);
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <AssetContext.Provider value={assetContextValue}>
      
          <BrowserRouter>
            <div className="flex flex-col h-screen">
              <div style={{ flex: '1 1 0' }}>
                <Header></Header>
                <Router></Router>
              </div>
              {/* <Footer></Footer> */}
            </div>
          </BrowserRouter>
        
      </AssetContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
