import Stack from "@mui/material/Stack";

import { LoginForm } from "../components/LoginForm";

export const Login = () => {
  return (
    <Stack spacing={2}>
      <LoginForm
        title="Login Form"
        subTitle="Click on the dummy login button!"
      />
    </Stack>
  );
};
