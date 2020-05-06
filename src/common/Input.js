import React from 'react';
import styled from 'styled-components'

const Inpt = styled.input`
  background-color: #fff;
  border: 1px solid #ffffff;
  border-radius: 5px;
  box-shadow: 0 0 5px #ffffff;
  :hover {
     //box-shadow: 0 0 5px darkorange;
  }
  :focus {
     box-shadow: 0 0 5px darkorange;
     outline: none;
  }
`;

const Input = props => {
    const { children } = props;
    return (
        <Inpt {...props}>
            {children}
        </Inpt>
    );
};

export default Input;