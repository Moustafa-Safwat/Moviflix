import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import MainLayout from './pages/mainLayout';
import Home from './pages/home';
import MovieDetails from './pages/movieDetails';
import NotFound from './pages/notFound';
import SignIn from './pages/signIn';
import Contacts from './pages/contacts';
import Movies from './pages/movies';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/movie-details/:id" element={<MovieDetails />} />
            <Route path="*" element={<NotFound />} />
            <Route path="sign-in" element={<SignIn />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="movies" element={<Movies />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;