import React from 'react';
import PropTypes from 'prop-types';
import Input from './styledComponents/Input'

const AppButton = (props) => {
    let { text, onClick } = props;
    return (
        <Input type="button" value={text} onClick={onClick} />
    )
}

AppButton.protoTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func.isRequired
}

AppButton.defaultProps = {
    text: "Назва за замовчуванням"
}

export default AppButton;