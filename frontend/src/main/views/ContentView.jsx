import { Box, Card, CardContent, Typography, Grid } from "@mui/material";
import { useHeadlineHook } from "../hook/headline_hook";

export const ContentView = () => {
  const { headline } = useHeadlineHook();
  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      {" "}
      {/* Ensure parent Box fills the container */}
      <Grid container spacing={2}>
        {" "}
        {/* Add spacing between grid items */}
        <Grid item xs={12}>
          {" "}
          {/* xs={12} will make the card take the full width of the container */}
          <Card variant="outlined">
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  {headline}
                </Typography>
                <Typography variant="h5" component="div">
                  benevolent
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  adjective
                </Typography>
                <Typography variant="body2">
                  well meaning and kindly.
                </Typography>
              </CardContent>
              {/* Actions can be uncommented and used as needed */}
              {/* <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions> */}
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};
