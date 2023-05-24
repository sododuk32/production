import React, { useEffect, useState } from 'react';
import style from './property.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '../components/common/Navigation';
import { motion } from 'framer-motion';
import Head from 'next/head';

function property() {
	const [isMobile, setIsmobile] = useState<boolean>(false);
	const [isNavOpen, setisNavOpen] = useState<boolean>(false);
	function NavFnc() {
		return setisNavOpen(!isNavOpen);
	}
	useEffect(() => {
		document.body.style.margin = '0';
		document.body.style.backgroundColor = '#0b1d38';
	});
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
				className={style.propertyBody}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ ease: [0.09, 0.03, 0.19, 0.72], duration: 1.5 }}
				viewport={{ once: true }}
			>
				<section className={style.NavigationSection}>
					<Link href={'/'}>
						<div className={style.logoBox}>
							<Image alt='TeaonLogo' src='/logoImg/logo.png' layout='fill' />
						</div>
					</Link>

					<div className={style.NavBtn} onClick={NavFnc}>
						<Navigation isMobile={isMobile} isNavopen={isNavOpen} />
					</div>
				</section>
				<h2 className={style.property}>property</h2>
				<div className={style.propertyimg}>
					<Image src='/property.png' layout='fill' alt='property'></Image>
				</div>
				<div className={style.propertyinfo}>
					<div className={style.info}>
						<span className={style.infoesSpan}>규모</span>
						<span>지하1층 ~ 지상 3층</span>
					</div>
					<div className={style.info}>
						<span className={style.infoesSpan}>연면적</span>
						<span>87,638.99㎡ (26,510.79py)</span>
					</div>
					<div className={style.info}>
						<span className={style.infoesSpan}>시설별 면적</span>
						<span>
							주거시설 79,947.94㎡ /<br />
							부대시설 7,791.05㎡
							<br />
						</span>
					</div>
					<div className={style.info}>
						<span className={style.infoesSpan}>건폐율</span>
						<span>41.73% / 49.78%</span>
					</div>
					<div className={style.info}>
						<span className={style.infoesSpan}>대지면적</span>
						<span>
							165,117.60㎡ <br />
							(49,948.07py)
							<br />
						</span>
					</div>
					<div className={style.info}>
						<span className={style.infoesSpan}>용적율</span>
						<span>(법정 50% / 100% 이하)</span>
					</div>
					<div className={style.info}>
						<span className={style.infoesSpan}>건축면적</span>
						<span>
							68,908.17㎡ <br />
							"(20,844.72py)"
							<br />
						</span>
					</div>
					<div className={style.info}>
						<span className={style.infoesSpan}>세대수</span>
						<span>109세대</span>
					</div>
				</div>
			</motion.section>
		</div>
	);
}

export default property;
// rfce
// className={style.propertyBody}
