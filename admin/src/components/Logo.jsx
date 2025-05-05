import React from "react";

function Logo({ logoSize, textSize }) {
  return (
    <div className="flex gap-2 items-center">
      <img src="/banginic_logo.png" className={logoSize} alt="Banginic logo" />
      <p className={`bodoni ${textSize}`}>Banginic</p>
    </div>
  );
}

export default Logo;
