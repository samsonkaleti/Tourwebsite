import { useState,useEffect } from "react"


const UseFetchApi = (url) => {  
    const [data, setData] = useState([])  
    const [loading, setLoading] = useState(true)  
    const [error, setError] = useState() 
    
    
    const GetData = async () => { 
        setLoading(true);
        try { 
            const response = await fetch(url) 
            if (!response.ok) {
                throw new Error("Net Work Issue...")
            }
            const data = await response.json()  
            setData(data) 

            
        } catch (error) { 
            setError(error)
            
        } finally {
            setLoading(false);
        }
        
        
    }


    useEffect(() => {
    GetData()
    }, [])
    

    return { data, error, loading ,setData}
} 
export default UseFetchApi; 



