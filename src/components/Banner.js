import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

export const Banner = ({ title, subTitle }) => {
  return (
    <Paper elevation={3}>
      <Stack
        alignContent="center"
        alignItems="center"
        spacing={2}
        sx={{ p: 2 }}
      >
        <Typography component="h1" variant="h5">
          {title}
        </Typography>
        <Typography component="h2" variant="caption">
          {subTitle}
        </Typography>
      </Stack>
    </Paper>
  );
};
