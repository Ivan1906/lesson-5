import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './AppLi.css';

class AppLi extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate');
        let { item } = this.props;
        return (
            item.id !== nextProps.item.id &&
            item.title.toUpperCase() !== nextProps.title.toUpperCase() &&
            item.body.toUpperCase() !== nextProps.body.toUpperCase()
        );
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("componentWillUpdate:");
        console.log("props:", this.props, nextProps);
        console.log("state", this.state, nextState);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate:");
        console.log("props:", this.props, prevProps);
        console.log("state", this.state, prevState);
    }

    render() {
        console.log('render');
        const { item: { title, body }, index } = this.props;
        return(
            <div className="post">
                <h5>{index + 1}. {title.toUpperCase()}</h5>
                <p>{body.slice(0, 200)}</p>
            </div>
        )
    }
}

AppLi.protoTypes = {
    index: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string
}

AppLi.defaultProps = {
    index: 0,
    item: {
        title: "Не має назви.",
        body: "Не має опису."
    }
}

export default AppLi;