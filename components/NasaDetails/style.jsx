import { Modal } from "antd";
import ReactPlayer from "react-player";
import styled from "styled-components";

export const Container = styled.div`
	background: #ffffff;
`;

export const CardContainer = styled.div`
	display: flex;
	flex-direction: column;
	background: black;
	color: #fff;
	margin: 24px;
	cursor: pointer;
	transition: 1s;
	:hover {
		transform: scale(1.3);
		height: fit-content;
		z-index: 1;
	}

	@media screen and (max-width: 767px) {
		margin: 20px;
		margin-right: 0px;
		:hover {
			transform: none;
		}
	}
`;

export const NasaDescription = styled.div`
	display: flex;
	flex-direction: column;
	padding-top: 12px;
	align-items: center;
`;

export const NasaImageTitle = styled.p`
	font-size: 20px;
	text-align: center;
	@media screen and (max-width: 767px) {
		font-size: 16px;
	}
`;

export const CopyrightOwner = styled.p`
	padding-top: 10px;
	@media screen and (max-width: 767px) {
		font-size: 16px;
	}
`;

export const NasaImageDate = styled.p`
	font-size: 20px;
	padding-top: 10px;
	@media screen and (max-width: 767px) {
		font-size: 16px;
	}
`;

export const NasaCards = styled.div`
	display: flex;
	overflow: ${(props) => (props.length ? "auto" : "hidden")};
`;

export const Player = styled(ReactPlayer)``;

export const PlayerMobile = styled.div`
	display: none;
	@media screen and (max-width: 767px) {
		display: block;
	}
`;

export const PlayerDesktop = styled.div`
	display: block;
	@media screen and (max-width: 767px) {
		display: none;
	}
`;

export const AntModal = styled(Modal)`
	.ant-modal-content {
		height: 100vh;
		width: 98vw;
		padding: 0;
		display: block;
		@media screen and (max-width: 767px) {
			display: none !important;
		}
	}
	.ant-modal-footer {
		display: none;
	}
	svg {
		background: white;
		width: 25px;
		height: 25px;
		cursor: pointer;
	}
	img {
		position: fixed !important;
	}
`;

export const AntModalMobile = styled(Modal)`
	.ant-modal-content {
		height: 370px;
		width: 100%;
		padding: 0;
		display: none;
		@media screen and (max-width: 767px) {
			display: block;
		}
	}
	.ant-modal-footer {
		display: none;
	}
	svg {
		background: white;
		width: 25px;
		height: 25px;
		cursor: pointer;
	}
	img {
		@media screen and (max-width: 767px) {
			// display: none !important;
		}
	}
`;
