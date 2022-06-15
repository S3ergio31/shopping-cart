import { IconButton, styled, Typography } from "@mui/material";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  const description = expand ? "Hide description" : "Show description";
  return (
    <>
      <Typography marginLeft="auto"> {description} </Typography>
      <IconButton {...other} />
    </>
  );
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default ExpandMore;