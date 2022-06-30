import type { NextPage } from 'next';
import Head from 'next/head';
import { Fragment } from 'react';
import {
	A,
	EmailWrapper,
	HTMLComment,
	Img,
	Table,
	Td,
} from '../react-html-email/components';
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

const MainHero = () => {
	return (
		<Table
			width='100%'
			style={{
				backgroundColor: '#113449',
				backgroundImage: 'url(https://i.ibb.co/hMhVbjT/stats2.gif)',
				// width: 600,
				height: 332,
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center',
			}}
		>
			<Fragment></Fragment>
		</Table>
	);
};

const Home: NextPage = () => {
	return (
		<>
			<EmailWrapper>
				{/* <Head>
				<title>Create Next App</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head> */}
				<MainHeader />
				<MainHero />
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
			<HTMLComment
				statement={`<!--[if (gte mso 9)|(IE)]>
					<style type="text/css">
						 table {border-collapse: collapse!important;}
					</style>
			 <![endif]-->`}
			/>
		</>
	);
};

export default Home;
