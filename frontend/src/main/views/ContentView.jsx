import { Box, Card, CardContent, Typography, Grid } from "@mui/material";
import { useSelector } from "react-redux";

export const ContentView = () => {
  const { title } = useSelector((state) => state.params);
  const { content, isLoading } = useSelector((state) => state.gpt);

  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card variant="outlined">
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              {isLoading ? (
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography>Loading Response...</Typography>
                </CardContent>
              ) : (
                <>
                  <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      {title}
                    </Typography>
                    <Typography variant="h5" component="div">
                      Content
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      {content}
                    </Typography>
                    <Typography variant="body2"></Typography>
                  </CardContent>
                </>
              )}
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};
