import type { NextPage } from 'next';
import { Fragment } from 'react';
import {
	A,
	HTMLComment,
	Img,
	P,
	Table,
	Td,
} from '../../../react-html-email/components';
import { SharedConfigProvider } from '../../../react-html-email/context';
// import { EmailWrapper, Table } from '@reactHTMLEmail/components';

const MainHeader = () => {
	return (
		<Td>
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
							<A href='https://example.com'>
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
		</Td>
	);
};

const Banner = () => {
	return (
		<Td
			className='banner'
			// width='600'
			height='332'
			style={{
				backgroundColor: '#113449',
				// background: 'https://i.ibb.co/hMhVbjT/stats2.gif',
				// backgroundPosition: 'center top',
			}}
		>
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
					backgroundImage: 'url(https://i.ibb.co/hMhVbjT/stats2.gif)',
					// width: 600,
					width: '100%',
					maxWidth: 600,
					height: 332,
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'center',
				}}
			>
				<Td align='center'>
					<Table className='darkmode-transparent'>
						<Td
							// width='600'
							align='center'
							valign='middle'
						>
							<Table className='darkmode-transparent'>
								<Td align='center'>
									<Table className='darkmode-transparent'>
										<HTMLComment
											statement={`[if (gte mso 9)|(IE)]>
															<td style="padding-top:100px;padding-bottom:25px;">
													 <![endif]`}
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
													lineHeight: 3,
													color: '#fff',
													fontWeight: 'bold',
												}}
											>
												Responsive HTML Email Template
											</P>
										</Td>

										<HTMLComment
											statement={`[if (gte mso 9)|(IE)]>
															</td>
													 <![endif]`}
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
				</Td>
			</Table>
			<HTMLComment
				statement={`[if (gte mso 9)|(IE)]>
						</v:textbox>
						</v:rect>
				 <![endif]`}
				removeExtraSpaces
			/>
		</Td>
	);
};

const TwoColumns = () => {
	return (
		<Td
			style={{ padding: '35px 0 30px' }}
			// width={600}
		>
			<Table width='100%' tr>
				<Td className='two-columns' style={{ textAlign: 'center' }}>
					<HTMLComment
						statement={`[if (gte mso 9)|(IE)]>
		<table width="100%" style="border-spacing: 0;" role="presentation">
		<tr>
		<td width="300" valign="top" style="padding: 0;">
 <![endif]`}
						removeExtraSpaces
					/>
					{[
						{
							headerImg: {
								img: {
									src: 'https://i.ibb.co/Tmg3qbV/man-teal.jpg',
									alt: '',
								},
								a: {
									href: 'https://example.com/',
								},
							},
							body: {
								header: 'Build Responsive Emails',
								description:
									'Responsive HTML Email Templates that you can build around to master email development.',
								buttonLink: {
									href: 'https://example.com/',
									text: 'HTML Email',
								},
							},
						},
						{
							headerImg: {
								img: {
									src: 'https://i.ibb.co/nQn29Sg/woman-teal.jpg',
									alt: '',
								},
								a: {
									href: 'https://example.com/',
								},
							},
							body: {
								header: 'Create Custom Designs',
								description:
									'Responsive HTML Email Templates that you can build around to master email development.',
								buttonLink: {
									href: 'https://example.com/',
									text: 'Get Started',
								},
							},
						},
					].map(({ headerImg, body }, index) => (
						<Fragment key={index}>
							{index === 1 && (
								<HTMLComment
									statement={`[if (gte mso 9)|(IE)]>
																					</td><td width="300" valign="top" style="padding: 0;">
																					<![endif]`}
									removeExtraSpaces
								/>
							)}
							<Table
								className='column'
								style={{
									textAlign: 'left',
									verticalAlign: 'top',
									width: '100%',
									maxWidth: 300,
									display: 'inline-block',
								}}
								tr
							>
								<Td className='padding' style={{ padding: 20 }}>
									<Table className='content' trs>
										<Td>
											<A href={headerImg.a.href} target='_blank'>
												<Img
													className='two-col-img'
													src={headerImg.img.src}
													alt={headerImg.img.alt}
													width='260'
													style={{ maxWidth: 260, borderRadius: 8 }}
												/>
											</A>
										</Td>
										<Td style={{ padding: '10px 10px 20px' }}>
											<P
												style={{
													fontSize: 17,
													fontWeight: 'bold',
													lineHeight: 1.5,
												}}
											>
												{body.header}
											</P>
											<P style={{ fontSize: 15, lineHeight: 1.5 }}>
												{body.description}
											</P>
										</Td>
										<Td align='left' style={{ paddingLeft: 10 }}>
											<Table align='left' bgcolor='#1e5d7b' tr>
												<Td style={{ borderRadius: 10 }}>
													<A
														href={body.buttonLink.href}
														style={{
															fontSize: 16,
															fontWeight: 'bold',
															color: '#fff',
															backgroundColor: '#1e5d7b',
															border: '1px solid #1e5d7b',
															borderRadius: 10,
															padding: '10px 25px',
															display: ' inline-block',
														}}
													>
														{body.buttonLink.text}
													</A>
												</Td>
											</Table>
										</Td>
									</Table>
								</Td>
							</Table>
						</Fragment>
					))}
					<HTMLComment
						statement={`[if (gte mso 9)|(IE)]>
				</td>
				</tr>
				</table>
		 <![endif]`}
						removeExtraSpaces
					/>
				</Td>
			</Table>
		</Td>
	);
};

