import { createContext, useState, useEffect, useContext } from "react"
import axios from "axios";

interface Asset {
    asset: string,
    amount: number
}

interface AssetContextType {
    assets: Asset[];
    setAssets: React.Dispatch<React.SetStateAction<Asset[]>>;
    
    
}

export const AssetContext = createContext<AssetContextType | undefined>(undefined)


export const AssetProvider: React.FC < { children: React.ReactNode }> = ({ children }) => {
    const [assets, setAssets] = useState<Asset[]>([])

  
    
    useEffect(() => {
    async function getAssets(){
        try {
            const response =  await axios.get<{results: Asset[] }>("https://mocki.io/v1/31ff50e8-8b81-400a-87d1-d7fc37c9005a")
            setAssets(response.data.results)
            console.log(response.data.results)
        }   catch (error) {
                console.log(error)
                
        }
    }
   getAssets()
}, [])

//this api endpoint works in Postman but not here

    return (
        <AssetContext.Provider value={{ assets, setAssets }}>
            {children}
        </AssetContext.Provider>
    )
}

export const useAssetContext = () => {
    const context = useContext(AssetContext)
    if(!context) {
        throw new Error('useAssetContext must be used within an asset provider')
    }
    return context
}