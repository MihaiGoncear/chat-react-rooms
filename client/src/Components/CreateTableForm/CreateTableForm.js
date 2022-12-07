import React from 'react'
import "./CreateTableForm.sass"

function CreateTableForm() {
  return (
    <div className="create-table-container">
      <div className="form__full__wrapper">
        <form className="create__game__form__wrapper" id="createTableForm" action="gameTables.php" method="POST">
          <input type="hidden" name="createNewTable" value="1" />
          <div className="quit-button js__open-create-table-modal">×</div>
          <div className="choose__player__numbers">
            <div className="choose-player-numbers-title">Alege numarul jucatorilor</div>
            <div className="form-full-wrapper-group" id="js__create-table-set-players">
              <div className="form__group__wrapper">
                <input className="four-players" type="radio" id="gametable_4" name="gametable_type" checked="checked" value="4" />
                <label className="form__group__content__wrapper" id="js__default-table-players" for="gametable_4"><i className="checkmark"></i>
                  <div className="icon__wrapper">
                    {/* <svg className="svg-sprite-icon icon icon-mese_4">
                      <use xlink:href="static/images/svg/symbol/sprite.svg#mese_4"></use>
                    </svg> */}
                  </div>
                  <div className="description">4 în perechi</div>
                </label>
              </div>
              <div className="form__group__wrapper">
                <input className="three-players" type="radio" id="gametable_3" name="gametable_type" value="3" />
                <label className="form__group__content__wrapper" for="gametable_3"><i className="checkmark"></i>
                  <div className="icon__wrapper">
                    {/* <svg className="svg-sprite-icon icon icon-mese_3">
                      <use xlink:href="static/images/svg/symbol/sprite.svg#mese_3"></use>
                    </svg> */}
                  </div>
                  <div className="description">in 3</div>
                </label>
              </div>
              <div className="form__group__wrapper">
                <input className="two-players" type="radio" id="gametable_2" name="gametable_type" value="2" />
                <label className="form__group__content__wrapper" for="gametable_2"><i className="checkmark"></i>
                  <div className="icon__wrapper">
                    {/* <svg className="svg-sprite-icon icon icon-mase_1vs1">
                      <use xlink:href="static/images/svg/symbol/sprite.svg#mase_1vs1"></use>
                    </svg> */}
                  </div>
                  <div className="description">
                    <img alt="no" className="responsive__image coins" src="static/images/user-account/coins2.png" />
                    in 2 la monede
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div className="choose__game__settings">
            <div className="game-settings-first">
              <div className="game__mode game-min-level" id="js__create-table-min-level">
                <div className="title">Status minim pentru a intra la masa</div>
                <div className="radio__wrapper">
                  <div className="form__group__wrapper">
                    <input type="radio" id="gamelevel-0" name="gametable_level" value="0" checked="checked" />
                    <label className="form__group__content__wrapper" for="gamelevel-0"><i className="checkmark"></i>
                      <div className="description">Pentru toti</div>
                    </label>
                  </div>
                  <div className="form__group__wrapper">
                    <input type="radio" id="gamelevel-2" name="gametable_level" value="2" />
                    <label className="form__group__content__wrapper" for="gamelevel-2"><i className="checkmark"></i>
                      <div className="level-img">
                        <img alt="no" className="responsive__image" src="img/v3/status_hq/2.png" />
                      </div>
                      <div className="description">Amator</div>
                    </label>
                  </div>
                  <div className="form__group__wrapper">
                    <input type="radio" id="gamelevel-4" name="gametable_level" value="4" />
                    <label className="form__group__content__wrapper" for="gamelevel-4"><i className="checkmark"></i>
                      <div className="level-img">
                        <img alt="no" className="responsive__image" src="img/v3/status_hq/4.png" />
                      </div>
                      <div className="description">Profesionist</div>
                    </label>
                  </div>
                  <div className="form__group__wrapper">
                    <input type="radio" id="gamelevel-6" name="gametable_level" value="6" />
                    <label className="form__group__content__wrapper" for="gamelevel-6"><i className="checkmark"></i>
                      <div className="level-img">
                        <img alt="no" className="responsive__image" src="img/v3/status_hq/6.png" />
                      </div>
                      <div className="description">Master</div>
                    </label>
                  </div>
                </div>
              </div>
              <div className="game__mode more-settings" id="js__create-table-more-settings">
                <div className="title-container">
                  <div className="title">Mai multe setari</div>
                  <div className="triangle">▼</div>
                </div>
              </div>
              <div className="game__mode game-choose-stake hidden" id="js__create-table-choose-stake">
                <div className="title-container">
                  <div className="title">Alege Miza</div>
                  <img alt="no" className="responsive__image coins" src="static/images/user-account/coins2.png" />
                </div>
                <div className="dropdown-component js__dropdown">
                  <div className="dropdown-head">
                    <div className="choosed-item" id="mizaMese2">25</div>
                    <div className="triangle">▼</div>
                  </div>
                  <div className="dropdown-items">
                    <div className="dropdown-item active" style={{"padding-left": "25px"}}>25</div>
                    <div className="dropdown-item " style={{"padding-left": "25px"}}>50</div>
                    <div className="dropdown-item " style={{"padding-left": "25px"}}>100</div>
                    <div className="dropdown-item " style={{"padding-left": "25px"}}>150</div>
                    <div className="dropdown-item " style={{"padding-left": "25px"}}>200</div>
                    <div className="dropdown-item " style={{"padding-left": "25px"}}>300</div>
                  </div>
                  <input type="hidden" name="miza" />
                </div>
              </div>
              <div className="game__mode game-table-color" id="js__create-table-color">
                <div className="title">Culoarea mesei</div>
                <div className="radio__wrapper table-colors">
                  <div className="form__group__wrapper">
                    <input type="radio" id="gametablecolor-green" name="gametable_color" checked="checked" value="1" />
                    <label className="form__group__content__wrapper" for="gametablecolor-green"><i className="checkmark"></i>
                      <div className="table-color-div green"></div>
                    </label>
                  </div>
                  <div className="form__group__wrapper">
                    <input type="radio" id="gametablecolor-red" name="gametable_color" value="2" />
                    <label className="form__group__content__wrapper" for="gametablecolor-red"><i className="checkmark"></i>
                      <div className="table-color-div red"></div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="game-settings-second" id="js_create-table-second-column">
              <div className="game__mode game-points-choose hidden" id="js__create-table-point">
                <div className="title">Jocul tine pana la</div>
                <div className="radio__wrapper">
                  <div className="form__group__wrapper">
                    <input type="radio" id="gamemode-51" name="gametable_points" value="51" />
                    <label className="form__group__content__wrapper" for="gamemode-51"><i className="checkmark"></i>
                      <div className="description">51 bile</div>
                    </label>
                  </div>
                  <div className="form__group__wrapper">
                    <input type="radio" id="gamemode-101" name="gametable_points" value="101" checked="checked" />
                    <label className="form__group__content__wrapper" for="gamemode-101"><i className="checkmark"></i>
                      <div className="description">101 bile</div>
                    </label>
                  </div>
                </div>
              </div>
              <div className="checkbox__wrapper" id="js__create-table-choose-places">
                <div className="game__mode">
                  <input type="checkbox" id="game-pairs-mode" name="aleator" checked="checked" />
                  <label className="checkbox-label-wrapper" for="game-pairs-mode"><i className="checkmark"></i>
                    <div className="description no-flex-display">
                      <span id="perechi-aleatorii-style">Alegerea perechilor in mod aleatoriu</span>
                      <span className="yellow"> (recomandată)</span>
                    </div>
                  </label>
                </div>
              </div>
              <div className="checkbox__wrapper" id="js__create-table-less-than-points">
                <div className="game__mode">
                  <input type="checkbox" id="game-cancel-mode" name="14puncte" />
                  <label className="checkbox-label-wrapper" for="game-cancel-mode"><i className="checkmark"></i>
                    <div className="description">Posibilitatea de a anula daca ai mai putin de 14 puncte in mana</div>
                  </label>
                </div>
              </div>
              <div id="js__daily-limit-create-table" className="daily-limit-create-table hidden">
                <div className="info-about-statistic">
                  <div className="info-about-statistic__row">
                    <span className="info">Statistica de azi:</span>
                    <span id="js__two-players-games-stats-today">  0</span>
                    <img alt="no" className="responsive__image coins" src="static/images/user-account/coins2.png" />
                  </div>
                  <div className="info-about-statistic__row">
                    <span className="info">Limita zilnica:</span>
                    <span id="js__two-players-games-stats-today"> ± 1500</span>
                    <img alt="no" className="responsive__image coins" src="static/images/user-account/coins2.png" />
                  </div>
                </div>
                <div className="btn-wrapper">
                  <a href="status.php" className="btn">Mareste Limita</a>
                </div>
              </div>
              <div className="checkbox__wrapper hidden" id="js__create-table-reduced-combinations">
                <div className="game__mode">
                  <input type="checkbox" id="game-combination" name="combinatii-reduse" />
                  <label className="checkbox-label-wrapper" for="game-combination"><i className="checkmark"></i>
                    <div className="description more-details">
                      <div className="reduced-combinations-span">Combinatii reduse</div>
                      <div className="details">Jucatorul va putea arata doar de 2 ori combinatii de 100 puncte sau mai mult timp de un joc</div>
                    </div>
                  </label>
                </div>
              </div>
              <div className="checkbox__wrapper" id="js__create-table-password">
                <div className="game__mode">
                  <input type="checkbox" id="game-password-mode" />
                  <label className="checkbox-label-wrapper" for="game-password-mode">
                    <i className="checkmark js__toggle-password-input"></i>
                    <div className="description password">
                      {/* <svg className="svg-sprite-icon icon icon-lock js__toggle-password-input">
                        <use xlink:href="static/images/svg/symbol/sprite.svg#lock"></use>
                      </svg> */}
                      <span className="js__toggle-password-input">Parola</span>
                      <input className="hidden" type="text" placeholder="Min. 3 max. 15 caractere" maxlength="15" minlength="3" name="password" />
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="create-table-btn" role="button">
            <div className="create" onclick="createNewTableAction()">Creează masa</div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateTableForm