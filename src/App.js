import Page from "./components/main/page";
import "../src/style/styles.scss";
import { BrowserRouter ,Redirect } from "react-router-dom";

function App() {
  return (
    <BrowserRouter  >
      <Page />;
      <Redirect exact from="/" to="/categories" />
    </BrowserRouter>
  );
}

export default App;
