import ReactPlayer from "react-player";
import styled from "styled-components";

export const HeaderContainer = styled.div`
	display: flex;
	justify-content: space-between;
	background-color: transparent;
	align-items: center;
	padding: 0 20px;
	background: url("https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/starfield-banner.jpg");
`;

export const Left = styled.div``;

export const ImageContainer = styled.div`
	display: flex;
	@media screen and (max-width: 767px) {
		display: none;
	}
`;

export const MobileImageContainer = styled.div`
	display: none;
	@media screen and (max-width: 767px) {
		display: flex;
	}
`;

export const Right = styled.div`
	font-size: 36px;
	color: #ffffff;
	@media screen and (max-width: 767px) {
		font-size: 20px;
	}
`;
export const Name = styled.h1`
	font-size: 32px;
	color: #ffffff;
	@media screen and (max-width: 767px) {
		font-size: 20px;
	}
`;
