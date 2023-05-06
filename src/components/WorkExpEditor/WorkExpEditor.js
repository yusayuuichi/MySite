import { useContext } from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'
import Placeholder from 'react-bootstrap/Placeholder'
import Form from 'react-bootstrap/Form'

import ProjectModal from '../ProjectModal/ProjectModal'
import { Context } from '../../store/index'

import './WorkExpEditor.css'
import { getBase64 } from '../../utils/utility'

const WorkExpEditor = () => {
    const { companysEditor, isLoaded, updateCompanys } = useContext(Context)

    const handleCompanyLogo = (event, companyId) => {
        const files = event.target.files
        const file = files[0]
        getBase64(file, beforeLoad(companyId))
    }

    const beforeLoad = companyId => {
        const onLoad = fileString => {
            updateCompanys('companyLogo', { companyId, propVal: fileString })
        }

        return onLoad
    }

    const handleCompanys = (event, companyId, name) => {
        updateCompanys(name, { companyId, propVal: event.target.value })
    }

    if (isLoaded) {
        return (
            <>
                <h1 className="mt-5">工作經歷</h1>
                <Row xs={1} sm={2} md={3} className="g-4">
                    {companysEditor?.map(company => (
                        <Col key={company?.id} sm={4}>
                            <Card className="card-height-editor">
                                <Card.Img
                                    variant="top"
                                    src={company?.companyLogo}
                                    className="card-image-editor d-flex flex-shrink-0"
                                />

                                <Card.Body className="d-flex flex-column">
                                    <Form.Group
                                        controlId="formFileMultiple"
                                        className="mb-3"
                                    >
                                        <Form.Label>上傳公司 LOGO</Form.Label>
                                        <Form.Control
                                            type="file"
                                            multiple
                                            size="sm"
                                            onChange={event =>
                                                handleCompanyLogo(
                                                    event,
                                                    company.id
                                                )
                                            }
                                        />
                                    </Form.Group>

                                    <Card.Title className="d-flex align-items-center">
                                        <Form.Group
                                            className="mb-1 w-100"
                                            controlId="companyName"
                                        >
                                            <Form.Control
                                                type="text"
                                                placeholder="公司名"
                                                size="sm"
                                                onChange={event =>
                                                    handleCompanys(
                                                        event,
                                                        company.id,
                                                        'companyName'
                                                    )
                                                }
                                                defaultValue={
                                                    company?.companyName
                                                }
                                            />
                                        </Form.Group>
                                        {(() => {
                                            if (
                                                'Present' === company?.endDate
                                            ) {
                                                return (
                                                    <Badge
                                                        bg="primary"
                                                        className="ms-2 align-self-center"
                                                    >
                                                        Now
                                                    </Badge>
                                                )
                                            }
                                        })()}
                                    </Card.Title>
                                    <Card.Title>
                                        <Form.Group
                                            className="mb-1 w-100"
                                            controlId="companyAbbName"
                                        >
                                            <Form.Control
                                                type="text"
                                                placeholder="公司英文名"
                                                size="sm"
                                                onChange={event =>
                                                    handleCompanys(
                                                        event,
                                                        company.id,
                                                        'companyAbbName'
                                                    )
                                                }
                                                defaultValue={
                                                    company?.companyAbbName
                                                }
                                            />
                                        </Form.Group>
                                    </Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">
                                        <section>
                                            <Form.Group
                                                className="mb-1"
                                                controlId="deptName"
                                            >
                                                <Form.Control
                                                    type="text"
                                                    placeholder="部門"
                                                    size="sm"
                                                    onChange={event =>
                                                        handleCompanys(
                                                            event,
                                                            company.id,
                                                            'deptName'
                                                        )
                                                    }
                                                    defaultValue={
                                                        company?.deptName
                                                    }
                                                />
                                            </Form.Group>
                                        </section>
                                        <section>
                                            <Form.Group
                                                className="mb-1"
                                                controlId="position"
                                            >
                                                <Form.Control
                                                    type="text"
                                                    placeholder="職稱"
                                                    size="sm"
                                                    onChange={event =>
                                                        handleCompanys(
                                                            event,
                                                            company.id,
                                                            'position'
                                                        )
                                                    }
                                                    defaultValue={
                                                        company?.position
                                                    }
                                                />
                                            </Form.Group>
                                        </section>
                                        <section className="d-flex align-items-center">
                                            <Form.Group
                                                className="mb-1"
                                                controlId="beginDate"
                                            >
                                                <Form.Control
                                                    type="text"
                                                    placeholder="起始日"
                                                    size="sm"
                                                    onChange={event =>
                                                        handleCompanys(
                                                            event,
                                                            company.id,
                                                            'beginDate'
                                                        )
                                                    }
                                                    defaultValue={company?.beginDate?.substring(
                                                        0,
                                                        7
                                                    )}
                                                />
                                            </Form.Group>
                                            ~{' '}
                                            <Form.Group
                                                className="mb-1"
                                                controlId="endDate"
                                            >
                                                <Form.Control
                                                    type="text"
                                                    placeholder="結束日"
                                                    size="sm"
                                                    onChange={event =>
                                                        handleCompanys(
                                                            event,
                                                            company.id,
                                                            'endDate'
                                                        )
                                                    }
                                                    defaultValue={company?.endDate?.substring(
                                                        0,
                                                        7
                                                    )}
                                                />
                                            </Form.Group>
                                        </section>
                                    </Card.Subtitle>

                                    <Card.Text className="flex-grow-1">
                                        <Form.Group
                                            className="mb-1"
                                            controlId="jobSummary"
                                        >
                                            <Form.Control
                                                type="text"
                                                as="textarea"
                                                rows={7}
                                                placeholder="工作概要"
                                                onChange={event =>
                                                    handleCompanys(
                                                        event,
                                                        company.id,
                                                        'jobSummary'
                                                    )
                                                }
                                                defaultValue={
                                                    company?.jobSummary
                                                }
                                            />
                                        </Form.Group>
                                    </Card.Text>

                                    <ProjectModal company={company} />
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </>
        )
    } else {
        return (
            <>
                <h1 className="mt-5">工作經歷</h1>
                <Row>
                    {Array(3)
                        .fill(0)
                        .map((_, i) => (
                            <Col key={`place${i}`} sm={4}>
                                <Card>
                                    <Card.Img
                                        variant="top"
                                        src="holder.js/100px214?text=Company"
                                    />

                                    <Card.Body>
                                        <Placeholder
                                            as={Card.Title}
                                            animation="glow"
                                        >
                                            <Placeholder xs={12} />
                                        </Placeholder>
                                        <Placeholder
                                            as={Card.Subtitle}
                                            animation="glow"
                                        >
                                            <Placeholder animation="glow">
                                                <section>
                                                    <Placeholder xs={4} />
                                                </section>
                                                <section>
                                                    <Placeholder xs={3} />
                                                </section>
                                                <section>
                                                    <Placeholder xs={2} /> ~{' '}
                                                    <Placeholder xs={2} />
                                                </section>
                                            </Placeholder>
                                        </Placeholder>
                                        <Placeholder
                                            as={Card.Text}
                                            animation="glow"
                                        >
                                            <Placeholder xs={10} />
                                            <br />
                                            <Placeholder xs={7} />
                                        </Placeholder>

                                        <section className="text-center">
                                            <Placeholder.Button
                                                xs={4}
                                                aria-hidden="true"
                                            />
                                        </section>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                </Row>
            </>
        )
    }
}

export default WorkExpEditor
