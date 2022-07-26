import {useState} from 'react';

const useCountdown = () => {
  

  const [day, setDay] = useState(0);
  const [minute, setMinute] = useState(0);
  const [hour, setHour] = useState(0);
  const [second, setSecond] = useState(0);
  const countDownDate = new Date("July 29, 2022 12:56:25").getTime();

  // Update the count down every 1 second
  // useEffect(() => {
    const x = setInterval(function () {
      let now = new Date().getTime();
      let distance = countDownDate - now;
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);
      setDay(days);
      setHour(hours);
      setMinute(minutes);
      setSecond(seconds);
      if (distance < 0) {
        clearInterval(x);
        setDay(0);
        setHour(0);
        setMinute(0);
        setSecond(0);
      }
    }, 1000);
  // }, []);
  return {day, hour, minute, second}
};

export default useCountdown;