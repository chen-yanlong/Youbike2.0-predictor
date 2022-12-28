

const Station = ({stationName, poleNum},id) => {


  return(
    <div className="col" key={id}>
      <div className="card shadow-sm">
        <svg className="bd-placeholder-img card-img-top" width="100%" height="150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="#55595c"/>
          <text x="30%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
        </svg>

        <div className="card-body">
          <p className="card-text">{stationName}</p>
          <div className="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                </div>
            <small className="text-muted">{`Total:${poleNum}`}</small> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Station;