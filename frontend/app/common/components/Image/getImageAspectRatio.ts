function getSmallestCommonDenominator(a: number, b: number): number {
	return b === 0 ? a : getSmallestCommonDenominator(b, a % b);
}

export default function getImageAspectRatio(width?: string | number, height?: string | number) {
	if (width && height) {
		const w = Number(width);
		const h = Number(height);
		const scd = getSmallestCommonDenominator(w, h);
		return `${w / scd}/${h / scd}`;
	}
	return 'unset';
}