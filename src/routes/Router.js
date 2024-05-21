import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from "../pages/login";
import Home from "../pages/home";
import PageNotFound from "../pages/404";
import Game from "../pages/game-board";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
