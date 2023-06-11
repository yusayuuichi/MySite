import { useContext } from 'react'

import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { LinkContainer } from 'react-router-bootstrap'

import { Context } from '../../store/index'

const ZhenNavbar = () => {
    const { isLogin, setIsLogin } = useContext(Context)

    const logout = () => {
        setIsLogin(false)
    }

    return (
        <Navbar bg='light' expand='lg' fixed='top' collapseOnSelect='true'>
            <Container>
                <Navbar.Brand>ZHEN - Resume</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='me-auto'>
                        <LinkContainer to='/'>
                            <Nav.Link>履歷表</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/msg'>
                            <Nav.Link>留言板</Nav.Link>
                        </LinkContainer>

                        {isLogin ? (
                            <>
                                <LinkContainer to='/about'>
                                    <Nav.Link>關於</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to='/resume/edit'>
                                    <Nav.Link>履歷維護</Nav.Link>
                                </LinkContainer>
                            </>
                        ) : (
                            <></>
                        )}

                        {isLogin ? (
                            <LinkContainer to='/'>
                                <Nav.Link onClick={logout}>登出</Nav.Link>
                            </LinkContainer>
                        ) : (
                            <LinkContainer to='/resume/login'>
                                <Nav.Link>履歷維護</Nav.Link>
                            </LinkContainer>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default ZhenNavbar
