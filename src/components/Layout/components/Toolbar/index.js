import styles from "./Toolbar.module.scss";
import classNames from "classnames/bind";
import Scheduler from "../../../MiniScheduler";
import { Button } from "@mui/material";

const cx = classNames.bind(styles);

function ToolBar() {
  return (
    <aside className={cx("wrapper")}>
      <h2>Toolbar</h2>
      <Button>
        <img
          className={cx("tool-icon")}
          src={require("../../../../assets/icon/micIcon.jpg")}
        />
      </Button>

      <Button>
        <img
          className={cx("tool-icon")}
          src={require("../../../../assets/icon/camIcon.jpg")}
        />
      </Button>
    </aside>
  );
}

export default ToolBar;
