import React,{useEffect} from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Headersection from './components/Headersection';
import Slidersection from './components/Slidersection';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Gamesfirst from './components/Gamesfirst';
import Levelup from './components/Levelup';
import Domain from './components/Domain';
import Arich from './components/Arich';
import Ourteam from './components/Ourteam';
import Whatnext from './components/Whatnext';
import Myroadmap from './components/Myroadmap';
import Formsection from './components/Formsection';
import Myfooter from './components/Myfooter';
import Backtotop from './components/Backtotop';
import Loader from './components/Loader';
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);
  return (
    <>
      <div className='bg-black overflow-hidden'>
        <Loader />
        <Headersection />
        <Slidersection />
        <Gamesfirst />
        <Levelup />
        <Domain />
        <Arich />
        <Ourteam />
        <Whatnext />
        <Myroadmap />
        <Formsection />
        <Myfooter />
        <Backtotop />
      </div>
    </>
  );
}

export default App;
