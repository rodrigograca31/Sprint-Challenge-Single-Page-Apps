import React, { useEffect, useState } from "react";
import axios from "axios";
import { array } from "prop-types";
import CharacterCard from "./CharacterCard";
import { Row, Col, Alert, Button } from "reactstrap";
import SearchForm from "./SearchForm";

export default function CharacterList() {
	// TODO: Add useState to track data from useEffect
	const [chars, setChars] = useState([]);
	const [search, setSearch] = useState("");
	const [error, setError] = useState("");
	const [data, setData] = useState({ info: {} });
	const [url, setUrl] = useState(
		"https://rickandmortyapi.com/api/character/"
	);

	useEffect(() => {
		// TODO: Add API Request here - must run in `useEffect`
		//  Important: verify the 2nd `useEffect` parameter: the dependancies array!

		axios
			.get(url)
			.then(response => {
				console.log("bnbbb");

				console.log(response);
				setData(response.data);
				return response.data.results;
			})
			.then(chars => {
				setError("");
				console.log(chars);

				setChars(chars);
			})
			.catch(error => {
				setError(error);
			});
	}, [url]);

	useEffect(() => {
		// TODO: Add API Request here - must run in `useEffect`
		//  Important: verify the 2nd `useEffect` parameter: the dependancies array!

		axios
			.post("https://rickandmortyapi.com/graphql/", {
				query: `{
  characters {
    info {
	  count
	  prev
	  next
    }
    results {
      name
      id
      species
      image
      location {
        name
      }
    }
  }
}`
			})
			.then(response => {
				console.log(response);
				setData(response.data.data.characters);
				return response.data.characters.results;
			})
			.then(chars => {
				setError("");
				console.log(chars);

				setChars(chars);
			})
			.catch(error => {
				setError(error);
			});
	}, [search]);

	const next = () => {
		setUrl(data.info.next);
		console.log(url);
	};
	const prev = () => {
		setUrl(data.info.prev);
		console.log(url);
	};

	return (
		<section className="character-list">
			<SearchForm
				chars={chars}
				setChars={setChars}
				setSearch={setSearch}
			/>
			{error && (
				<Alert color="danger">
					There was an error: {error.message}
				</Alert>
			)}
			{data.info.prev && (
				<Button
					onClick={e => {
						prev();
					}}
				>
					Prev
				</Button>
			)}
			{data.info.next && (
				<Button
					onClick={e => {
						next();
					}}
				>
					Next
				</Button>
			)}
			<Row>
				{chars.map(char => {
					return (
						<Col sm="4">
							<CharacterCard
								key={char.id}
								char={char}
							></CharacterCard>
						</Col>
					);
				})}
			</Row>
		</section>
	);
}
