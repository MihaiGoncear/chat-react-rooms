import React, { useState } from 'react';
import "./CreateTableForm.sass";
import DropDown from '../Common/DropDown/DropDown';
import Button from '../Common/Button/Button';
import { createTableStatusList, createTableTableTypes } from '../../constants';
import RadioElementTableType from './Components/RadioElementTableType';
import TableColorInput from './Components/TableColorInput';
import TableTypeInput from './Components/TableTypeInput';
import sprite from "../../svgSprite.svg";
import io from "socket.io-client";

const socket = io.connect("http://localhost:3001");

function CreateTableForm({setTableToState}) {
  const dropDownsItems = [25, 50, 100, 150, 200, 300];
  const tableGamePointsArr = [{value: 51, name: "51 bile"}, {value: 101, name: "101 bile"}]

  const [tableType, setTableType] = useState(4);
  const [stakeValue, setStakeValue] = useState(false);
  const [tableMinStatus, setTableMinStatus] = useState(createTableStatusList[0].value);
  const [passwordStatus, setPasswordStatus] = useState(false);
  const [passwordValue, setPasswordValue] = useState("");
  const [randomPairsStatus, setRandomPairsStatus] = useState(true);
  const [cancelGameIfLessThan14Points, setCancelGameIfLessThan14Points] = useState(false);
  const [tableColor, setTableColor] = useState('green');
  const [tableGamePoints, setTableGamePoints] = useState(101);
  const [reducedCombinations, setReducedCombinations] = useState(false);

  const setStakeValueFunction = (e) => setStakeValue(e.target.innerText);
  const setPaswordValueFunction = (e) => setPasswordValue(e.target.value);
  const setTableMinStatusFunction = (element) => setTableMinStatus(element);
  const setTableGamePointsFunction = (element) => setTableGamePoints(element);
  const setTableColorFunction = (element) => setTableColor(element);
  const setRandomPairsStatusFunction = () => setRandomPairsStatus(!randomPairsStatus);
  const setPasswordStatusFunction = (e) => !(e.target instanceof HTMLInputElement) && setPasswordStatus(!passwordStatus);
  const setCancelGameIfLessThan14PointsFunction = () => setCancelGameIfLessThan14Points(!cancelGameIfLessThan14Points);
  const setReducedCombinationsFunction = () => setReducedCombinations(!reducedCombinations);
  let tableTypeArr = [];
  for (let i = 1; i <= tableType; i++) tableTypeArr.push(i);
  let newStateObj = {
    tableType: tableType,
    stakeValue: stakeValue,
    tableTypeArr: tableTypeArr,
    tableMinStatus: tableMinStatus,
    passwordValue: passwordValue,
    randomPairsStatus: randomPairsStatus,
    cancelGameIfLessThan14Points: cancelGameIfLessThan14Points,
    tableColor: tableColor,
    tableGamePoints: tableGamePoints,
    reducedCombinations: reducedCombinations,
  }

  const setTableTypeFunction = (element) => {
    if (element !== tableType) {
      setTableType(element);
      setStakeValue(element !== 2 ? false : dropDownsItems[0]);
      setTableMinStatus(element !== 2 ? createTableStatusList[0].value : false);
      setRandomPairsStatus(element === 4 ? true : false);
      setPasswordStatus(false);
      setPasswordValue("");
      setCancelGameIfLessThan14Points(false);
      setTableColor("green");
      setTableGamePoints(element === 3 ? 51 : 101);
      setReducedCombinations(false);
      tableTypeArr = [];
      for (let i = 1; i <= tableType; i++) tableTypeArr.push(i);
      
      newStateObj = {
        tableType: tableType,
        tableTypeArr: tableTypeArr,
        stakeValue: stakeValue,
        tableMinStatus: tableMinStatus,
        passwordValue: passwordValue,
        randomPairsStatus: randomPairsStatus,
        cancelGameIfLessThan14Points: cancelGameIfLessThan14Points,
        tableColor: tableColor,
        tableGamePoints: tableGamePoints,
        reducedCombinations: reducedCombinations,
      }
    }
  }
  const createTableFunction = () => {
    socket.emit("create_table", newStateObj);
    setTableToState(newStateObj);
  }

  return (
    <div className="create-table-container">
      <div className="form__full__wrapper">
        <div className="create__game__form__wrapper">
          <div className="quit-button js__open-create-table-modal">×</div>
          <div className="choose__player__numbers">
            <div className="choose-player-numbers-title">Alege numarul jucatorilor</div>
            <div className="form-full-wrapper-group" id="js__create-table-set-players">
              {createTableTableTypes.map((item) => <TableTypeInput key={item.value} infoTable={item} state={tableType} setState={setTableTypeFunction} />)}
            </div>
          </div>
          <div className="choose__game__settings">
            <div className="game-settings-first">
              <div className={`game__mode game-min-level ${tableType === 2 ? 'hidden' : ''}`} id="js__create-table-min-level">
                <div className="title">Status minim pentru a intra la masa</div>
                <div className="radio__wrapper">
                  {createTableStatusList.map((item) => <RadioElementTableType key={item.value} state={tableMinStatus} setState={setTableMinStatusFunction} statusObj={item}/>)}
                </div>
              </div>
              <div className="game__mode more-settings" id="js__create-table-more-settings">
                <div className="title-container">
                  <div className="title">Mai multe setari</div>
                  <div className="triangle">▼</div>
                </div>
              </div>
              <div className={`game__mode game-choose-stake ${tableType !== 2 ? 'hidden' : ''}`} id="js__create-table-choose-stake">
                <div className="title-container">
                  <div className="title">Alege Miza</div>
                  <img alt="no" className="responsive__image coins" src="https://belot.md/static/images/user-account/coins2.png" />
                </div>
                <DropDown state={stakeValue} setState={setStakeValueFunction} dropDownsItems={dropDownsItems} />
              </div>
              <div className="game__mode game-table-color" id="js__create-table-color">
                <div className="title">Culoarea mesei</div>
                <div className="radio__wrapper table-colors">
                  <TableColorInput tableInfo="green" setState={setTableColorFunction} state={tableColor} />
                  <TableColorInput tableInfo="red" setState={setTableColorFunction} state={tableColor} />
                </div>
              </div>
            </div>
            <div className="game-settings-second">
              <div className={`game__mode game-points-choose ${tableType !== 3 ? 'hidden' : ''}`} id="js__create-table-point">
                <div className="title">Jocul tine pana la</div>
                <div className="radio__wrapper">
                  {tableGamePointsArr.map((item) => <RadioElementTableType key={item.value} state={tableGamePoints} setState={setTableGamePointsFunction} statusObj={item}/>)}
                </div>
              </div>
              <div onClick={setRandomPairsStatusFunction} className={`checkbox__wrapper ${tableType !== 4 ? 'hidden' : ''}`}>
                <div className={`game__mode ${randomPairsStatus ? "active" : ''}`}>
                  <div className="checkbox-label-wrapper">
                    <i className="checkmark"></i>
                    <div className="description no-flex-display">
                      <span id="perechi-aleatorii-style">Alegerea perechilor in mod aleatoriu</span>
                      <span className="yellow"> (recomandată)</span>
                    </div>
                  </div>
                </div>
              </div>
              <div onClick={setCancelGameIfLessThan14PointsFunction} className={`checkbox__wrapper ${tableType !== 4 ? 'hidden' : ''}`}>
                <div className={`game__mode ${cancelGameIfLessThan14Points ? "active" : ''}`}>
                  <div className="checkbox-label-wrapper">
                    <i className="checkmark"></i>
                    <div className="description">Posibilitatea de a anula daca ai mai putin de 14 puncte in mana</div>
                  </div>
                </div>
              </div> 
              <div className={`daily-limit-create-table ${tableType !== 2 ? 'hidden' : ''}`}>
                <div className="info-about-statistic">
                  <div className="info-about-statistic__row">
                    <span className="info">Statistica de azi:</span>
                    <span id="js__two-players-games-stats-today">  0</span>
                    <img alt="no" className="responsive__image coins" src="https://belot.md/static/images/user-account/coins2.png" />
                  </div>
                  <div className="info-about-statistic__row">
                    <span className="info">Limita zilnica:</span>
                    <span id="js__two-players-games-stats-today"> ± 1500</span>
                    <img alt="no" className="responsive__image coins" src="https://belot.md/static/images/user-account/coins2.png" />
                  </div>
                </div>
                <div className="btn-wrapper">
                  <a href="status.php" className="btn">Mareste Limita</a>
                </div>
              </div>
              <div onClick={setReducedCombinationsFunction} className={`checkbox__wrapper ${tableType !== 2 ? 'hidden' : ''}`}>
                <div className={`game__mode ${reducedCombinations ? "active" : ''}`}>
                  <div className="checkbox-label-wrapper">
                    <i className="checkmark"></i>
                    <div className="description more-details">
                      <div className="reduced-combinations-span">Combinatii reduse</div>
                      <div className="details">Jucatorul va putea arata doar de 2 ori combinatii de 100 puncte sau mai mult timp de un joc</div>
                    </div>
                  </div>
                </div>
              </div>
              <div onClick={setPasswordStatusFunction} className={`checkbox__wrapper ${tableType === 2 ? 'hidden' : ''}`}>
                <div className={`game__mode ${passwordStatus ? "active" : ''}`}>
                  <div className="checkbox-label-wrapper">
                    <i className="checkmark js__toggle-password-input"></i>
                    <div className="description password">
                      <svg className={`svg-sprite-icon icon icon-lock`}>
                        <use xlinkHref={`${sprite}#lock`}></use>
                      </svg>
                      <span className="js__toggle-password-input">Parola</span>
                      <input className={`${!passwordStatus ? "hidden" : ''}`} type="text" onChange={setPaswordValueFunction} value={passwordStatus === false ? "" : passwordValue} placeholder="Min. 3 max. 15 caractere" maxLength="15" minLength="3" name="password" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Button className='common-btn-color__green' text="Crează masa" onClick={createTableFunction}/>
        </div>
      </div>
    </div>
  )
}

export default CreateTableForm