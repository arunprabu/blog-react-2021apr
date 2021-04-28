import './App.css';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import Program from './components/Program';
import ChannelList from './containers/ChannelList';
import TrendingShows from './containers/TrendingShows';
import MyBlog from './containers/MyBlog';

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
          <h2>Featured TV Programmes | Props Demo and Events Demo </h2>
          <Program name='Man Vs Wild' 
                   time='8 PM'
                   category='Adventure'>
            Wild Adventure show by Bear Grylls
          </Program>
          <Program name='Planet Earth' 
                   time='9 PM'
                   category='Infotainment'>
            Program on Planet Earth by David Attenborough
          </Program>
        </div>

        <div className="text-left">
          <h2>TV Channels | States Demo </h2>
          <ChannelList name='test'/>
        </div>

        <div className="text-left">
          <hr />
          <TrendingShows />
        </div>

        <div className="text-left">
          <hr />
          <MyBlog />
        </div>

      </div>
      <Footer />
    </div>
  );
}

export default App;
