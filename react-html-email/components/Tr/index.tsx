import { FC, HTMLAttributes, ReactNode, TdHTMLAttributes } from 'react';
import { useSharedConfig } from '../../context';
import { combineSimilarProps } from '../../utils';

import Td from '../Td';

interface ITrProps extends HTMLAttributes<HTMLTableRowElement> {
	children?: ReactNode;
	td?: TdHTMLAttributes<HTMLTableCellElement>;
}

const Tr: FC<ITrProps> = ({ children, td = {}, ...props }) => {
	const [
		{
			components: { Tr: trComponentDefaults },
		},
	] = useSharedConfig();

	if (Array.isArray(children))
		return (
			<tr {...combineSimilarProps(trComponentDefaults, props)}>
				{children.map((child, index) =>
					child?.type === 'td' ? (
						child
					) : (
						<Td key={child?.key || index} {...td}>
							{child}
						</Td>
					)
				)}
			</tr>
		);

	return (
		<tr {...combineSimilarProps(trComponentDefaults, props)}>
			{children &&
			typeof children === 'object' &&
			'type' in children &&
			((typeof children.type === 'function' &&
				'name' in children.type &&
				['Td', 'JSXStyle', 'HTMLComment'].includes(children.type.name)) ||
				(typeof children.type === 'string' &&
					['td', 'style'].includes(children.type))) ? (
				children
			) : (
				<Td {...td}>{children}</Td>
			)}
		</tr>
	);
};

export default Tr;
