import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AppLi extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        let { item } = this.props;
        return (
            item.id !== nextProps.item.id &&
            item.title.toUpperCase() !== nextProps.title.toUpperCase() &&
            item.body.toUpperCase() !== nextProps.body.toUpperCase()
        );
    }

    render() {
        const { item: { title, body } } = this.props;
        return(
            <div>
                <h5>{title.toUpperCase()}</h5>
                <p>{body.slice(0, 200)}</p>
            </div>
        )
    }
}

AppLi.protoTypes = {
    title: PropTypes.string,
    body: PropTypes.string
}

AppLi.defaultProps = {
    item: {
        title: "Не має назви.",
        body: "Не має опису."
    }
}

export default AppLi;