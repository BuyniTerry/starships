import styled from 'styled-components'

export const Navigation = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
export const List = styled.li`
  margin-left: 15px;
  padding: 10px;
  background-color: #09d3ac;
  text-transform: uppercase;
  border-radius: 10px;
    a {
      text-decoration: none;
      color: black;
    }
`;