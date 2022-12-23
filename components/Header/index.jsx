import Image from "next/image";
import React from "react";
import {
	HeaderContainer,
	ImageContainer,
	Left,
	MobileImageContainer,
	Name,
	Right,
} from "./style";

function Header() {
	return (
		<HeaderContainer>
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
		</HeaderContainer>
	);
}

export default Header;