const TwoThirdColumns = () => {
	return (
		<Td>
			<Table width='100%' tr>
				<Td
					className='two-third-columns'
					style={{
						padding: 0,
						fontSize: 0,
						textAlign: 'center',
						backgroundColor: '#1e5d7b',
					}}
				>
					<HTMLComment
						statement={`[if (gte mso 9)|(IE)]>
                              <table width="100%" style="border-spacing: 0;" role="presentation">
                              <tr>
                              <td width="200" valign="top" style="padding: 0;">
                           <![endif]`}
						removeExtraSpaces
					/>

					<Table
						className='column'
						style={{
							verticalAlign: 'top',
							width: '100%',
							maxWidth: 200,
							display: 'inline-block',
						}}
					>
						<Td
							className='padding first'
							style={{
								padding: '15px 20px',
								backgroundColor: '#1e5d7b',
							}}
						>
							<Table
								className='content darkmode-transparent'
								style={{
									textAlign: 'center',
								}}
							>
								<Td>
									<A href='https://example.com'>
										<Img
											className='one-third-col-img'
											src='https://i.ibb.co/j852yw3/teal-circle.png'
											alt=''
											width='160'
											style={{
												maxWidth: 160,
											}}
										/>
									</A>
								</Td>
							</Table>
						</Td>
					</Table>

					<HTMLComment
						statement={`[if (gte mso 9)|(IE)]>
                           </td><td width="400" valign="top" style="padding: 0;">
                           <![endif]`}
						removeExtraSpaces
					/>

					<Table
						className='column'
						style={{
							verticalAlign: 'top',
							width: '100%',
							maxWidth: 400,
							display: 'inline-block',
						}}
					>
						<Td
							className='padding last'
							style={{
								padding: '30px 10px 15px',
								backgroundColor: '#1e5d7b',
							}}
						>
							<Table
								className='content'
								style={{
									textAlign: 'left',
								}}
							>
								<Td
									style={{
										verticalAlign: 'middle',
										padding: '0 10px',
										backgroundColor: '#1e5d7b',
									}}
								>
									<P
										style={{
											fontSize: 20,
											color: '#fff',
											letterSpacing: 0.2,
											fontWeight: 300,
											lineHeight: 1.5,
										}}
									>
										&quot;This is the best responsive email template course and
										framework! I have thoroughly enjoyed the email course.&quot;
									</P>
									<P
										style={{
											fontSize: 18,
											color: '#fff',
											letterSpacing: 0.2,
											fontWeight: 300,
											lineHeight: 2,
										}}
									>
										-Leslie J.
									</P>
								</Td>
							</Table>
						</Td>
					</Table>

					<HTMLComment
						statement={`[if (gte mso 9)|(IE)]>
                              </td>
                              </tr>
                              </table>
                           <![endif]`}
						removeExtraSpaces
					/>
				</Td>
			</Table>
		</Td>
	);
};

