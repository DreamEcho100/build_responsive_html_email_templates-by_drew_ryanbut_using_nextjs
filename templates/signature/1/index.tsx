import type { NextPage } from 'next';

import {
	A,
	Img,
	P,
	Table,
	Td,
	VerticalBatSeparator,
} from '../../../react-html-email/components';
import { SharedConfigProvider } from '../../../react-html-email/context';
import { personDetails, socialLinksIconsSrc } from '../data';
// import { EmailWrapper, Table } from '@reactHTMLEmail/components';

interface IProps {}

const ImgSection = () => {
	return (
		<Td width={120} className='ImgSection'>
			<Table>
				<Td>
					<span style={{ padding: 4 }}></span>
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
	);
};

const Details = () => {
	const socialIconsType =
		socialLinksIconsSrc.blackIconAndBorderAndWhiteBg.squaredBorder;

	return (
		<Td
			className='Details'
			style={{ fontFamily: 'Calibri, Helvetica, sans-serif', padding: '4px 0' }}
		>
			<Table>
				<Td style={{ textTransform: 'uppercase' }}>
					<span
						style={{
							fontSize: 17,
							fontWeight: 700,
							color: '#008bb8',
						}}
					>
						{personDetails.name}
					</span>
				</Td>
				<Td style={{ textTransform: 'uppercase' }}>
					<span
						style={{
							fontSize: 15,
							fontWeight: 700,
						}}
					>
						{personDetails.job}
					</span>
				</Td>
				<Td>
					<span
						style={{
							fontSize: 17,
							fontWeight: 700,
							color: '#008bb8',
						}}
					>
						Phone.
					</span>{' '}
					{personDetails.phone}{' '}
					<span
						style={{
							fontSize: 17,
							fontWeight: 700,
							color: '#008bb8',
						}}
					>
						Mobile.
					</span>{' '}
					+1 8240 6634
				</Td>
				<Td>
					<span
						style={{
							fontSize: 17,
							fontWeight: 700,
							color: '#008bb8',
						}}
					>
						Web.
					</span>
					{personDetails.socialLinks.website(socialIconsType).a.href}
				</Td>
				<Td>
					<span
						style={{
							fontSize: 17,
							fontWeight: 700,
							color: '#008bb8',
						}}
					>
						Address.
					</span>
					{personDetails.address}
				</Td>
				<Td
					style={{
						paddingTop: 4,
					}}
				>
					<Table tr>
						{(['facebook', 'twitter', 'linkedin', 'googlePlus'] as const).map(
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
				padding: 4,
				// fontFamily: '"Calibri, Helvetica, sans-serif"',
			}}
			tr
		>
			<ImgSection key='td-ImgSection' />
			<VerticalBatSeparator
				key='td-VerticalBatSeparator'
				paddingLeft={10}
				paddingRight={10}
				backgroundColor='#000'
				width={2}
			/>
			<Details key='td-Details' />
			<span style={{ padding: 4 }} />
		</Table>
	);
};

const Signature1: NextPage<IProps> = () => {
	return (
		<SharedConfigProvider>
			<SignatureComponent />
		</SharedConfigProvider>
	);
};

export default Signature1;
