import React, { useState } from "react";
import Navbar from "../Layout/Navbar";
import { BiBell } from "react-icons/bi";
import { Bargraph, DoughnutGraph } from "../Components";
import { AiOutlinePlus, AiOutlineInstagram, AiOutlineMail, AiOutlineYoutube } from "react-icons/ai";
import { useDisclosure } from "@mantine/hooks";
import { Divider, Modal } from "@mantine/core";
import { BsWhatsapp } from "react-icons/bs";

const Dashboard = () => {
  const [opened, { open, close }] = useDisclosure(false);

  const [basic, setBasic] = useState(false);

  const handleBasic = () => {
    setBasic(!basic);
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    insta: "",
    youtube: "",
  });

  const [showProfile, setShowProfile] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowProfile(true);
  };

  const cards = [
    {
      icon: "/assets/g1.png",
      text: "Total Revenues",
      fig: "$2,129,430",
      per: "+2.5%",
    },
    {
      icon: "/assets/g2.png",
      text: "Total Transactions",
      fig: "1,520",
      per: "+1.7%",
    },
    {
      icon: "/assets/g3.png",
      text: "Total Likes",
      fig: "9,721",
      per: "+1.4%",
    },

    {
      icon: "/assets/g4.png",
      text: "Total Users",
      fig: "9,721",
      per: "+4.2%",
    },
  ];
  return (
    <section className="flex bg-light mx-auto w-full h-full">
      <Navbar />
      <div className="m-7 w-full">
        <div className="flex w-full justify-between items-center py-7">
          <div>
            <h1 className="text-2xl font-bold font-mon">Dashboard</h1>
          </div>
          <div className="flex gap-6 items-center">
            <div className="">
              <form>
                <div class="relative">
                  <input
                    type="search"
                    id="default-search"
                    class="md:block w-full px-3 py-2 text-sm rounded-lg bg-white hidden"
                    placeholder="Search..."
                    required
                  />
                  <div class="absolute inset-y-0 pr-3 right-0 flex items-center pointer-events-none">
                    <svg
                      class="w-4 h-4 text-lightgrey"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                </div>
              </form>
            </div>
            <div>
              <BiBell className="h-5 w-5" />
            </div>
            <div>
              <img src="/assets/img.png" alt="" />
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
          {cards.map((card) => (
            <div className="rounded-2xl border-2 border-grey shadow-xl py-5 px-7">
              <img src={card.icon} alt={card.text} />
              <h2 className="py-1 font-lato text-sm">{card.text}</h2>
              <div className="flex items-center justify-between">
                <h1 className="text-xl font-mon font-bold">{card.fig}</h1>
                <h3 className="font-fig bg-lightgreen py-2 px-3 font-semibold text-green rounded-3xl ">
                  {card.per}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-light border-2 border-grey shadow-xl my-7 rounded-2xl">
          <div className="px-10">
            <h1 className="text-2xl font-bold font-mon pt-10">Activities</h1>
            <div className="w-full flex justify-between">
              <h2 className="text-lightgrey text-xl">May - June 2021</h2>
              <div>
                <div className="flex gap-6">
                  <div className="flex gap-4 items-center">
                    <div className="bg-red rounded-full p-2"></div>
                    <h2 className=" text-lg">Guest</h2>
                  </div>
                  <div className="flex gap-4 items-center">
                    <div className="bg-gree rounded-full p-2"></div>
                    <h2 className=" text-lg">User</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Bargraph />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="bg-light border-2 border-grey shadow-xl my-7 rounded-2xl">
            <div className="flex justify-between items-center pt-10 px-10">
              <h1 className="text-2xl font-bold font-mon">Top Products</h1>
              <h2 className="text-lightgrey text-xl">May - June 2021</h2>
            </div>
            <div className="grid grid-cols-2 gap-6 py-7">
              <div>
                <DoughnutGraph />
              </div>
              <div className="grid place-content-between">
                <div className="flex gap-4 items-center">
                  <div className="bg-gree rounded-full p-2"></div>
                  <h2 className="font-mon font-semibold text-lg">Basic Tees</h2>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="bg-yellow rounded-full p-2"></div>
                  <h2 className="font-mon font-semibold text-lg">
                    Custom Short Pants
                  </h2>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="bg-red rounded-full p-2"></div>
                  <h2 className="font-mon font-semibold text-lg">
                    Super Hoodies
                  </h2>
                </div>
              </div>
            </div>
          </div>

          {!showProfile ? (
            <div>
              <Modal
                opened={opened}
                onClose={close}
                title="Add New Profile"
                centered
              >
                <Divider />
                <div className="grid grid-cols-2 gap-10 py-5">
                  <div
                    className={
                      !basic
                        ? "text-center border-b-4 font-mon font-semibold border-primary cursor-pointer"
                        : "text-center border-b-4 font-mon font-semibold border-grey cursor-pointer"
                    }
                  >
                    Basic
                  </div>
                  <div
                    className={
                      basic
                        ? "text-center border-b-4 font-mon font-semibold border-primary cursor-pointer"
                        : "text-center border-b-4 font-mon font-semibold border-grey cursor-pointer"
                    }
                  >
                    Social
                  </div>
                </div>
                <div>
                  <form onSubmit={handleSubmit}>
                    {!basic ? (
                      <div>
                        <div className="my-7">
                          <h2 className="text-base font-medium my-2">
                            Enter Name*
                          </h2>
                          <input
                            className="border-2 border-light rounded-md w-full px-3 py-2"
                            type="text"
                            placeholder="Eg. John Doe"
                            required
                            value={formData.name}
                            name="name"
                            onChange={handleChange}
                          />
                        </div>
                        <div className="my-7">
                          <h2 className="text-base font-medium my-2">
                            Enter Email*
                          </h2>
                          <input
                            className="border-2 border-light rounded-md w-full px-3 py-2"
                            type="email"
                            placeholder="Eg. John@xyz.com"
                            required
                            value={formData.email}
                            name="email"
                            onChange={handleChange}
                          />
                        </div>
                        <div className="my-7">
                          <h2 className="text-base font-medium my-2">
                            Enter Phone*
                          </h2>
                          <input
                            className="border-2 border-light rounded-md w-full px-3 py-2"
                            type="text"
                            placeholder="Eg. 9123456789"
                            required
                            value={formData.phone}
                            name="phone"
                            onChange={handleChange}
                          />
                        </div>
                        <div
                          className="w-full flex justify-end "
                          onClick={handleBasic}
                        >
                          <button className="bg-primary text-white px-5 py-2 rounded-lg hover:bg-white hover:text-primary border-2 border-primary">
                            Next
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <div className="my-7">
                          <h2 className="text-base font-medium my-2">
                            Instagram Link{" "}
                            <span className="text-grey">(optional)</span>
                          </h2>
                          <input
                            className="border-2 border-light rounded-md w-full px-3 py-2"
                            type="text"
                            placeholder="Eg. ..instagram.com/username"
                            name="insta"
                            value={formData.insta}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="my-7">
                          <h2 className="text-base font-medium my-2">
                            Youtube Link{" "}
                            <span className="text-grey">(optional)</span>
                          </h2>
                          <input
                            className="border-2 border-light rounded-md w-full px-3 py-2"
                            type="text"
                            placeholder="Eg. ..youtebe/username"
                            name="youtube"
                            value={formData.youtube}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="w-full flex gap-4 justify-end ">
                          <button
                            className="border-2 bg-white border-primary text-primary hover:bg-primary hover:text-white px-5 py-2 rounded-lg"
                            onClick={handleBasic}
                          >
                            Back
                          </button>
                          <button
                            className="bg-primary text-white px-5 py-2 rounded-lg hover:bg-white hover:text-primary border-2 border-primary"
                            onClick={() => setShowProfile(true)}
                          >
                            Done
                          </button>
                        </div>
                      </div>
                    )}
                  </form>
                </div>
              </Modal>
              <div
                className="grid lg:gap-3 h-56 lg:h-72 place-content-center bg-light border-2 border-grey shadow-xl lg:my-7 rounded-2xl cursor-pointer"
                onClick={open}
              >
                <div className="bg-grey rounded-full p-5 w-fit mx-auto">
                  <AiOutlinePlus className="h-10 w-10 text-lightgrey" />
                </div>
                <div>
                  <h2 className="text-xl font-mon text-lightgrey font-semibold">
                    Add Profile
                  </h2>
                </div>
              </div>
            </div>
          ) : (
            <div className="h-72 my-7 bg-light border-2 border-grey shadow-xl w-full rounded-xl">
              <h1 className="p-10 font-mon text-xl font-semibold">{formData.name}</h1>
              <div className="px-10">
                <div className="flex justify-between items-center">
                  <div className="flex gap-6 items-center">
                    <div className="bg-lightgreen p-2 w-fit rounded-full">
                    <BsWhatsapp className="h-5 w-5 text-green" /> 
                    </div>
                    <h2 className="text-lg font-mon font-medium underline">{formData.phone}</h2>
                  </div>
                  <div className="flex gap-6 items-center">
                    <div className="bg-lightred p-2 w-fit rounded-full">
                    <AiOutlineInstagram className="h-5 w-5 text-red" /> 
                    </div>
                    <h2 className="text-lg font-mon font-medium underline">{formData.insta || "Not provided"}</h2>
                  </div>
                </div>
                <div className="flex justify-between items-center py-10">
                  <div className="flex gap-6 items-center">
                    <div className="bg-lightpurple p-2 w-fit rounded-full">
                    <AiOutlineMail className="h-5 w-5 text-purple" /> 
                    </div>
                    <h2 className="text-lg font-mon font-medium underline ">{formData.email}</h2>
                  </div>
                  <div className="flex gap-6 items-center">
                    <div className="bg-lightred p-2 w-fit rounded-full">
                    <AiOutlineYoutube className="h-5 w-5 text-red" /> 
                    </div>
                    <h2 className="text-lg font-mon font-medium underline">{formData.youtube || "Not provided"}</h2>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
