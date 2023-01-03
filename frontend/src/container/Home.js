import "../css/Home.css"
import { useNavigate } from 'react-router-dom';

// import { HeadProvider, Title, Link} from 'react-head';

const Home = () => {

  const navigate = useNavigate();
  const ToSearch = () => {
    navigate('/search');
  }

  return(
    
    <html lang='en' className="h-100">
      <body className="d-flex h-100 text-center text-bg-dark">
          <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
            
            <header className="mb-auto">
              <div>
                <h3 className="float-md-start mb-0">Youbike Predictor</h3>
                <nav className="nav nav-masthead justify-content-center float-md-end">
                  <a className="nav-link fw-bold py-1 px-0 active" aria-current="page" href="/">Home</a>
                  <a className="nav-link fw-bold py-1 px-0" href="/search">Search</a>
                  <a className="nav-link fw-bold py-1 px-0" href="/stations">Stations</a>
                </nav>
              </div>
            </header>

            <main className="px-3">
              <h1>Youbike 2.0 Predictions</h1>
              <p className="lead">Youbike predictor makes it possible to predict amount of bikes of a specific rental station in the future !</p>
              <p className="lead">
                <button className="btn btn-lg btn-secondary fw-bold border-white bg-white" onClick={ ()=>ToSearch() }> Start</button>
              </p>
            </main>

            <footer className="mt-auto text-white-50">
              <p>This is a demo of Data Analysis and Social Inquiry Final Project</p>
            </footer>

          </div>
        </body>
    </html>
    
    
      
  )

}

export default Home;