import { Modal, Button, Dropdown } from 'react-bootstrap'
import { useSearch } from '../container/hook/useSearch';

const TimeModal = (props) => {
  const {hour, setHour, minute, setMinute} = useSearch();
  
  const hourArr = []
  for(let i = 0; i < 24; i++) hourArr.push(i);
  const minuteArr = []
  for(let i = 0; i < 12; i++) minuteArr.push(i*5)


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
          What Time do you like
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <p>Hour:</p>
      <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
          {hour}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            { 
              hourArr.map((t) => {
                return(
                  <Dropdown.Item onClick={()=>{setHour(t)}}>{t}</Dropdown.Item>
                )
              })
            }
          </Dropdown.Menu>
        </Dropdown>
        <p></p>
        <p>Minute:</p>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
          {minute}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {
              minuteArr.map((t) => {
                return(
                  <Dropdown.Item onClick={()=>{setMinute(t)}}>{t}</Dropdown.Item>
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
export default TimeModal