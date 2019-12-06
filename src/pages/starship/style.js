import styled from "styled-components";

export const ShipSection = styled.section`
`;
export const ShipCard = styled.div`
  text-align: left;
  max-width: 500px;
  margin: 0 auto;
  border: 3px solid black;
  border-radius: 10px;
  color: white;
  background-color: #282c34;
`;
export const ShipsName = styled.ul`
  font-size: 18px;
  font-weight: bold;
  border-radius: 10px;
  background-color: darkorange;
  margin-top: 0;
  border-bottom: 1px solid black;
`;
export const ShipsDetails = styled.li`
  text-transform: uppercase;
  font-weight: bold;
  list-style: none;
  padding: 5px 10px;
  border-bottom: darkorange;
  span {
    color: white;
    font-weight: normal;
  }
`;