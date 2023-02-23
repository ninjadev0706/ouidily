import React, { useState, useEffect } from 'react';
import ReactModal from 'react-modal';
import AboutToken from "../components/AboutToken";
import Benefit from "../components/Benefit";
import InsideBox from "../components/InsideBox";
import Footer from "../components/Footer";
import PurchaseToken from "../components/PurchaseToken";
import CheckAgeModal from "../components/CheckAgeModal";

const Home = () => {
  (ReactModal).defaultStyles.overlay.background = 'linear-gradient(45deg, #0c0b0cad, #28253075)';
  (ReactModal).defaultStyles.overlay.zIndex = '10000';

  const customStyles = {
    body: {
      overflow: 'hidden',
    },
    content: {
      maxWidth: '1100px',
      maxHeight: 'calc(100% - 230px)',
      padding: '0',
      border: 'none',
      display: 'flex',
      margin: 'auto',
      background: 'transparent',
    },
  };

  const [isShow, setModal] = useState(false);
  const closeModal = () => {
    setModal(false)
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setModal(true);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [])

  return (
    <div className="">
      <PurchaseToken />
      <Benefit />
      <InsideBox />
      <AboutToken />
      <Footer />
      <ReactModal data-aos="zoom-in" data-aos-duration="2000" isOpen={isShow} onRequestClose={closeModal} style={customStyles} ariaHideApp={false}>
        <CheckAgeModal closeModal={closeModal} />
      </ReactModal>
    </div>
  );
};

export default Home;
