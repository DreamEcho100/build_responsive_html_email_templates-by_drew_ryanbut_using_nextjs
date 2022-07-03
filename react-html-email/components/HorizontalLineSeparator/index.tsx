import { FC, TableHTMLAttributes } from 'react';
import Table from '../Table';
import Td from '../Td';

interface IProps extends TableHTMLAttributes<HTMLTableElement> {
	width: number | string;
	backgroundColor: string;
	height: number | string;
	paddingTop: number;
	paddingBottom: number;
}

const HorizontalLineSeparator: FC<IProps> = ({
	width,
	backgroundColor,
	height = 2,
	paddingTop,
	paddingBottom,
	...props
}) => {
	return (
		<Table {...props}>
			<Td style={{ paddingTop }}></Td>
			<Td
				style={{
					backgroundColor,
					height,
					width,
					verticalAlign: 'super',
				}}
			></Td>
			<Td style={{ paddingBottom }}></Td>
		</Table>
	);
};

export default HorizontalLineSeparator;
