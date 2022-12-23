import Image from "next/image";
import React, { useState } from "react";
import TruncateMarkup from "react-truncate-markup";
import {
	Author,
	Description,
	Details,
	SpotLightContainer,
	Title,
} from "./style";

const link = {
	color: "blue",
	textDecoration: "underline",
	cursor: "pointer",
};

function SpotLight({ data }) {
	const [truncate, setTruncate] = useState(true);

	const readMoreEllipsis = (
		<span>
			...
			<span onClick={() => setTruncate(!truncate)} style={link}>
				read more
			</span>
		</span>
	);

	const getMediaType = () => {
		if (data?.media_type === "image") {
			return (
				<Image
					src={data.url}
					width={300}
					height={300}
					alt='nasa image'
					onClick={() => getCardModal(data)}
				/>
			);
		} else {
			return (
				<Image
					src={data.thumbnail_url}
					width={300}
					height={300}
					alt='nasa image'
					onClick={() => getCardModal(data)}
				/>
			);
		}
	};

	return (
		<SpotLightContainer>
			<Details>
				<Title>{data.title}</Title>
				{truncate ? (
					<TruncateMarkup lines={5} ellipsis={readMoreEllipsis}>
						<div style={{ width: "auto" }}>
							<Description>{data.explanation}</Description>
						</div>
					</TruncateMarkup>
				) : (
					<div style={{ width: "auto" }}>
						<Description>{data.explanation}</Description>
						<span onClick={() => setTruncate(!truncate)} style={link}>
							show less
						</span>
					</div>
				)}
				<Author>
					Author : {data.copyright ? data.copyright : "No Author found"} {""}
					{data.date}
				</Author>
			</Details>
			{getMediaType()}
		</SpotLightContainer>
	);
}

export default SpotLight;
