import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { useState } from 'react';

export const AdminCalendar = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    { id: '1', title: 'Assosiacte Engineer', date: '2024-04-01' },
    { id: '2', title: 'Assosiacte Engineer', date: '2024-04-01' },
    { id: '3', title: 'Dev Ops Engineer', date: '2024-04-02' },
    { id: '4', title: 'Assosiacte Engineer', date: '2024-05-01' },
    { id: '5', title: 'Dev Ops Engineer', date: '2024-05-02' },
  ];

  const handleEventClick = (clickInfo) => {
    setSelectedEvent(clickInfo.event);
  };

  const handleClosePopup = () => {
    setSelectedEvent(null);
  };

  const dayCellContent = (args) => {
    let date = new Date();
    if (
      args.date.getFullYear() === date.getFullYear() &&
      args.date.getMonth() === date.getMonth() &&
      args.date.getDate() === date.getDate()
    ) {
      return <div className="current-day">{args.date.getDate()}</div>;
    } else {
      return args.date.getDate();
    }
  };

  return (
    <div>
      <FullCalendar
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: '',
          center: 'title',
          right: 'prev,next',
        }}
        events={events}
        dayCellContent={dayCellContent}
        eventClick={handleEventClick}
      />
      {selectedEvent && (
        <div
          id="popup-modal"
          tabIndex={-1}
          className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full flex justify-center items-center"
        >
          <div className="relative p-4 w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow">
              <button
                type="button"
                onClick={() => setSelectedEvent(null)}
                className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                data-modal-hide="popup-modal"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <div className="p-8 md:p-10 text-center">
                <h1 className="secondary-heading">
                  <span>Test Name: </span>
                  {selectedEvent.title}
                </h1>
                <h2 className="sub-title-text px-0">
                  <span>Start Date: </span>
                  {selectedEvent.start.toLocaleDateString()}
                </h2>
                <div className="flex">
                  <button
                    data-modal-hide="popup-modal"
                    type="button"
                    className="btn primary"
                  >
                    Edit Test
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
