import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Container } from "@material-ui/core";
import About from "./Pages/About/About";
import Navbar from "./Components/Navbar/Navbar";
import Category from "./Components/Categories/Category/Category";
import Recipe from "./Pages/Recipe/Recipe";
import Categories from "./Components/Categories/Categories";
import Auth from "./Pages/Home/Auth";

const App = () => {
	return (
		<BrowserRouter>
			<Container>
				<Navbar />
				<Switch>
					<Route path="/auth" component={Auth} />
					<Route path="/about" component={About} />
					<Route path="/categories" component={Categories} />
					<Route path="/category" component={Category} />
					<Route path="/recipe" component={Recipe} />
				</Switch>
			</Container>
		</BrowserRouter>
	);
};

export default App;
