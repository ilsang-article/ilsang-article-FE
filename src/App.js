import { DarkModeProvider } from "./context/DarkModeContext";
import Router from "./router/Router";

function App() {
  return (
    <>
      <DarkModeProvider>
        <Router />
      </DarkModeProvider>
    </>
  );
}

export default App;
