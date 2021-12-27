import './App.less';
import {NewsPage} from "./pages/news-page";
import {Route, Switch, withRouter} from "react-router-dom";
import {ArticlePage} from "./pages/article-page";

function App() {
  return (
      <Switch>
          <Route exact={true} path='/' component={NewsPage}/>
          <Route
              component={ArticlePage}
              exact={true}
              path="/article-info"
          />
      </Switch>
  );
}

export default withRouter(App);
