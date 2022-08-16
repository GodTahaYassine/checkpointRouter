import React from "react";
import MovieCard from "./MovieCard";
import { useParams } from "react-router-dom";
import "./trailer.css";
const TrailerPage = ({ list }) => {
	const params = useParams();
	const movie = list.find((elm) => elm.id === +params.id);
    const embedUrl = `https://www.youtube.com/embed/${movie.trailerURL}`
	return (
		<div className="movieDetails">
			<div>
				<MovieCard movieInfo={movie} />
			</div>
			<div className="movieDescription">
				<p style={{ color: "white" }}>{movie.description}</p>
				<iframe width="560" height="315" src={embedUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			</div>
		</div>
	);
};

export default TrailerPage;
