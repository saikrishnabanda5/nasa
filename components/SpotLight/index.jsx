import Image from "next/image";
import React, { useState } from "react";
import ReactPlayer from "react-player";
import TruncateMarkup from "react-truncate-markup";
import {
	AntModal,
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
	const [open, setOpen] = useState(false);
	const [modalData, setModalData] = useState();
	const readMoreEllipsis = (
		<span>
			...
			<span onClick={() => setTruncate(!truncate)} style={link}>
				read more
			</span>
		</span>
	);

	const getModalData = () => {
		if (modalData?.media_type === "image") {
			return <Image fill src={modalData.url} alt='modal image' />;
		} else {
			return (
				<ReactPlayer
					width='98vw'
					height='100vh'
					muted={true}
					loop={true}
					url={modalData?.url}
					light={modalData?.thumbnail_url}
					playing
					controls
				/>
			);
		}
	};

	const getCardModal = (data) => {
		setOpen(true);
		setModalData(data);
	};

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
		<>
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
			<div>
				<AntModal
					centered
					open={open}
					onOk={() => setOpen(false)}
					onCancel={() => setOpen(false)}
					width={"100%"}
					height={"100%"}>
					{getModalData()}
				</AntModal>
			</div>
		</>
	);
}

export default SpotLight;
