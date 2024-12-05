import styled from "styled-components";

const Button = styled.button`
  border: none;
  width: 100px;
  height: 75px;
  background: ${(props) => props.bgColor || "#eef0eb"};
  color: ${(props) => props.color || "#000"};
  border-radius: 5px;
  cursor: pointer;
  font-size: 45px;

  &:hover {
    background-color: ${(props) => props.hoverColor || "#c4c7bf"};
    color: ${(props) => props.hoverColorText || "#000"};
  }
`;
export default Button;
