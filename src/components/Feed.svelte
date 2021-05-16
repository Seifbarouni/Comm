<script>
  import Footer from "./Footer.svelte";
  import NewPostModal from "./NewPostModal.svelte";
  import { isOpen, user } from "../stores.js";
  import { onMount } from "svelte";

  let vid = "./videos/loki.mp4";
  let img = "./img/sp.jpg";
  let loading = false;
  const unsubscribe = isOpen.subscribe(() => {});

  onMount(() => {
    loading = true;
    setTimeout(() => {
      loading = false;
    }, 1000);
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
    localStorage.removeItem("is_member");
  }
</script>

{#if $isOpen}
  <NewPostModal />
{/if}

<div class=" 2xl:w-3/5 w-full flex flex-col">
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

  <div class="mt-16  text-gray-200  pr-1  flex flex-col  justify-between pb-2">
    <div class=" pl-4 flex justify-between  items-center">
      <div class="font-bold">Your feed</div>
      <div class="flex">
        <button
          class="bg-blue-500 px-4 py-2 mr-1  rounded-md font-bold hover:bg-blue-400 focus:outline-none"
          >Create community</button
        >
        <button
          class="bg-red-500 px-4 py-2  rounded-md font-bold hover:bg-red-400 focus:outline-none"
          on:click|preventDefault={() => isOpen.set(true)}>New post</button
        >
      </div>
    </div>

    {#if !loading}
      <div id="feed" class="pl-1 mt-6 flex flex-col ">
        <a
          href="#/c/entertainment/p/s12dsf45s"
          class="bg-gray-800 hover:bg-gray-700 cursor-pointer mt-2 p-2 rounded-md"
        >
          <div id="header" class="flex items-center text-sm">
            <div class="flex items-center">
              <div class="h-6 w-6  rounded-full flex justify-center">
                <img
                  src="https://images.unsplash.com/photo-1562488780-42dd3b5fc171?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMzA1MTZ8MHwxfGFsbHx8fHx8fHx8fDE2MjEwNjgxMjI&ixlib=rb-1.2.1&q=80&w=200"
                  class="rounded-full object-cover"
                  alt=""
                />
              </div>
              <a href="#/c/entertainment" class="px-1 hover:underline"
                >c/entertainment</a
              >
            </div>
            <div class="pr-1 pl-1 text-gray-400">.</div>
            <div class="text-gray-400">
              Posted by <a href="#/u/sami barouni" class="hover:underline"
                >u/sami barouni</a
              > 14 hours ago
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
          href="#/c/sports/p/a47sd55sd"
          class="bg-gray-800 hover:bg-gray-700 cursor-pointer mt-2 p-2 rounded-md"
        >
          <div id="header" class="flex items-center text-sm">
            <div class="flex items-center">
              <div class="h-6 w-6  rounded-full flex justify-center">
                <img
                  src="https://images.unsplash.com/photo-1484482340112-e1e2682b4856?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMzA1MTZ8MHwxfGFsbHx8fHx8fHx8fDE2MjEwNjY5Njg&ixlib=rb-1.2.1&q=80&w=400"
                  class="rounded-full object-cover"
                  alt=""
                />
              </div>

              <a href="#/c/sports" class="px-1 hover:underline">c/sports</a>
            </div>
            <div class="pr-1 pl-1 text-gray-400">.</div>
            <div class="text-gray-400">
              Posted by <a href="#/u/Geralt123" class="hover:underline"
                >u/Geralt123</a
              > 1 hour ago
            </div>
          </div>
          <div>
            <div class="pt-1 pb-1">Title of this post</div>
            <div>
              <img src={img} alt="" />
            </div>
          </div>
          <Footer likes="2k" comments="4k" />
        </a>

        <a
          href="#/c/marvel/p/sdf111sd44448"
          class="bg-gray-800 hover:bg-gray-700 cursor-pointer mt-2 p-2 rounded-md"
        >
          <div id="header" class="flex items-center text-sm">
            <div class="flex items-center">
              <div
                class="h-6 w-6  rounded-full
              flex justify-center"
              >
                <img
                  src=" https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMzA1MTZ8MHwxfGFsbHx8fHx8fHx8fDE2MjAw=200"
                  class="rounded-full object-cover"
                  alt=""
                />
              </div>
              <a href="#/c/marvel" class="px-1 hover:underline">c/marvel</a>
            </div>
            <div class="pr-1 pl-1 text-gray-400">.</div>
            <div class="text-gray-400">
              Posted by <a href="#/u/yennefer" class="hover:underline"
                >u/yennefer</a
              > 3 hours ago
            </div>
          </div>
          <div>
            <div class="pt-1 pb-1">Title of this video post</div>
            <div>
              <video src={vid} controls autoplay muted />
            </div>
          </div>
          <Footer likes="11k" comments="5k" />
        </a>
      </div>
    {:else}
      <div class="flex items-center justify-center mt-12">
        <img src="./img/spinner.gif" alt="" class="h-14  w-14" />
      </div>
    {/if}
  </div>
</div>
