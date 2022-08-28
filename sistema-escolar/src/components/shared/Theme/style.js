import styled from "styled-components";

const Template = styled.div`
  background-color: #eee;
  min-height: 100vh;
`;
const Content = styled.div`
  background-color: #eee;
  min-height: 100vh;
  @media (min-width: 700px) {
    width: 90%;
  }
`;
export { Content, Template };
