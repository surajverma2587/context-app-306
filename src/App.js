import { BrowserRouter } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";

import { NavigationBar } from "./components/NavigationBar";
import { AppRoutes } from "./AppRoutes";
import { AppProvider } from "./context/AppProvider";

export const App = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <Stack spacing={2} alignItems="center" alignContent="center">
          <NavigationBar />
          <Container maxWidth="lg">
            <AppRoutes />
          </Container>
        </Stack>
      </BrowserRouter>
    </AppProvider>
  );
};
