import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import "../App.css";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()
const Home = () => {
  return (
    <div>
        <Navbar/>
        <img src="https://img.freepik.com/free-psd/stay-home-shop-online-banner-template_23-2148578570.jpg?w=1480&t=st=1687239962~exp=1687240562~hmac=8777372d79351b5c905a7cceec5a2ce79cca4934a28124eefbffa762b7cbe794" alt="" />
        <img src="https://img.freepik.com/free-psd/shop-now-online-fashion-horizontal-banner_23-2148565186.jpg?w=1480&t=st=1687240299~exp=1687240899~hmac=aebf9760cd7a3b4a3c3464de2366b062b8cd1bd0f9c5499d41e8121aefcb8afd" alt="" />
        <button onClick={()=>{
           toast('Hello Geeks')
        }}>Click Me</button>
        <Footer/>
    </div>
  )
}

export default Home