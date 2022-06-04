import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Chat } from "./Components/Chat/Chat";
import { Layout } from "./Components/Layout/Layout";
import { Login } from "./Components/Login/Login";

function App() {
  const user = false;
  return (
    <div className="App">
      <Routes>
        <Route path="/chatonline" element={<Layout />}>
          {user ? (
            <Route index element={<Chat />} />
          ) : (
            <Route index element={<Login />} />
          )}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
