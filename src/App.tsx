import { useRoutes } from "react-router";
import routes from "./routes";

const App = () => {
	const element = useRoutes(routes);
	return <>{element}</>;
};

export default App;
