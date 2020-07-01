/* eslint-env jasmine */
/* eslint-disable no-undef */

// Note: The ES2015 Class Keyword should be used.

describe('CalendarEvent Class', () => {
  it('creates an instance via the CalendarEvent Class', () => {
    const calendarEventInstance = new CalendarEvent([]);
    expect(calendarEventInstance instanceof CalendarEvent).toBe(true);
  });

  it('contains the following instance properties when the instance is created', () => {
    const calendarEventInstance = new CalendarEvent([]);
    const instanceProperties = Object.keys(calendarEventInstance).sort();

    expect(
      instanceProperties.includes(
        'date',
        'duration',
        'title',
        'location',
        'guestList'
      )
    ).toBe(true);
  });
  it('the argument assigns the proper values to each key on the instance', () => {
    const doctorsAppointment = new CalendarEvent([
      '9/1/2024', // date
      '60 Minutes', // duration
      'Optometry Appointment', // title
      '202 Broad St, New York', // location
    ]);

    expect(doctorsAppointment instanceof CalendarEvent).toBe(true);
    expect(doctorsAppointment.date).toBe('9/1/2024');
    expect(doctorsAppointment.duration).toBe('60 Minutes');
    expect(doctorsAppointment.title).toBe('Optometry Appointment');
    expect(doctorsAppointment.location).toBe('202 Broad St, New York');
    expect(doctorsAppointment.guestList).toEqual([]);
  });

  it('contains the following methods (accessible via the prototype chain of the instance)', () => {
    const doctorsAppointment = new CalendarEvent([
      '9/1/2024',
      '60 Minutes',
      'Optometry Appointment',
      '202 Broad St, New York',
    ]);

    expect(typeof doctorsAppointment.modifyEvent).toBe('function');
    expect(doctorsAppointment.hasOwnProperty('modifyEvent')).toBe(false);
  });

  it('the modifyEvent method updates the key/value pairs passed as an argument (via an object)', () => {
    const doctorsAppointment = new CalendarEvent([
      '9/1/2024',
      '60 Minutes',
      'Optometry Appointment',
      '202 Broad St, New York',
    ]);
    doctorsAppointment.modifyEvent({ date: '12/19/2025' });
    expect(doctorsAppointment.date).toBe('12/19/2025');
  });

  it('the modifyEvent method can update multiple properties', () => {
    const doctorsAppointment = new CalendarEvent([
      '9/1/2024',
      '60 Minutes',
      'Optometry Appointment',
      '202 Broad St, New York',
    ]);

    doctorsAppointment.modifyEvent({
      duration: '30 Minutes',
      title: 'Dental Appointment',
      location: '16th, Brooklyn NY',
    });

    expect(doctorsAppointment.duration).toBe('30 Minutes');
    expect(doctorsAppointment.title).toBe('Dental Appointment');
    expect(doctorsAppointment.location).toBe('16th, Brooklyn NY');
  });

  it('the modifyGuestList method adds guest if their name is not present and removes a guest if their name is present (do not worry about duplicate names)', () => {
    const doctorsAppointment = new CalendarEvent([
      '9/1/2024',
      '60 Minutes',
      'Optometry Appointment',
      '202 Broad St, New York',
      ['Mom'],
    ]);

    const workMeeting = new CalendarEvent([
      '10/10/2024',
      '20 Minutes',
      'Code Review',
      '22 Ravine Court, Oakland CA',
      ['Kate', 'Dan'],
    ]);
    doctorsAppointment.modifyGuestList(['Dad', 'Significant Other']);
    expect(doctorsAppointment.guestList.sort()).toEqual(
      ['Dad', 'Mom', 'Significant Other'].sort()
    );
    workMeeting.modifyGuestList(['Dan']);
    expect(workMeeting.guestList.sort()).toEqual(['Kate']);
  });
});

describe('Calendar Class', () => {
  it('creates an instance of the Calendar Class, the instance has an events and name property', () => {
    const personalCalendar = new Calendar('Personal Calendar');
    expect(personalCalendar instanceof Calendar).toBe(true);
    expect(personalCalendar.name).toBe('Personal Calendar');
    expect(personalCalendar.events).toEqual([]);
  });

  it('every instance of the Calendar class has 3 class methods (via the prototype chain), `listEvents`, and `addEvent`', () => {
    const personalCalendar = new Calendar('Personal Calendar');

    expect(typeof personalCalendar.listEvents).toBe('function');

    expect(typeof personalCalendar.addEvent).toBe('function');

    expect(personalCalendar.hasOwnProperty('listEvents')).toBe(false);

    expect(personalCalendar.hasOwnProperty('addEvent')).toBe(false);
  });

  it("the `addEvent` method creates a new `CalendarEvent` instance and adds the instance the Calendar's events property", () => {
    const personalCalendar = new Calendar('Personal Calendar');

    personalCalendar.addEvent([
      '9/1/2024',
      '60 Minutes',
      'Optometry Appointment',
      '202 Broad St, New York',
    ]);
    expect(personalCalendar.events[0] instanceof CalendarEvent).toBe(true);
  });

  it('the `listEvents` method lists all the event titles that are in the events property', () => {
    const personalCalendar = new Calendar('Personal Calendar');

    personalCalendar.addEvent([
      '9/1/2024',
      '60 Minutes',
      'Optometry Appointment',
      '202 Broad St, New York',
    ]);

    personalCalendar.addEvent([
      '10/10/2024',
      '20 Minutes',
      'Code Review',
      '22 Ravine Court, Oakland CA',
      ['Kate', 'Dan'],
    ]);

    expect(personalCalendar.listEvents()).toBe(
      'Optometry Appointment, Code Review'
    );
  });
});

describe('BirthdayEvent Class', () => {
  it('is a sub class (extended from the CalendarEvent Class)', () => {
    const amandasBirthday = new BirthdayEvent([
      '10/2/1995',
      'All Day',
      'Amandas Birthday',
      'Chicago',
    ]);
    expect(amandasBirthday instanceof BirthdayEvent).toBe(true);
    expect(CalendarEvent.prototype.isPrototypeOf(amandasBirthday)).toBe(true);

    /*

    Here is a link to the isPrototypeOf method: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isPrototypeOf
    The test is checking that the amandasBirthday instance has the CalendarEvent.prototype object in its prototype chain since the BirthdayEvent
    class is an extension (sub class) of the CalendarEvent Class.
    
    */
  });

  it('has the same properties as CalendarEvent', () => {
    const amandasBirthday = new BirthdayEvent([
      '10/2/1995',
      'All Day',
      'Amandas Birthday',
      'Chicago',
    ]);
    expect(amandasBirthday.date).toBe('10/2/1995');
    expect(amandasBirthday.duration).toBe('All Day');
    expect(amandasBirthday.title).toBe('Amandas Birthday');
    expect(amandasBirthday.location).toBe('Chicago');
    expect(amandasBirthday.guestList).toEqual([]);
  });

  it('has an ageOnBirthdate property (the age the person is turning), the ageOnBirthdate is the last value in the array argument', () => {
    const amandasBirthday = new BirthdayEvent([
      '10/2/1995',
      'All Day',
      'Amandas Birthday',
      'Chicago',
      [],
      24,
    ]);

    expect(amandasBirthday.ageOnBirthdate).toBe(24);
  });

  it('has an isGiftReady method that has a default value set to false', () => {
    const amandasBirthday = new BirthdayEvent([
      '10/2/1995',
      'All Day',
      'Amandas Birthday',
      'Chicago',
      [],
      24,
    ]);

    expect(amandasBirthday.isGiftReady).toBe(false);
  });
});
