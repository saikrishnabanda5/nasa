import ReactPlayer from "react-player";
import styled from "styled-components";

export const SpotLightContainer = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	margin-top: 24px;
	img {
		cursor: pointer;
	}
	@media screen and (max-width: 767px) {
		flex-direction: column;
	}
`;

export const Author = styled.h3`
	padding-top: 16px;
`;

export const Details = styled.div`
	width: 40%;
	@media screen and (max-width: 767px) {
		width: 90%;
	}
`;

export const Description = styled.p`
	padding-top: 16px;
`;

export const Title = styled.h1`
	// background: #ffffff;
`;
