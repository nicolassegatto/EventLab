import { Routes, Route } from "react-router-dom";
import { Evento } from "./screens/Evento";
import { Subscribe } from "./screens/Subscribe";

export function Router() {
  return(
    <Routes>
      <Route path="/" element={<Subscribe/>}/>
      <Route path="/event" element={<Evento />}/>
      <Route path="/event/lesson/:slug" element={<Evento />}/>
    </Routes>
  );
}