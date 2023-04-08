import "./App.css";
import Header from "./componant/Header";
import Form from "./componant/Form";
import TablePaginationActions from "./componant/Viewdata";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          
          <Route path="/Form" element={<Form />} />

          <Route path="/ViewData" element={<TablePaginationActions />} />

        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
