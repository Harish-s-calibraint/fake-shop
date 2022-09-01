import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from './containers/header.js'
import ProductListing from './containers/productListing.js';
import ProductDetail from './containers/productDetail.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
          <Routes>
            <Route path='/' exact element={<ProductListing/>}/>
            <Route path="/product/:productId" exact element={<ProductDetail/>}/>
            <Route>404 Not Found</Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
