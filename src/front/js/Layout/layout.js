import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "../component/scrollToTop";

//VIEWS
import Landing from "../views/Landing/Landing.jsx"
import Signup from "../views/Signup/Signup.jsx";
import Login from "../views/Login/Login.jsx";
import Private from "../views/Private/Private.jsx";



import injectContext from "../store/appContext";
//COMPONENTS
import { Navbar } from "../component/navbar.jsx";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Landing />
						</Route>
						<Route exact path="/Signup">
							<Signup />
						</Route>
						<Route exact path="/Login">
							<Login />
						</Route>
						<Route exact path="/Private">
							<Private />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
