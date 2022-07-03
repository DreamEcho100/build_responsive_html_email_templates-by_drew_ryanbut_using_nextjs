import type { NextPage } from 'next';

import {
	A,
	HorizontalLineSeparator,
	Img,
	Table,
	Td,
} from '../../../react-html-email/components';
import { SharedConfigProvider } from '../../../react-html-email/context';
import { generalIcons, personDetails, socialLinksIconsSrc } from '../data';
// import { EmailWrapper, Table } from '@reactHTMLEmail/components';

const ImgSection = () => {
	return (
		<Td>
			<Table>
				<Td>
					<Img
						height='175'
						width='175'
						alt=''
						src={personDetails.img}
						style={{
							borderRadius: '50%',
						}}
					/>
				</Td>
			</Table>
		</Td>
	);
};

const Details = () => {
	const socialIconsType = socialLinksIconsSrc.whiteIconColoredBg.circledBorder;
	const generalIconsType = generalIcons.blackIconWhiteBg;
	const titleStyles = {
		fontFamily: 'Verdana, Geneva, sans-serif',
		fontSize: 14,
		fontStyle: 'italic',
		fontWeight: 400,
		color: '#1f2576',
	};

	return (
		<Td>
			<Table tr>
				<Td
					style={{
						paddingLeft: 20,
					}}
				>
					<Table>
						<Td>
							<Table style={{ padding: 4 }}>
								<Td
									style={{
										fontFamily: 'Tahoma, Geneva, sans-serif',
										fontSize: 22,
										fontWeight: 700,
										color: '#454545',
									}}
								>
									{personDetails.name}
								</Td>
								<Td
									style={{
										fontFamily: 'Tahoma, Geneva, sans-serif',
										fontSize: 15,
										fontWeight: 400,
										color: '#f25e30',
									}}
								>
									{personDetails.job}
								</Td>
								<Td>
									<HorizontalLineSeparator
										width={100}
										backgroundColor='#f25e30'
										height={4}
										paddingTop={4}
										paddingBottom={4}
									/>
								</Td>
								<Td>
									<span style={titleStyles}>
										<Img src={generalIconsType.phone} alt='' />
									</span>
									{personDetails.phone}
								</Td>
								<Td>
									<span style={titleStyles}>
										<Img src={generalIconsType.touchPhone} alt='' />
									</span>
									{personDetails.mobile}
								</Td>
								<Td>
									<span style={titleStyles}>
										<Img src={generalIconsType.letter} alt='' />
									</span>
									{personDetails.email}
								</Td>
								<Td>
									<span style={titleStyles}>
										<Img src={generalIconsType.gpsMarker} alt='' />
									</span>
									{personDetails.address}
								</Td>
							</Table>
						</Td>
						<Td
							style={{
								paddingTop: 4,
							}}
						>
							<Table tr>
								{(['facebook', 'twitter', 'instagram', 'website'] as const).map(
									(item, index) => {
										const { a, img } =
											personDetails.socialLinks[item](socialIconsType);

										return (
											<Td
												key={index}
												style={{
													paddingRight: 12,
													width: 5,
												}}
											>
												<A role='button' href={a.href}>
													<Img
														height='24'
														width='24'
														alt={img.alt}
														src={img.src}
													></Img>
												</A>
											</Td>
										);
									}
								)}
							</Table>
						</Td>
					</Table>
				</Td>
			</Table>
		</Td>
	);
};

const SignatureComponent = () => {
	return (
		<Table
			style={{
				backgroundColor: 'white',
				color: 'black',
				fontFamily:
					"'Open Sans', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
				// fontFamily: '"Calibri, Helvetica, sans-serif"',
				padding: 4,
			}}
			tr
		>
			<ImgSection key='td-ImgSection' />
			<Details key='td-Details' />
			{/* <Header key='td-Header' />
			<Td>
				<HorizontalLineSeparator
					width={418}
					backgroundColor='#e1e1e1'
					height={2}
					paddingTop={2}
					paddingBottom={8}
				/>
			</Td>
			<Body key='td-Body' /> */}
			{/* <VerticalBatSeparator key='td-VerticalBatSeparator' />
			<Details key='td-Details' /> */}
		</Table>
	);
};

const Signature3: NextPage = () => {
	return (
		<SharedConfigProvider>
			<SignatureComponent />
		</SharedConfigProvider>
	);
};

export default Signature3;
