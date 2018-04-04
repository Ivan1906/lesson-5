import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppLi from './AppLi.js';
import Post from './Post.js'
import NumberElementInList from './NumberElementInList';
import './AppUl.css';

const defValue = {
    items: [
        {
            id: 0,
            title: "Назва об'єкту вибору не має.",
            body: "Опису об'єкту вибору не має."
        }
    ]
};

class AppUl extends Component {

    render() {
        const { items } = this.props.items.length !== 0 ? this.props : defValue;
        return (
            <div className="listPost">
                {items.map((item, index) => 
                    <Post key={item.id}>
                        <NumberElementInList>
                            {index + 1}
                        </NumberElementInList>
                        <AppLi item={item} index={index} />
                    </Post>
                )}
            </div>
        )
    }
}

AppUl.protoTypes = {
    items: PropTypes.arrayOf(PropTypes.object)
}

AppUl.defaultProps = {
    items: []
}
export default AppUl;