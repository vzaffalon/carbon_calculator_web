import MainRouter from "./routers/MainRouter"
import { ScreenBackground } from "./AppStyled"
import "antd/dist/antd.css";

function App() {
  return (
    <ScreenBackground>
      <MainRouter></MainRouter>
    </ScreenBackground>
  );
}

export default App;
