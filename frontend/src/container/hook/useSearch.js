import { useState, useEffect, createContext, useContext } from 'react';

const SearchContext = createContext({
	dayModalOpen: false,
  setDayModalOpen: ()=>{},
  timeModalOpen: false,
  setTimeModalOpen: ()=>{},
  stationModalOpen: false,
  setStationModalOpen: ()=>{},
  day: "",
  setDay: ()=>{},
  station: "",
  setStation: ()=>{},
  result: "",
  setResult: () => {},
  bikeStations: [],
  hour: 0,
  setHour: ()=>{},
  minute: 0,
  setMinute: ()=>{},

});

const SearchProvider = (props) => {
	const [dayModalOpen, setDayModalOpen] = useState(false)
  const [timeModalOpen, setTimeModalOpen] = useState(false)
  const [stationModalOpen, setStationModalOpen] = useState(false)

  const [day, setDay] = useState('Monday')
  const [hour, setHour] = useState(12);
  const [minute, setMinute] = useState(0)
  const [station, setStation] = useState('捷運科技大樓站')

  const [result, setResult] = useState("");
  
  //set bike stations below
  const bikeStations = [
    {stationName:"捷運科技大樓站", address:"復興南路", poleNum:5},
    {stationName:"捷運公館站", address:"羅斯福路", poleNum:5},
    {stationName:"台灣大學社科院", address:"辛亥路", poleNum:5},
    {stationName:"台大男七舍", address:"長興街", poleNum:5},
  ]


  return (
	  <SearchContext.Provider
		value={
			{
        dayModalOpen,
        setDayModalOpen,
        timeModalOpen,
        setTimeModalOpen,
        stationModalOpen,
        setStationModalOpen,
        day,
        setDay,
        station,
        setStation,
        result,
        setResult,
        bikeStations,
        minute,
        setMinute,
        hour,
        setHour,
			}
		}
		{...props}
	  />
  )
}

const useSearch = () => useContext(SearchContext);
export { SearchProvider, useSearch };