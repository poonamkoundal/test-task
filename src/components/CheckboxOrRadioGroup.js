import React from 'react';
import PropTypes from 'prop-types';
import {  Row, Col } from 'react-bootstrap';
const CheckboxOrRadioGroup = (props) => (
	<div>
	
		<Row>
			
				<label className="form-label">{props.title}</label>
			
			{props.options.map(option => {
				return (
					<Col key={option} xs={8} className="form-label capitalize">
						<input
							className="form-checkbox"
							name={props.setName}
							onChange={props.controlFunc}
							value={option}
							checked={props.selectedOptions.indexOf(option) > -1}
							type={props.type} /> {option}
					</Col>
				);
			})}
		</Row>
	</div>
);

CheckboxOrRadioGroup.propTypes = {
	title: PropTypes.string.isRequired,
	type: PropTypes.oneOf(['checkbox', 'radio']).isRequired,
	setName: PropTypes.string.isRequired,
	options: PropTypes.array.isRequired,
	selectedOptions: PropTypes.array,
	controlFunc: PropTypes.func.isRequired
};

export default CheckboxOrRadioGroup;
