import Stack from "@mui/material/Stack";

import { Banner } from "../components/Banner";
import { ItemCards } from "../components/ItemCards";

export const Dashboard = () => {
  const items = ["Foo", "Bar", "Biz", "Baz"];

  return (
    <Stack spacing={2}>
      <Banner title="My Dashboard" subTitle="Welcome Bob Smith!" />

      <ItemCards items={items} />
    </Stack>
  );
};
