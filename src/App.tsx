import { useState } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { Layout } from '@/components/Layout';
import { ScrollToTop } from '@/components/ScrollToTop';
import { ChatWidget } from '@/components/ChatWidget';
import { Language } from '@/lib/translations';
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import ReferencesPage from "./pages/ReferencesPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [language, setLanguage] = useState<Language>('fi');

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <Layout language={language} onLanguageChange={setLanguage}>
              <Routes>
                <Route path="/" element={<HomePage language={language} />} />
                <Route path="/services" element={<ServicesPage language={language} />} />
                <Route path="/references" element={<ReferencesPage language={language} />} />
                <Route path="/about" element={<AboutPage language={language} />} />
                <Route path="/contact" element={<ContactPage language={language} />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Layout>
            <ChatWidget language={language} />
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
