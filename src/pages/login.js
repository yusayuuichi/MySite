import React from 'react'
import { useState, useContext } from 'react'

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { Context } from '../store/index'

const Login = () => {
    const { loginSys, errMsg, setErrMsg } = useContext(Context)
    const [validated, setValidated] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleChange = (setter, val) => {
        if (errMsg !== '') {
            setErrMsg('')
        }

        switch (setter) {
            case 'username':
                setUsername(val)
                break
            case 'password':
                setPassword(val)
                break
            default:
                break
        }
    }

    const handleSubmit = event => {
        if (username === '' || password === '') {
            setErrMsg('請輸入帳號密碼')
            setValidated(true)
        } else {
            loginSys(username, password)
            setValidated(false)
        }

        event.preventDefault()
    }

    return (
        <Form
            noValidate
            validated={validated}
            onSubmit={event => handleSubmit(event)}
        >
            <Row>
                <Col
                    xs={{ span: 8, offset: 2 }}
                    md={{ span: 8, offset: 2 }}
                    lg={{ span: 8, offset: 2 }}
                >
                    <Card>
                        <Card.Header className='text-center'>
                            履歷維護
                        </Card.Header>
                        <Card.Body>
                            <Card.Title className='text-center'>
                                管理者登入
                            </Card.Title>
                            <Card.Text as='div'>
                                <FloatingLabel
                                    controlId='loginAccount'
                                    label='帳號'
                                    className='mb-3'
                                >
                                    <Form.Control
                                        required
                                        type='text'
                                        placeholder='Account'
                                        onChange={e =>
                                            handleChange(
                                                'username',
                                                e.target.value
                                            )
                                        }
                                        value={username}
                                    />
                                </FloatingLabel>
                                <FloatingLabel
                                    controlId='loginPassword'
                                    label='密碼'
                                >
                                    <Form.Control
                                        required
                                        type='password'
                                        placeholder='Password'
                                        onChange={e =>
                                            handleChange(
                                                'password',
                                                e.target.value
                                            )
                                        }
                                        value={password}
                                    />
                                </FloatingLabel>
                                <p className='text-danger'>{errMsg}</p>
                                <section className='text-center'>
                                    <Button
                                        className='mt-3'
                                        type='submit'
                                        variant='outline-primary'
                                    >
                                        登入
                                    </Button>
                                </section>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className='text-muted text-center'>
                            Copyright © 2022 WTZHEN. All rights reserved.
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </Form>
    )
}

export default Login
