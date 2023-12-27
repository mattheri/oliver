import type { Image } from "~/common/types";

export default function getImageSizes(sizes: Image["sizes"]) {
	return sizes?.map((size) => `${size.src} ${size.width}w`).join(", ");
}