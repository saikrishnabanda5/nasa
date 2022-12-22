import styled from "styled-components";

export const Container = styled.div`
	background: #ffffff;
	height: 100vh;
`;

export const Title = styled.h1`
	background: #ffffff;
`;

export const Header = styled.div`
	display: flex;
	justify-content: space-between;
	background-color: transparent;
	align-items: center;
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

export const SpotLight = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
`;

export const Details = styled.div`
	width: 40%;
`;

export const Description = styled.p`
	padding-top: 16px;
`;

export const Author = styled.h3`
	padding-top: 16px;
`;
