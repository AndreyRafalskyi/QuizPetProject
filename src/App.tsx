import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { QuizLayout } from "./components/layouts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage, ResultsPage } from "./components/pages";

export const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <QueryClientProvider client={queryClient}>
        <QuizLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/results" element={<ResultsPage />} />
          </Routes>
        </QuizLayout>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
