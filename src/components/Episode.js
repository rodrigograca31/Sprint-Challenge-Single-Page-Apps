import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import { Row, Col, Alert } from "reactstrap";
import SearchForm from "./SearchForm";
import { useParams } from "react-router-dom";

export default function Episodes(props) {
	// TODO: Add useState to track data from useEffect
	const [episode, setEpisode] = useState({ characters: [] });
	const [error, setError] = useState("");
	let { id } = useParams();
	console.log(id);

	useEffect(() => {
		// TODO: Add API Request here - must run in `useEffect`
		//  Important: verify the 2nd `useEffect` parameter: the dependancies array!

		axios
			.get("https://rickandmortyapi.com/api/episode/" + id)
			.then(response => {
				console.log(response);
				return response.data;
			})
			.then(lo => {
				setError("");
				setEpisode(lo);
			})
			.catch(error => {
				setError(error);
			});
	}, []);

	return (
		<section className="character-list">
			{error && (
				<Alert color="danger">
					There was an error: {error.message}
				</Alert>
			)}
			Name: {episode.name} <br />
			Air Date: {episode.air_date} <br />
			Episode: {episode.episode} <br />
			<br />
			Characters:
			<br />
			{episode.characters.map(loc => {
				return (
					<>
						<a href={loc}>{loc}</a>
						<br />
					</>
				);
			})}
		</section>
	);
}
