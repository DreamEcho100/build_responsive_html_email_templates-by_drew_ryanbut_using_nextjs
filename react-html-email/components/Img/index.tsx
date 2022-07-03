import { ImgHTMLAttributes, FC } from 'react';
import { useSharedConfig } from '../../context';
import { combineSimilarProps } from '../../utils';

interface IImg extends ImgHTMLAttributes<HTMLImageElement> {
	src: string;
}
const Img: FC<IImg> = ({ src, ...props }) => {
	const [
		{
			components: { Img: imgComponentDefaults },
		},
	] = useSharedConfig();

	return (
		// eslint-disable-next-line @next/next/no-img-element
		<img
			{...{
				src: !src ? '' : src.startsWith('http') ? src : `./${src}`,
			}}
			alt=''
			{...combineSimilarProps(imgComponentDefaults, props)}
		/>
	);
};

export default Img;
