const cityName = document.getElementById('cityname');

const submitBtn = document.getElementById('submitBtn')
const city_name = document.getElementById('city_name1');
const temp_status = document.getElementById('temp_status');
const temp = document.getElementById('temp');

submitBtn.addEventListener('click', async(e) => {
    e.preventDefault();
    
    let cityVal = cityName.value;
    if(cityVal === ""){
        city_name.innerText = `Please write Name`;
    }else{
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=dccad58bc48895c99c464cd2c00635cc`;
            const resp = await fetch(url);
            const resJson = await resp.json(resp);
            const arrData = [resJson]

            city_name.innerText = arrData[0].name;
            temp_status.innerText = arrData[0].weather[0].main;
            temp.innerText = arrData[0].main.temp;
            // console.log(newData);
            // console.log(newCityName);
            // console.log(newData1);
            
        } catch (error) {
        city_name.innerText = `Please Enter Complete`;
            
        }

    }

})