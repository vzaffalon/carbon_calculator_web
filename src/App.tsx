import MainRouter from "./routers/MainRouter"
import { ScreenBackground } from "./AppStyled"

function App() {
  return (
    <ScreenBackground>
      <MainRouter></MainRouter>
    </ScreenBackground>
  );
}

export default App;
