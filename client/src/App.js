import './App.css';
import { Routes, Route } from "react-router-dom"
import HomePage from './Screens/HomePage';
import CreateEntryPage from './Screens/CreateEntryPage';
import UpdatePage from './Screens/UpdatePage';
import AuthPage from './Screens/AuthPage';
import EntryDetailsPage from './Screens/EntryDetailsPage';
import ContactPage from './Screens/ContactPage';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/create' element={<CreateEntryPage></CreateEntryPage>}></Route>
        <Route path='/update/:id' element={<UpdatePage></UpdatePage>}></Route>
        <Route path='/signin' element={<AuthPage></AuthPage>}></Route>
        <Route path='/entry-details/:id' element={<EntryDetailsPage></EntryDetailsPage>}></Route>
        <Route path='/contact' element={<ContactPage></ContactPage>}></Route>
      </Routes>
    </>
  );
}

export default App;
