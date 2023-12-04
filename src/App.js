// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import SignIn from './components/SignIn';


function App() {
  return (
    // <div className="App">
    //   <SignIn/>
    // </div>
    <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<div></div>} />
        <Route path="login" element={<SignIn />} />
        {/* <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} /> */}
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
