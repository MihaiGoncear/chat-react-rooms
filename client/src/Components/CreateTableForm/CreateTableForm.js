import React, { useState } from 'react';
import "./CreateTableForm.sass";
import DropDown from '../Common/DropDown/DropDown';
import Button from '../Common/Button/Button';
import { createTableStatusList } from '../../constants';
import StatusTableRadioElement from './Components/StatusTableRadioElement';

function CreateTableForm() {
  const dropDownsItems = [25, 50, 100, 150, 200, 300];

  const [tableType, setTableType] = useState('4');
  const [stakeValue, setStakeValue] = useState(dropDownsItems[0]);
  const [tableMinStatus, setTableMinStatus] = useState(createTableStatusList[0].name)

  const getStake = (e) => setStakeValue(e.target.innerText);
  const clickOnTableType = (e) => setTableType(e.target.value);
  const test = () => {
    console.log(createTableStatusList);
  }
  const toggleTableMinStatus = (element) => setTableMinStatus(element);
  
  return (
    <div className="create-table-container">
      <div className="form__full__wrapper">
        <form className="create__game__form__wrapper" id="createTableForm" action="gameTables.php" method="POST">
          <div className="quit-button js__open-create-table-modal">×</div>
          <div className="choose__player__numbers">
            <div className="choose-player-numbers-title">Alege numarul jucatorilor</div>
            <div className="form-full-wrapper-group" id="js__create-table-set-players">
              <div className="form__group__wrapper">
                <input className="four-players" onClick={clickOnTableType} type="radio" id="gametable_4" name="gametable_type" defaultChecked value="4"/>
                <label className="form__group__content__wrapper" id="js__default-table-players" htmlFor="gametable_4"><i className="checkmark"></i>
                  <div className="icon__wrapper"></div>
                  <div className="description">4 în perechi</div>
                </label>
              </div>
              <div className="form__group__wrapper">
                <input className="three-players" onClick={clickOnTableType} type="radio" id="gametable_3" name="gametable_type" value="3" />
                <label className="form__group__content__wrapper" htmlFor="gametable_3"><i className="checkmark"></i>
                  <div className="icon__wrapper"></div>
                  <div className="description">in 3</div>
                </label>
              </div>
              <div className="form__group__wrapper">
                <input className="two-players" onClick={clickOnTableType} type="radio" id="gametable_2" name="gametable_type" value="2" />
                <label className="form__group__content__wrapper" htmlFor="gametable_2"><i className="checkmark"></i>
                  <div className="icon__wrapper"></div>
                  <div className="description">
                    <img alt="no" className="responsive__image coins" src="https://belot.md/static/images/user-account/coins2.png" />
                    in 2 la monede
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div className="choose__game__settings">
            <div className="game-settings-first">
              <div className={`game__mode game-min-level ${tableType === "2" ? 'hidden' : ''}`} id="js__create-table-min-level">
                <div className="title">Status minim pentru a intra la masa</div>
                <div className="radio__wrapper">
                  {createTableStatusList.map(
                    (item, index) => <StatusTableRadioElement key={item.value} state={tableMinStatus} setState={toggleTableMinStatus} statusObj={item}/>
                  )}
                </div>
              </div>
              <div className="game__mode more-settings" id="js__create-table-more-settings">
                <div className="title-container">
                  <div className="title">Mai multe setari</div>
                  <div className="triangle">▼</div>
                </div>
              </div>
              <div className={`game__mode game-choose-stake ${tableType !== "2" ? 'hidden' : ''}`} id="js__create-table-choose-stake">
                <div className="title-container">
                  <div className="title">Alege Miza</div>
                  <img alt="no" className="responsive__image coins" src="https://belot.md/static/images/user-account/coins2.png" />
                </div>
                <DropDown state={stakeValue} setState={getStake} dropDownsItems={dropDownsItems} />
              </div>
              <div className="game__mode game-table-color" id="js__create-table-color">
                <div className="title">Culoarea mesei</div>
                <div className="radio__wrapper table-colors">
                  <div className="form__group__wrapper">
                    <input type="radio" id="gametablecolor-green" name="gametable_color" defaultChecked value="1" />
                    <label className="form__group__content__wrapper" htmlFor="gametablecolor-green"><i className="checkmark"></i>
                      <div className="table-color-div green"></div>
                    </label>
                  </div>
                  <div className="form__group__wrapper">
                    <input type="radio" id="gametablecolor-red" name="gametable_color" value="2" />
                    <label className="form__group__content__wrapper" htmlFor="gametablecolor-red"><i className="checkmark"></i>
                      <div className="table-color-div red"></div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="game-settings-second" id="js_create-table-second-column">
              <div className={`game__mode game-points-choose ${tableType !== "3" ? 'hidden' : ''}`} id="js__create-table-point">
                <div className="title">Jocul tine pana la</div>
                <div className="radio__wrapper">
                  <div className="form__group__wrapper">
                    <input type="radio" id="gamemode-51" name="gametable_points" value="51" />
                    <label className="form__group__content__wrapper" htmlFor="gamemode-51"><i className="checkmark"></i>
                      <div className="description">51 bile</div>
                    </label>
                  </div>
                  <div className="form__group__wrapper">
                    <input type="radio" id="gamemode-101" name="gametable_points" value="101" defaultChecked />
                    <label className="form__group__content__wrapper" htmlFor="gamemode-101"><i className="checkmark"></i>
                      <div className="description">101 bile</div>
                    </label>
                  </div>
                </div>
              </div>
              <div className={`checkbox__wrapper ${tableType !== "4" ? 'hidden' : ''}`} id="js__create-table-choose-places">
                <div className="game__mode">
                  <input type="checkbox" id="game-pairs-mode" name="aleator" defaultChecked />
                  <label className="checkbox-label-wrapper" htmlFor="game-pairs-mode"><i className="checkmark"></i>
                    <div className="description no-flex-display">
                      <span id="perechi-aleatorii-style">Alegerea perechilor in mod aleatoriu</span>
                      <span className="yellow"> (recomandată)</span>
                    </div>
                  </label>
                </div>
              </div>
              <div className={`checkbox__wrapper ${tableType !== "4" ? 'hidden' : ''}`} id="js__create-table-less-than-points">
                <div className="game__mode">
                  <input type="checkbox" id="game-cancel-mode" name="14puncte" />
                  <label className="checkbox-label-wrapper" htmlFor="game-cancel-mode"><i className="checkmark"></i>
                    <div className="description">Posibilitatea de a anula daca ai mai putin de 14 puncte in mana</div>
                  </label>
                </div>
              </div>
              <div id="js__daily-limit-create-table" className={`daily-limit-create-table ${tableType !== "2" ? 'hidden' : ''}`}>
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
              <div className={`checkbox__wrapper ${tableType !== "2" ? 'hidden' : ''}`} id="js__create-table-reduced-combinations">
                <div className="game__mode">
                  <input type="checkbox" id="game-combination" name="combinatii-reduse" />
                  <label className="checkbox-label-wrapper" htmlFor="game-combination"><i className="checkmark"></i>
                    <div className="description more-details">
                      <div className="reduced-combinations-span">Combinatii reduse</div>
                      <div className="details">Jucatorul va putea arata doar de 2 ori combinatii de 100 puncte sau mai mult timp de un joc</div>
                    </div>
                  </label>
                </div>
              </div>
              <div className={`checkbox__wrapper ${tableType === "2" ? 'hidden' : ''}`} id="js__create-table-password">
                <div className="game__mode">
                  <input type="checkbox" id="game-password-mode" />
                  <label className="checkbox-label-wrapper" htmlFor="game-password-mode">
                    <i className="checkmark js__toggle-password-input"></i>
                    <div className="description password">
                      <span className="js__toggle-password-input">Parola</span>
                      <input className="hidden" type="text" placeholder="Min. 3 max. 15 caractere" maxLength="15" minLength="3" name="password" />
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <Button className='common-btn-color__green' text="Crează masa" onClick={test}/>
        </form>
      </div>
    </div>
  )
}

export default CreateTableForm