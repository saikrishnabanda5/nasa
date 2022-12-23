import { Modal } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";
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
`;

export const NasaImageDate = styled.p`
	font-size: 20px;
	padding-top: 10px;
`;


export const NasaCards = styled.div`
	display: flex;
	overflow: ${(props) => (props.length ? "auto" : "hidden")};
`;

export const Player = styled(ReactPlayer)``;

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


