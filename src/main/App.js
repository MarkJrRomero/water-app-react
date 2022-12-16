import { useState, useEffect } from 'react';

function App() {

  // eslint-disable-next-line react-hooks/rules-of-hooks
let [data, setData] = useState([]);
let [time, setTime] = useState(true);

const getData = async () =>{
  try {
   
    const res = await fetch(`http://api.weatherunlocked.com/api/current/51.50,-0.12?app_id=9b5d9334&app_key=9b552c92c82a920b8f88278cd6528f76`);

    const json = await res.json();
    setData(json);
  } catch (error) {
  }
}

// eslint-disable-next-line react-hooks/rules-of-hooks
useEffect(() => {
        
  getData();
  
  }, []);

  console.log(data);

  return (
    <>
        {time === true &&
          <>
          <div className="App">
            <header className="day">

            <span className= "text-day" >Good Morning</span>
            <div className="sun">
              <div id = "cloud2"><span class='shadow2'></span></div>
              <div id = "cloud"><span class='shadow'></span></div>
            </div>
            <span className= "temprature" >20°</span>


            <div className='wave' style={{height: "80px", overflow: "hidden"}} ><svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: "100%", width: "100%"}}><path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{stroke: "none", fill: "#FFF"}}></path></svg></div>
            </header>
         
 
              
         
          </div>
          </>
        }

        {time === false &&
          <>
          <div className="App-night">
          
            <div className="sun-night">
            </div>

            <span className= "temprature-night" >{data.feelslike_c}°</span>

          </div>
          </>
        }
    </>
  );
}

export default App;
