import Spiner from "./Spiner";

function Loading() {
  return (
    <div className="h-screen grid place-items-center">
      <h1 className="heading3 text-center">
        <Spiner />
        Loading ....
      </h1>
    </div>
  );
}

export default Loading;
