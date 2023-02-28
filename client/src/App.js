import { BrowserRouter } from "react-router-dom";
import AppRouter from "./componets/AppRouter";

const App = () => {
  return (
   <BrowserRouter>
	 <AppRouter />
	</BrowserRouter>
  );
};

export default App;
