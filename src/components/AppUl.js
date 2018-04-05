import React from 'react';
import PropTypes from 'prop-types';
import AppLi from './AppLi.js';
import Post from './styledComponents/Post.js'
import NumberElementInList from './styledComponents/NumberElementInList';
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

const AppUl = (props) => {
    const { items } = props.items.length !== 0 ? props : defValue;
    return (
        <div className="listPost">
            {items.map((item, index) => 
                <Post key={item.id}>
                    <NumberElementInList>
                        {index + 1}
                    </NumberElementInList>
                    <AppLi item={item} />
                </Post>
            )}
        </div>
    )
};

AppUl.protoTypes = {
    items: PropTypes.arrayOf(PropTypes.object)
}

AppUl.defaultProps = {
    items: []
}
export default AppUl;