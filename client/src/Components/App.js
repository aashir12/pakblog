import '../App.css';
import Inputs from './home/inputs';
import Post from './AllPosts/posts';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Update from './update';
import Header from './Header/header';
import SingleProduct from './SinglePage/singleProduct';

function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/new' element={<Inputs />} />
          <Route path='/' element={<Post />} />
          <Route path={'/posts/:id'} element={<Update />} />
          <Route path={'single/:id'} element={<SingleProduct/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
