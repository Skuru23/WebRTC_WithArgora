import styles from "./Sidebar.module.scss";
import classNames from "classnames/bind";
import MiniScheduler from '../../../MiniScheduler';
import Button from "../../../Button";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);

function SideBar() {
  const navigate = useNavigate();

  return (
    <aside className={cx("wrapper")}>
      <Button to = '/schedule'><h2>Scheduler</h2></Button>

      <div className={cx("scheduler")}>
        <MiniScheduler />
      </div>
    </aside>
  );
}

export default SideBar;