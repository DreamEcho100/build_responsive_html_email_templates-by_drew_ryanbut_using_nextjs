import type { NextPage } from 'next';

import {
	A,
	HorizontalLineSeparator,
	Img,
	Table,
	Td,
} from '../../../react-html-email/components';
import { SharedConfigProvider } from '../../../react-html-email/context';
import { personDetails, socialLinksIconsSrc } from '../data';
// import { EmailWrapper, Table } from '@reactHTMLEmail/components';

const Header = () => {
	return (
		<Td style={{ padding: 4 }}>
			{' '}
			<Table tr>
				<Td width='80%' style={{ textTransform: 'uppercase' }}>
					<Table trs>
						<Td
							style={{
								fontFamily: 'Verdana, Geneva, sans-serif',
								fontSize: 23,
								fontWeight: 700,
								color: '#515151',
							}}
						>
							{personDetails.name}
						</Td>
						<Td
							style={{
								fontSize: 15,
								fontWeight: 700,
								color: '#1f2576',
							}}
						>
							{personDetails.job}
						</Td>
					</Table>
				</Td>
				<Td width='20%'>
					<Img
						style={{
							width: 120,
							height: 40,
						}}
						src={personDetails.logo.src}
						alt={personDetails.logo.alt}
					/>
				</Td>
			</Table>
		</Td>
	);
};

const Body = () => {
	const socialIconsType = socialLinksIconsSrc.whiteIconColoredBg.roundedBorder;
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
				<Td width={120} className='ImgSection' style={{ paddingLeft: 4 }}>
					<Table>
						<Td>
							<Img
								height='120'
								width='120'
								alt=''
								src={personDetails.img}
								style={{
									borderRadius: '50%',
								}}
							/>
						</Td>
					</Table>
				</Td>
				<Td
					style={{
						paddingLeft: 20,
					}}
				>
					<Table>
						<Td>
							<Table style={{ padding: 4 }}>
								<Td>
									<span style={titleStyles}>Phone: </span>
									{personDetails.phone}{' '}
								</Td>
								<Td>
									<span style={titleStyles}>Office: </span>
									{personDetails.office}{' '}
								</Td>
								<Td>
									<span style={titleStyles}>Mobile: </span>+1 8240 6634
								</Td>
								<Td>
									<span style={titleStyles}>Address: </span>
									{personDetails.address}
								</Td>
							</Table>
						</Td>
						<Td>
							<HorizontalLineSeparator
								width={266}
								backgroundColor='#e1e1e1'
								height={2}
								paddingTop={2}
								paddingBottom={5}
							/>
						</Td>

						<Td
							style={{
								paddingTop: 4,
							}}
						>
							<Table tr>
								{(
									[
										'facebook',
										'twitter',
										'linkedin',
										'instagram',
										'website',
									] as const
								).map((item, index) => {
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
								})}
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
			}}
		>
			<Header key='td-Header' />
			<Td>
				<HorizontalLineSeparator
					width={418}
					backgroundColor='#e1e1e1'
					height={2}
					paddingTop={2}
					paddingBottom={8}
				/>
			</Td>
			<Body key='td-Body' />
			{/* <VerticalBatSeparator key='td-VerticalBatSeparator' />
			<Details key='td-Details' /> */}
		</Table>
	);
};

const Signature2: NextPage = () => {
	return (
		<SharedConfigProvider>
			<SignatureComponent />
		</SharedConfigProvider>
	);
};

export default Signature2;
