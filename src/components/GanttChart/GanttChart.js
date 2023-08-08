import { useState, useEffect } from "react";
import Grid from "./Grid";
import Settings from "./Settings";
import Tasks from "./Tasks";
import TimeRange from "./TimeRange";
import TimeTable from "./TimeTable";
import { client } from "../../utils/fetchWrapper";

import data from "../../data.json";

import "./GanttChart.css";

export default function GanttChart() {
  const [tasks, setTasks] = useState(null);
  const [taskDurations, setTaskDurations] = useState(null);
  const [timeRange, setTimeRange] = useState({
    fromSelectMonth: 0,
    fromSelectYear: "2022",
    toSelectMonth: 1,
    toSelectYear: "2022",
  });

  useEffect(() => {
    setTasks(data?.tasks);
    setTaskDurations(data?.taskDurations);
  }, []);

  return (
    <div id="gantt-container">
      <Settings>
        <TimeRange timeRange={timeRange} setTimeRange={setTimeRange} />
      </Settings>
      <Grid>
        {/* 왼쪽 컬럼 */}
        <Tasks tasks={tasks} setTasks={setTasks} setTaskDurations={setTaskDurations} />
        {/* 오른쪽 날짜 */}
        <TimeTable
          timeRange={timeRange}
          tasks={tasks}
          taskDurations={taskDurations}
          setTaskDurations={setTaskDurations}
        />
      </Grid>
    </div>
  );
}
