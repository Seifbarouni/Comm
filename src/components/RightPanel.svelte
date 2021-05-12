<script>
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
        <div class="h-16 w-16">
          <img src="./img/user.svg" alt="user" />
        </div>
        <div class="flex flex-col px-2 text-sm">
          <span class="font-bold">{$user.username}</span>
          <span class="text-gray-400">{$user.email}</span>
        </div>
      </div>
      <div class="flex text-sm pt-2">
        <div>
          <span class="font-bold">{$user.followers}</span><span
            class="text-gray-400 px-2">followers</span
          >
        </div>
        <div class="px-4">
          <span class="font-bold">{$user.following}</span><span
            class="text-gray-400 px-2">following</span
          >
        </div>
      </div>
      <div class="pt-2 text-gray-400 pb-2">{$user.bio}</div>
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
