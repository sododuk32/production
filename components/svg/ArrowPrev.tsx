type IconProps = {
	width?: number;
	height?: number;
};

const ArrowPrev = ({ width, height }: IconProps) => {
	return (
		<>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width={`${width}vw`}
				height={`${height}vh`}
				viewBox='0 0 320 512'
			>
				<path
					className='cls-1'
					d='M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 
                    0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z'
				/>
			</svg>
		</>
	);
};

export default ArrowPrev;
