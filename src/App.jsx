import Header from './components/layout/Header';
import Main from './components/layout/Main';
import Footer from './components/layout/Footer';

import './assets/styles/main.scss';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
