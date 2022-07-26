import useCountdown from "./useCountdown";

const CustomCountDown = () => {
  const { day, hour, minute, second } = useCountdown();

  return (
    <div class="flex gap-5">
      <div>
        <span class="countdown font-mono text-2xl">
          <span style={{"--value":day}}></span>
        </span>
      </div>
      <div>
        <span class="countdown font-mono text-2xl">:
          <span style={{"--value":hour}}></span>
        </span>
      </div>
      <div>
        <span class="countdown font-mono text-2xl">:
          <span style={{"--value":minute}}></span>
        </span>
        
      </div>
      <div>
        <span class="countdown font-mono text-2xl">:
          <span style={{"--value":second}}></span>
        </span>
        
      </div>
    </div>
  );
};

export default CustomCountDown;
