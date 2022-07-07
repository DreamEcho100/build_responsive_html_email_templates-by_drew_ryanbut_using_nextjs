import {
	AnchorHTMLAttributes,
	CSSProperties,
	HTMLAttributes,
	ImgHTMLAttributes,
	TableHTMLAttributes,
	TdHTMLAttributes,
	// TdHTMLAttributes,
} from 'react';

const defaultStyles: CSSProperties = {
	margin: 0,
	padding: 0,
	border: 0,
};

interface IReactHTMLEmailConfig {
	components: {
		A: AnchorHTMLAttributes<HTMLAnchorElement>;
		// EmailWrapper: {} | undefined;
		Img: ImgHTMLAttributes<HTMLImageElement> & { border?: string };
		P: HTMLAttributes<HTMLParagraphElement>;
		Table: TableHTMLAttributes<HTMLTableElement>;
		Tr: HTMLAttributes<HTMLTableRowElement>;
		Td: TdHTMLAttributes<HTMLTableCellElement>;
		// Trs: TdHTMLAttributes<HTMLTableCellElement>;
	};
}

const reactHTMLEmailConfig: IReactHTMLEmailConfig = {
	components: {
		A: {
			style: {
				...defaultStyles,
				textDecoration: 'none',
				color: 'inherit',
				fontSize: 'inherit',
			},
			target: '_blank',
			rel: 'noopener noreferrer',
			// border: 0,
		},
		// EmailWrapper: {
		// 	style: {
		// 		...defaultStyles,
		// 	},
		// },
		Img: {
			style: {
				...defaultStyles,
				border: 0,
			},
			border: '0',
		},
		P: {
			style: {
				...defaultStyles,
			},
		},
		Table: {
			style: {
				...defaultStyles,
				borderSpacing: 0,
				borderCollapse: 'collapse',
				// font-family: Arial, Helvetica, sans-serif;
				// line-height: 0px;
				// font-size: 1px;
				// padding: 0px !important;
				// border-spacing: 0px;
				// margin: 0px;
			},
			cellSpacing: 0,
			cellPadding: 0,
			border: 0,
			role: 'presentation',
		},
		Tr: {
			style: {
				...defaultStyles,
			},
		},
		Td: {
			style: {
				...defaultStyles,
				borderCollapse: 'collapse',
			},
		},
		// Trs: {
		// 	style: {
		// 		...defaultStyles,
		// 	},
		// },
	},
};

export default reactHTMLEmailConfig;
