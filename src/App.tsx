import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "styled-components";
import theme from "./assets/styles/theme";
import "./App.css";
import Router from "./router";

const queryClient = new QueryClient();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Toaster position="bottom-center" reverseOrder={false} />
        <Router />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
