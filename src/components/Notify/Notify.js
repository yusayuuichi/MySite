import { useContext } from 'react';

import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

import { Context } from '../../store/index';

function Notify() {
	const { notifyShow, setNotifyShow } = useContext(Context);

	return (
		<ToastContainer containerPosition='fixed' className='p-3' position='bottom-end'>
			<Toast onClose={() => setNotifyShow(false)} show={notifyShow} delay={3000} bg='success'>
				<Toast.Header>
					<strong className='me-auto'>System</strong>
				</Toast.Header>
				<Toast.Body>Operation Successfully !</Toast.Body>
			</Toast>
		</ToastContainer>
	);
}

export default Notify;
