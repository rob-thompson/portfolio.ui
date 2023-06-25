import React, {useEffect, useState} from 'react';
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';
import {AppLoader} from "../AppLoadingContext";
import styles from '../../styles/Sidebar.module.css'
import linksData from './links.json';

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const loadingText = 'LOADING'.split('')
let innerInterval = null;
const scrollLoadingText = (element) => {
    if(element == null || innerInterval != null) return
    let iteration = 0
    innerInterval = setInterval(() => {
        const elementText = loadingText.map((letter, index) => {
            if (index < iteration) {
                return loadingText[index]
            }
            return letters[Math.floor(Math.random() * 26)]
        }).join('')

        element.innerText = elementText + '...'

        iteration += 1 / 5

        if(iteration >= loadingText.length){
            clearInterval(innerInterval)
            innerInterval = null
        }
    }, 30)
}

const Sidebar = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        setTimeout(() => {
            const el = document.getElementById('loading-text-scroller')
            scrollLoadingText(el)
        },500)
    },[])

    return (
        <AppLoader.Consumer>
            {({showAppLoader}) =>
                showAppLoader ?
                    (<div className={styles.appLoader}>
                        <h1 id='loading-text-scroller' onMouseOver={e => scrollLoadingText(e.target) } className={styles.loadingTitle}>LOADING...</h1>
                    </div>)
                    :
                    <>
                        <Button onClick={handleShow}>
                            <FontAwesomeIcon icon={faBars} style={{fontSize: '2rem'}}/>
                        </Button>
                        <Offcanvas show={show} onHide={handleClose}>
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title>Navigation</Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Button>
                                    <Link href={'/contact'}>Contact Me</Link>
                                </Button>
                            </Offcanvas.Body>
                        </Offcanvas>
                    </>
            }
        </AppLoader.Consumer>
    );
};

export default Sidebar;