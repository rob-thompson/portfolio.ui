import Link from 'next/link';
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from "next/image";
import ThemeSelector from "./ThemeSelector";

export default function Menu() {
    const user: any = true;
    const username: any = true;

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Nav>
                    <Link href={'/'} className={'mr-3'}>
                        <Button>FEED</Button>
                    </Link>
                    {username && (
                        <>
                            <Link href={'/admin'} className={'mr-3'}>
                                <Button>Write Posts</Button>
                            </Link>
                            <Link href={`/${username}`}>
                                <Image src={user?.photoURL} alt={'user photo'}></Image>
                            </Link>
                        </>
                    )}
                    {!username && (
                        <>
                            <Link href={'/enter'} className={'mr-3'}>
                                <Button>Log in</Button>
                            </Link>
                        </>
                    )}
                </Nav>
                <ThemeSelector/>

            </Container>
        </Navbar>
    )
}