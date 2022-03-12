import { Route, Routes } from "react-router-dom";
import { CalcApp } from "./pages/CalcApp";

function App() {
    return (
        <main className="app-container main-container">
            {/* <Routes>
            <Route path="/Calculator-app" exact component={CalcApp} />
          </Routes> */}
            <CalcApp />

        </main>
    );
}

export default App;
