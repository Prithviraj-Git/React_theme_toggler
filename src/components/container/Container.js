import styled from "styled-components";

export default styled.div`
  background: ${props => props.theme.background};
  color: ${props => props.theme.color};
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  box-sizing: border-box;
  transition: 1s cubic-bezier(0.65, 0.39, 0.22, 0.69);
`;