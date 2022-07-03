import { FC, ReactNode } from 'react';
import Table from '../Table';
import css from 'styled-jsx/css';
import { SharedConfigProvider } from '../../context';
import Td from '../Td';
import HTMLComment from '../HTMLComment';

const EmailWrapper: FC<{ children?: ReactNode }> = ({ children }) => {
	const globalStyles = css.global`
		:root {
			color-scheme: light dark;
			supported-color-schemes: light dark;
		}
		@media (prefers-color-scheme: dark) {
			.wrapper {
				background-color: white !important;
			}
			.container {
				background-color: rgb(2, 8, 8) !important;
			}
		}
		@media only screen and (min-width: 960px) {
			.container {
				width: 960px;
			}
		}
		@media only screen and (max-width: 960px) {
			.container {
				width: 600px;
			}
		}
		@media only screen and (max-width: 600px) {
			.container {
				width: 100px;
			}
		}
	`;

	return (
		<SharedConfigProvider>
			<style global jsx>
				{globalStyles}
			</style>
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
						key={2}
						style={{
							backgroundColor: 'white',
						}}
						width='600'
						className='container'
					>
						<Td align='center'>{children}</Td>
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
	);
};

export default EmailWrapper;
