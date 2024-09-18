// const dateString = "15/08/2024";

// // Split the date string and rearrange it to a format that the Date object can understand (MM/DD/YYYY)
// const parts = dateString.split('/');
// const formattedDate = `${parts[1]}/${parts[0]}/${parts[2]}`;

// // Create a new Date object
// const date = new Date(formattedDate);
// console.log("date is", date)
// // Array of day names
// const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// // Get the day of the week
// const dayOfWeek = daysOfWeek[date.getDay()];

// console.log(`The day of the week for ${dateString} is ${dayOfWeek}.`);


// function convertToUnixTime(job_date, job_start_time) {
//     // Split the job_date into day, month, and year
//     console.log(job_date, job_start_time);
//     const [day, month, year] = job_date.split('/');
  
//     // Combine date and time into a single string in a format that Date can parse
//     const dateTimeString = `${year}-${month}-${day} ${job_start_time}`;
//   console.log("dateTimeString", dateTimeString);
//     // Create a Date object from the combined string
//     const dateObject = new Date(dateTimeString);
  
//     // Get the Unix time in milliseconds
//     const unixTime = dateObject.getTime();
//   console.log(unixTime);
//     return unixTime;
//   }
  
//   const job_date = "16/08/2024";
//   const job_start_time = "10 AM";
  
//   const unixTime = convertToUnixTime(job_date, job_start_time);
  
//   console.log(`Unix time for ${job_date} ${job_start_time}: ${unixTime}`);
  

function convertToUnixTime(job_date, job_start_time) {
    // Split the job_date into day, month, and year
    const [day, month, year] = job_date.split('/');
  
    // Convert job_start_time to 24-hour format
    const [time, modifier] = job_start_time.split(' ');
    let [hours, minutes] = time.split(':');
  
    // If minutes are not provided, set it to 00
    if (!minutes) {
      minutes = '00';
    }
  
    if (modifier === 'PM' && hours !== '12') {
      hours = parseInt(hours, 10) + 12;
    }
    if (modifier === 'AM' && hours === '12') {
      hours = '00';
    }
  
    // Construct the date-time string in ISO format
    const dateTimeString = `${year}-${month}-${day}T${hours}:${minutes}:00`;
  
    // Create a Date object from the combined string
    const dateObject = new Date(dateTimeString);
  
    // Get the Unix time in milliseconds
    // const unixTime = dateObject.getTime();
    const unixTime = Math.floor(dateObject.getTime() / 1000);
  
    return unixTime;
  }
  
  const job_date = "16/08/2024";
  const job_start_time = "10:30  AM";
  
  const unixTime = convertToUnixTime(job_date, job_start_time);
  
  console.log(`Unix time for ${job_date} ${job_start_time}: ${unixTime}`);
  