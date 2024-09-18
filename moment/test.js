// import moment from "moment";

const moment=require("moment");
// const ObjectId=require('bson')

let peoples = [
  {
    _id: '66adc2a979c356ad91c516ad',
    name: 'Rajiv1',
    role: 'Techanician',
    type: 'Employee',
    // manager: new ObjectId('66adc1cb79c356ad91c516ab'),
    email: 'rajiv2@gmail.com',
    phone: 6477871167,
    prefered_communication: 'Phone',
    skill_type: 'Driver',
    skill_level: 'Master',
    people_cost: 50,
    cost_basis: 'Hourly',
    // shift: new ObjectId('66a87dc26bc8788a6f7018e9'),
    weekly_holidays: ['Friday', 'Saturday'],
    dispatch_location: 'BO Toronto',
    country: 'Canada',
    shiftDetails: {
      // _id: new ObjectId('66a87dc26bc8788a6f7018e9'),
      shift_name: 'Morning',
      shift_start_time: '7:00 AM',
      shift_end_time: '4:00 PM'
    }
  }
]

const dateFormat = "DD-MMMM-YYYY";
const timeFormat = "hh:mm A";

let job_date = "14-August-2024";
let job_start_time = "07:30 AM";

const jobStartDateTime = moment(`${job_date} ${job_start_time}, ${dateFormat} ${timeFormat}`).utc();

console.log("🚀 ~ jobStartDateTime:", jobStartDateTime)
// Add job duration to calculate job end time
const jobEndDateTime = jobStartDateTime.clone().add(Number(5), 'hours').utc();
console.log("🚀 ~ jobEndDateTime:", jobEndDateTime)


const availablePeople = peoples.filter(person => {
  if (!person.shiftDetails) {
    return false; // If there are no shift details, the person is not available
  }

  const shiftStartTime = moment(`${job_date} ${person.shiftDetails.shift_start_time}, ${dateFormat} ${timeFormat}`).utc();
  const shiftEndTime = moment(`${job_date} ${person.shiftDetails.shift_end_time}, ${dateFormat} ${timeFormat}`).utc();
  console.log("🚀 ~ availablePeople ~ shiftStartTime:", shiftStartTime)
  console.log("🚀 ~ availablePeople ~ shiftEndTime:", shiftEndTime)

  // Check if the job start and end times are within the person's shift times
  return jobStartDateTime.isBetween(shiftStartTime, shiftEndTime, null, '[]') &&
    jobEndDateTime.isBetween(shiftStartTime, shiftEndTime, null, '[]');
});

console.log(availablePeople)