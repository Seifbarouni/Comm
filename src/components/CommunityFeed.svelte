<script>
  import Footer from "./Footer.svelte";
  import { user } from "../stores.js";

  export let community = "";
  let join = "Join";

  function joinCommunity() {
    if (join == "Join") join = "Joined";
    else join = "Join";
  }

  function Logout() {
    user.set({
      isAuthenticated: false,
      username: "",
      userId: 0,
      bio: "",
      followers: 0,
      following: 0,
      jwt: "",
    });
    localStorage.removeItem("us");
  }
</script>

<div class=" 2xl:w-3/5 w-full flex flex-col mb-2">
  <div class="pt-6 self-center w-full  flex  justify-center items-center">
    <a href="#/" class="text-red-500 pt-1 pr-2 h-10 w-10 sm:hidden">
      <img src="./img/logo.png" alt="" />
    </a>
    <div class="sm:w-full w-5/6">
      <input
        type="text"
        class="bg-gray-600 px-2 py-2 w-full  focus:outline-none text-white rounded-md placeholder-gray-200"
        placeholder="Search for users or communities"
      />
    </div>

    <button
      class="pl-2 h-10 w-10 pt-1 rounded-full  lg:hidden focus:outline-none"
      on:click={Logout}
    >
      <img src="./img/user.svg" alt="user" />
    </button>
  </div>
  <div
    class="mt-16 mb-2  text-gray-200  flex flex-col  justify-between pb-2 px-1"
  >
    <div class="bg-gray-800 text-gray-200 rounded-md flex flex-col pb-2">
      <div class="rounded-t-md bg-contain ">
        <img
          src="./img/bg.jpg"
          class="rounded-md h-20 w-full object-cover"
          alt=""
        />
      </div>
      <div class="flex relative">
        <span>
          <div class="h-24 w-24 ml-2 rounded-full absolute -top-9">
            <img src="./img/{community}.svg" alt="" />
          </div>
        </span>
        <span class="ml-28 flex flex-col">
          <span class="font-bold text-lg">c/{community}</span>
          <span class="text-xs text-gray-400">c/{community}</span>
        </span>
        <button
          class="{join == 'Join'
            ? 'bg-red-500 hover:bg-red-400'
            : 'border-2 border-red-500'} px-6  py-1 rounded-2xl mt-1 mr-2 font-bold  focus:outline-none self-center absolute right-0"
          on:click={joinCommunity}>{join}</button
        >
      </div>
      <div class="mt-8 ml-2 flex flex-col">
        <span class="text-gray-400 flex items-center">
          <span class="pr-1">
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              ><path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              /></svg
            >
          </span>
          <span>About Community</span>
        </span>
        <span class="mt-2"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          voluptatum optio quasi.</span
        >
        <span class="mt-2 font-bold"
          >3.5m<span class="text-gray-400 ml-1 font-normal">members</span></span
        >
        <div class="w-2/3 self-center mt-2 mb-1 border-b border-gray-600" />
        <span class="text-gray-400 mt-2 flex items-center">
          <span class="pr-1">
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              ><path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
              /></svg
            >
          </span>
          <span>Created Sep 17, 2007</span>
        </span>
      </div>
    </div>
  </div>
  <a
    href="#/c/{community}/p/s12dsqdxxf45s"
    class="bg-gray-800 hover:bg-gray-700 cursor-pointer  p-2 rounded-md text-gray-200 mr-1 ml-1 mt-2"
  >
    <div id="header" class="flex items-center text-sm">
      <div class="flex items-center">
        <div class="h-6 w-6  rounded-full">
          <img src="./img/{community}.svg" alt="" />
        </div>
        <a href="#/c/entertainment" class="px-1 hover:underline"
          >c/{community}</a
        >
      </div>
      <div class="pr-1 pl-1 text-gray-400">.</div>
      <div class="text-gray-400">
        Posted by <a href="#/u/seif" class="hover:underline">u/seif</a> 14 hours
        ago
      </div>
    </div>
    <div id="txt" class="pt-1">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
      <a
        href="https://yts.mx/"
        target="_blank"
        class="text-blue-600 hover:underline">https://yts.mx/</a
      >
    </div>
    <Footer likes="2.4k" comments="1k" />
  </a>
  <a
    href="#/c/{community}/p/s12dsf45sd4s"
    class="bg-gray-800 hover:bg-gray-700 cursor-pointer  p-2 rounded-md text-gray-200 mr-1 ml-1 mt-2"
  >
    <div id="header" class="flex items-center text-sm">
      <div class="flex items-center">
        <div class="h-6 w-6  rounded-full">
          <img src="./img/{community}.svg" alt="" />
        </div>
        <a href="#/c/entertainment" class="px-1 hover:underline"
          >c/{community}</a
        >
      </div>
      <div class="pr-1 pl-1 text-gray-400">.</div>
      <div class="text-gray-400">
        Posted by <a href="#/u/mark" class="hover:underline">u/mark</a> 14 hours
        ago
      </div>
    </div>
    <div id="txt" class="pt-1">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
      <a
        href="https://yts.mx/"
        target="_blank"
        class="text-blue-600 hover:underline">https://yts.mx/</a
      >
    </div>
    <Footer likes="2.4k" comments="1k" />
  </a>
</div>
