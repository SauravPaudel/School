import React, { useState } from 'react';
import school2 from '../../assets/school1.jpg'

const Notice = () => {
  const magazineIssues = [
    {
      date: 'Oct 9, 2023',
      grade: 'IX (E-learning)',
    },
    {
      date: 'June 9, 2022',
      grade: 'X (E-learning)',
    },
    {
      date: 'Feb 19, 2021',
      grade: 'VIII (E-learning)',
    },
    {
      date: 'Jan 3, 2023',
      grade: 'VII (E-learning)',
    },
  ];
  const events = [
    {
      date: 'Feb 22, 2024',
      title: 'Dance Competition',
      image: 'https://via.placeholder.com/600x400',
    },
    {
      date: '11 Nov - 12 Dec, 2023',
      title: 'Antarikshya MUN',
      image: 'https://via.placeholder.com/600x400',
    },
    {
      date: 'Sept 19, 2023',
      title: 'Teacher Parent Meeting',
      image: 'https://via.placeholder.com/600x400',
    },
    {
      date: 'Aug 18, 2023',
      title: 'Art Competition',
      image: 'https://via.placeholder.com/600x400',
    },
    {
      date: 'July 1 - July 7, 2023',
      title: 'Sports Week',
      image: 'https://via.placeholder.com/600x400',
    },
    {
      date: 'June 15, 2023',
      title: 'Quiz Competition',
      image: 'https://via.placeholder.com/600x400',
    },
  ];
  const [currentDate, setCurrentDate] = useState(new Date());

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const daysShort = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
  const lastDateOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const renderCalendarDays = () => {
    const calendarDays = [];
    let day = 1;

    for (let i = 0; i < 6; i++) {
      const week = [];
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDayOfMonth) {
          week.push(<div key={`empty-${j}`} className="text-gray-400 py-2">&nbsp;</div>);
        } else if (day > lastDateOfMonth) {
          week.push(<div key={`empty-${j}`} className="text-gray-400 py-2">&nbsp;</div>);
        } else {
          week.push(
            <div key={`day-${day}`} className="text-center py-2">
              {day}
            </div>
          );
          day++;
        }
      }
      calendarDays.push(
        <div key={`week-${i}`} className="grid grid-cols-7 gap-1">
          {week}
        </div>
      );
    }

    return calendarDays;
  };
  return (
    <div className='mx-auto container'>
        <div className='w-full h-[650px] flex flex-row pt-20'>
          <div className='flex-col relative left-32 top-14 max-h-[400px]'>
          <span className='text-black font-bold'>Notice , Publication And Calendar</span><br></br>
          <p className='text-black font-bold pt-4 '>Notice and Publication</p>
          <p className='text-black w-[500px] pt-6 '>Each occasion at Antarikshya School is marked by happiness and the commencement of fresh opportunities for learning. Our school's notice board is like a big billboard where we put up all the important stuff. It tells everyone about events, school schedules, fun activities, and even the cool things students achieve. Teachers make sure to keep it updated so everyone, including students, teachers, and parents, knows what's happening in our school. 
          It's kind of like our school's big news center, making sure everyone feels connected.</p>

          <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gray-800 text-white hover:bg-gray-900 disabled:opacity-50 disabled:pointer-events-none relative top-10">
          View Newsletters
          </button>
          </div>
      
          <div className='flex relative left-[200px] '>
          <img className=' h-[400px] rounded-lg py-2' src={school2} alt="" />
          </div>
        </div>

        <div className="bg-navy-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="bg-clip-text text-transparent bg-[#162545]">
              Magazine
            </span>
            <span className="text-[#162545]"> - Learning Lens</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-black">
            Learning lens, the school's yearly literary magazine, stands out for its inclusive nature, as every student
            from Grades I to X contributes to its content. Reflecting the Antarikshya curriculum, Learning Lens
            showcases a wide array of creative works from across the school community.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {magazineIssues.map((issue, index) => (
            <div key={index} className="bg-navy-800 shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <div className="bg-[#162545] rounded-lg p-6">
                  <img
                    className="mx-auto h-40 w-40"
                    src="https://via.placeholder.com/600x400"
                    alt=""
                  />
                </div>
                <div className="mt-8 w-[300px] sm:flex sm:items-center sm:justify-between">
                  <div className="sm:flex-1">
                    <h3 className="text-lg leading-6 font-medium text-black">{issue.grade}</h3>
                  </div>
                  <div className="mt-4 flex items-center justify-between sm:mt-0">
                    <button
                      type="button"
                      className="inline-flex relative top-[45px] right-14 items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                    >
                      Download
                    </button>
                  </div>
                </div>
                <div className="mt-4 flex justify-between">
                  <span className="text-sm text-gray-500">{issue.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>


    <div className='flex-col  ml-[60px] relative left-2 top-14 max-h-[400px] '>
          <span className='text-black text-2xl font-bold'>Recent Events</span><br></br>
          </div>
    <div className="w-[1350px] ml-[60px] bg-gray-900 py-20 mt-20 mb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <img
                className="w-full h-48 object-cover"
                src={event.image}
                alt={event.title}
              />
              <div className="p-4">
                <div className="font-bold text-white mb-2">{event.title}</div>
                <p className="text-gray-400 text-sm">{event.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={prevMonth}
          >
            Prev
          </button>
          <h2 className="text-xl font-bold">
            {months[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h2>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={nextMonth}
          >
            Next
          </button>
        </div>
        <div className="grid grid-cols-7 gap-1 text-gray-600 font-semibold mb-2">
          {daysShort.map((day) => (
            <div key={day} className="text-center py-2">
              {day}
            </div>
          ))}
        </div>
        {renderCalendarDays()}
      </div>
    </div>

    </div>
  )
}

export default Notice