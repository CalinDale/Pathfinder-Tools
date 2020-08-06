import React from "react";
import { Link } from "react-router-dom";

const ResultsList = ({ results }) => {
	const resultsList = results.map((result) => {
		return (
			<div className="ResultLink" key={result.key}>
				<Link to={"/monsters/" + result.key}>{result.name}</Link>
			</div>
		);
	});
	return (
		<nav className="ResultsList">
			<h2>Results</h2>
			{resultsList}
		</nav>
	);
};

export default ResultsList;
