import React from 'react';
import styled from 'styled-components'

const Btn = styled.button`
  background-color: #fff;
  border: 1px solid #ffffff;
  border-radius: 5px;
  box-shadow: 0 0 5px #ffffff;
  :hover {
     box-shadow: 0 0 5px darkorange;
  }
  :focus {
    outline: none;
  }
  :active {
    box-shadow: 0 0 5px green;
  }
`;

const Button = props => {
    const { children } = props;
    return (
        <Btn {...props}>
            {children}
        </Btn>
    );
};

export default Button;