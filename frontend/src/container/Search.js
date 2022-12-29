import SearchStation from "../components/search-station";
import { useSearch } from "./hook/useSearch";

const Search = () => {
  const {result, setResult, station, bikeStations} = useSearch();


  const handleSearch = () => {
    // calculate the bike num
    //...
    let poleNum = bikeStations.find(({ stationName }) => stationName == station).poleNum;
    let finalResult = Math.floor(Math.random()*(poleNum/2+1));
    setResult(finalResult)
  }

return(<html lang='en' className="h-100">
<body className="d-flex h-100 text-center text-bg-dark">
    <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
      
      <header className="mb-auto">
        <div>
          <h3 className="float-md-start mb-0">Youbike Predictor</h3>
          <nav className="nav nav-masthead justify-content-center float-md-end">
            <a className="nav-link fw-bold py-1 px-0" href="/">Home</a>
            <a className="nav-link fw-bold py-1 px-0 active" aria-current="page" href="/search">Search</a>
            <a className="nav-link fw-bold py-1 px-0" href="/stations">Stations</a>
          </nav>
        </div>
      </header>

      <main className="px-3">

        <SearchStation/>  
        <p></p>
        <p className="lead">
          <button className="btn btn-lg btn-secondary fw-bold border-white bg-white" onClick={() => handleSearch()}> Search</button>
        </p>
        {
          result && <div>{`There will be ${result} bike`}</div>
        }
      </main>

      <footer className="mt-auto text-white-50">
        <p>This is a demo of Data Analysis and Social Inquiry Final Project</p>
      </footer>

    </div>
  </body>
</html>
  
  
)

}

export default Search;