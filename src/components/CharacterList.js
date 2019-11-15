import React, { useEffect, useState } from "react";
import axios from "axios";
import { array } from "prop-types";
import CharacterCard from "./CharacterCard";
import { Row, Col } from "reactstrap";
import SearchForm from "./SearchForm";

export default function CharacterList() {
	// TODO: Add useState to track data from useEffect
	const [chars, setChars] = useState([]);

	useEffect(() => {
		// TODO: Add API Request here - must run in `useEffect`
		//  Important: verify the 2nd `useEffect` parameter: the dependancies array!

		axios
			.get("https://rickandmortyapi.com/api/character/")
			.then(response => {
				console.log(response);
				return response.data.results;
			})
			.then(chars => {
				setChars(chars);
			});
	}, []);

	return (
		<section className="character-list">
			<SearchForm chars={chars} setChars={setChars} />
			<Row>
				{chars.map(char => {
					return (
						<Col sm="4">
							<CharacterCard char={char}></CharacterCard>
						</Col>
					);
				})}
			</Row>
		</section>
	);
}
