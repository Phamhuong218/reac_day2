
import './App.css';
import { useState } from "react";
// import Header from './Header'
// import Body from './Body'
// import Footer from './Footer'
function App() {
  // return (
  //   <div className="App">
  //     <Header />
  //     <Body />
  //     <Footer />
  //   </div>
  

  // HW: day 3: 19/11/2022 - Use state react
  const [color, setColor] = useState('https://porsche-vietnam.vn/wp-content/uploads/2021/01/j1-taycan-modelimage-sideshot.png?fbclid=IwAR3JszWBjqGQS13YQlKfhrwQUQD-c4lKzthg_kSO36nFT8T-33Da0Ku1M5c')

  return (
  <>
    <img src={color} alt='Porsche'/>
    <div class='btns'>
      <button onClick={()=>setColor('https://porsche-vietnam.vn/wp-content/uploads/2021/01/j1-taycan-modelimage-sideshot.png?fbclid=IwAR3JszWBjqGQS13YQlKfhrwQUQD-c4lKzthg_kSO36nFT8T-33Da0Ku1M5c')}>Pink</button>
      <button onClick={()=>setColor('https://porsche-vietnam.vn/wp-content/uploads/2020/08/j1-taycan-4s-modelimage-sideshot-1600x900.png?fbclid=IwAR0kZGzLBTaTBUXRFjsLYANVUEdF2VPz6nFVYHnpHi5USpe5hDKOFD3sJ_A')}>Blue</button>
    </div>
  </>
  // 
  //  
)
}

export default App;
