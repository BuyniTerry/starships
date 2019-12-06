import styled from "styled-components";

export const ShipSection = styled.section`
`;
export const ShipCard = styled.div`
  text-align: left;
  width: 500px;
  margin: 0 auto;
  border: 3px solid black;
  border-radius: 10px;
  color: white;
  background-color: #282c34;
  display: flex;
  flex-wrap: wrap;
`;
export const ShipsName = styled.ul`
  font-size: 18px;
  width: 100%;
  font-weight: bold;
  border-radius: 10px;
  background-color: darkorange;
  //margin-top: 0;
  border-bottom: 1px solid black;
  margin: 0;
  padding: 0;
  text-align: center;
`;
export const ShipsDetails = styled.li`
  list-style: none;
  padding: 5px 10px;
  border-bottom: darkorange;
`;
export const ShipsListSection = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;