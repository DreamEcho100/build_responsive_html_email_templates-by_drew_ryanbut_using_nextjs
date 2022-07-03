import { HTMLAttributes, FC } from 'react';
import { useSharedConfig } from '../../context';
import { combineSimilarProps } from '../../utils';

interface IP extends HTMLAttributes<HTMLParagraphElement> {}

const P: FC<IP> = ({ children, ...props }) => {
	const [
		{
			components: { P: pComponentDefaults },
		},
	] = useSharedConfig();
	return <p {...combineSimilarProps(pComponentDefaults, props)}>{children}</p>;
};

export default P;
