import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import routes from './routes';
import ScrollToTop from './ScrollToTop'

function App() {
  function showPage(routes) {
    var result = "";
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            exact={route.exact}
            path={route.path}
            component={route.main}
          />
        )
      })
      return <Switch>{result}</Switch>
    }
  }

  return (
    <Router>
      <ScrollToTop>   
        <div className="App">
          {showPage(routes)}
        </div>
      </ScrollToTop>
    </Router>
  );
}

export default App;
