import { Link } from "react-router-dom";
import minesweeper from "../assets/img/games/minesweeper/minesweeper.jpeg";
import ticTacToe from "../assets/img/games/tic-tac-toe/tic-tac-toe.avif";
import "./GamesPage.css";

export default function GamesPage() {
  return (
    <>
      <h1>Games</h1>
      <main className="main">
        <div className="games">
          <Link to="/games/tic-tac-toy" className="games-link">
            <img className="games-img" src={ticTacToe} alt="tic-tac-toy" />
          </Link>
          <Link to="/games/minesweeper" className="games-link">
            <img className="games-img" src={minesweeper} alt="minesweeper" />
          </Link>
        </div>
      </main>
    </>
  );
}
