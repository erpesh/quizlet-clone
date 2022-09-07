import styled from "styled-components"
import colors from "../../assets/colors";

interface Props {
  padding: string,
  radius: string
}

export const CreateButton = styled.button<Props>`
  display: flex;
  align-items: center;
  background: ${colors.mainBlueColor};
  padding: ${p => p.padding};
  color: #fff;
  border: none;
  font-size: .875rem;
  cursor: pointer;
  border-radius: ${p => p.radius};
  height: fit-content;
  width: fit-content;
`