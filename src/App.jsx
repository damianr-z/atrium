import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import AppLayout from './Components/AppLayout';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Treatments from './Pages/Treatments/Treatments';
import Blog from './Pages/Blog/Blog';
import Faqs from './Pages/Faqs/Faqs';
import Terms from './Pages/Terms/Terms';
import { Toaster } from 'react-hot-toast';
import ScrollToTop from './Components/ScrollToTop';
import './styles.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000,
      staleTime: 0,
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
      <ScrollToTop />
        {/* navigate to home page if no path is provided */}
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Navigate replace to="home" />} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="treatments" element={<Treatments />} />
            <Route path="blog" element={<Blog />} />
            <Route path="faqs" element={<Faqs />} />
            <Route path="terms" element={<Terms />} />
          </Route>
          <Route path="*" element={<Navigate replace to="home" />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: '8px' }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: '1.1rem',
            maxWidth: '500px',
            padding: '16px 24px',
            backgroundColor: 'var(--c-grey-700)',
            color: 'var(--c-blue-100)',
            FontFace: 'var(--ff-btn)',
            letterSpacing: '0.2px',
          },
        }}
      />
    </QueryClientProvider>
  );
}
