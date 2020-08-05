import React from "react";
import { Link, NavLink } from "react-router-dom";

const ResultsList = ({ results }) => {
	const resultsList = results.map((result) => {
		return (
			<div className="ResultLink" key={result.key}>
				<Link to={result.link}>{result.name}</Link>
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
