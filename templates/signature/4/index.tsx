import type { NextPage } from 'next';

import {
	A,
	HorizontalLineSeparator,
	Img,
	P,
	Table,
	Td,
} from '../../../react-html-email/components';
import { SharedConfigProvider } from '../../../react-html-email/context';
import { generalIcons, personDetails, socialLinksIconsSrc } from '../data';
// import { EmailWrapper, Table } from '@reactHTMLEmail/components';

const ImgSection = () => {
	return (
		<Td align='center' style={{ paddingTop: 8 }}>
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

const Intro = () => {
	return (
		<Td align='center'>
			<Table tr>
				<Td
					align='center'
					valign='middle'
					style={{
						paddingRight: 4,
					}}
				>
					<HorizontalLineSeparator
						width={60}
						backgroundColor='black'
						height={2}
						paddingTop={0}
						paddingBottom={0}
					/>
				</Td>
				<Td align='center'>
					<P style={{ textTransform: 'uppercase', fontSize: 36 }}>
						{personDetails.name}
					</P>
					<P
						style={{
							textTransform: 'capitalize',
							fontWeight: 'bold',
							fontSize: 26,
						}}
					>
						{personDetails.job}
					</P>
				</Td>
				<Td
					align='center'
					valign='middle'
					style={{
						paddingLeft: 4,
					}}
				>
					<HorizontalLineSeparator
						width={60}
						backgroundColor='black'
						height={2}
						paddingTop={0}
						paddingBottom={0}
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
		fontFamily: 'Calibri, Helvetica, sans-serif',
		fontSize: 14,
		fontWeight: 400,
	};

	return (
		<Td align='center' style={{ padding: '8px 0' }}>
			<Table>
				<Td>
					<span style={titleStyles}>T //</span>{' '}
					<span
						style={{
							fontFamily: 'Calibri, Helvetica, sans-serif',
							fontSize: 14,
							color: '#858585',
						}}
					>
						<A href={`tel:+${personDetails.phone}`}>{personDetails.phone}</A>
					</span>
				</Td>
				<Td>
					<span style={titleStyles}>E //</span>{' '}
					<span
						style={{
							fontFamily: 'Calibri, Helvetica, sans-serif',
							fontSize: 14,
							color: '#858585',
						}}
					>
						<A href={`mailto:${personDetails.email}`}>{personDetails.email}</A>
					</span>
				</Td>
				<Td>
					<span style={titleStyles}>A //</span>{' '}
					<span
						style={{
							fontFamily: 'Calibri, Helvetica, sans-serif',
							fontSize: 14,
							color: '#858585',
						}}
					>
						{personDetails.address}
					</span>
				</Td>
			</Table>
		</Td>
	);
};

const SocialHeader = () => {
	return (
		<Td align='center'>
			<Table tr>
				<Td
					align='center'
					valign='middle'
					style={{
						paddingRight: 4,
					}}
				>
					<HorizontalLineSeparator
						width={60}
						backgroundColor='black'
						height={2}
						paddingTop={0}
						paddingBottom={0}
					/>
				</Td>
				<Td align='center' style={{ textTransform: 'uppercase', fontSize: 18 }}>
					social
				</Td>
				<Td
					align='center'
					valign='middle'
					style={{
						paddingLeft: 4,
					}}
				>
					<HorizontalLineSeparator
						width={60}
						backgroundColor='black'
						height={2}
						paddingTop={0}
						paddingBottom={0}
					/>
				</Td>
			</Table>
		</Td>
	);
};

const SocialLinks = () => {
	const socialIconsType = socialLinksIconsSrc.whiteIconAndBlackBg.circledBorder;
	return (
		<Td align='center' style={{ padding: 4 }}>
			<Table tr>
				{(['facebook', 'twitter', 'instagram', 'website'] as const).map(
					(item, index) => {
						const { a, img } = personDetails.socialLinks[item](socialIconsType);

						return (
							<Td
								key={index}
								style={{
									paddingRight: 8,
									width: 5,
								}}
							>
								<A role='button' href={a.href}>
									<Img height='24' width='24' alt={img.alt} src={img.src}></Img>
								</A>
							</Td>
						);
					}
				)}
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
		>
			<ImgSection key='td-ImgSection' />
			<Intro key='td-Intro' />
			<Details key='td-Details' />
			{/* <SocialHeader key='td-SocialHeader' />
			<SocialLinks key='td-SocialLinks' /> */}
		</Table>
	);
};

const Signature4: NextPage = () => {
	return (
		<SharedConfigProvider>
			<SignatureComponent />
		</SharedConfigProvider>
	);
};

export default Signature4;
