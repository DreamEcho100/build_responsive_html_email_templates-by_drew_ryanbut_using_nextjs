import { AnchorHTMLAttributes, FC } from 'react';
import { useSharedConfig } from '../../context';
import { combineSimilarProps } from '../../utils';

interface IAProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}

const A: FC<IAProps> = ({ children, ...props }) => {
	const [
		{
			components: { A: aComponentDefaults },
		},
	] = useSharedConfig();

	return <a {...combineSimilarProps(aComponentDefaults, props)}>{children}</a>;
};

export default A;