const ThreeColumns = () => {
	return (
		<Td>
			<Table width='100%' tr>
				<Td className='three-columns' style={{ textAlign: 'center' }}>
					<HTMLComment
						statement={`[if (gte mso 9)|(IE)]>
                              <table width="100%" style="border-spacing: 0;" role="presentation">
                              <tr>
                              <td width="200" valign="top" style="padding: 0;">
                           <![endif]`}
					/>
					{[
						{
							header: {
								a: {
									href: 'https://example.com',
								},
								img: {
									src: 'https://i.ibb.co/TRwJYjq/newsletter.jpg',
									alt: '',
								},
							},
							body: {
								title: 'NEWSLETTER',
								description:
									'Responsive HTML Email Templates that you can build around to master email development.',
							},
							footer: {
								a: {
									href: 'https://example.com',
									text: 'Learn more..',
								},
							},
						},
						{
							header: {
								a: {
									href: 'https://example.com',
								},
								img: {
									src: 'https://i.ibb.co/F8Rmvcz/ecommerce.jpg',
									alt: '',
								},
							},
							body: {
								title: 'ECOMMERCE',
								description:
									'Responsive HTML Email Templates that you can build around to master email development.',
							},
							footer: {
								a: {
									href: 'https://example.com',
									text: 'Learn more..',
								},
							},
						},
						{
							header: {
								a: {
									href: 'https://example.com',
								},
								img: {
									src: 'https://i.ibb.co/NymGnBV/blogging.jpg',
									alt: '',
								},
							},
							body: {
								title: 'BLOGGING',
								description:
									'Responsive HTML Email Templates that you can build around to master email development.',
							},
							footer: {
								a: {
									href: 'https://example.com',
									text: 'Learn more..',
								},
							},
						},
					].map(({ header, body, footer }, index, arr) => (
						<Fragment key={index}>
							<Table
								key={index}
								className='column'
								style={{
									// borderSpacing: 0,
									verticalAlign: 'top',
									width: '100%',
									maxWidth: 200,
									display: 'inline-block',
								}}
								tr
							>
								<Td className='padding' style={{ padding: 15 }}>
									<Table className='content' style={{ textAlign: 'center' }}>
										<Td>
											<A href={header.a.href}>
												<Img
													className='three-col-img'
													src={header.img.src}
													alt={header.img.alt}
													width='150'
													style={{ maxWidth: 150, borderRadius: 5 }}
												/>
											</A>
										</Td>
										<Td style={{ padding: '10px 10px 20px' }}>
											<P
												style={{
													fontSize: 17,
													fontWeight: 'bold',
													lineHeight: 1.5,
												}}
											>
												{body.title}
											</P>
											<P style={{ fontSize: 15, lineHeight: 1.5 }}>
												{body.description}
											</P>
										</Td>
										<Td align='center'>
											<Table
												align='center'

												// bgcolor='#dde0e1'
											>
												<Td style={{ borderRadius: 10 }}>
													<A
														href={footer.a.href}
														style={{
															padding: '10px 25px',
															color: index === 1 ? '#fff' : '#1e5d7b',
															backgroundColor:
																index === 1 ? '#1e5d7b' : '#dde0e1',
															border:
																index === 1
																	? '1px solid #1e5d7b'
																	: '1px solid #dde0e1',
															fontSize: 16,
															fontWeight: 'bold',
															borderRadius: 10,
															display: 'inline-block',
														}}
													>
														{footer.a.text}
													</A>
												</Td>
											</Table>
										</Td>
									</Table>
								</Td>
							</Table>
							{index !== arr.length - 1 && (
								<HTMLComment
									statement={`[if (gte mso 9)|(IE)]>
                           </td><td width="200" valign="top" style="padding: 0;">
                           <![endif]`}
								/>
							)}
						</Fragment>
					))}
					<HTMLComment
						statement={`[if (gte mso 9)|(IE)]>
                              </td>
                              </tr>
                              </table>
                           <![endif]`}
					/>
				</Td>
			</Table>
		</Td>
	);
};

