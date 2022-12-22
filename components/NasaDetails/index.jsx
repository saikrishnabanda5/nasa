import axios from "axios";
import { format, startOfDay, subDays } from "date-fns";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import ReactPlayer from "react-player";
import TruncateMarkup from "react-truncate-markup";
import {
	Author,
	Container,
	Description,
	Details,
	Header,
	ImageContainer,
	Left,
	MobileImageContainer,
	Name,
	Right,
	SpotLight,
	Title,
} from "./style";
function NasaDetails({ data }) {
	const [truncate, setTruncate] = useState(true);
	const [lastWeekResponse, setLastWeekResponse] = useState([]);
	const [startDate, setStartDate] = useState(7);
	const [endDate, setEndDate] = useState(1);

	const link = {
		color: "blue",
		textDecoration: "underline",
		cursor: "pointer",
	};

	const readMoreEllipsis = (
		<span>
			...
			<span onClick={() => setTruncate(!truncate)} style={link}>
				read more
			</span>
		</span>
	);

	useEffect(() => {
		console.log(
			format(subDays(new Date(), 1), "yyyy-MM-dd"),
			format(subDays(new Date(), 7), "yyyy-MM-dd")
		);
		fetchNasaData();
	}, []);

	const fetchNasaData = async (a) => {
		// setEndDate(startDate);
		// setStartDate(startDate + 7);
		console.log(a, "startDate", startDate, "endDate", endDate);
		await axios
			.get(
				`${
					process.env.NEXT_PUBLIC_SERVER_URL
				}/nasa?api=weekData&start_date=${format(
					subDays(new Date(), startDate),
					"yyyy-MM-dd"
				)}&end_date=${format(
					subDays(new Date(), endDate),
					"yyyy-MM-dd"
				)}&thumbs=true`
			)
			.then(function (response) {
				if (response.status === 200) {
					console.log("REPSO", response.data);
					setLastWeekResponse(lastWeekResponse.concat(response.data));
				}
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	const getMediaType = () => {
		if (data?.media_type === "image") {
			return <Image src={data.url} width={300} height={300} />;
		} else {
			return (
				<video
					width='400'
					height='350'
					// controls
					poster='https://img.youtube.com/vi/0fKBhvDjuy0/0.jpg'>
					<source src={data.url} type='video/mp4' />
				</video>
			);
		}
	};

	return (
		<Container>
			{/* <div>
				<ReactPlayer
					//   playsinline={true}
					// width='100%'
					// height='100%'
					muted={true}
					loop={true}
					//   url={jumpstartClip}
					//   playing={jumpStartPlay}

					url='https://www.youtube.com/embed/0fKBhvDjuy0?rel=0'
					light='https://img.youtube.com/vi/0fKBhvDjuy0/0.jpg'
					playing
					controls
				/>
			</div> */}
			{/* <div className='player-wrapper'>
				<ReactPlayer
					className='react-player'
					url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
					width='100%'
					height='100%'
				/>
			</div> */}
			<Header>
				<Left>
					<ImageContainer>
						<Image
							src='/images/nasa-logo.webp'
							alt='nasa logo'
							width={200}
							height={100}
							priority
						/>
					</ImageContainer>
					<MobileImageContainer>
						<Image
							src='/images/nasa-logo.webp'
							alt='nasa logo'
							width={120}
							height={66}
							priority
						/>
					</MobileImageContainer>
					<Name>SAI KRISHNA</Name>
				</Left>
				<Right>
					Astronomy Picture <br />
					of the Day
				</Right>
			</Header>
			<SpotLight>
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
								{" show less"}
							</span>
						</div>
					)}
					<Author>Author : {data.copyright}</Author>
				</Details>
				{getMediaType()}
			</SpotLight>
			<InfiniteScroll
				dataLength={lastWeekResponse.length}
				next={fetchNasaData(startDate + 7)}
				style={{ display: "flex", flexDirection: "column-reverse" }} //To put endMessage and loader to the top.
				inverse={true} //
				hasMore={true}
				loader={<h4>Loading...</h4>}
				scrollableTarget='scrollableDiv'>
				{lastWeekResponse.map((item, index) => (
					<>
						<Image src={item.url} width={300} height={300} alt='nasa_image' />
						{item.date}
					</>
				))}
			</InfiniteScroll>
		</Container>
	);
}

export default NasaDetails;
