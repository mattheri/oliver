import type {ImgHTMLAttributes} from 'react'

import getImageAspectRatio from './getImageAspectRatio';
import type { Image } from '~/common/types';
import getImageSizes from './getImageSizes';

type Props = Omit<ImgHTMLAttributes<HTMLImageElement>, keyof Image> & Image & {
	forceAspectRatio?: boolean;
};

export default function Image({ src, alt, width, height, loading = "lazy", sizes, forceAspectRatio = true, ...rest }: Props) {
	const aspectRatio = getImageAspectRatio(width, height);
	const imageSizes = getImageSizes(sizes);
	const imageAspectRatioStyles = forceAspectRatio ? { aspectRatio } : {};

	return (
		<img
			{...rest}
			src={src}
			alt={alt}
			width={width}
			height={height}
			loading={loading}
			sizes={imageSizes}
			style={imageAspectRatioStyles}
		/>
	);
}