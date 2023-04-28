import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MainPage } from './MainPage';
import { About } from './About';
import { PagesWrappers } from '../components/PagesWrapper/PagesWrapper';
import { NavigationInfo } from './NavigationInfo/NavigationInfo';
import { CreateArticle } from './CreateArticle/CreateAticle';
import { CreateArticleConstructor } from './CreateArticle/components/CreateArticleConstructor/CreateArticleConstructor';
import { Article } from './Article';
import { SameArticles } from './SameArticles';

export const AppRoutes = () => (
  <Router>
    <Routes>
      <Route
        path="/"
        element={
          <PagesWrappers>
            <MainPage />
          </PagesWrappers>
        }
      />
      <Route
        path="/about"
        element={
          <PagesWrappers>
            <About />
          </PagesWrappers>
        }
      />
      <Route
        path="/navigation"
        element={
          <PagesWrappers>
            <NavigationInfo />
          </PagesWrappers>
        }
      />
      <Route
        path="/create-article"
        element={
          <PagesWrappers>
            <CreateArticle />
          </PagesWrappers>
        }
      />
      <Route
        path="/create-article/constructor"
        element={
          <PagesWrappers>
            <CreateArticleConstructor />
          </PagesWrappers>
        }
      />
      <Route
        path="/article/:id"
        element={
          <PagesWrappers>
            <Article />
          </PagesWrappers>
        }
      />
      <Route
        path="/articles/:articleType"
        element={
          <PagesWrappers>
            <SameArticles />
          </PagesWrappers>
        }
      />
    </Routes>
  </Router>
);
