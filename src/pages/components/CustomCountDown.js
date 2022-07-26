import useCountdown from "./useCountdown";

const CustomCountDown = () => {
  const {day, hour, minute, second} = useCountdown()
  
  return (
    <span class="countdown font-mono text-2xl">
      <span style={{"--value":hour}}></span>:
      <span style={{"--value":day}}></span>:
      <span style={{"--value":minute}}></span>:
      <span style={{"--value":second}}></span>
  </span>
  );
};

export default CustomCountDown;
