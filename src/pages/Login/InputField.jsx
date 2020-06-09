import PropTypes from 'prop-types';
import React from 'react';
import { Input, FormGroup, FormFeedback } from 'reactstrap';

InputField.propTypes = {
    field: PropTypes.object.isRequired,
    from: PropTypes.object.isRequired,

    type: PropTypes.string,
    label: PropTypes.string, 
    placeholder: PropTypes.string, 
    disabled: PropTypes.bool, 
}
InputField.defaultProps = {
    type: '',
    label: '',
    placeholder: '',
    disabled: false
}
function InputField(props){
    const{
        field, form,
        type, label, placeholder, disabled,
    } = props;
    const {name, value, onChange, onBlur} = field;
    const { errors, touched } = form;
    const showErrors = errors[name] && touched[name];
    return(
        <FormGroup>
            {label && <label for={name}>{label}</label>}
            <Input
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                type={type}
                placeholder={placeholder}
                disabled={disabled}

                invalid={showErrors}
            />
            {showErrors && <FormFeedback>{errors[name]}</FormFeedback>}
        </FormGroup>
    )
}
export default InputField;