import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "./assets/components/Login/Login";
//import { Profile } from "./assets/components/Profile/Profile";
import { LogoutButton } from "./assets/components/Logout/Logout";
import React from "react";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { PrimeReactProvider } from "primereact/api";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Topbar from "./assets/components/Topbar/Topbar";
import Dashboard1 from "./assets/components/Dashboard/Dashboard"; // Ajuste en la importación de Dashboard
import "./App.css";


function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <PrimeReactProvider>
      <BrowserRouter> {/* Agregar Router para evitar errores */}
        <div className="App">
          {isAuthenticated ? (
            <>
              <Topbar />
              <Routes>
                <Route path="/Dashboard" element={<Dashboard1 />} />
                {/* Agrega más rutas aquí */}
              </Routes>

              <LogoutButton />
            </>
          ) : (
            <LoginButton />
          )}
        </div>
      </BrowserRouter>
    </PrimeReactProvider>
  );
}

export default App;
