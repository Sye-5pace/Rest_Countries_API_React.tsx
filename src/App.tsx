import React,{useState , useEffect} from 'react'
import Header from './Components/Header.tsx'
import Filters from './Components/Filters.tsx'
import { setTheme } from './Store/Store.ts'
import { useDispatch,useSelector } from 'react-redux'
import './index.css'
import Countries from './Components/Countries.tsx'
import { CountryData } from './Interface.ts'

const App: React.FC = () => {
  const theme: string = useSelector((state: {theme :string}) => state.theme)
  const [storeTheme,setStoreTheme] = useState<string>('dark');
  // const [data, setData ] = useState<>('')
  const dispatch = useDispatch();

  useEffect(() =>{
    const storedTheme = localStorage.getItem('theme')
    if( storedTheme){
      setStoreTheme(storedTheme);
      dispatch(setTheme(storedTheme));
    }
  },[dispatch])

  const dataFetch = async() => {
    const baseURL: string = 'https://restcountries.com/v2/all';
    try{
      const response = await fetch(baseURL);
      if(!response.ok){
        throw new Error("Request failed with status: " + response.status)
      }
      const countries: CountryData[] = await response.json();
    }catch(error){
      console.log(error)
    }
  }

  return (
    <div className={`${storeTheme === 'light' ? 'bg-alabaster' : 'bg-ebonyclaylight'} flex flex-col w-full min-h-screen p-0 m-0 border-box font-nunito gap-y-6`}>
        <Header theme={storeTheme} setStoreTheme={setStoreTheme}/>
        <Filters theme={storeTheme} />
        <Countries theme={storeTheme}/>
    </div>
  );
}

export default App