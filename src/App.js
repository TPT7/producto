// src/App.js
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Home from './pages/Home';
import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';
import AddProduct from './pages/AddProduct';
import ProductListing from './pages/ProductListing';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

function App() {
  return (
    <Router>
      <Container>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/create-account" component={CreateAccount} />
          <Route path="/add-product" component={AddProduct} />
          <Route path="/product-listing" component={ProductListing} />
          <Route path="/" component={Home} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
