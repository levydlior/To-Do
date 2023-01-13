import styled from "@emotion/styled";
import Button from "@mui/material/Button";

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
  align-items: center;
`;

//instead, wrap app in MUI ThemeProvider so that
// we can set colors for primary and secondary colors

//ask me to show you how i get measurements
//if the figma file doesnt come with ones
export const AddTaskButton = styled(Button)`
  background-color: #26dbae;
  width: 100%;
  height: 60px;
  border-radius: 15px;
  font-size: 26px;
  text-transform: none;
  font-weight: 700;
`;
