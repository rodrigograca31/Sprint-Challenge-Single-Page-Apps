import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import { Row, Col, Alert } from "reactstrap";
import SearchForm from "./SearchForm";
import { useParams } from "react-router-dom";

export default function Locations(props) {
	// TODO: Add useState to track data from useEffect
	const [location, setLocation] = useState({ residents: [] });
	const [error, setError] = useState("");
	let { id } = useParams();
	console.log(id);

	useEffect(() => {
		// TODO: Add API Request here - must run in `useEffect`
		//  Important: verify the 2nd `useEffect` parameter: the dependancies array!

		axios
			.get("https://rickandmortyapi.com/api/location/" + id)
			.then(response => {
				console.log(response);
				return response.data;
			})
			.then(lo => {
				setError("");
				setLocation(lo);
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
			Name: {location.name} <br />
			Type: {location.type} <br />
			Dimension: {location.dimension} <br />
			<br />
			Residents:
			<br />
			{location.residents.map(loc => {
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
