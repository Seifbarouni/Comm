<script>
  import LeftSidebar from "./LeftSidebar.svelte";
  import RightPostPanel from "./RightPostPanel.svelte";
  import Footer from "./Footer.svelte";
  import LoginRegister from "./LoginRegister.svelte";
  import { user } from "../stores";
  import { onMount } from "svelte";

  export let params = {};
  onMount(() => {
    let cachedData = localStorage.getItem("us");
    if (cachedData) {
      cachedData = JSON.parse(cachedData);
      let expired = parseInt(Date.now() / 1000) - cachedData.cacheTime > 15000;
      if (cachedData && !expired) {
        user.set(cachedData.data);
      }
    }
  });
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
    localStorage.removeItem("my_comm");
    localStorage.removeItem("exp_comm");
  }
</script>

<svelte:head>
  <title>Comm | p/{params.postid}</title>
</svelte:head>

{#if $user.isAuthenticated}
  <LeftSidebar margin="mt-12" />
  <div class=" 2xl:w-3/5 w-full flex flex-col text-gray-200 pl-1 pr-1">
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

    <div class="bg-gray-800  cursor-pointer mt-16 p-4 rounded-md flex flex-col">
      <div id="header" class="flex items-center text-sm">
        <div class="flex items-center">
          <div class="h-8 w-8 bg-yellow-300 rounded-full" />
          <a href="#/c/entertainment" class="px-1 hover:underline"
            >c/entertainment</a
          >
        </div>
        <div class="pr-1 pl-1 text-gray-400">.</div>
        <div class="text-gray-400">
          Posted by <a href="#/u/mark" class="hover:underline">u/mark</a> 3 hours
          ago
        </div>
      </div>
      <div>
        <div class="pt-1 pb-1 font-bold">Title of this video post</div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta dolores
          vero beatae aspernatur nemo, rerum error debitis ut distinctio
          nesciunt dolor quo et hic tenetur id doloribus in quia cupiditate?
        </div>
      </div>
      <Footer likes="11k" comments="5k" />
      <div class="border-b border-gray-600 py-4   w-2/3 self-center" />

      <div class=" flex flex-col mt-4">
        <div class="flex items-start mt-2">
          <div class="h-6 w-6 rounded-full bg-green-600 px-3" />
          <div>
            <div class="text-sm ml-2">
              <a href="#/u/xyz" class="hover:underline">xyz</a>
              <span class="text-gray-400">7 hours ago</span>
            </div>
            <div class="text-sm ml-2 pt-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              blanditiis!
            </div>
            <div class="ml-2 -mt-2">
              <Footer likes="50" isComment="true" />
            </div>
          </div>
        </div>
        <div class="flex items-start mt-2">
          <div class="h-6 w-6 rounded-full bg-indigo-600 px-3" />
          <div>
            <div class="text-sm ml-2">
              <a href="#/u/mark" class="hover:underline">mark</a>
              <span class="text-gray-400">7 hours ago</span>
            </div>
            <div class="text-sm ml-2 pt-1">LMAAAAAOOOOOOOOOOOOOO</div>
            <div class="ml-2 -mt-2">
              <Footer likes="22" isComment="true" />
            </div>
          </div>
        </div>
        <div class="flex items-start mt-2">
          <div class="h-6 w-6 rounded-full bg-blue-600 px-3" />
          <div>
            <div class="text-sm ml-2">
              <a href="#/u/seif" class="hover:underline">seif</a>
              <span class="text-gray-400">7 hours ago</span>
            </div>
            <div class="text-sm ml-2 pt-1">YEEEEE BOIII</div>
            <div class="ml-2 -mt-2">
              <Footer likes="7" isComment="true" />
            </div>
          </div>
        </div>
        <div class="flex items-start mt-2">
          <div class="h-6 w-6 rounded-full bg-red-600 px-3" />
          <div>
            <div class="text-sm ml-2">
              <a href="#/u/sam" class="hover:underline">sam</a>
              <span class="text-gray-400">8 hours ago</span>
            </div>
            <div class="text-sm ml-2 pt-1">
              dolor sit amet consectetur adipisicing elit. Quidem blanditiis
              dsfd!
            </div>
            <div class="ml-2 -mt-2">
              <Footer likes="0" isComment="true" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <RightPostPanel community={params.community} />
{:else}
  <LoginRegister />
{/if}
