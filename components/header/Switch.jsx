import React from 'react';
import PropTypes from 'prop-types';

function Switch({ dark, setDark }) {
  return (
    <button type="button" className="switch" onClick={() => setDark(!dark)}>
      <div className="dark">
        <i
          className="fas fa-moon"
          style={{ fontSize: 14, color: '#fff' }}
        />
      </div>
      <div className="light">
        <i
          className="fas fa-sun"
          style={{ fontSize: 14, color: '#fff' }}
        />
      </div>
      <div
        className="slider"
      />
      <style jsx>{`
        .switch {
            box-sizing: border-box;
            display: flex;
            position: relative;
            width: 60px;
            height: 30px;
            border-radius: 20px;
            background: #000;
            outline: none;
            cursor: pointer;
        }

        .slider {
            position: absolute;
            top: 0;
            left: 0;
            box-sizing: border-box;
            height: 28px;
            width: 28px;
            border-radius: 14px;
            background: #fff;
            outline: none;
            border: 3px #000 solid;
            transition: transform 400ms;
            transform: translateX(${dark ? '0' : '30px'});
        }

        .dark {
            display: absolute;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 30px;
            right: 0;
        }

        .light {
            display: absolute;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 30px;
            left: 0;
        }
      `}
      </style>
    </button>
  );
}

Switch.propTypes = {
  dark: PropTypes.bool.isRequired,
  setDark: PropTypes.func.isRequired,
};

export default Switch;
