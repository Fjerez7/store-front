import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import Root from "./routes/Root";
import { useState } from "react";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { CartProvider } from "./context/CartContext";

const queryClient = new QueryClient();

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <Navbar onToggleSidebar={toggleSidebar} />
        <Root />
        <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      </CartProvider>
    </QueryClientProvider>
  );
}

export default App;
