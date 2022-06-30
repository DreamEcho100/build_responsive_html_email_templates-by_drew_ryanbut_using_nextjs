import {
	FC,
	Fragment,
	HTMLAttributes,
	ReactNode,
	TdHTMLAttributes,
} from 'react';
import Tr from '../Tr';

interface ITrsProps {
	children?: ReactNode[]; // JSX.Element[]; // ReactNode;
	tr?: HTMLAttributes<HTMLTableRowElement>;
	td?: TdHTMLAttributes<HTMLTableCellElement>;
}

const Trs: FC<ITrsProps> = ({ children, tr, td } = { tr: {} }) => {
	if (!children) return <></>;

	return (
		<>
			{children.map((child, index) => (
				<Fragment key={index}>
					{child &&
					typeof child === 'object' &&
					'type' in child &&
					// (child.type === 'tr' || child.type === 'style')
					((typeof child.type === 'function' &&
						'name' in child.type &&
						['Tr', 'HTMLComment'].includes(child.type.name)) ||
						(typeof child.type === 'string' &&
							['tr', 'style'].includes(child.type))) ? (
						child
					) : (
						<Tr {...(tr || {})} td={td}>
							{child}
						</Tr>
					)}
				</Fragment>
			))}
		</>
	);
};

export default Trs;
