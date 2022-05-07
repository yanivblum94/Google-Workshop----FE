import { Route, Routes, Navigate } from "react-router-dom";
import MainProfessor from "./pages/Professor/MainProfessor";
import "./App.css";
import MainAddReview from "./pages/addReview/MainAddReview";
import MainPage from "./pages/MainPage/MainPage";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        exact
        element={<Navigate to="/mainPage" replace />}
      ></Route>
      <Route path="/professor" exact element={<MainProfessor />}></Route>
      <Route path="/professor/add-review" element={<MainAddReview />}></Route>
      <Route path="/mainPage" element={<MainPage />}></Route>
    </Routes>
  );
}

export default App;
