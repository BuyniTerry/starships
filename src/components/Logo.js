import React from 'react';
import styled from "styled-components";

const LogoType = styled.div`
  text-align: center;
  font-family: Starjedi, sans-serif;
  .yellow {
      font-size: 50px;
      font-weight: bold;
      color: darkorange;
  }
  .true_font {
      font-size: 30px;
      font-weight: 400;
      color: #ffffff;
  }
`;

const Logo = () => {
    return (
        <LogoType>
            <div className="yellow">star</div>
            <div className="true_font">for test task and education</div>
            <div className="yellow">ships</div>
        </LogoType>
    );
};

export default Logo;