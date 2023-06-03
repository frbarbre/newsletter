import { Success, Form } from "./pages";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="bg-news-charcoal min-h-screen flex items-center justify-center">
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </div>
  );
}

export default App;
