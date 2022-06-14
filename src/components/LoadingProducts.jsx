import { CircularProgress, Grid, Paper } from "@mui/material";

const LoadingProducts = () =>
  [1, 2, 3].map((key) => (
    <Grid item key={key} xs={4} sm={4} md={4}>
      <Paper
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          height: 400,
        }}
      >
        <CircularProgress />
      </Paper>
    </Grid>
  ));

export default LoadingProducts;
