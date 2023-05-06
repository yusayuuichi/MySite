import { useContext } from 'react'

import Figure from 'react-bootstrap/Figure'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Placeholder from 'react-bootstrap/Placeholder'
import {
    IoLocationSharp,
    IoPhonePortraitOutline,
    IoMail,
    IoLogoLinkedin,
} from 'react-icons/io5'
import { BsPersonSquare } from 'react-icons/bs'

import { Context } from '../../store/index'
import TextShow from '../TextShow/TextShow'

const UserInfo = () => {
    const { userInfo, isLoaded } = useContext(Context)

    if (isLoaded) {
        return (
            <>
                <Row className="mt-3">
                    <Col sm={6} md={4} lg={4}>
                        <Figure>
                            <Figure.Image
                                width={250}
                                height={250}
                                alt="Head Shot"
                                src={userInfo?.figure}
                            />
                            <Figure.Caption>{userInfo?.workNow}</Figure.Caption>
                        </Figure>
                    </Col>
                    <Col>
                        <h1>
                            {userInfo?.name} {userInfo?.engName}
                        </h1>
                        <h2>{userInfo?.jobTitle}</h2>
                        <article>
                            <p className="text-muted">{userInfo?.school}</p>
                            <TextShow text={userInfo?.introduction} />
                        </article>
                    </Col>
                </Row>
                <Row>
                    <Col sm={4}>
                        <IoLocationSharp /> {userInfo?.location}
                    </Col>
                    <Col sm={4}>
                        <IoPhonePortraitOutline /> -
                    </Col>
                    <Col sm={4}>
                        <IoMail />{' '}
                        <a href={`mailto:${userInfo?.email}`} target="blank">
                            {userInfo?.email}
                        </a>
                    </Col>
                </Row>
                <Row>
                    <Col sm={4}>
                        <IoLogoLinkedin />{' '}
                        <a href={`${userInfo?.linkedin}`} target="blank">
                            Linkedin
                        </a>
                    </Col>
                    <Col sm={4}>
                        <BsPersonSquare />{' '}
                        <a href={`${userInfo?.cakeresume}`} target="blank">
                            Cake Resume
                        </a>
                    </Col>
                </Row>
            </>
        )
    } else {
        return (
            <>
                <Row className="mt-3">
                    <Col sm={6} md={4} lg={4}>
                        <Figure key="place">
                            <Figure.Image src="holder.js/250x250?text=Head Shot" />
                            <Placeholder as={Figure.Caption} animation="glow">
                                <Placeholder xs={6} />
                            </Placeholder>
                        </Figure>
                    </Col>
                    <Col>
                        <Placeholder as="h1" animation="glow">
                            <Placeholder xs={7} />
                        </Placeholder>
                        <Placeholder as="h2" animation="glow">
                            <Placeholder xs={5} />
                        </Placeholder>
                        <Placeholder as="article" animation="glow">
                            <Placeholder xs={6} />
                            <br />
                            <Placeholder xs={5} />
                            <br />
                            <Placeholder xs={5} />
                        </Placeholder>
                    </Col>
                </Row>
                <Row>
                    <Col sm={4}>
                        <IoLocationSharp />{' '}
                        <Placeholder animation="glow">
                            <Placeholder xs={4} />
                        </Placeholder>
                    </Col>
                    <Col sm={4}>
                        <IoPhonePortraitOutline />{' '}
                        <Placeholder animation="glow">
                            <Placeholder xs={4} />
                        </Placeholder>
                    </Col>
                    <Col sm={4}>
                        <IoMail />{' '}
                        <Placeholder animation="glow">
                            <Placeholder xs={4} />
                        </Placeholder>
                    </Col>
                </Row>
                <Row>
                    <Col sm={4}>
                        <IoLogoLinkedin />{' '}
                        <Placeholder animation="glow">
                            <Placeholder xs={4} />
                        </Placeholder>
                    </Col>
                    <Col sm={4}>
                        <BsPersonSquare />{' '}
                        <Placeholder animation="glow">
                            <Placeholder xs={4} />
                        </Placeholder>
                    </Col>
                </Row>
            </>
        )
    }
}

export default UserInfo
