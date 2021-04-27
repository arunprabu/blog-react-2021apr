import './App.css';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import Program from './components/Program';

// AppComponent -- Functional Comp with Named Fn 
// Will have the layout
function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className='container mt-5'>
        <div className="jumbotron">
          <div className="container">
            <h1 className="display-3">Welcome to My Blog App with TV Programs!</h1>
            <p>
              This is a template for a simple marketing or informational website. It
              includes a large callout called a jumbotron and three supporting pieces of
              content. Use it as a starting point to create something more unique.
            </p>
            <p>
              <a className="btn btn-primary btn-lg" href="#" role="button">
                Learn more »
              </a>
            </p>
          </div>
        </div>

        <hr />
        <div className="text-left">
          <Program />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
