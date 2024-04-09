import { Route, Routes } from 'react-router';
import AuthProvider from './components/AuthProvider/AuthProvider';
import LoginPage from './pages/LoginPage/LoginPage';
import VoteListPage from './pages/VoteListPage/VoteListPage';

function App() {
  console.log('render');
  return (
    <>
      <AuthProvider />
        <Routes>
          <Route path="/" element={<VoteListPage />} />
          <Route path="/auth" element={<LoginPage />} />
        </Routes>
    </>
  );
}

export default App;
