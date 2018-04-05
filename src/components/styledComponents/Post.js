import styled from 'styled-components';

const Post = styled.div`
    border: 2px black;
    margin: 0px 10px 20px 10px;
    padding: 0px 15px;
    box-shadow: 2px 5px 3px mintcream;
    display: flex;

    & > div > p {
        text-align: justify;
    }

    &:hover {
        border: 2px solid rebeccapurple;
        margin: 0px 20px 40px 20px;
        padding: 0px 5px;
        box-shadow: 2px 5px 30px red;
    }

    &:hover span {
        display: none;
    }
    
    &:hover > div > h5 {
        text-align: center;
        text-decoration: underline;
        font-weight: bold;
        color: green;
        font-size: 16px;
    }
    
    &:hover div p {
        font-style: italic;
        font-size: 20px;
    }
`
export default Post;