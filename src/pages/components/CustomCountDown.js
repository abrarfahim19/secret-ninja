import { useEffect, useRef, useState } from "react";
import useCountdown from "./useCountdown";

const CustomCountDown = (props) => {
  const { time } = props;
  const { day, hour, minute, second } = useCountdown(time);
  // const givenTime = useRef(time);
  // const [day, setDay] = useState(0);
  // const [minute, setMinute] = useState(0);
  // const [hour, setHour] = useState(0);
  // const [second, setSecond] = useState(0);
  // const countDownDate = new Date(time).getTime();

  // // Update the count down every 1 second
  // useEffect(() => {
  //   const x = setInterval(function () {
  //     let now = new Date().getTime();
  //     let distance = countDownDate - now;
  //     let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  //     let hours = Math.floor(
  //       (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  //     );
  //     let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  //     let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  //     setDay(days);
  //     setHour(hours);
  //     setMinute(minutes);
  //     setSecond(seconds);
  //     if (distance < 0) {
  //       clearInterval(x);
  //       setDay(0);
  //       setHour(0);
  //       setMinute(0);
  //       setSecond(0);
  //     }
  //   }, 1000);
  // }, [time]);

  return (
    <div class="flex gap-5">
      <div>
        <span class="countdown font-mono text-2xl">
          D<span style={{ "--value": day }}></span>
        </span>
      </div>
      <div>
        <span class="countdown font-mono text-2xl">
          h<span style={{ "--value": hour }}></span>
        </span>
      </div>
      <div>
        <span class="countdown font-mono text-2xl">
          m<span style={{ "--value": minute }}></span>
        </span>
      </div>
      <div>
        <span class="countdown font-mono text-2xl">
          s<span style={{ "--value": second }}></span>
        </span>
      </div>
    </div>
  );
};

export default CustomCountDown;
