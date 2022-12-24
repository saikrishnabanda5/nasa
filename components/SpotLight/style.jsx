import { Modal } from "antd";
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
		align-items: flex-start;
		margin-left: 24px;
	}
`;

export const Author = styled.h3`
	padding-top: 16px;
	@media screen and (max-width: 767px) {
		padding-bottom: 16px;
	}
`;

export const Details = styled.div`
	width: 40%;
	@media screen and (max-width: 767px) {
		width: 90%;
	}
`;

export const Description = styled.p`
	padding-top: 16px;
	font-family: sans-serif;
`;

export const Title = styled.h1`
	@media screen and (max-width: 767px) {
		font-size: 25px;
	}
`;

export const AntModal = styled(Modal)`
	.ant-modal-content {
		height: 100vh;
		width: 98vw;
		padding: 0;
	}
	.ant-modal-footer {
		display: none;
	}
	svg {
		background: white;
		width: 25px;
		height: 25px;
	}
	img {
		position: fixed !important;
	}
`;
