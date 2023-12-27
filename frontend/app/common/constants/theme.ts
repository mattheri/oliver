export const BREAKPOINTS = {
	SM: 640,
	MD: 768,
	LG: 1024,
	XL: 1280,
	XXL: 1536,
} as const;

export const THEME = {
	BREAKPOINTS: BREAKPOINTS,
} as const;

export type Theme = typeof THEME;
