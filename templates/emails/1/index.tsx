import type { NextPage } from 'next';
import {
	A,
	EmailWrapper,
	HTMLComment,
	Img,
	P,
	Table,
	Td,
} from '../../../react-html-email/components';
// import { EmailWrapper, Table } from '@reactHTMLEmail/components';

const MainHeader = () => {
	return (
		<Table width='100%' trs className='main-header'>
			<Td
				style={{
					backgroundColor: '#21c6b8',
					height: 3,
				}}
			></Td>
			<Td
				className='bg-color-special-1'
				align='center'
				style={{
					backgroundColor: '#ebf5fa',
					textAlign: 'center',
					padding: '10px 0 8px 0',
				}}
			>
				{[
					{
						a: {
							href: 'https://example.com',
						},
						img: {
							src: 'https://i.ibb.co/bPLzh61/circle-facebook.png',
							alt: 'facebook',
							title: 'facebook',
						},
					},
					{
						a: {
							href: 'https://example.com',
						},
						img: {
							src: 'https://i.ibb.co/sRH7TK2/circle-twitter.png',
							alt: 'twitter',
							title: 'twitter',
						},
					},
					{
						a: { href: 'https://example.com' },
						img: {
							src: 'https://i.ibb.co/VQ9nCv3/circle-youtube.png',
							alt: 'youtube',
							title: 'youtube',
							width: '32',
						},
					},
					{
						a: { href: 'https://example.com' },
						img: {
							src: 'https://i.ibb.co/K5wbWBS/circle-linkedin.png',
							alt: 'linkedin',
							title: 'linkedin',
							width: '32',
						},
					},
					{
						a: { href: 'https://example.com' },
						img: {
							src: 'https://i.ibb.co/x8G1NMz/circle-instagram.png',
							alt: 'instagram',
							title: 'instagram',
							width: '32',
						},
					},
				].map(({ a, img }, index) => (
					<A key={index} href={a.href}>
						<Img src={img.src} alt={img.alt} title={img.title} width='32' />
					</A>
				))}
			</Td>
			<Td
				style={{
					backgroundColor: '#21c6b8',
					height: 3,
				}}
			></Td>
			<Td>
				<Table width='100%'>
					<Td
						className='bg-color-special-1'
						style={{
							backgroundColor: '#fafdfe',
							padding: '20px 0 20px',
							textAlign: 'center',
						}}
						align='center'
					>
						<A href='https://example.com' target='_blank'>
							<Img
								src='https://i.ibb.co/rx31TX7/html-email.png'
								alt='html email logo'
								width='280'
							/>
						</A>
					</Td>
				</Table>
			</Td>
		</Table>
	);
};

const Banner = () => {
	return (
		<>
			<HTMLComment
				statement={`[if (gte mso 9)|(IE)]>
						<v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width:600px;height:332px;">
							 <v:fill type="tile" src="https://i.ibb.co/hMhVbjT/stats2.gif" />
							 <v:textbox inset="0,0,0,0">
						<![endif]`}
				removeExtraSpaces
			/>
			<Table
				width='100%'
				className='darkmode-transparent'
				style={{
					backgroundColor: '#113449',
					backgroundImage: 'url(https://i.ibb.co/hMhVbjT/stats2.gif)',
					width: 600,
					height: 332,
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'center',
				}}
			>
				<Table className='darkmode-transparent'>
					<Td width='600' align='center' valign='middle'>
						<Table className='darkmode-transparent'>
							<Td align='center'>
								<Table className='darkmode-transparent' role='presentation'>
									<HTMLComment
										statement={`<!--[if (gte mso 9)|(IE)]>
															<td style="padding-top:100px;padding-bottom:25px;">
													 <![endif]-->`}
										removeExtraSpaces
									/>

									<Td
										align='center'
										style={{
											fontSize: 30,
											// lineHeight: 30,
											lineHeight: 1,
											color: '#fff',
											padding: '10px 10px 20px',
											fontWeight: 'bold',
										}}
									>
										<P
											style={{
												fontSize: 30,
												lineHeight: 30,
												color: '#fff',
												fontWeight: 'bold',
											}}
										>
											Responsive HTML Email Template
										</P>
									</Td>

									<HTMLComment
										statement={`<!--[if (gte mso 9)|(IE)]>
															</td>
													 <![endif]-->`}
										removeExtraSpaces
									/>
								</Table>
							</Td>
							<Td align='center'>
								<Table className='darkmode-transparent'>
									<Td
										style={{
											borderRadius: 10,
											backgroundColor: '#eff8fe',
										}}
									>
										<A
											href='https://example.com'
											style={{
												fontSize: 17,
												fontWeight: 'bold',
												color: '#1e5d7b',
												backgroundColor: '#eff8fe',
												border: '1px solid #eff8fe',
												borderRadius: 10,
												padding: '12px 20px',
												display: 'inline-block',
												textDecoration: 'none',
											}}
										>
											VIEW DEMO
										</A>
									</Td>
								</Table>
							</Td>
						</Table>
					</Td>
				</Table>
			</Table>
			<HTMLComment
				statement={`[if (gte mso 9)|(IE)]>
						</v:textbox>
						</v:rect>
				 <![endif]`}
				removeExtraSpaces
			/>
		</>
	);
};

const Template1: NextPage = () => {
	return (
		<>
			<EmailWrapper>
				<MainHeader />
				<Banner />
				<style global jsx>{`
					.bg-color-special-1 {
						background-color: #fafdfe;
					}
					@media (prefers-color-scheme: dark) {
						.bg-color-special-1 {
							background-color: #0f2e3d !important;
						}
					}
				`}</style>
			</EmailWrapper>
		</>
	);
};

export default Template1;
