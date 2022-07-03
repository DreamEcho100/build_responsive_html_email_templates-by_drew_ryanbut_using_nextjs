import Table from '../Table';
import Td from '../Td';

interface IProps {
	width: number | string;
	backgroundColor: string;
	height: number | string;
	paddingTop: number;
	paddingBottom: number;
}

const HorizontalLineSeparator = ({
	width,
	backgroundColor,
	height = 2,
	paddingTop,
	paddingBottom,
}: IProps) => {
	return (
		<Table>
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
