import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const navLinks = links.map((e) => {
    return <a href={"#"+ e} key={e}>{e}</a>;
  });

  return <nav>{navLinks}</nav>;
}

export default NavBar;
