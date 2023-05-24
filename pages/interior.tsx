import style from './interior.module.css';
import React, { useEffect, useState } from 'react';
import Navigation from '../components/common/Navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
function interior() {
	const [isMobile, setIsmobile] = useState<boolean>(false);
	const [isNavOpen, setisNavOpen] = useState<boolean>(false);
	const [hoveredItem, setHoveredItem] = useState<string>('');

	useEffect(() => {
		document.body.style.margin = '0';
		document.body.style.backgroundColor = '#f2e7da';
	});
	function NavFnc() {
		return setisNavOpen(!isNavOpen);
	}
	/**
	 *
	 * @param item mouseEnter이벤트가 발생한 객체가 가진 imgName 변수의 name값
	 */
	const handleMouseEnter = (item: string) => {
		setHoveredItem(item);
	};
	/**
	 *
	 * @description 마우스가 떠나면 현재 Hovered된 객체의 name정보를 담은 상태를 초기화함.
	 */
	const handleMouseLeave = () => {
		setHoveredItem('');
	};

	const imgName = [
		{ file: '1.png', name: 'MODERN' },
		{ file: '2.png', name: 'NATURAL' },
		{ file: '3.png', name: 'NORTHEN EUROPE' },
		{ file: '4.png', name: 'CLASSIC&ANITQUE' },
		{ file: '5.png', name: 'INDUSTRIAL' },
		{ file: '6.png', name: 'ANTIQUE' },
		{ file: '7.png', name: 'ZEN' },
		{ file: '8.png', name: 'VINTAGE' },
	];

	return (
		<div>
			<Head>
				<title>TEAON</title>
				<meta
					name='teaon'
					content='we are a company that conducts real estate sales, interior
					design, and construction.'
				/>
				<meta name='description' content='teaon index' />
				<meta name='robots' content='index,follow' />
				<meta name='title' content='태온' />
				<meta
					name='keywords'
					content='태온,teaon,인테리어,interior,property,프로퍼티'
				/>
			</Head>
			<motion.section
				className={style.interiorBody}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ ease: [0.09, 0.03, 0.19, 0.72], duration: 1.5 }}
				viewport={{ once: true }}
			>
				<section className={style.NavigationSection}>
					<Link href={'/'}>
						<div className={style.logoBox}>
							<Image
								alt='TeaonLogo'
								src='/logoImg/logo_interior.png'
								layout='fill'
							/>
						</div>
					</Link>

					<div className={style.NavBtn} onClick={NavFnc}>
						<Navigation isMobile={isMobile} isNavopen={isNavOpen} />
					</div>
				</section>
				<div className={style.NavigationSection}>
					<article className={style.interiorContents}>
						<h1>INTERIOR</h1>
						<figure className={style.interiorList}>
							{imgName.map((item, index) => (
								<div
									key={index}
									className={style.interiorImgcontainer}
									onMouseEnter={() => handleMouseEnter(item.name)}
									onMouseLeave={handleMouseLeave}
									onTouchEnd={() => handleMouseEnter(item.name)}
								>
									<Image
										alt={item.name}
										src={'/interiorPhoTo/' + item.file}
										layout='fill'
									/>

									{hoveredItem === item.name && (
										<div className={style.NameBox}>
											<div className={style.interiorName}></div>
											<span className={style.nameof}>{item.name}</span>
										</div>
									)}
								</div>
							))}
						</figure>
					</article>
				</div>
			</motion.section>
		</div>
	);
}

export default interior;
