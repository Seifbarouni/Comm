<script>
  import NewPostModal from "./NewPostModal.svelte";
  import { isOpen, user, myCommunities } from "../stores.js";
  import { onMount } from "svelte";
  import PostTextOnly from "./PostTextOnly.svelte";
  import PostTextImage from "./PostTextImage.svelte";
  import PostTextVideo from "./PostTextVideo.svelte";

  let loading = false;
  //const unsubscribe = isOpen.subscribe(() => {});

  onMount(() => {
    loading = true;
    $myCommunities.forEach((community) => {
      // make the get request for posts in each community
    });
    loading = false;
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
        {#if $myCommunities.length != 0}
          <button
            class="bg-red-500 px-4 py-2  rounded-md font-bold hover:bg-red-400 focus:outline-none"
            on:click|preventDefault={() => ($isOpen = true)}>New post</button
          >
        {/if}
      </div>
    </div>

    {#if !loading}
      <div id="feed" class="pl-1 mt-6 flex flex-col ">
        <PostTextOnly />
        <PostTextImage />
        <PostTextVideo />
      </div>
    {:else}
      <div class="flex items-center justify-center mt-12">
        <img src="./img/spinner.gif" alt="" class="h-14  w-14" />
      </div>
    {/if}
  </div>
</div>
