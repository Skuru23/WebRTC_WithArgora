import Scheduler from "../../components/MiniScheduler";
import Button from "../../components/Button";
import styles from "./home.module.scss";
import SearchBar from "../../components/SearchBar";

import classNames from "classnames/bind";
import { useState } from "react";

const cx = classNames.bind(styles);

function Home() {
  const [result, setResult] = useState([]);

  return (
    <div>
      <div className={cx('search-bar-container')}>
        <SearchBar setResult={setResult}/>
      </div>
      
      <div className={cx('room-list-container')}>
        <h2>Room List</h2>
        <div className={cx('room-item')}>
          
          <h3 className={cx('room-detail')}>Room 1</h3>
          <Button to="/callroom">Join</Button>
          </div>
      </div>
    </div>
  );
}

export default Home;
