import React from "react";
import { BiHelpCircle } from "react-icons/bi";
import { GrContact } from "react-icons/gr";

const Navbar = () => {
  const links = [
    {
      icon: "/assets/i1.png",
      name: "Dashboard",
      link: "#",
    },
    {
      icon: "/assets/i2.png",
      name: "Transactions",
      link: "#",
    },
    {
      icon: "/assets/i3.png",
      name: "Schedules",
      link: "#",
    },
    {
      icon: "/assets/i4.png",
      name: "Users",
      link: "#",
    },
    {
      icon: "/assets/i5.png",
      name: "Settings",
      link: "#",
    },
  ];

  return (
    <section className="bg-primary rounded-xl static w-[18%] m-7 lg:p-10 p-5">
      <div>
        <h1 className="font-mon text-4xl text-white font-semibold lg:block hidden">Board.</h1>
        <h1 className="font-mon text-4xl text-white font-semibold lg:hidden block">B.</h1>
      </div>
      <div className="grid place-content-between h-full py-10">
        <div>
          {links.map((link) => (
            <div className="flex py-2 gap-4">
              <img
                className="lg:scale-75 object-contain"
                src={link.icon}
                alt={link.name}
              />
              <h2 className="font-mon text-lg font-medium text-white lg:block hidden">
                {link.name}
              </h2>
            </div>
          ))}
        </div>
        <div>
          <div className="">
            <h2 className="font-mon text-sm font-medium text-white py-2 lg:block hidden">
              Help
            </h2>
            <h2 className="font-mon text-sm font-medium text-white py-2 lg:block hidden">
              Contact Us
            </h2>
            <BiHelpCircle className="lg:hidden block text-white h-7 w-7 my-3" />
            <GrContact className="lg:hidden block text-white h-7 w-7 my-3" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
