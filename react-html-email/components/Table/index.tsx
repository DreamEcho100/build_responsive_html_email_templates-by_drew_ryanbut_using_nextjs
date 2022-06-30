import {
	CSSProperties,
	FC,
	HTMLAttributes,
	JSXElementConstructor,
	ReactElement,
	ReactFragment,
	ReactNode,
	ReactPortal,
	TableHTMLAttributes,
} from 'react';
import { useSharedConfig } from '../../context';
import { combineSimilarProps } from '../../utils';
import Tr from '../Tr';
import Trs from '../Trs';

interface ITableProps extends TableHTMLAttributes<HTMLTableElement> {
	children?:
		| string
		| number
		| boolean
		| ReactFragment
		| ReactElement<any, string | JSXElementConstructor<any>>
		| ReactPortal
		| JSX.Element
		| null
		| undefined;
	tr?: boolean | HTMLAttributes<HTMLTableRowElement>;
	trs?: boolean | HTMLAttributes<HTMLTableRowElement>;
}

const Table: FC<ITableProps> = ({ children, tr, trs = true, ...props }) => {
	const [
		{
			components: { Table: tableComponentDefaults },
		},
	] = useSharedConfig();

	const renderBasedOnElementType = () => {
		if (!tr && trs) {
			if (Array.isArray(children))
				return (
					<tbody>
						<Trs tr={(typeof trs === 'object' && trs) || {}}>{children}</Trs>
					</tbody>
				);
		}

		if (tr || (trs && !Array.isArray(children))) {
			return (
				<tbody>
					<Tr {...((typeof trs === 'object' && trs) || {})}>{children}</Tr>
				</tbody>
			);
		}

		return children;
	};

	return (
		<table {...combineSimilarProps(tableComponentDefaults, props)}>
			{renderBasedOnElementType()}
		</table>
	);
};

export default Table;
