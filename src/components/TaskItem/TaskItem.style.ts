import styled from "@emotion/styled";
import Checkbox from "@mui/material/Checkbox";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";


export const TaskWrapper = styled.div`
  padding: 30px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  * {
    display: flex;
    align-items: center;
  }

  .main {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: end;
    width: 70%;
  }

  .priority-high {
    height: 80px;
    width: 80px;
    background-color: #FF0000;
    border-radius: 50%;
    display: inline-block;
  }

  .priority-medium {
    height: 80px;
    width: 80px;
    background-color: #FFFF00;
    border-radius: 50%;
    display: inline-block;
  }

  .priority-low {
    height: 80px;
    width: 80px;
    background-color: #008000;
    border-radius: 50%;
    display: inline-block;
  }

  .content {
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
  }

  .actions {
  }
`;

export const GreenCheckbox = styled(Checkbox)`
  svg {
    color: #26dbae;
  }
`;

export const DeleteIcon = styled(DeleteOutlineIcon)`
  
`