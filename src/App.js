import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import FormPopUp from './Container/FormPopUp/FormPopUp';
import { growthStages } from './Container/FormPopUp/InitData';
import { cloneDeep } from 'lodash';
import logo from './assets/icons/agencyIcon.svg';

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
            <img src={logo} className='imgSize pointerCursor' alt="logo" onClick={() => window.location.reload()}/>
          </span>
          <span className='pointerCursor'>About Us</span>
          <span className='pointerCursor'>Blog</span>
          <span className='blueBtn pointerCursor' onClick={() => handlePopUp()}>
            Book an Intro Call
          </span>
        </div>
      {state.openPopUp ? <FormPopUp /> : null}

        <>
        <div className='container'>
          <div className='intro'>
            <label className='font55px'>
              {`${"Scientific "}`}
              <span style={{ color: "#1e90ff" }}>Performance Marketing</span>
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
                <div key={stage.heading} className='box'>
                  <h5 className='bold'>{stage.heading}</h5>
                  <br />
                  <p>{stage.description}</p>
                </div>
              )
            })}
          </div>
        </div>
        </>
      </div>
    </>
  );
}

export default App;
