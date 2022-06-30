import { FC, TdHTMLAttributes } from 'react';
import { useSharedConfig } from '../../context';
import { combineSimilarProps } from '../../utils';

interface IAProps extends TdHTMLAttributes<HTMLTableCellElement> {}

const Td: FC<IAProps> = ({ children, ...props }) => {
	const [
		{
			components: { Td: tdComponentDefaults },
		},
	] = useSharedConfig();

	return (
		<td {...combineSimilarProps(tdComponentDefaults, props)}>{children}</td>
	);
};

export default Td;
