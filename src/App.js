import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Chat } from "./Components/Chat/Chat";
import { Layout } from "./Components/Layout/Layout";
import { Loader } from "./Components/Loaders/LoaderMain/Loader";
import { Login } from "./Components/Login/Login";
import { useAuth } from "./hooks/useAuth";
import { useFirebaseContext } from "./hooks/useFirebaseContext";

function App() {
  const { logged } = useFirebaseContext();
  const user = useAuth();

  return (
    <div className="App">
      {logged ? (
        <Routes>
          <Route path="/chatonline" element={<Layout />}>
            {user ? (
              <Route index element={<Chat />} />
            ) : (
              <Route index element={<Login />} />
            )}
          </Route>
        </Routes>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default App;
