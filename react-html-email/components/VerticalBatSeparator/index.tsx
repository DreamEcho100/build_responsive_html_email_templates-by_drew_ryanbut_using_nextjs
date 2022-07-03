import Td from '../Td';

const VerticalBatSeparator = ({
	paddingLeft,
	paddingRight,
	backgroundColor,
	width = 2,
}: {
	paddingLeft: string | number;
	paddingRight: string | number;
	backgroundColor: string;
	width?: string | number;
}) => {
	return (
		<>
			<Td
				style={{
					paddingLeft,
				}}
			></Td>
			<Td
				style={{
					backgroundColor,
					width,
					verticalAlign: 'super',
				}}
			></Td>
			<Td
				style={{
					paddingRight,
				}}
			></Td>
		</>
	);
};

export default VerticalBatSeparator;
