import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import Locations from "./components/Location";
import Episodes from "./components/Episode";
import { Route } from "react-router-dom";

export default function App() {
	return (
		<main>
			<Header />
			<Route path="/chars" component={CharacterList} />
			<Route path="/location/:id" component={Locations} />
			<Route path="/episode/:id" component={Episodes} />
		</main>
	);
}
