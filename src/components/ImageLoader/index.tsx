import React, { useEffect, useState } from "react";
import { Container } from "./styles";

interface ImageLoaderProps {
    images: string[];
}

const ImageLoader = (props: ImageLoaderProps) => {

	const [currentImage, setCurrentImage] = useState(props.images[0]);

	useEffect(() => {
		const interval = setInterval(() => {
			const currentIndex = props.images.indexOf(currentImage);
			if (currentIndex === props.images.length - 1) {
				setCurrentImage(props.images[0]);
			} else {
				setCurrentImage(props.images[currentIndex + 1]);
			}
		}, 3000);
        
		return () => clearInterval(interval);
	}, [currentImage, props.images]);

	return (
		<Container>
			<img src={currentImage} alt="projectImage"/>
		</Container>
	);
};

export default ImageLoader;