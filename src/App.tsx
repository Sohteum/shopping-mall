import { useRoutes } from "react-router-dom";
import { routes } from "./routes"





const App = () => {

  const elem = useRoutes(routes)
  return elem
{/* <div>앱입니다</div> */}
}
export default App
