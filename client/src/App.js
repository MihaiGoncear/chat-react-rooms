import "./App.css";
// import io from "socket.io-client";
// import { useState } from "react";
// import Chat from "./Components/Chat/Chat";
import Button from "./Components/Common/Button/Button";
import CreateTableForm from "./Components/CreateTableForm/CreateTableForm";

import "./Components/IndexPageTableLine/IndexPageTableLine.sass"

// const socket = io.connect("http://localhost:3001");

function App() {
  // const [username, setUsername] = useState("");
  // const [room, setRoom] = useState("");
  // const [showChat, setShowChat] = useState(false);

  // const joinRoom = () => {
    // if (username !== "" && room !== "") {
      // socket.emit("join_room", room);
      // setShowChat(true);
    // }
  // };

  return (
    <div className="App">
      <CreateTableForm />
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
        <div className="line__wrapper">
          <div className="line__item table-color-points">
            <div className="content__wrapper ui__rows">
              <div className="table" style={{ "backgroundColor": "#9ccc65" }}></div>
              <span className="text">101</span>
            </div>
          </div>
          <div className="line__item table-options">
            <div className="content__wrapper ui__rows"></div>
          </div>
          <div className="line__item table-player-name">
            <div className="content__wrapper ui__rows">
              <div className="user__content ui__rows">
                <div className="icon user__level " style={{ "backgroundImage": "url('https://belot.md/img/v3/status/7.png')" }}></div>
                <div className="username sh__nav__text">paladenco19</div><span className="table-player-points">3169</span>
              </div>
            </div>
          </div>
          <div className="line__item table-player-count js__table-row-main-page">
            <div className=" content__wrapper games__content ui__rows">
              <div className="table-gamers-present js__present-players-table fourth-players-parent" data-required="4" data-present="1">
                <span className="first-player "></span>
                <span className="fourth-player inactive"></span>
                <span className="third-player inactive"></span>
                <span className="second-player inactive"></span>
              </div>
            </div>
          </div>
          <div className="line__item entergame-btn">
            <div className="content__wrapper ui__rows"><Button text="Intra" /></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;