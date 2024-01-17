import { useState } from 'react';
import PropTypes from 'prop-types';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';

import TextShow from '../TextShow/TextShow';

function MyVerticallyCenteredModal(props) {
	const { company } = props;
	const { project } = company;

	return (
		<Modal
			{...props}
			size='lg'
			aria-labelledby='contained-modal-title-vcenter'
			centered
			scrollable='true'
		>
			<Modal.Header>
				<Modal.Title id='contained-modal-title-vcenter'>
					<section>{company.companyName}</section>
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<ListGroup variant='flush'>
					<ListGroup.Item className='text-muted'>
						<h4>專案使用技術</h4>
						<p>{company.usedSkills}</p>
					</ListGroup.Item>

					{project?.map((project) => {
						return (
							<ListGroup.Item key={project.id}>
								<h4>{project.projectName}</h4>
								<TextShow text={project.desc} />
							</ListGroup.Item>
						);
					})}
				</ListGroup>
			</Modal.Body>
			<Modal.Footer>
				<Button variant='outline-primary' onClick={props.onHide}>
					關閉
				</Button>
			</Modal.Footer>
		</Modal>
	);
}

function App(props) {
	const [modalShow, setModalShow] = useState(false);
	const clickModal = (flag) => {
		setModalShow(flag);
	};

	return (
		<section className='text-center'>
			<Button data-testid='ModalBtn' variant='outline-primary' onClick={() => clickModal(true)}>
				專案內容
			</Button>

			<MyVerticallyCenteredModal
				data-testid='Modal'
				show={modalShow}
				company={props.company}
				onHide={() => clickModal(false)}
			/>
		</section>
	);
}

App.propTypes = {
	company: PropTypes.node.isRequired,
};

MyVerticallyCenteredModal.propTypes = {
	company: PropTypes.node.isRequired,
	onHide: PropTypes.func.isRequired,
};

export default App;
