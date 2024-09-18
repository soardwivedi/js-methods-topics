export async function getFiveDayWeatherData({lat= 0, long = 0}){
    try {
          if (lat !==0 && long !==0) {
          const weatherDetails = await axios.get(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&units=metric&appid={API KEY}`,
          );
          const fetchedData = weatherDetails.data;
          // console.log("fetchedData", fetchedData);
          const tempList = fetchedData.list;
          // console.log("tempList", tempList)
          const slots = [
            "00:00:00",
            "03:00:00",
            "06:00:00",
            "09:00:00",
            "12:00:00",
            "15:00:00",
            "18:00:00",
            "21:00:00"
          ];
          const currentTime = moment().format("HH:mm:ss");
          const currentMomentTime = moment(currentTime, 'HH:mm:ss')
          let nextSlot = slots.find((slot) => {
          const slotTime = moment(slot, "HH:mm:ss");
          return slotTime.isSameOrAfter(currentMomentTime);
          });

          if(!nextSlot) nextSlot = slots[0];
        //   console.log(nextSlot);

          const [hours, minutes, seconds] = nextSlot.split(':').map(Number);
          const totalSecondsInnextSlot = (hours * 3600) + (minutes * 60) + seconds;
          console.log(totalSecondsInnextSlot);

          const responseArray = tempList.filter( (element)=>{
            const data = { "dt_txt": "2023-10-18 12:00:00" };
            const dtTxt = element.dt_txt;
            const [datePart, timePart] = dtTxt.split(' ');
            const [hours, minutes, seconds] = timePart.split(':').map(Number);
            const totalSecondsIn_dt_txt = (hours * 3600) + (minutes * 60) + seconds;
            if(totalSecondsIn_dt_txt == totalSecondsInnextSlot){
              return true;
            } 
            
          }).map( (element)=>{
                 /////icon
                let iconId =  element.weather[0].icon
                let icon =" https://openweathermap.org/img/w/${iconId}.png"
                 console.log("iconId", iconId);
                //  console.log("icon", icon);
                return {
                  min_temp: element.main.temp_min,
                  max_temp: element.main.temp_max,
                  icon,
                  timestamp: element.dt
                  }
                  })

        console.log("responseArray", responseArray)
        console.log("ram")
        return responseArray;
      }
        //
    } 
    catch (error) {
        console.error(
          "Something went wrong while fetching weather detail",
          error
        );
    }
}