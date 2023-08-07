import React,{useState , useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Components/Header.tsx'
import Filters from './Components/Filters.tsx'
import { setTheme } from './Store/Store.ts'
import { useDispatch,useSelector } from 'react-redux'
import './index.css'
import Countries from './Components/Countries.tsx'
import CountryPreviewer from './Components/CountryPreviewer.tsx'
import { CountryData,AppState } from './Interface.ts'
import Loading from './assets/undraw_loading_re_5axr (3).svg'


const App: React.FC = () => {
  const theme: string = useSelector((state: AppState) => state.theme)
  const [storeTheme,setStoreTheme] = useState<string>(theme);
  const [data, setData ] = useState<CountryData[] | null>(null)
  const [searchValue, setSearchValue] = useState<string>('')
  const [regionFilter, setRegionFilter] = useState<string>('all')
  const [ loading, setLoading] = useState<boolean>(true)
  const dispatch = useDispatch();


  useEffect(() =>{
    dataFetch()
      .then(() => setLoading(false))
      .catch((error) => {
        console.log(error)
        setLoading(false)
    })

    const storedTheme = localStorage.getItem('theme')
    if( storedTheme){
      setStoreTheme(storedTheme);
      dispatch(setTheme(theme));
    }
  },[dispatch,theme])

  const handleSearchCountry = (searchValue: string)=>{
    setSearchValue(searchValue);
  }

  const handleRegionFilter = (regionFilter: string)=>{
    setRegionFilter(regionFilter);
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
    <Router>
      <div className={`${storeTheme === 'light' ? 'bg-alabaster' : 'bg-ebonyclaylight'} flex flex-col w-full min-h-screen p-0 m-0 border-box font-nunito gap-y-[4rem]`}>
          <Header theme={storeTheme} setStoreTheme={setStoreTheme}/>
          <Routes>
            <Route 
              path='/'
              element={
              <>
                <Filters theme={storeTheme} value={searchValue} setValue={setSearchValue} handleSearchCountry={handleSearchCountry} handleRegionFilter={handleRegionFilter}/>
                {loading ? (
                    <div className={`flex flex-col justify-center items-center h-[50vh] font-bold mx-auto mt-[3rem] ${storeTheme === 'light' ? 'text-white': 'text-woodsmoke'}`}>
                      <img className='h-[20rem] ' src={Loading} alt='Loading image'/>
                      <p className={`${storeTheme === 'light' ? 'text-woodsmoke': 'text-white'} font-bold text-[1.3rem]`}>Loading...</p>
                    </div>
                  ) : (
                    <Countries theme={storeTheme} data={data} searchValue={searchValue} regionFilter={regionFilter}/>
                  )}
              </>}
            />
            <Route path='/country/:alpha3Code' element={<CountryPreviewer data={data} theme={storeTheme}/>} />
          </Routes>
      </div>
    </Router>
  );
}

export default App