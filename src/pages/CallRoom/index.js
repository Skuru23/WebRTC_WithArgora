import React, { useState } from "react";
import classNames from "classnames/bind";

import styles from "./Callroom.module.scss";

const cx = classNames.bind(styles);

const CallRoom = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [participants, setParticipants] = useState([]);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const toggleVideo = () => {
    setIsVideoOn(!isVideoOn);
  };

  const addParticipant = () => {
    const newParticipant = `Participant ${participants.length + 1}`;
    setParticipants([...participants, newParticipant]);
  };

  return (
    <div>
      <h1>Call Room</h1>
      <div className={cx('room-tool-bar')}>
        <div classname={cx('tool-space')}> </div>
        <button classname={cx('tool-bar-button')} onClick={toggleMute}>{isMuted ? "Unmute" : "Mute"}</button>
        <button classname={cx('tool-bar-button')} onClick={toggleVideo}>
          {isVideoOn ? "Turn Off Video" : "Turn On Video"}
        </button>
        <button classname={cx('tool-bar-button')} onClick={addParticipant}>Add Participant</button>
      </div>
      <div className={cx('vid-container')}>
        <div className={cx('participants')}>
          <h2>Participants:</h2>
          {participants.map((participant, index) => (
            <p key={index}>{participant}</p>
          ))}
        </div>

        <div className={cx('vid-wrapper')}>
          <h2>Vid call</h2>
        </div>
      </div>
    </div>
  );
};

export default CallRoom;
