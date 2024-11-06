import React from "react";
import FullStar from "../Assets/logos/full-star.svg";
import EmptyStar from "../Assets/logos/empty-star.svg";

export default function Stars({ data }) {
	const rating = [1, 2, 3, 4, 5];
	return (
		<div className="stars-box">
			{rating.map((score, index) =>
				score >= data.rating ? (
					<img src={EmptyStar} key={"star-" + index} alt="étoile grise" />
				) : (
					<img src={FullStar} key={"star-" + index} alt="étoile rouge" />
				)
			)}
		</div>
	);
}
