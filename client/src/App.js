import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Container } from "@material-ui/core";
import About from "./Pages/About/About";
import Navbar from "./Components/Navbar/Navbar";
import Category from "./Components/Categories/Category/Category";
import Drink from "./Pages/Drink/Drink";
import Categories from "./Components/Categories/Categories";
import Home from "./Pages/Home/Home";

const App = () => {
	return (
		<BrowserRouter>
			<Container>
				<Navbar />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/about" component={About} />
					<Route path="/categories" component={Categories} />
					<Route path="/category" component={Category} />
					<Route path="/drink" component={Drink} />
				</Switch>
			</Container>
		</BrowserRouter>
	);
};

export default App;
