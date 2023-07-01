import './Clock.css'
import { useState } from "react";

function Clock() {
  const [hour, setHour] = useState(new Date().getHours());
  const [min, setMin] = useState(new Date().getMinutes());
  const [sec, setSec] = useState(new Date().getSeconds());
  const [ampm, setAmpm] = useState("---");

  setInterval(() => {
    setHour((hour) => new Date().getHours()),
      setMin((min) => new Date().getMinutes()),
      setSec((sec) => new Date().getSeconds()),
      hour >= 12 ? setAmpm("PM") : setAmpm("AM");
  }, 1000);

  const convertHour = (num) => {
    if (num == 0) {
      return (num + 12).toString();
    } else if (num >= 1 && num <= 12) {
      return num.toString();
    } else {
      return (num - 12).toString();
    }
  };

  const convertMinSec = (num) => {
    return num < 10 ? ("0" + num).toString() : num.toString();
  };

  return (
    <div className="body">
      <h2 className="heading">Clock</h2>
      <div className="content Clock-content">
        <p className="Clock-subheading">
          The current time is:
        </p>
        <div id="Clock-display">
          <p id="Clock-time">{`${convertHour(hour)}:${convertMinSec(
            min
          )}.${convertMinSec(sec)}`}</p>
          <p id="Clock-ampm">{ampm}</p>
        </div>
      </div>
    </div>
  );
}

export default Clock;
