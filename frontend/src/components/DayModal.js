import { Modal, Button, ListGroup } from 'react-bootstrap'
import { useState } from 'react'
import { useSearch } from '../container/hook/useSearch'

const DayModal = (props) => {
  const {setDay} = useSearch();
  const handleOnClick = () => {
    props.onHide();
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
          Which day would you like to choose
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <ListGroup defaultActiveKey="#link1">
          <ListGroup.Item action href="#link1" onClick={() => {setDay('Monday')}} >
            Monday
          </ListGroup.Item>
          <ListGroup.Item action href="#link2" onClick={() => {setDay("Tuesday")}} >
            Tuesday
          </ListGroup.Item>
          <ListGroup.Item action href="#link3" onClick={() => {setDay("Wednesday")}}>
            Wednesday
          </ListGroup.Item>
          <ListGroup.Item action href="#link4" onClick={() => {setDay("Thursday")}}>
            Thursday
          </ListGroup.Item>
          <ListGroup.Item action href="#link5" onClick={() => {setDay("Friday")}}>
            Friday
          </ListGroup.Item>
          <ListGroup.Item action href="#link6" onClick={() => {setDay("Saturday")}}>
            Saturday
          </ListGroup.Item>
          <ListGroup.Item action href="#link7" onClick={() => {setDay("Sunday")}}>
            Sunday
          </ListGroup.Item>

        </ListGroup>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={() => {handleOnClick()}}>Select</Button>
      </Modal.Footer>

    </Modal>
    </>
  )
}
export default DayModal