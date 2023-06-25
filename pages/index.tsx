import styles from '../styles/Home.module.css'
import darkForest from '../public/dark-forest-upscaled.png'
import lightForest from '../public/light-forest-upscaled.png'
import lightForestLoader from '../public/light-forest-tiny.jpeg'
import {useEffect, useRef} from "react";
import {Parallax, ParallaxLayer} from "@react-spring/parallax";

export default function Home() {
    const leftHeader = useRef(null)
    const rightHeader = useRef(null)

    let backgroundSize = '100vw auto'
    if (typeof window != 'undefined') {
        if ((window.innerWidth / window.innerHeight) < (16 / 9)) {
            backgroundSize = 'auto 100vh'
        }
    }

    useEffect(() => {
        leftHeader.current = document.getElementById('left-landing-page-header')
        rightHeader.current = document.getElementById('right-landing-page-header')

        setHeaderDivider(100)
        document.onmousemove = e => handleOnMove(e)
        document.ontouchmove = e => handleOnMove(e.touches[0])
        setTimeout(() => setHeaderDivider(100))

        return () => {
            document.onmousemove = null
            document.ontouchmove = null
        }
    }, [])

    function handleOnMove(e) {
        const point = e.clientX / window.innerWidth * 100;
        setHeaderDivider(point)
    }

    function setHeaderDivider(num) {
        if (leftHeader.current) {
            leftHeader.current.style.width = `clamp(0%,${num}%,100%)`
            leftHeader.current.style.height = rightHeader.current.style.height
        } else {
            leftHeader.current = document.getElementById('left-landing-page-header')
            rightHeader.current = document.getElementById('right-landing-page-header')
        }
    }

    return (
        <Parallax pages={5}>
            <ParallaxLayer factor={1}>
                <div
                    id='right-landing-page-header'
                    className={styles.headerSide}
                    style={{
                        backgroundImage: `url(${darkForest.src})`,
                        backgroundSize: backgroundSize,
                        backgroundRepeat: 'no-repeat',
                    }}>
                    <h1 className={styles.title}>
                        Full Stack Developer
                    </h1>
                </div>
            </ParallaxLayer>
            <ParallaxLayer factor={1}>
                <div
                    id='left-landing-page-header'
                    className={styles.headerSide}
                    style={{
                        backgroundImage: `url(${lightForestLoader.src})`,
                        backgroundSize: backgroundSize,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: '0 0'
                    }}>
                    <h1 className={styles.title}>
                        Rob Thompson
                    </h1>
                </div>
            </ParallaxLayer>
            <ParallaxLayer factor={1} offset={1} style={{backgroundColor: 'black', zIndex: 10}}>
            </ParallaxLayer>
        </Parallax>
    )
}
