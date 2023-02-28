import Layout from "./layout/Layout";
import Router from "./router/Router";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <Layout>
      <GlobalStyle />
      <Router />
    </Layout>
  );
}

export default App;
