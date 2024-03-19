"use client";

import { useState } from "react";

import Image from "next/image";
import { StaticImageData } from "next/image";

import RICARDO_IMG from "@/public/images/ricardo-1.jpg";

import {
  IoEllipsisHorizontal,
  IoSettings,
  IoSend,
  IoChevronBack,
  IoMenu,
  IoChevronUp,
  IoAdd,
  IoSearch,
} from "react-icons/io5";

/**
 * Represents an individual user type
 * name -> The name of the user
 * profileImage -> The image of the user, StaticImageData
 */
type User = {
  name: string;
  profileImage: StaticImageData;
};

function IndividualChat({ name, profileImage }: User) {
  return (
    <div className="w-full h-16 flex flex-row items-center gap-4 px-4">
      <Image
        src={profileImage}
        alt="User image"
        width={44}
        height={44}
        className="rounded-full"
      />
      <p className="text-gray-950 font-medium text-lg">{name}</p>
    </div>
  );
}

export default function Home() {
  const [isMoreOptionsOpened, setIsMoreOptionsOpened] = useState(false);
  const [isMenuOptionsOpened, setIsMenuOptionsOpened] = useState(false);
  const [isSettingsOpened, setIsSettingsOpened] = useState(false);
  const [isAddUserOpened, setIsAddUserOpened] = useState(false);

  const handleOnMoreOptionsOpenedClick = () => {
    setIsMoreOptionsOpened(!isMoreOptionsOpened);
  };

  const handleOnMenuOptionsButtonClick = () => {
    setIsMenuOptionsOpened(!isMenuOptionsOpened);
  };

  const closeMenuOptions = () => {
    setIsMenuOptionsOpened(false);
  };

  const handleOnSettingsButtonClick = () => {
    setIsSettingsOpened(!isSettingsOpened);
  };

  const handleOnSettingsClose = () => {
    setIsSettingsOpened(false);
  };

  const handleOnAddUserButtonClick = () => {
    setIsAddUserOpened(!isAddUserOpened);
  };

  const handleOnAddUserClose = () => {
    setIsAddUserOpened(false);
  };

  return (
    <main className="max-h-screen h-screen w-full bg-gray-100/95 xl flex flex-row">
      {/* Settings modal */}
      {isSettingsOpened && (
        <section className="absolute top-0 right-0 w-full h-full flex flex-col justify-center items-center z-10 backdrop-brightness-50">
          <div className="h-max w-56 bg-gray-200 flex flex-col items-center divide-y">
            <button className="h-16 w-full bg-gray-300">Log out</button>
            <button
              className="h-16 w-full bg-gray-300"
              onClick={handleOnSettingsClose}
            >
              Close Settings
            </button>
          </div>
        </section>
      )}

      {/* Add user */}
      {isAddUserOpened && (
        <section className="absolute top-0 right-0 w-full h-full flex flex-col justify-center items-center z-10 backdrop-brightness-50">
          <div className="h-56 w-56 bg-gray-200 flex flex-col items-center divide-y">
            <form className="w-full h-full p-4 flex flex-col justify-between">
              <label>
                <p>Enter username:</p>
                <input type="text" className="w-full py-2 px-4" />
              </label>

              <div className="flex flex-row justify-between items-center gap-4">
                <button
                  className="flex-1 py-3 bg-blue-500"
                  type="button"
                  onClick={handleOnAddUserClose}
                >
                  Cancel
                </button>
                <button className="flex-1 py-3 bg-blue-500" type="submit">
                  Add
                </button>
              </div>
            </form>
          </div>
        </section>
      )}

      {/* Left section, smaller devices */}
      {isMenuOptionsOpened && (
        <section className="absolute lg:hidden w-full h-full backdrop-brightness-50">
          <div className="sm:w-96 w-full h-full border-r border-zinc-600 bg-gray-800 flex flex-col">
            {/* Menu options */}
            <div className="h-16 flex-none w-full flex items-center justify-between border-b px-4">
              <button className="p-1 border" onClick={closeMenuOptions}>
                <IoChevronBack size={28} />
              </button>
              <p className="text-xl font-medium text-gray-950">Chats</p>
              <button
                className="p-1 border"
                onClick={handleOnAddUserButtonClick}
              >
                <IoAdd size={28} />
              </button>
            </div>

            {/* Chat container */}
            <div className="flex-1 max-h-max bg-gray-300 w-full overflow-auto divide-zinc-400 flex flex-col">
              {/* Search container */}
              <div className="h-14 w-full">
                <form className="relative w-full h-full p-2">
                  <input type="text" className="w-full h-full px-4" />
                  <button className="absolute top-0 right-0 p-3" type="submit">
                    <IoSearch size={32} />
                  </button>
                </form>
              </div>

              {/* Global container */}
              <div>
                <p>Global</p>
                <IndividualChat
                  name="Ricardo Milos"
                  profileImage={RICARDO_IMG}
                />
              </div>
              {/* Personal Container */}
              <div>
                <p>Personal</p>
                <IndividualChat
                  name="Ricardo Milos"
                  profileImage={RICARDO_IMG}
                />
                <IndividualChat
                  name="Ricardo Milos"
                  profileImage={RICARDO_IMG}
                />
                <IndividualChat
                  name="Ricardo Milos"
                  profileImage={RICARDO_IMG}
                />
              </div>
            </div>

            {/* Left section footer */}
            <div className="w-full flex-none h-16 flex flex-row items-center justify-between px-4">
              <div className="flex flex-row items-center gap-4">
                <Image
                  src={RICARDO_IMG}
                  alt="User image"
                  width={44}
                  height={44}
                  className="rounded-full"
                />
                <p className="text-gray-950 font-medium text-lg">
                  Ricardo Milos
                </p>
              </div>
              <button
                className="p-1 border"
                onClick={handleOnSettingsButtonClick}
              >
                <IoSettings size={28} />
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Left section, larger devices */}
      <section className="hidden lg:block w-96 xl:w-[32rem] h-full backdrop-brightness-50">
        <div className="w-full h-full border-r border-zinc-600 bg-gray-800 flex flex-col">
          {/* Menu options */}
          <div className="h-16 flex-none w-full flex items-center justify-between border-b px-4">
            <p className="text-xl font-medium text-gray-950">Chats</p>
            <button className="p-1 border" onClick={handleOnAddUserButtonClick}>
              <IoAdd size={28} />
            </button>
          </div>

          {/* Chat container */}
          <div className="flex-1 max-h-max bg-gray-300 w-full overflow-auto divide-zinc-400 flex flex-col">
            {/* Search container */}
            <div className="h-14 w-full">
              <form className="relative w-full h-full p-2">
                <input type="text" className="w-full h-full px-4" />
                <button className="absolute top-0 right-0 p-3" type="submit">
                  <IoSearch size={32} />
                </button>
              </form>
            </div>

            {/* Global container */}
            <div>
              <p>Global</p>
              <IndividualChat name="Ricardo Milos" profileImage={RICARDO_IMG} />
            </div>
            {/* Personal Container */}
            <div>
              <p>Personal</p>
              <IndividualChat name="Ricardo Milos" profileImage={RICARDO_IMG} />
              <IndividualChat name="Ricardo Milos" profileImage={RICARDO_IMG} />
              <IndividualChat name="Ricardo Milos" profileImage={RICARDO_IMG} />
            </div>
          </div>

          {/* Left section footer */}
          <div className="w-full flex-none h-16 flex flex-row items-center justify-between px-4">
            <div className="flex flex-row items-center gap-4">
              <Image
                src={RICARDO_IMG}
                alt="User image"
                width={44}
                height={44}
                className="rounded-full"
              />
              <p className="text-gray-950 font-medium text-lg">Ricardo Milos</p>
            </div>
            <button
              className="p-1 border"
              onClick={handleOnSettingsButtonClick}
            >
              <IoSettings size={28} />
            </button>
          </div>
        </div>
      </section>

      {/* Left section, larger devices */}

      {/* Main section, right side */}
      <section className="h-full w-full flex flex-col">
        {/* Main header */}
        <div className="flex-none h-16 w-full bg-gray-200 flex flex-row items-center justify-between px-4">
          {/* User info */}
          <div className="flex flex-row items-center gap-2 justify-between">
            {/* Menu button */}
            <button
              className="bg-gray-400 mr-4 p-1 lg:hidden"
              onClick={handleOnMenuOptionsButtonClick}
            >
              <IoMenu size={28} />
            </button>
            {/* Image */}
            <Image
              src={RICARDO_IMG}
              alt="User image"
              width={44}
              height={44}
              className="rounded-full"
            />
            <p className="text-gray-950 font-medium text-lg">Ricardo Milos</p>
          </div>

          {/* More options */}
          <button
            className="bg-gray-400 p-1"
            onClick={handleOnMoreOptionsOpenedClick}
          >
            {isMoreOptionsOpened ? (
              <IoChevronUp size={28} />
            ) : (
              <IoEllipsisHorizontal size={28} />
            )}
          </button>

          {/* More Options settings */}
          {isMoreOptionsOpened && (
            <div className="absolute top-16 right-0 w-full sm:w-96 h-max border bg-gray-50">
              <button className="h-12 w-full bg-gray-100">
                <p>Delete chat</p>
              </button>
            </div>
          )}
        </div>
        {/* Main body */}
        <div className="flex-1 w-full overflow-auto bg-gray-300 divide-y">
          <div className="bg-gray-500 w-full h-96" />
          <div className="bg-gray-500 w-full h-96" />
          <div className="bg-gray-500 w-full h-96" />
        </div>
        {/* Main footer */}
        <div className="flex-none h-16 w-full px-4 py-2">
          <form className="w-full h-full flex flex-row items-center gap-6">
            <input
              type="text"
              className="w-full h-full rounded-lg px-4 shadow-lg border border-zinc-600 "
              placeholder="Message..."
            />
            <button className="flex items-center px-4 bg-gray-100 h-full border border-zinc-600 rounded-md">
              <IoSend size={20} />
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
