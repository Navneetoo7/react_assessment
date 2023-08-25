import React from 'react'
import "./Calendar.css"

const index = ({data}) => {
  console.log("===",data)
    // const data =new Date(); 
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const firstDay = new Date(data.getFullYear(), data.getMonth(), 1)
    const lastDay = new Date(data.getFullYear(), data.getMonth() +1, 0)
    const totalDay = lastDay.getDate();

const showCalendar=()=>{
  const calData =[];
  for(let i=0;i<firstDay.getDay();i++){
    calData.push(<div key={i} className = 'calendar-cell' >  </div>)
  }
  for(let j=1;j<=totalDay;j++){
    calData.push(<div className = {`calendar-cell ${data.getDate()===j ? 'highlight' : ''}`}> {j} </div>)
  }
  return calData
}
  return (
    <div className="calendarConatiner">
     <div className=''>{firstDay.toLocaleDateString('default' ,{ month:"long"})} { firstDay.getFullYear()}</div>
     <div className='dayWeek'></div>
     {daysOfWeek.map(day => (
        <div key={day} className="days-of-week">
        {day}
      </div>
     ))}
     <div className='calendaRow'>{showCalendar()}</div>
    </div>
  )
}

export default index
