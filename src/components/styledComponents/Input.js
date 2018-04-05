import styled from 'styled-components';

const Input = styled.input.attrs({
    type: props => props.type
})`
    font-size: 24px;
    font-style: oblique;
    padding: 10px;
    width: ${props => props.width ? props.width : '100%'};
    border: ${props => props.borMar ? '2px solid dodgerblue' : ''};
    margin: ${props => props.borMar ? '15px 0 0 20px' : '10px 0 0 0'};
`
export default Input;