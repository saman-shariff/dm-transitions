import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { cloneDeep } from 'lodash';

import FormPopUp from './Container/FormPopUp/FormPopUp';
import { growthStages } from './Container/FormPopUp/InitData';

/**Icons below */
// import logo from './assets/icons/agencyIcon.svg';
import background from "./assets/icons/analyBackground.png";


function App() {
  const [state, setState] = useState({
    openPopUp: false
  });

  const handlePopUp = () => {
    const modifiedState = cloneDeep(state);
    modifiedState.openPopUp = !modifiedState.openPopUp;
    setState((prev) => ({
      ...prev,
      ...modifiedState
    }));
  }

  return (
    <>
      <div className="app fontFamily">
        <div className="navBar navBarDisplay">
          <span>
            <span className='greenIcon'>Perfor AI</span>
            {/* <img src={logo} className='imgSize pointerCursor' alt="logo" onClick={() => window.location.reload()} /> */}
          </span>
          <span className='pointerCursor'>About Us</span>
          <span className='pointerCursor'>Blog</span>
          <span className='bookBtn pointerCursor' onClick={() => handlePopUp()}>
            Book an Intro Call
          </span>
        </div>
        {state.openPopUp ?
          <FormPopUp
            closePopup={() => handlePopUp()}
          /> : null}

        <>
          <div className='container'>
            <div className='intro'>
              <label className='font55px mb-3'>
                {`${"Scientific "}`}
                <span style={{ color: "rgb(0, 194, 139)" }}>Performance Marketing</span>
                <br />Agency for SaaS Companies
              </label>
              <br />
              <label className='font18px'>
                We plan, execute, and manage integrated digital marketing campaigns
                across organic,
                <br />
                paid, and social channels that grow your marketing and sales pipeline.
              </label>
            </div>
          </div>
          {/* <div>ANIMATION 1 VIDEO?</div>
        <div>ANIMATION 2 SLIDER?</div> */}
          <div className='greyBg'>
            <h1 className='lineHeight'>We've developed a Framework
              <br />
              that drives conversions!
            </h1>
            <h2 className='txtGradient lineHeight my-4'>
              The Three Stages of SaaS Growth
            </h2>
            <div className='d-flex flex-row justify-content-between'>
              {growthStages.map((stage) => {
                return (
                  <div key={stage.heading} className='boxApp'>
                    <h5 className='bold'>{stage.heading}</h5>
                    <br />
                    <p className='para'>{stage.description}</p>
                  </div>
                )
              })}
            </div>
          </div>

          <div
            className='article'
            style={{ backgroundImage: `url(${background})` }}>
            <h5 className='font55px whiteFont mb-0'>Never miss anything again!</h5>
            <label className='whiteFont mb-3'>We partner with you and act as the in-house marketer of your dreams,
              <br />
              ensuring that every SEO and PPC campaign we launch results in a remarkable success.
            </label>

            <h4 className='font36px whiteFont mb-0'>We would love to work with you!</h4>
            <span className='whiteBtn pointerCursor' onClick={() => handlePopUp()}>
              Book an Intro Call
            </span>
          </div>


          <div className='greyBg'>
            <h5>Our clients' list revealing soon...</h5>
          </div>

          <div className='d-flex justify-content-between' style={{ padding: "5% 10%" }}>
            <div className=''>
              <div className='greenIcon'>Perfor AI</div>
              {/* DM Transitions © Copyright 2022 */}
              <br />
              Contact - mailsformansoor@gmail.com
            </div>
            <div className='footer'>
              <h2>Coming soon</h2>
              <li>About Us</li>
              <li>Blog</li>
              <li>Results</li>
            </div>
          </div>
        </>
      </div>
    </>
  );
}

export default App;
