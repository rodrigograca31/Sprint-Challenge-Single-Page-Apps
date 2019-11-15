import React from "react";
import {
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	CardSubtitle,
	Button
} from "reactstrap";

export default function CharacterCard(props) {
	return (
		<div>
			<Card>
				<CardImg top src={props.char.image} />
				<CardBody>
					<CardTitle>{props.char.name}</CardTitle>
					<CardSubtitle>{props.char.species}</CardSubtitle>
					{/* <CardText>
						Some quick example text to build on the card title and
						make up the bulk of the card's content.
					</CardText> */}
					{/* <Button>Button</Button> */}
				</CardBody>
			</Card>
			<br />
		</div>
	);
}
