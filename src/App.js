import { DarkModeProvider } from "./context/DarkModeContext";
import { LoginCheckProvider } from "./context/LoginCheckContext";
import Router from "./router/Router";

function App() {
  return (
    <>
      <DarkModeProvider>
        <LoginCheckProvider>
          <Router />
        </LoginCheckProvider>
      </DarkModeProvider>
    </>
  );
}

export default App;
