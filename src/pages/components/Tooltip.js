export const Tooltip = ({ 
  data, children, marginy
}) => {
  return (
    <div className="relative self-center flex flex-col items-center group">
      {children}
      <div className="absolute bottom-0 flex flex-col items-center hidden mb-12 group-hover:flex">
        <span className="relative z-10 p-2  text-xs leading-none text-white whitespace-no-wrap bg-gray-600 shadow-lg rounded-md">
          {
            data.map(el=><p className="my-1">{el.name}</p>)
          }
        </span>
        <div className="w-3 h-3 -mt-2 rotate-45 bg-gray-600"></div>
      </div>
    </div>
  );
};