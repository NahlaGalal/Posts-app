import { Route, Routes, BrowserRouter } from "react-router-dom";
import PostDetails from "./pages/PostDetails";
import Posts from "./pages/Posts";
import UserPosts from "./pages/UserPosts";

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" Component={Posts} />
        <Route path="/user/:id" Component={UserPosts} />
        <Route path="/post/:id" Component={PostDetails} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
