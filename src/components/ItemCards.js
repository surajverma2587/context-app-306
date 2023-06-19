import Stack from "@mui/material/Stack";

import { ItemCard } from "./ItemCard";

export const ItemCards = ({ items }) => {
  return (
    <Stack
      direction="row"
      sx={{ flexWrap: "wrap" }}
      justifyContent="space-evenly"
    >
      {items.map((item) => {
        return <ItemCard key={item} item={item} />;
      })}
    </Stack>
  );
};
