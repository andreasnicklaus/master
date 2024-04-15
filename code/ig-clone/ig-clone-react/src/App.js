import './App.css';
import "@fontsource-variable/inter";
import "@fontsource/kaushan-script"

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feed from "./pages/Feed"
import About from "./pages/About"
import CreatePost from "./pages/CreatePost"
import ProfilePage from "./pages/ProfilePage"

function App() {
  return (
    <main className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Feed />} />
          <Route path='/user/:handle' element={<ProfilePage />} />
          <Route path='/create' element={<CreatePost />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
