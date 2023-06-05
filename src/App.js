import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import './App.css';
import UserContext from './Context/UserContext';
import Router from './Router/Router';


function App() {

  const queryClient = new QueryClient()

  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <UserContext>
          <Router />
          </UserContext>
        </QueryClientProvider>
    </div>
  );
}

export default App;
