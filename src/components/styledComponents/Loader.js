import styled, { keyframes } from 'styled-components';

const changeColor = keyframes`
    0%   {color:red;}
    25%  {color:yellow;}
    50%  {color:blue;}
    75%  {color:green;}
    100% {color:red;}
`;

const Loader = styled.h1`
    font-size: 1.5em;
    animation: ${changeColor} 1s ease-out infinite;    
    text-align: center;
    color: palevioletred;
`
export default Loader;