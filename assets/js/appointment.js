var MOCK_CALENDARS = [
  {
    id: '1',
    name: 'Personal',
    color: '#ffffff',
    bgColor: '#9e5fff',
    dragBgColor: '#9e5fff',
    borderColor: '#9e5fff'
  },
  {
    id: '2',
    name: 'Work',
    color: '#ffffff',
    bgColor: '#00a9ff',
    dragBgColor: '#00a9ff',
    borderColor: '#00a9ff'
  }
];


$(document).ready(function(){
  PageMenuActivator("appointment");
    const calendar = new tui.Calendar('#calendar', {
        defaultView: 'week',
        useCreationPopup: true,
        useDetailPopup: true,
        taskView: false,
        milestoneView: false,
        scheduleView: ['time'],
        timezone: {
            zones: [
              {
                timezoneName: 'Asia/Kolkata',
                displayLabel: 'IST',
                tooltip: 'Kolkata',
              },
              {
                timezoneName: 'America/Los_Angeles',
                displayLabel: 'PT',
                tooltip: 'Los Angeles',
              },
            ],
          },
        calendars: MOCK_CALENDARS,
        // week: {
        //   showTimezoneCollapseButton: true,
        // },
      });

      var schedules = [
        {
            id: '1',
            calendarId: '1',
            title: 'Event 1',
            category: 'time',
            dueDateClass: '',
            start: '2024-04-10T10:00:00',
            end: '2024-04-10T12:00:00'
        },
        {
            id: '2',
            calendarId: '1',
            title: 'Event 2',
            category: 'time',
            dueDateClass: '',
            start: '2024-04-11T14:00:00',
            end: '2024-04-11T16:00:00'
        }
    ];

    calendar.createSchedules(schedules);
});