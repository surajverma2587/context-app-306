import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useApp } from "../context/AppProvider";

export const LoginForm = ({ title, subTitle }) => {
  const { setIsLoggedIn } = useApp();
  const navigate = useNavigate();

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
        <Box sx={{ align: "text-center" }}>
          <Button
            variant="contained"
            onClick={() => {
              setIsLoggedIn(true);
              navigate("/dashboard");
            }}
          >
            Login
          </Button>
        </Box>
      </Stack>
    </Paper>
  );
};
