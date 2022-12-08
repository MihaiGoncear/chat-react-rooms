import { useEffect, useState } from "react";
import "./App.css";
import io from "socket.io-client";
// import { useState } from "react";
// import Chat from "./Components/Chat/Chat";
import Button from "./Components/Common/Button/Button";
import CreateTableForm from "./Components/CreateTableForm/CreateTableForm";

import "./Components/IndexPageTableLine/IndexPageTableLine.sass"

const socket = io.connect("http://localhost:3001");

function App() {
  // const [username, setUsername] = useState("");
  // const [room, setRoom] = useState("");
  // const [showChat, setShowChat] = useState(false);
  const [tableLines, setTableLines] = useState([]);

  // const joinRoom = () => {
    // if (username !== "" && room !== "") {
      // socket.emit("join_room", room);
      // setShowChat(true);
    // }
  // };

  const setTableLinesFunction = (tableData) => {
    setTableLines((list) => [...list, tableData])
  }

  useEffect(() => {
    socket.on("create_table_row", (tableData) => {
      setTableLines((list) => [...list, tableData])
      console.log('testest', tableData);
    });
  }, [tableLines]);

  console.log('finalllll;', tableLines);


  return (
    <div className="App">
      <CreateTableForm setTableToState={setTableLinesFunction}/>
      {/* {!showChat ? (
        <div className="joinChatContainer">
          <h3>Join A Chat</h3>
          <input
            type="text"
            placeholder="Name..."
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Room Id..."
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          />
          <button onClick={joinRoom}>Join A Room</button>
        </div>
      ) : (
        <Chat socket={socket} username={username} room={room} />
      )} */}

      <div className="main__content__wrapper">
        {
          tableLines.map((item, index) => {
            return (
            <div key={index} className="line__wrapper">
              <div className="line__item table-color-points">
                <div className="content__wrapper ui__rows">
                  <div className="table" style={{"backgroundColor": `${item.tableColor === "green" ? '#9ccc65' : "#ef5350"}`}}></div>
                  <span className="text">{item.tableGamePoints}</span>
                </div>
              </div>
              <div className="line__item table-options">
                <div className="content__wrapper ui__rows">
                  {item.randomPairsStatus ? <span className="enum style__2" style={{"backgroundColor": "#00897b"}}>A</span> : ""}
                  {item.cancelGameIfLessThan14Points ? <span className="enum" style={{"backgroundColor": "#ef5350"}}>14</span> : ""}
                  {item.reducedCombinations ? <span className="enum" style={{"backgroundColor": "#c18c40"}}>R</span> : ""}
                </div>
              </div>
              <div className="line__item table-player-name">
                <div className="content__wrapper ui__rows">
                  <div className="user__content ui__rows">
                    <div className="icon user__level " style={{ "backgroundImage": "url('https://belot.md/img/v3/status/7.png')" }}></div>
                    <div className="username sh__nav__text">MeHighG</div><span className="table-player-points">3169</span>
                  </div>
                </div>
              </div>
              <div className="line__item table-player-count js__table-row-main-page">
                <div className=" content__wrapper games__content ui__rows">
                  <div className={`table-gamers-present players-parent__${item.tableType}`} data-required="4" data-present="1">
                    {
                      item.tableTypeArr.map((arrItm) => <span key={arrItm} className={`player__${arrItm}`}></span>)
                    }
                  </div>
                </div>
              </div>
              <div className="line__item entergame-btn">
                <div className="content__wrapper ui__rows">
                  <Button text="Intra" className='common-btn-color__green'/>
                </div>
              </div>
            </div>)
          })
        }
      </div>
    </div>
  );
}

export default App;