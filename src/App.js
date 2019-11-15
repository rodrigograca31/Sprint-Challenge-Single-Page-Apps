import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import { Route } from "react-router-dom";

export default function App() {
	return (
		<main>
			<Header />
			<Route path="/chars" component={CharacterList} />
		</main>
	);
}
