import { useCallback, useRef } from "react";
import Webcam from "react-webcam";

export default function ReceiptScanner() {
	const ref = useRef<Webcam>(null);
	const getScreenshot = useCallback(() => {
		// @ts-ignore
		const imageSrc = ref.current.getScreenshot();
		console.log(imageSrc);
	}, [ref]);
	return <div className="relative">
		<div className="absolute w-full h-full z-1" onClick={getScreenshot} />
		{/* @ts-ignore */}
		<Webcam ref={ref} />
		</div>
}