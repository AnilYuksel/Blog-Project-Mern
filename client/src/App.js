import './App.css';
import { Routes, Route } from "react-router-dom"
import HomePage from './Screens/HomePage';
import CreateEntryPage from './Screens/CreateEntryPage';
import UpdatePage from './Screens/UpdatePage';
import SignInPage from './Screens/SignInPage';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/create' element={<CreateEntryPage></CreateEntryPage>}></Route>
        <Route path='/update/:id' element={<UpdatePage></UpdatePage>}></Route>
        <Route path='/signin' element={<SignInPage></SignInPage>}></Route>
      </Routes>
    </>
  );
}

export default App;
