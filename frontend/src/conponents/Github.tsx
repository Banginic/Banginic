import { githup, metaData } from "../assets/assets";

function Github() {
  return (
    <a
      href={metaData.githup_url}
      className=""
      target="self"
      title="Go to our Githup page"
    >
      <img src={githup} alt="github logo" className="size-6" />
    </a>
  );
}

export default Github;