const FourColumns = () => {
	return (
		<Td>
			<Table width='100%'>
				<Td height='2' style={{ backgroundColor: '#21c6b8' }} />
				<Td className='four-columns' style={{ textAlign: 'center' }}>
					<HTMLComment
						statement={`[if (gte mso 9)|(IE)]>
                              <table width="100%" style="border-spacing: 0;" role="presentation">
                              <tr>
                              <td width="150" valign="top" style="padding: 0;">
                           <![endif]`}
					/>
					{[
						{
							a: {
								href: 'https://example.com',
							},
							img: {
								src: 'https://i.ibb.co/P9pBr14/gmail.jpg',
								alt: '',
							},
						},
						{
							a: {
								href: 'https://example.com',
							},
							img: {
								src: 'https://i.ibb.co/JqGbVxD/icloud.jpg',
								alt: '',
							},
						},
						{
							a: {
								href: 'https://example.com',
							},
							img: {
								src: 'https://i.ibb.co/5KpjqYR/outlook.jpg',
								alt: '',
							},
						},
						{
							a: {
								href: 'https://example.com',
							},
							img: {
								src: 'https://i.ibb.co/8cpzpW0/yahoo.jpg',
								alt: '',
							},
						},
					].map(({ a, img }, index, arr) => (
						<Fragment key={index}>
							<Table
								className='column'
								style={{
									verticalAlign: 'top',
									width: '100%',
									maxWidth: 150,
									display: 'inline-block',
								}}
								tr
							>
								<Td>
									<Table
										className='content'
										style={{ textAlign: 'center', marginLeft: 15 }}
										tr
									>
										<Td style={{ padding: '10px 0' }}>
											<A href={a.href} target='_blank'>
												<Img
													src={img.src}
													alt={img.alt}
													width='120'
													style={{ maxWidth: 120, borderRadius: 5 }}
												/>
											</A>
										</Td>
									</Table>
								</Td>
							</Table>
							{index !== arr.length - 1 && (
								<HTMLComment
									statement={`[if (gte mso 9)|(IE)]>
                           </td><td width="150" valign="top" style="padding: 0;">
                           <![endif]`}
								/>
							)}
						</Fragment>
					))}
					<HTMLComment
						statement={`[if (gte mso 9)|(IE)]>
                              </td>
                              </tr>
                              </table>
                           <![endif]`}
					/>
				</Td>
			</Table>
		</Td>
	);
};

const GreenBorder = () => {
	return (
		<Td>
			<Table width='100%' tr>
				<Td height='3' style={{ backgroundColor: '#21c6b8' }} />
			</Table>
		</Td>
	);
};

const MainFooter = () => {
	return (
		<Td style={{ backgroundColor: '#565656' }}>
			<Table width='100%'>
				<Td
					style={{
						padding: '60px 0 50px',
						color: '#fff',
						textAlign: 'center',
						fontSize: 16,
					}}
				>
					<A href='https://example.com'>
						<Img
							src='https://i.ibb.co/rdjLnjG/html-email-white.png'
							alt=''
							width='210'
						/>
					</A>
					<P style={{ fontSize: 16, padding: '10px 0 5px' }}>
						Responsive HTML Email
					</P>
					<P style={{ fontSize: 16, paddingBottom: 5 }}>
						123 Street Road, City, State 55555
					</P>
					<P style={{ fontSize: 16, paddingBottom: 5 }}>
						<A href='mailto:email@example.com' style={{ color: '#e8fbfa' }}>
							email@example.com
						</A>
					</P>
					<P style={{ fontSize: 16, paddingBottom: 5 }}>
						<A href='tel:18008888888' style={{ color: '#e8fbfa' }}>
							1-800-888-8888
						</A>
					</P>
					<P style={{ fontSize: 13 }}>
						<A href='https://example.com' style={{ color: '#e8fbfa' }}>
							UNSUBSCRIBE
						</A>
					</P>
				</Td>

				<Td height='4' style={{ backgroundColor: '#21c6b8' }}></Td>
			</Table>
		</Td>
	);
};

