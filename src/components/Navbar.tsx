import React, { useState } from "react";
import {
  AiOutlineClose,
  AiFillTag,
  AiOutlineMenu,
  AiOutlineSearch,
} from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineFavorite } from "react-icons/md";
import { FaWallet, FaUserFriends } from "react-icons/fa";
import { BiSolidHelpCircle } from "react-icons/bi";
import { ImFolderDownload } from "react-icons/im";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      {/* Left side */}
      <div className="flex items-center">
        <div>
          <AiOutlineMenu
            onClick={handleIsOpen}
            className="cursor-pointer"
            size={30}
          />
        </div>
        <h1 className="px-2 text-2xl sm:text-3xl lg:text-4xl">
          Uber <span className="font-bold">Eats</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-300 rounded-full p-1 text-[16px]">
          <p className="p-2 text-white bg-black rounded-full">Delivery</p>
          <p className="p-2">Pickup</p>
        </div>
      </div>

      {/* Search Input  */}

      <div className="flex items-center w-[16rem] bg-gray-200 sm:w-[24rem] lg:w-[30rem] rounded-full p-2">
        <AiOutlineSearch size={30} />
        <input
          className="w-full p-2 bg-transparent border-none focus:outline-none"
          type="text"
          name="search"
          placeholder="Search"
        />
      </div>

      {/* Right side */}
      <div className="items-center hidden p-3 text-white bg-black rounded-full md:flex">
        <BsFillCartFill size={20} color="white" />
        <h1 className="px-2 ">Cart</h1>
      </div>

      {/* Mobile */}
      {isOpen && (
        <div className="fixed top-0 left-0 z-10 w-full h-screen bg-black/70"></div>
      )}
      <div
        className={
          isOpen
            ? "fixed top-0 left-0 w-[20rem] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[20rem] h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          onClick={handleIsOpen}
          size={30}
          className="absolute cursor-pointer right-4 top-4"
        />
        <h1 className="p-4 text-2xl">
          Uber <span className="font-bold">Eats</span>
        </h1>
        <nav className="mt-3">
          <ul className="flex flex-col gap-5 p-4 text-gray-900">
            <li className="flex items-center text-xl">
              <TbTruckDelivery size={25} className="mr-3" /> Orders
            </li>
            <li className="flex items-center text-xl">
              <MdOutlineFavorite size={25} className="mr-3" /> Favorites
            </li>
            <li className="flex items-center text-xl">
              <FaWallet size={25} className="mr-3" /> Wallet
            </li>
            <li className="flex items-center text-xl">
              <BiSolidHelpCircle size={25} className="mr-3" /> Help
            </li>
            <li className="flex items-center text-xl">
              <AiFillTag size={25} className="mr-3" /> Promotions
            </li>
            <li className="flex items-center text-xl">
              <ImFolderDownload size={25} className="mr-3" /> Best One
            </li>
            <li className="flex items-center text-xl">
              <FaUserFriends size={25} className="mr-3" /> Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
