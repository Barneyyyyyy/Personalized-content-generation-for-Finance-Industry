import { Grid, Typography } from "@mui/material";

export const NothingSelectedView = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: "calc(100vh - 64px)",
      }}
    >
      <Grid item xs={12}>
        <Typography variant="h5" textAlign="center" sx={{ fontWeight: "bold" }}>
          Powered by Al
        </Typography>
        <Typography variant="h5">
          Personalized content at your fingertips
        </Typography>
      </Grid>
    </Grid>
  );
};
