import React, { PureComponent } from "react";
import Paper from "@mui/material/Paper";
import {
  ViewState,
  EditingState,
  IntegratedEditing,
  
} from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  WeekView,
  Toolbar,
  DateNavigator,
  Appointments,
  TodayButton,
  AppointmentTooltip,
  ConfirmationDialog,
  AppointmentForm,
} from "@devexpress/dx-react-scheduler-material-ui";
import classNames from "classnames/bind";

import styles from './Schedule.module.scss';

const cx = classNames.bind(styles);

export const appointments = [
  {
    id: 1,
    startDate: new Date(2023, 4, 29, 9),
    endDate: new Date(2023, 4, 29, 11),
    title: "Meeting",
  },
  {
    id: 2,
    startDate: new Date(2023, 4, 29, 12),
    endDate: new Date(2023, 4, 29, 14),
    title: "Lunch",
  },
  {
    id: 3,
    startDate: new Date(2023, 4, 30, 9),
    endDate: new Date(2023, 4, 30, 11),
    title: "Conference",
  },
  {
    id: 4,
    startDate: new Date(2023, 4, 30, 12),
    endDate: new Date(2023, 4, 30, 14),
    title: "Presentation",
  },
];

export default class Schedule extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: appointments,
      currentDate: new Date(),
    };
    this.currentDateChange = (currentDate) => {
      this.setState({ currentDate });
    };

    this.commitChanges = this.commitChanges.bind(this);
  }

  commitChanges({ added, changed, deleted }) {
    this.setState((state) => {
      let { data } = state;
      if (added) {
        const startingAddedId =
          data.length > 0 ? data[data.length - 1].id + 1 : 0;
        data = [...data, { id: startingAddedId, ...added }];
      }
      if (changed) {
        data = data.map((appointment) =>
          changed[appointment.id]
            ? { ...appointment, ...changed[appointment.id] }
            : appointment
        );
      }
      if (deleted !== undefined) {
        data = data.filter((appointment) => appointment.id !== deleted);
      }
      return { data };
    });
  }

  render() {
    const { data, currentDate } = this.state;

    return (
     <div className={cx('schedule-container')}>
        <Paper>
          <Scheduler data={data} height={660}>
            <ViewState
              currentDate={currentDate}
              onCurrentDateChange={this.currentDateChange}
            />
  
            <EditingState onCommitChanges={this.commitChanges} />
            <IntegratedEditing />
  
            <WeekView startDayHour={9} endDayHour={19} />
  
            <ConfirmationDialog />
            <Appointments />
            <AppointmentTooltip showOpenButton showDeleteButton />
            <AppointmentForm/>
            <Toolbar />
            <DateNavigator />
            <TodayButton />
          </Scheduler>
        </Paper>
     </div>
    );
  }
}
