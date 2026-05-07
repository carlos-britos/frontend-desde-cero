import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { Clase01Introduccion } from "./pages/Clase01Introduccion/Clase01Introduccion";
import { Clase02Git } from "./pages/Clase02Git/Clase02Git";
import { Clase03Html } from "./pages/Clase03Html/Clase03Html";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="clase/01-introduccion"
            element={<Clase01Introduccion />}
          />
          <Route path="clase/02-git" element={<Clase02Git />} />
          <Route path="clase/03-html" element={<Clase03Html />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
