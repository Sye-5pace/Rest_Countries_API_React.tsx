import React,{useState , useEffect} from 'react'
import Header from './Components/Header.tsx'
import Filters from './Components/Filters.tsx'
import { setTheme } from './Store/Store.ts'
import { useDispatch,useSelector } from 'react-redux'
import './index.css'

const App: React.FC = () => {
  const theme: string = useSelector((state: {theme :string}) => state.theme)
  const [storeTheme,setStoreTheme] = useState<string>('dark');
  const dispatch = useDispatch();

  useEffect(() =>{
    const storedTheme = localStorage.getItem('theme')
    if( storedTheme){
      setStoreTheme(storedTheme);
      dispatch(setTheme(storedTheme));
    }
  },[dispatch])

  return (
    <div className={`${theme === 'light' ? 'bg-alabaster' : 'bg-ebonyclaylight'} flex flex-col w-full min-h-screen p-0 m-0 border-box font-nunito gap-y-6`}>
        <Header theme={storeTheme} setStoreTheme={setStoreTheme}/>
        <Filters theme={storeTheme} />
    </div>
  );
}

export default App