
import { Routes , BrowserRouter,Route} from 'react-router-dom';
import './App.css';
import Headers from './header/Headers';
import Home from './home/Home';
import Footer from './Footer/Footer';
import Create from './create/Create';
import Read from './read/Read';
import Search from './Search';
import Edit from './edit/Edit';

function App() {
  return (
    <>
    
<BrowserRouter>
<Headers/>
<Routes>

<Route path='' element={<Home/>}/>
<Route path='create' element={<Create/>}/>
<Route path='read' element={<Read/>}/>
<Route path='edit/:id' element={<Edit/>}/>
<Route path='search' element={<Search/>}/>

</Routes>
<Footer/>
</BrowserRouter>
    
    </>
  );
}

export default App;
