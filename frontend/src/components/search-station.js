import { useState } from 'react';
import DayModal from './DayModal';
import StationModal from './StationModal';
import TimeModal from './TimeModal';

const SearchStation = () => {
  const [dayModalOpen, setDayModalOpen] = useState(false)
  const [timeModalOpen, setTimeModalOpen] = useState(false)
  const [stationModalOpen, setStationModalOpen] = useState(false)

  const [day, setDay] = useState('Monday')
  const [time, setTime] = useState('12:00')
  const [station, setStation] = useState('捷運科技大樓站')

  const handleDayClick = () => {
    setDayModalOpen(true);
  }
  const handleTimeClick = () => {
    setTimeModalOpen(true);
  }
  const handleStationClick = () => {
    setStationModalOpen(true);
  }

  return(
  <>
  <div className="list-group list-group-radio d-grid gap-2 border-0 w-auto">
    <div className="position-relative">
      <input className="form-check-input position-absolute top-50 end-0 me-3 fs-5" type="radio" name="listGroupRadioGrid" id="listGroupRadioGrid1" value="" />
      <label className="list-group-item py-3 pe-5" htmlFor="listGroupRadioGrid1" onClick={handleDayClick}>
        <strong className="fw-semibold">Which Day</strong>
        <span className="d-block small opacity-75">day of the week</span>
      </label>
    </div>
    <p>{day}</p>
  </div>


  <div className="list-group list-group-radio d-grid gap-2 border-0 w-auto">
    <div className="position-relative">
      <input className="form-check-input position-absolute top-50 end-0 me-3 fs-5" type="radio" name="listGroupRadioGrid" id="listGroupRadioGrid1" value="" />
      <label className="list-group-item py-3 pe-5" htmlFor="listGroupRadioGrid1" onClick={handleTimeClick}>
        <strong className="fw-semibold">Time</strong>
        <span className="d-block small opacity-75">With support text underneath to add more detail</span>
      </label>
    </div>
    <p>{time}</p>
  </div>

  <div className="list-group list-group-radio d-grid gap-2 border-0 w-auto">
    <div className="position-relative">
      <input className="form-check-input position-absolute top-50 end-0 me-3 fs-5" type="radio" name="listGroupRadioGrid" id="listGroupRadioGrid1" value="" />
      <label className="list-group-item py-3 pe-5" htmlFor="listGroupRadioGrid1" onClick={handleStationClick}>
        <strong className="fw-semibold">Station</strong>
        <span className="d-block small opacity-75">With support text underneath to add more detail</span>
      </label>
    </div>
    <p>{station}</p>
  </div>

  <DayModal show={dayModalOpen}
            onHide={() => { setDayModalOpen(false)}}/>
  <TimeModal show={timeModalOpen}
            onHide={() => { setTimeModalOpen(false)}}/>
  <StationModal show={stationModalOpen}
            onHide={() => { setStationModalOpen(false)}}/>
  
  </>
  
  
  )


}
export default SearchStation;