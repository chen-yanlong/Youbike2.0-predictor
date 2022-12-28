import { Modal, Button, Dropdown} from 'react-bootstrap'
import { useSearch} from '../container/hook/useSearch'

const StationModal = (props) => {
  const {station, setStation, bikeStations} = useSearch();

  const handleOnChoose = (station) => {
    setStation(station);
  }

  return(
    <>
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Which station to get your youbike
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>

        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
          {station}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {
              bikeStations.map((station) => {
                return(
                  <Dropdown.Item onClick={()=>{handleOnChoose(station.stationName)}}>{station.stationName}</Dropdown.Item>
                )
              })

            }
            
          </Dropdown.Menu>
        </Dropdown>


      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    </>
  )
}
export default StationModal