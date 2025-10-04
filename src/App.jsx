import { BrowserRouter, Route } from "react-router-dom";
import Router from "./Router/Router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import defaultOptions from "./configs/reactQuery";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  const queryClient = new QueryClient({ defaultOptions : defaultOptions })

  return (  
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Router/>
    </BrowserRouter>
    <ReactQueryDevtools />
    </QueryClientProvider>

  )
}

export default App;