import { useState, useEffect } from 'react';
import { useSearch } from '../container/hook/useSearch';
import DayModal from './DayModal';
import StationModal from './StationModal';
import TimeModal from './TimeModal';

const SearchStation = () => {
  const { dayModalOpen, setDayModalOpen, timeModalOpen, setTimeModalOpen, stationModalOpen, setStationModalOpen, day, setDay, hour, setHour, minute, setMinute, station, setStation} = useSearch()


  const handleDayClick = () => {
    setDayModalOpen(true);
  }
  const handleTimeClick = () => {
    setTimeModalOpen(true);
  }
  const handleStationClick = () => {
    setStationModalOpen(true);
  }
  const changeTimeToStr = (hour, minute) => {
    return(hour.toString().padStart(2,'0')+" : "+minute.toString().padStart(2,'0'))    
  }

  return(
  <>
  <div className="list-group list-group-radio d-grid gap-2 border-0 w-auto">
    <p></p>
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
        <span className="d-block small opacity-75">time of the day</span>
      </label>
    </div>
    <p>{changeTimeToStr(hour, minute)}</p>
  </div>

  <div className="list-group list-group-radio d-grid gap-2 border-0 w-auto">
    <div className="position-relative">
      <input className="form-check-input position-absolute top-50 end-0 me-3 fs-5" type="radio" name="listGroupRadioGrid" id="listGroupRadioGrid1" value="" />
      <label className="list-group-item py-3 pe-5" htmlFor="listGroupRadioGrid1" onClick={handleStationClick}>
        <strong className="fw-semibold">Station</strong>
        <span className="d-block small opacity-75">where to get your bike</span>
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