<script>
  import ExploreCommunities from "./ExploreCommunities.svelte";
  import { myCommunities, myExploreCommunities, isMember } from "../stores";
  import { onMount } from "svelte";
  import LogoutorProfile from "./LogoutorProfile.svelte";

  export let community = "";
  let comm = {};
  function getComm(community) {
    comm = $myCommunities.find((comm) => comm.name == community);
    if (comm == undefined)
      comm = $myExploreCommunities.find((comm) => comm.name == community);
  }
  onMount(() => {
    getComm(community);
  });
</script>

<div class=" 2xl:w-2/5 w-1/3  hidden lg:flex lg:flex-col">
  <LogoutorProfile />
  <div class="mt-24 pt-1 pl-4 ">
    <div class="text-gray-200 bg-gray-800 rounded-md p-2 flex flex-col">
      <div class=" flex items-center pt-2">
        <div class="h-16 w-16 rounded-full flex justify-center ml-1">
          <img src={comm.imgUrl} class=" object-cover rounded-full" alt="" />
        </div>
        <div class="flex flex-col px-2 text-sm">
          <a href="#/c/{comm.name}" class="font-bold hover:underline"
            >c/{comm.name}</a
          >
        </div>
      </div>
      <div class="pt-2 text-gray-400">
        {comm.about}
      </div>
      <div class="flex text-sm pt-2">
        <div>
          <span class="font-bold">{comm.members} </span><span
            class="text-gray-400 px-2">members</span
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
        <span>Created {comm.createdAt}</span>
      </span>
      {#if $isMember == true}
        <div
          class="border-2 border-red-500 cursor-pointer  text-center px-1 py-1 rounded-md mb-2"
        >
          Joined
        </div>
      {:else}
        <div
          class="bg-red-500 hover:bg-red-400 cursor-pointer  text-center px-1 py-1 rounded-md mb-2"
        >
          Join
        </div>
      {/if}
    </div>
  </div>
  <ExploreCommunities />
</div>
