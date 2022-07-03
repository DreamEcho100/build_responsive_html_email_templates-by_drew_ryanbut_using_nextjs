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

	if (!children || typeof children !== 'object')
		return (
			<td {...combineSimilarProps(tdComponentDefaults, props)}>{children}</td>
		);

	return ('type' in children &&
		((typeof children.type === 'function' &&
			'name' in children.type &&
			['Td', 'JSXStyle', 'HTMLComment'].includes(children.type.name)) ||
			(typeof children.type === 'string' &&
				['td', 'style'].includes(children.type)))) ||
		(children &&
			'key' in children &&
			children.key?.toString().startsWith('td')) ? (
		children
	) : (
		<td {...combineSimilarProps(tdComponentDefaults, props)}>{children}</td>
	);
};

export default Td;
