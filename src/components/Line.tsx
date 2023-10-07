const Line = ({ position }: { position: string }) => {
  let linePosition = "";
  switch (position) {
    case "012":
      linePosition = "top-[15%]";
      break;

    case "345":
      linePosition = "top-[50%]";
      break;

    case "678":
      linePosition = "top-[85%]";
      break;

    case "036":
      linePosition = "rotate-90 right-[35%] top-[50%]";
      break;

    case "147":
      linePosition = "rotate-90 top-[50%]";
      break;

    case "258":
      linePosition = "rotate-90 left-[35%] top-[50%]";
      break;

    case "048":
      linePosition = "rotate-45 top-[50%]";
      break;

    case "246":
      linePosition = "-rotate-45 top-[50%]";
      break;

    default:
      linePosition = "hidden";
      break;
  }
  return (
    <div className={`${linePosition} absolute w-full h-2 bg-red-500`}></div>
  );
};

export default Line;
