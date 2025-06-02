import { Outlet, useParams, Link, useSearchParams, useNavigate } from "react-router-dom";
import { useData } from "../hooks/useData";
import CustomSelect from "../components/CustomSelect";
import { Button, Grid } from "@mui/material";
import PostCard from "../components/PostCard";
import { Box } from "@mui/system";

// save as pages/PostsPage.jsx
export default function PostsPage() {
  return (
    <div className="Posts">
      <h1>Posts</h1>
      <Outlet />
    </div>
  );
}

export function PostList() {
  const [searchParams, setSearchParams] = useSearchParams(); // import this hook
  const limit = searchParams.get('limit') ? searchParams.get('limit') : 5;
  const postsData = useData("https://jsonplaceholder.typicode.com/posts?_limit="+limit);
  const options = [{value: 5, text: 5}, {value: 10, text: 10}, {value: 20, text: 20}]
  const navigate = useNavigate();

  const handleChangeLimit = (e) => {
    setSearchParams({limit: e.target.value})
  }

  // the ? means only call map if postsData is not null
  const postList = postsData.map((post) => (
    <Grid item key={post.id} sx={6} lg={3}>
        <PostCard title={post.title} subtitle={'Post #' + post.id} onButtonClick={() => navigate("/posts/" + post.id)}/>
    </Grid>
  ));
  return (
    <>
      <Grid container spacing={5} my={5}>{postList}</Grid>
      <CustomSelect label="Posts per page:" value={limit} options={options} onCustomChange={handleChangeLimit} width={120}/>
    </>
  );
}

export function Post() {
  const params = useParams(); // custom hook to access dynamic params
  // const {id} = useParams(); // we can also destructure the params object
  const post = useData("https://jsonplaceholder.typicode.com/posts/" + params.id, {});

  console.log(params)
  return (
    <Box>
        <div className="Post">
        {post.id ? (
            <>
            <h3>
                Post #{post.id}: {post.title}
            </h3>
            <p>{post.body}</p>
            </>
        ) : (
            "Loading ..."
        )}
        </div>
        <Button component={Link} to="/posts" variant="contained">All Posts</Button>
    </Box>
  );
}
