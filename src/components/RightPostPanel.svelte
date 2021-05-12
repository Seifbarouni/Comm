<script>
  export let community = "community";
  import { user } from "../stores";
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

<div class=" 2xl:w-2/5 w-1/3  hidden lg:flex lg:flex-col">
  <div class=" pt-7 flex relative">
    <button
      class="h-8 w-8  rounded-full right-0 absolute focus:outline-none"
      on:click={Logout}
    >
      <img src="./img/user.svg" alt="user" />
    </button>
  </div>
  <div class="mt-24 pt-1 pl-4 ">
    <div class="text-gray-200 bg-gray-800 rounded-md p-2 flex flex-col">
      <div class=" flex items-center pt-2">
        <div class="h-16 w-16 rounded-full bg-yellow-300" />
        <div class="flex flex-col px-2 text-sm">
          <a href="#/c/community" class="font-bold hover:underline"
            >c/{community}</a
          >
        </div>
      </div>
      <div class="pt-2 text-gray-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, fugiat
        quasi ...
      </div>
      <div class="flex text-sm pt-2">
        <div>
          <span class="font-bold">3.5k</span><span class="text-gray-400 px-2"
            >members</span
          >
        </div>
        <div class="px-4">
          <span class="font-bold">400</span><span class="text-gray-400 px-2"
            >online</span
          >
        </div>
      </div>
      <div class="border-b border-gray-600 pt-2 pb-2 w-2/3 self-center" />
      <span class="text-gray-400 mt-2 flex items-center pb-2">
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
      <div
        class="bg-red-500 hover:bg-red-400 cursor-pointer  text-center px-1 py-1 rounded-md mb-2"
      >
        Join
      </div>
    </div>
  </div>
  <div class="bg-gray-800 mt-4 ml-4 rounded-md p-2 flex flex-col text-gray-200">
    <div class="pt-1 pb-2 font-bold">Explore communities and topics</div>
    <div>
      <hr />
    </div>
    <div>
      <div class="flex flex-col  pb-4">
        <div
          class="flex items-center mt-4 hover:bg-gray-600 px-1 py-1 rounded-md cursor-pointer"
        >
          <div class="h-8 w-8  rounded-full ">
            <img src="./img/music.svg" alt="music" />
          </div>
          <div class="px-2 font-bold">Music</div>
        </div>
        <div
          class="flex items-center mt-4  hover:bg-gray-600 px-1 py-1 rounded-md cursor-pointer"
        >
          <div class="h-8 w-8 rounded-full">
            <img src="./img/fandom.svg" alt="fandom" />
          </div>
          <div class="px-2 font-bold">Fandom</div>
        </div>

        <div
          class="flex items-center mt-4 hover:bg-gray-600 px-1 py-1 rounded-md cursor-pointer"
        >
          <div class="h-8 w-8  rounded-full">
            <img src="./img/plant.svg" alt="plant" />
          </div>
          <div class="px-2 font-bold">Plants</div>
        </div>
        <div
          class="flex items-center mt-4 hover:bg-gray-600 px-1 py-1 rounded-md cursor-pointer"
        >
          <div class="h-8 w-8 rounded-full">
            <img src="./img/animal.svg" alt="animal" />
          </div>
          <div class="px-2 font-bold">Animals</div>
        </div>
        <div
          class="flex items-center mt-4 hover:bg-gray-600 px-1 py-1 rounded-md cursor-pointer"
        >
          <div class="h-8 w-8  rounded-full">
            <img src="./img/generous.svg" alt="charity" />
          </div>
          <div class="px-2 font-bold">Charities</div>
        </div>
        <div
          class="flex items-center mt-4 hover:bg-gray-600 px-1 py-1 rounded-md cursor-pointer"
        >
          <div class="h-8 w-8  rounded-full">
            <img src="./img/other.svg" alt="other" />
          </div>
          <div class="px-2 font-bold">Other</div>
        </div>
      </div>
    </div>
  </div>
</div>
