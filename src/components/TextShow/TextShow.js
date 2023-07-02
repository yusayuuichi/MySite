import PropTypes from 'prop-types';

const TextShow = ({ text }) => {
	const textArr = text?.split('\n');
	return (
		<>
			{textArr?.map((text, index) => {
				return (
					<span key={index}>
						{'\r' === text ? <br /> : text.trim()}
						<br />
					</span>
				);
			})}
		</>
	);
};

TextShow.propTypes = {
	text: PropTypes.string,
};
TextShow.defaultProps = {
	text: '',
};
export default TextShow;
