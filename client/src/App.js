import './App.css';
import { Routes, Route } from "react-router-dom"
import HomePage from './Screens/HomePage';
import CreateEntryPage from './Screens/CreateEntryPage';
import UpdatePage from './Screens/UpdatePage';
import EntryDetailsPage from './Screens/EntryDetailsPage';
import ContactPage from './Screens/ContactPage';
import SigninPage from './Screens/SigninPage';
import SignupPage from './Screens/SignupPage';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/create' element={<CreateEntryPage></CreateEntryPage>}></Route>
        <Route path='/update/:id' element={<UpdatePage></UpdatePage>}></Route>
        <Route path='/entry-details/:id' element={<EntryDetailsPage></EntryDetailsPage>}></Route>
        <Route path='/contact' element={<ContactPage></ContactPage>}></Route>
        <Route path='/signin' element={<SigninPage></SigninPage>}></Route>
        <Route path='/signup' element={<SignupPage></SignupPage>}></Route>
      </Routes>
    </>
  );
}

export default App;
