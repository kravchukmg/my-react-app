import { Routes, Route } from "react-router-dom";
import NavComponent from "./components/NavComponent";
import HomePage from "./pages/HomePage";
import GamesPage from "./pages/GamesPage";
import MinesweeperPage from "./pages/MinesweeperPage";
import TicTacToyPage from "./pages/TicTacToyPage";
import FormPage from "./pages/FormPage";
import NotFound from "./pages/NotFound";
import "./App.css";

export default function App() {
  return (
    <>
      <NavComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/games">
          <Route index element={<GamesPage />} />
          <Route path="minesweeper" element={<MinesweeperPage />} />
          <Route path="tic-tac-toy" element={<TicTacToyPage />} />
        </Route>
        <Route path="/form" element={<FormPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
