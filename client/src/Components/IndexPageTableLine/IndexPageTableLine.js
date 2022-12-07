import React from 'react'
import Button from '../Button/Button'
import "./IndexPageTableLine.sass"

function IndexPageTableLine(infoObj) {
	return (
		<div className="line__wrapper">
			<div className="line__item table-color-points">
				<div className="content__wrapper ui__rows">
					<div className="table" style={{'background-color': infoObj.colors === 1 ? '#9ccc65' : '#ef5350'}}></div>
					<span className="text">${infoObj.masa}</span>
				</div>
			</div>
			<div className="line__item table-options">
				<div className="content__wrapper ui__rows">
					${parseInt(infoObj.aleator) === 1 ? '<span className="enum style__2" style="background-color: #00897b">A</span>' : ''}
					${parseInt(infoObj.regula_14) === 1 ? '<span className="enum" style="background-color: #ef5350">14</span>' : ''}
					${parseInt(infoObj.combinatii) === 0 ? '<span className="enum" style="background-color: #c18c40">R</span>' : ''}
				</div>
			</div>
			<div className="line__item table-player-name">
				<div className="content__wrapper ui__rows">
					<div className="user__content ui__rows">
						<div className="icon user__level" style={{'background-image': "url('https://belot.md/img/v3/status/4.png')"}}></div>
						<div className="username sh__nav__text">MeHighG</div><span className="table-player-points">123456</span>
					</div>
				</div>
			</div>
			<div className="line__item table-player-count js__table-row-main-page">
				<div className=" content__wrapper games__content ui__rows">
					<div className="table-gamers-present js__present-players-table" data-required={infoObj.type} data-present='1'></div>
				</div>
			</div>
			<div className="line__item entergame-btn">
				<div className="content__wrapper ui__rows">
					<Button text="Intra" />
				</div>
			</div>
		</div>
	)
}

export default IndexPageTableLine