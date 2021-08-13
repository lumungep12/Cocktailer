import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducers from "./Reducers";
import { applyMiddleware, compose, createStore } from "redux";
import { QueryClient, QueryClientProvider } from "react-query";

const store = createStore(reducers, compose(applyMiddleware(thunk)));
const queryClient = new QueryClient();

ReactDOM.render(
	<QueryClientProvider client={queryClient}>
		<Provider store={store}>
			<App />
		</Provider>
	</QueryClientProvider>,
	document.getElementById("root")
);
