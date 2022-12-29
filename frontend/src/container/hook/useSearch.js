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
    {stationName:"捷運公館站(3號出口)", poleNum:90},
    {stationName:"捷運科技大樓站", poleNum:28},
    {stationName:"捷運中山國中站", poleNum:54},
    {stationName:"捷運行天宮站(3號出口)", poleNum:36},
    {stationName:"捷運六張犁站", poleNum:57},
    {stationName:"捷運大安站(4號出口)", poleNum:13},
    {stationName:"捷運中山站(2號出口)", poleNum:26},
    {stationName:"捷運東門站(5號出口)", poleNum:28},
    {stationName:"和平龍泉街口", poleNum:41},
    {stationName:"捷運永春站(2號出口)", poleNum:18},
    {stationName:"捷運龍山寺站(1號出口)", poleNum:30},
    {stationName:"捷運圓山站(1號出口)", poleNum:44},
    {stationName:"捷運國父紀念館站(2號出口)", poleNum:31},
    {stationName:"捷運南京三民站(1號出口)", poleNum:27},
    {stationName:"臺北醫學大學", poleNum:47},
    {stationName:"捷運芝山站(1號出口)", poleNum:36},
    {stationName:"捷運台北101/世貿站(2號出口)", poleNum:39},
    {stationName:"捷運忠孝復興站(2號出口)", poleNum:48},
    {stationName:"臺大第一活動中心西南側", poleNum:40},
    {stationName:"捷運信義安和站(4號出口)", poleNum:18},
    {stationName:"捷運北投站(1號出口)", poleNum:32},
    {stationName:"捷運雙連站(2號出口)", poleNum:31},
    {stationName:"捷運劍南路站(2號出口)", poleNum:86},
    {stationName:"松仁路95巷口", poleNum:50},
    {stationName:"捷運石牌站(2號出口)", poleNum:50},
    {stationName:"臺灣科技大學側門", poleNum:99},
    {stationName:"捷運圓山站(2號出口)", poleNum:27},
    {stationName:"臺灣科技大學後門", poleNum:39},
    {stationName:"臺大大一女舍北側", poleNum:53},
    {stationName:"捷運市政府站(3號出口)", poleNum:92},
    {stationName:"松山車站", poleNum:59},
    {stationName:"捷運南京復興站(5號出口)", poleNum:41},
    {stationName:"臺北市立圖書館(總館)", poleNum:40},
    {stationName:"捷運松江南京站(7號出口)", poleNum:61},
    {stationName:"捷運公館站(1號出口)", poleNum:12},
    {stationName:"臺灣師範大學(圖書館)", poleNum:33},
    {stationName:"百齡國小", poleNum:47},
    {stationName:"南京遼寧街口", poleNum:31},
    {stationName:"捷運臺大醫院站(4號出口)", poleNum:42},
    {stationName:"林森長春路口", poleNum:18},
    {stationName:"捷運大安森林公園站(5號出口)", poleNum:15},
    {stationName:"捷運士林站(2號出口)", poleNum:30},
    {stationName:"捷運古亭站(2號出口)", poleNum:41},
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