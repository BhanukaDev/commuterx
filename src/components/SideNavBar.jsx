import React, { useState } from "react";

export default function SideNavBar() {
  const [show, setShow] = useState(false);
  const closeSidebar = () => {
    setShow(false);
  };
  return (
    <>
      <nav className="w-screen h-16 fixed bg-red-100 z-20"></nav>
      <div className={`h-screen fixed ${show ? "w-60" : "w-0"}`}>SideBar</div>
    </>
  );
}
