import { Spin } from "antd";
import axios from "axios";
import { format, subDays } from "date-fns";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import {
	AntModal,
	AntModalMobile,
	CardContainer,
	Container,
	CopyrightOwner,
	NasaCards,
	NasaDescription,
	NasaImageDate,
	NasaImageTitle,
	Player,
	PlayerDesktop,
	PlayerMobile,
} from "./style";
import SpotLight from "../SpotLight";
import Header from "../Header";
import { ShimmerSimpleGallery } from "react-shimmer-effects";
import { getNasaApiData } from "../../apiService/apiCall";
function NasaDetails({ data }) {
	const [lastWeekResponse, setLastWeekResponse] = useState([]);
	const [startDate, setStartDate] = useState(true);
	const [open, setOpen] = useState(false);
	const [loading, setLoading] = useState(true);
	const [shimmer, setShimmer] = useState(true);
	const [modalData, setModalData] = useState();
	const [weekCount, setWeekCount] = useState([]);

	const getLength = (length) => {
		if (length === 0) {
			return 1;
		} else {
			return length;
		}
	};

	const getStartDate = () => {
		if (startDate) {
			setStartDate(false);
			return 14;
		} else {
			return 7;
		}
	};

	const fetchNasaData = async () => {
		const dataLength = lastWeekResponse.length;
		const dataId = Math.floor(dataLength / 7 - 2);
		try {
			const response = await getNasaApiData(
				format(subDays(new Date(), dataLength + getStartDate()), "yyyy-MM-dd"),
				format(subDays(new Date(), getLength(dataLength)), "yyyy-MM-dd")
			);

			setLoading(false);
			if (Math.floor(dataLength / 7) > 0) {
				setShimmer(false);
				setWeekCount([
					...weekCount,
					{
						id: dataId,
						start: dataLength - dataId,
						end: dataLength - dataId + 7,
					},
				]);
			}

			response.data.sort(function (start, end) {
				var start_date = new Date(start.date);
				var end_date = new Date(end.date);
				return end_date - start_date;
			});

			setLastWeekResponse([...lastWeekResponse, ...response.data]);
		} catch (error) {
			console.log("ERROR");
		}
	};

	useEffect(() => {
		fetchNasaData();
	}, []);

	const getModalData = () => {
		if (modalData?.media_type === "image") {
			return <Image fill src={modalData?.url} alt='modal image' />;
		} else {
			return (
				<>
					<PlayerMobile>
						<Player
							width='100%'
							height='400px'
							muted={true}
							loop={true}
							url={modalData?.url}
							light={modalData?.thumbnail_url}
							playing
							controls
						/>
					</PlayerMobile>
					<PlayerDesktop>
						<Player
							width='98vw'
							height='100vh'
							muted={true}
							loop={true}
							url={modalData?.url}
							light={modalData?.thumbnail_url}
							playing
							controls
						/>
					</PlayerDesktop>
				</>
			);
		}
	};

	const getCardModal = (data) => {
		setOpen(true);
		setModalData(data);
	};

	const getResponse = (startDate, endDate) => {
		return (
			<>
				{loading ? getSpinner() : ""}
				<NasaCards length={lastWeekResponse.length}>
					{lastWeekResponse?.slice(startDate, endDate).map((item, index) => {
						return (
							<CardContainer onClick={() => getCardModal(item)} key={index}>
								<Image
									src={
										item.media_type === "image" ? item.url : item.thumbnail_url
									}
									width={300}
									height={250}
									alt='nasa_image'
								/>
								<NasaDescription>
									<NasaImageTitle>{item.title}</NasaImageTitle>
									<CopyrightOwner>{item.copyright}</CopyrightOwner>
									<NasaImageDate>{item.date}</NasaImageDate>
								</NasaDescription>
							</CardContainer>
						);
					})}
					;
				</NasaCards>
			</>
		);
	};

	const getSpinner = () => {
		return (
			<Spin
				tip='Loading'
				size='large'
				style={{ width: "100%", fontSize: "20px", height: "100px" }}
			/>
		);
	};

	return (
		<Container>
			<Header />
			<SpotLight data={data} />
			{shimmer && loading ? (
				<ShimmerSimpleGallery card imageHeight={300} />
			) : (
				""
			)}
			<InfiniteScroll
				dataLength={lastWeekResponse.length}
				next={fetchNasaData}
				hasMore={true}
				loader={getSpinner()}
				scrollableTarget='scrollableDiv'>
				{getResponse(0, 7)}
				{getResponse(7, 14)}
				{weekCount.map((item) => {
					return getResponse(item.start, item.end);
				})}
			</InfiniteScroll>

			<AntModal
				centered
				open={open}
				onOk={() => setOpen(false)}
				onCancel={() => setOpen(false)}
				width={"100%"}
				height={"100%"}>
				{getModalData()}
			</AntModal>
			<AntModalMobile
				centered
				open={open}
				onOk={() => setOpen(false)}
				onCancel={() => setOpen(false)}>
				{getModalData()}
			</AntModalMobile>
		</Container>
	);
}

export default NasaDetails;
