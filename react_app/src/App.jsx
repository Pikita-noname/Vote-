import { Route, Routes } from 'react-router';
import AuthProvider from './components/AuthProvider/AuthProvider';
import LoginPage from './pages/LoginPage/LoginPage';
import VoteListPage from './pages/VoteListPage/VoteListPage';
import s from './App.module.css';

function App() {
  return (
    <>
      <div className={s.pageWrapper}>
        <div className={s.background}>
          <AuthProvider />
          <Routes>
            <Route path="/" element={<VoteListPage />} />
            <Route path="/auth" element={<LoginPage />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