const Template1: NextPage = () => {
	return (
		<>
			<SharedConfigProvider>
				{[
					`[if (gte mso 9)|(IE)]>
					<style type="text/css">
						 table {border-collapse: collapse!important;}
					</style>
			 <![endif]`,
					`[if (gte mso 9)|(IE)]>
			 <style type="text/css">
					body {background-color:#dde0e1!important;}
					body, table, td, p, a {font-family: sans-serif, Arial, Helvetica!important;}
			 </style>
		<![endif]`,
					`[if (gte mso 9)|(IE)]>
				<table width="600" align="center" style="border-spacing:0;color:#565656;" role="presentation">
				<tr>
				<td style="padding:0;">
 <![endif]`,
				].map((statement, index) => (
					<HTMLComment key={index} statement={statement} removeExtraSpaces />
				))}
				<Table
					width='100%'
					style={{
						backgroundColor: 'black',
						fontFamily:
							"'Open Sans', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
					}}
					className='wrapper'
				>
					<Td align='center'>
						<Table
							// width='600'
							className='container'
						>
							<MainHeader key='td-MainHeader' />
							<Banner key='td-Banner' />
							<TwoColumns key='td-TwoColumns' />
							<TwoThirdColumns key='td-TwoThirdColumns' />
							<ThreeColumns key='td-ThreeColumns' />
							<FourColumns key='td-FourColumns' />
							<GreenBorder key='td-GreenBorder' />
							<MainFooter key='td-MainFooter' />
							<style global jsx>{`
								@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap');
								table {
									border-spacing: 0;
								}
								td {
									padding: 0;
								}
								p {
									font-size: 15px;
								}
								img {
									border: 0;
								}
								a {
									color: #e8fbfa;
									text-decoration: none;
								}

								@media screen and (max-width: 599.98px) {
									.banner {
										height: auto !important;
										padding-top: 40px !important;
										padding-bottom: 60px !important;
									}
									.two-columns .padding,
									.two-third-columns .padding,
									.three-columns .padding {
										padding-right: 0 !important;
										padding-left: 0 !important;
									}
									.two-columns table.column,
									.three-columns table.column,
									.four-columns table.column {
										margin: 1px !important;
									}
									img.two-col-img {
										width: 300px !important;
										max-width: 300px !important;
									}
									.two-third-columns .padding.first {
										padding-bottom: 0 !important;
									}
									.two-third-columns .padding.last {
										padding-top: 0 !important;
									}
									img.one-third-col-img,
									img.three-col-img-last {
										margin: 0 1px !important;
										max-width: 80% !important;
									}
									.two-third-columns .content {
										text-align: center !important;
									}
								}
								@media screen and (max-width: 399.98px) {
									.banner {
										padding-top: 10px !important;
										padding-bottom: 40px !important;
									}
									img.three-col-img {
										width: 200px !important;
										max-width: 200px !important;
									}
								}

								/* Custom Dark Mode Colors */
								:root {
									color-scheme: light dark;
									supported-color-schemes: light dark;
								}
								@media (prefers-color-scheme: dark) {
									body,
									center,
									table {
										background: #2d2d2d !important;
										color: #ffffff !important;
									}
									.darkmode-transparent {
										background-color: transparent !important;
									}
								}

								/* .bg-color-special-1 {
									background-color: #fafdfe;
								}
								@media (prefers-color-scheme: dark) {
									.bg-color-special-1 {
										background-color: #0f2e3d !important;
									}
								} */
							`}</style>
						</Table>
					</Td>
				</Table>
				<HTMLComment
					statement={`[if (gte mso 9)|(IE)]>
						</td>
						</tr>
						</table>
						<![endif]`}
					removeExtraSpaces
				/>
			</SharedConfigProvider>
		</>
	);
};

export default Template1;
