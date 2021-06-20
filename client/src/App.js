import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Container } from "@material-ui/core";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Recipes from "./Pages/Recipes/Recipes";
import Navbar from "./Components/Navbar/Navbar";
import Category from "./Components/Categories/Category/Category";
import Recipe from "./Pages/Recipe/Recipe";

const App = () => {
	return (
		<BrowserRouter>
			<Container>
				<Navbar />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/about" component={About} />
					<Route path="/recipes" component={Recipes} />
					<Route path="/category" component={Category} />
					<Route path="/recipe" component={Recipe} />
				</Switch>
			</Container>
		</BrowserRouter>
	);
};

export default App;
