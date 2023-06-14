import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Toolbar,
  DateNavigator,
  Appointments,
  TodayButton,
  DayView,
  Scheduler,
} from "@devexpress/dx-react-scheduler-material-ui";
import Paper from "@mui/material/Paper";
import React, { PureComponent } from "react";

import { appointments } from "../../pages/Schedule";

const schedulerData = appointments;

class MiniScheduler extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: appointments,
      currentDate: new Date(),
    };
    this.currentDateChange = (currentDate) => {
      this.setState({ currentDate });
    };
  }
  render() {
    const {data, currentDate} = this.state;
    return (
      <Paper>
        <Scheduler data={data} height={600}>
          <ViewState
            currentDate={currentDate}
            onCurrentDateChange={this.currentDateChange}
          ></ViewState>

          <DayView startDayHour={9} endDayHour={19}/>
          <Toolbar />
          <DateNavigator />
          <Appointments/>
        </Scheduler>
      </Paper>
    );
  }
}

export default MiniScheduler;
