import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useApp } from "../context/AppProvider";

export const ItemCard = ({ item }) => {
  const { cart, setCart } = useApp();

  return (
    <Box sx={{ width: 275, m: 3 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {item}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            onClick={() => {
              setCart([item, ...cart]);
            }}
          >
            Add To Basket
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};
