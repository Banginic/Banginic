type Props = {
  textSize: string;
  logoSize: string;
};
function Logo(props: Props) {
  return (
    <div className="flex items-center gap-2">
      <img
        className={props.logoSize}
        src="/banginic_logo.png"
        alt="Banginic logo"
      />
      <p className={props.textSize}>Banginic</p>
    </div>
  );
}

export default Logo;
