import styled from "styled-components"
import colors from "../../assets/colors";

interface Props {
  padding: string,
  radius: string,
  fontSize: string
}

export const BlueButton = styled.button<Props>`
  display: flex;
  align-items: center;
  background: ${colors.mainBlueColor};
  padding: ${p => p.padding};
  color: #fff;
  border: none;
  font-size: ${p => p.fontSize};
  cursor: pointer;
  border-radius: ${p => p.radius};
  height: fit-content;
  width: fit-content;
`