import React from 'react'
import styled from 'styled-components';
import './themebutton.scss'

  
function ThemeButton(props) {

  //   const button = styled.button`
  //   background: ${props => props.theme.buttonBackground};
  //   color: ${props => props.theme.buttonColor};
  //   display: block;
  //   margin-top: 24px;
  //   max-width: 100%;
  //   border: 1px solid ${props => props.theme.buttonColor};
  //   line-height: 36px;
  //   padding: 0 12px;
  //   border-radius: 4px;
  //   font-size: 14px;
  //   cursor: pointer;
  // `;

    return (
      <div>
        <label class="toggle-switch">
          <input type="checkbox" onClick={props.toggleTheme}/>
          <div class="toggle-button">
            <div class="toggle-icon"></div>
          </div>
        </label>
      </div>
    )
  }
  
  export default ThemeButton;
  