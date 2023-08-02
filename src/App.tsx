import React,{useState , useEffect} from 'react'
import Header from './Components/Header.tsx'
import { setTheme } from './Store/Store.ts'
import { useDispatch,useSelector } from 'react-redux'
import './index.css'

const App: React.FC = () => {
  const theme = useSelector((state: {theme :string}) => state.theme)
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
    <>
      <div className='flex flex-col w-full min-h-screen p-0 m-0 bg-alabaster border-box'>
        <Header theme={storeTheme} setStoreTheme={setStoreTheme}/>
      </div>
    </>
  );
}

export default App