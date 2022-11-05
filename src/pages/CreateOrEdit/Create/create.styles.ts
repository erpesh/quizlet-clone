import styled from "styled-components";
import colors from "../../../assets/colors";

export const PageContainer = styled.div`
  display: flex;
  padding: 2.5rem 10% 0;
  flex-direction: column;
  background: ${colors.pageBackgroundColor};
  @media screen and (max-width: 38.75em) {
    padding: 2.5rem 5% 0;
  }
`
