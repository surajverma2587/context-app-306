import Stack from "@mui/material/Stack";

import { Banner } from "../components/Banner";

export const Home = () => {
  return (
    <Stack spacing={2}>
      <Banner
        title="Simple Context App"
        subTitle="Login and change your context today!"
      />
    </Stack>
  );
};
