import React from 'react';
import PropTypes from 'prop-types';
import "./AppSearch.css";

const AppSearch = (props) => {
    let { onChange } = props;
    return (
        <input type="text" 
            className="AppSearch" 
            placeholder="Enter title"
            onChange={onChange} />
    )
}

/*class AppSearch extends Component {

    onChangeChild(event) {
        this.props.onChange(event);
    }

    render() {
        return(
            <input type="text" 
                className="AppSearch" 
                placeholder="Enter title"
                onChange={this.onChangeChild.bind(this)} />
        )
    }
}*/

AppSearch.protoTypes = {
    onChange: PropTypes.func
}

export default AppSearch;