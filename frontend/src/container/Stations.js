import Station from "../components/station"
import { useSearch } from "./hook/useSearch"

const Stations = () => {
  const {bikeStations} = useSearch();

  return(<html lang='en' className="h-100">
  <body className="d-flex  text-center text-bg-dark" id="stationBody">
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        
        <header >
          <div>
            <h3 className="float-md-start mb-0">Youbike Predictor</h3>
            <nav className="nav nav-masthead justify-content-center float-md-end">
              <a className="nav-link fw-bold py-1 px-0" href="/">Home</a>
              <a className="nav-link fw-bold py-1 px-0"  href="/search">Search</a>
              <a className="nav-link fw-bold py-1 px-0 active" aria-current="page" href="/stations">Stations</a>
            </nav>
          </div>
        </header>
  
        <main className="px-3">
  
          <div className="py-5 container">
            <div className="row py-lg-5">
              <div className="col-lg-6 col-md-8 mx-auto">
                <h1 className="fw-light">Stations</h1>
                <p className="lead text-muted">These are the retal stations that our system supports.</p>
              </div>
            </div>
          </div>
             
            <div className="album py-5 bg-success">
              <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                  {
                    bikeStations.map(({stationName, address, poleNum}, id) => {
                      return(
                        <Station 
                          stationName={stationName}
                          address={address}
                          poleNum={poleNum}
                          id={id}
                        />
                      )
                    })
                  }

                  </div>
                </div>
              </div>

        </main>
      </div>
    </body>
  </html>
    
    
  )
  
}

export default Stations;