import React,{useState , useEffect} from 'react'
import Header from './Components/Header.tsx'
import Filters from './Components/Filters.tsx'
import { setTheme } from './Store/Store.ts'
import { useDispatch,useSelector } from 'react-redux'
import './index.css'
import Countries from './Components/Countries.tsx'
import { CountryData,AppState } from './Interface.ts'


const App: React.FC = () => {
  const theme: string = useSelector((state: AppState) => state.theme)
  const [storeTheme,setStoreTheme] = useState<string>('dark');
  const [data, setData ] = useState<CountryData[] | null>(null)
  const [ value, setValue ] = useState<string>('')
  const dispatch = useDispatch();

  useEffect(() =>{
    dataFetch()
    const storedTheme = localStorage.getItem('theme')
    if( storedTheme){
      setStoreTheme(storedTheme);
      dispatch(setTheme(theme));
    }
  },[dispatch,theme])

  const handleSearchCountry = (value)=>{

  }

  const dataFetch = async(): Promise<void> => {
    const baseURL: string = 'https://restcountries.com/v2/all';
    try{
      const response = await fetch(baseURL);
      if(!response.ok){
        throw new Error("Request failed with status: " + response.status)
      }
      const countries: CountryData[] = await response.json();
      setData(countries)
    }catch(error){
      console.log(error)
    }
  }

  return (
    <div className={`${storeTheme === 'light' ? 'bg-alabaster' : 'bg-ebonyclaylight'} flex flex-col w-full min-h-screen p-0 m-0 border-box font-nunito gap-y-6`}>
        <Header theme={storeTheme} setStoreTheme={setStoreTheme}/>
        <Filters handleSearchCountry={handleSearchCountry} theme={storeTheme} value={value} setValue={setValue} />
        <Countries theme={storeTheme} data={data} value={value}/>
    </div>
  );
}

export default App