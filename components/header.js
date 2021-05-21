import { useState } from 'react'

//next.js components
import Image from 'next/image'
import Link from 'next/link'

//custom components
import Container from './container'
import Row from './row'
import ButtonUI from './buttonui'
import NavOverlay from './navoverlay'

//styles
import styles from './header.module.scss'

export default function Header() {
    const [isMenuVisible, setMenuVisible] = useState(false)

    return (
        <header className={styles.header}>
            <Container>
                <Row justifyContentSpaceBetween>
            <Link href="/">
                <a>
                    <Image
                        src="/images/starbucks-logo.svg"
                        width={100}
                        height={100}
                        alt="Starbucks logo"
                    />
                </a>
            </Link>
            <ButtonUI 
                icon="menu"
                clickHandler={() => {setMenuVisible(true)}}
            />
            {
                isMenuVisible &&
                <NavOverlay 
                    closeClickHandler={() => {
                        setMenuVisible(false)
                    }}
                />
            }
                </Row>
            </Container>
        </header>
    )
}