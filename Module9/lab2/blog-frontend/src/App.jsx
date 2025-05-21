import { UserProvider } from './context/UserContext';
import PostList from './components/PostList';

function App() {
  return (
    <UserProvider>
      <PostList />
    </UserProvider>
  );
}

export default App;
