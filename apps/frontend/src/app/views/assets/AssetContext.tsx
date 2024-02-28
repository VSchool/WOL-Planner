import { createContext, useContext, useState } from "react"

interface AssetContextType {
    asset: any;
    setAsset: React.Dispatch<React.SetStateAction<any>>;
    
}

const AssetContext = createContext<AssetContextType | undefined>(undefined)

export const useData = () => {
    const context = useContext(AssetContext);
    if(!context) {
        throw new Error('useData must be used within an AssetProvider')
    }
    return context
}

export const AssetProvider: React.FC < { children: React.ReactNode }> = ({ children }) => {
    const [asset, setAsset] = useState({})

    return (
        <AssetContext.Provider value={{ asset, setAsset}}>
            {children}
        </AssetContext.Provider>
    )
}