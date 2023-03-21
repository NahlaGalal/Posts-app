import { Route, Routes, BrowserRouter } from "react-router-dom";
import Error from "./components/Error";
import Error404 from "./components/Error/404";
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
        <Route path="/err" Component={Error} />
        <Route path="*" Component={Error404} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
