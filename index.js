//Write your code here
let attendee = {
  attendeeId: "T001",
  name: "Alice Smith",
  event: "JavaScript Conference",
  ticketType: "VIP",
  ticketPrice: 150.00
};

// Creating a function named logAttendeeName that takes the attendee object as a parameter and logs the name.
function logAttendeeName(attendeeObject) {
  console.log(attendeeObject.name);
}

// Creating a function named logTicketPrice that takes the attendee object as a parameter and logs the ticketPrice.
function logTicketPrice(attendeeObject) {
  console.log(attendeeObject.ticketPrice);
}

// Creating a function named updateTicketType that takes the attendee object and a new ticket type as parameters, and updates the ticketType property of the attendee object.
function updateTicketType(attendeeObject, newTicketType) {
  attendeeObject.ticketType = newTicketType;
}

// Creating a function named updateTicketPrice that takes the attendee object and a new ticket type as parameters, and updates the ticketPrice property of the attendee object.
function updateTicketPrice(attendeeObject, newTicketPrice) {
  attendeeObject.ticketPrice = newTicketPrice;
}

// Creating a function named removeEventProperty that takes the attendee object as a parameter and removes the event property.
function removeEventProperty(attendeeObject) {
  delete attendeeObject.event;
}

// Creating a function named addCheckedInProperty that takes the attendee object as a parameter and adds a new property checkedIn with the value true.
function addCheckedInProperty(attendeeObject) {
  attendeeObject.checkedIn = true;
}


//Needed for the tests to work. Don't modify
module.exports = {
  ...(typeof attendee !== 'undefined' && { attendee }),
  ...(typeof logAttendeeName !== 'undefined' && { logAttendeeName }),
  ...(typeof logTicketPrice !== 'undefined' && { logTicketPrice }),
  ...(typeof updateTicketType !== 'undefined' && { updateTicketType }),
  ...(typeof updateTicketPrice !== 'undefined' && { updateTicketPrice }),
  ...(typeof removeEventProperty !== 'undefined' && { removeEventProperty }),
  ...(typeof addCheckedInProperty !== 'undefined' && { addCheckedInProperty })
};