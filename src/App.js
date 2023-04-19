import { ToastContainer } from "react-toastify";
import { DarkModeProvider } from "./context/DarkModeContext";
import { LoginCheckProvider } from "./context/LoginCheckContext";
import Router from "./router/Router";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <DarkModeProvider>
        <LoginCheckProvider>
          <Router />
        </LoginCheckProvider>
      </DarkModeProvider>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        pauseOnHover={false}
        limit={1}
      />
    </>
  );
}

export default App;
