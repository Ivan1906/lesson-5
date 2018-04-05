import React from 'react';
import PropTypes from 'prop-types';
import Input from './styledComponents/Input'

const AppSearch = (props) => {
    let { onChange } = props;
    return (
        <Input type="text" 
            placeholder="Enter title"
            width="50%"
            onChange={onChange} borMar/>
    )
}

AppSearch.protoTypes = {
    onChange: PropTypes.func
}

export default AppSearch;