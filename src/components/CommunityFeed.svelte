<script>
  import { onMount } from "svelte";
  import PostTextOnly from "./PostTextOnly.svelte";
  import PostTextImage from "./PostTextImage.svelte";
  import PostTextVideo from "./PostTextVideo.svelte";
  import {
    user,
    myCommunities,
    myExploreCommunities,
    isMember,
  } from "../stores.js";
  import LogoutorProfileFeed from "./LogoutorProfileFeed.svelte";

  export let communityName = "";
  export let imgUrl;
  export let members;
  export let createdAt;
  export let about;
  export let communityId;
  let myComms = [];
  let myExploreComms = [];
  export let communityPosts = [];

  function makejRequest(url) {
    fetch(`${url}/${communityId}/${$user.userId}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${$user.jwt}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data != "Success") alert(data);
        else {
          localStorage.removeItem("my_comm");
          localStorage.removeItem("exp_comm");
        }
      });
  }

  function joinCommunity() {
    $isMember = !$isMember;
    members++;
    myComms = $myCommunities;
    myComms.push({
      id: communityId,
      name: communityName,
      imgUrl: imgUrl,
      members: members,
      about: about,
      createdAt: createdAt,
    });
    myCommunities.set(myComms);
    myExploreCommunities.set(
      $myExploreCommunities.filter((comm) => comm.id != communityId)
    );
    makejRequest("http://localhost:9000/j/joinCommunity");
    updateLocalStorage();
  }
  function leaveCommunity() {
    $isMember = !$isMember;
    members--;
    myExploreComms = $myExploreCommunities;
    myExploreComms.push({
      id: communityId,
      name: communityName,
      imgUrl: imgUrl,
      members: members,
      about: about,
      createdAt: createdAt,
    });
    myExploreCommunities.set(myExploreComms);
    myCommunities.set($myCommunities.filter((comm) => comm.id != communityId));
    makejRequest("http://localhost:9000/j/leaveCommunity");
    updateLocalStorage();
  }

  onMount(() => {
    $isMember = JSON.parse(localStorage.getItem("is_member"));
  });

  function updateLocalStorage() {
    let cachedData = localStorage.getItem("my_comm");
    cachedData = JSON.parse(cachedData);
    cachedData.data = $myCommunities;
    localStorage.setItem("my_comm", JSON.stringify(cachedData));
    cachedData = localStorage.getItem("exp_comm");
    cachedData = JSON.parse(cachedData);
    cachedData.data = $myExploreCommunities;
    localStorage.setItem("exp_comm", JSON.stringify(cachedData));
    localStorage.setItem("is_member", JSON.stringify($isMember));
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
    localStorage.removeItem("my_comm");
    localStorage.removeItem("exp_comm");
    localStorage.removeItem("is_member");
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

    <LogoutorProfileFeed />
  </div>
  <div
    class="mt-16 mb-2  text-gray-200  flex flex-col  justify-between pb-2 px-1"
  >
    <div class="bg-gray-800 text-gray-200 rounded-md flex flex-col pb-2">
      <div class="rounded-t-md bg-contain">
        <img
          src="./img/bg.jpg"
          class="rounded-md h-20 w-full object-cover"
          alt=""
        />
      </div>
      <div class="flex relative">
        <span>
          <div
            class="h-24 w-24 rounded-full flex justify-center absolute -top-9 ml-2"
          >
            <img src={imgUrl} class=" object-cover rounded-full" alt="" />
          </div>
        </span>
        <span class="ml-28 flex flex-col">
          <span class="font-bold text-lg">c/{communityName}</span>
          <span class="text-xs text-gray-400">c/{communityName}</span>
        </span>
        {#if $isMember == true}
          <button
            class="border-2 border-red-500 px-6  py-1 rounded-2xl mt-1 mr-2 font-bold  focus:outline-none self-center absolute right-0"
            on:click={leaveCommunity}>Joined</button
          >
        {:else}
          <button
            class="bg-red-500 hover:bg-red-400
             px-6  py-1 rounded-2xl mt-1 mr-2 font-bold  focus:outline-none self-center absolute right-0"
            on:click={joinCommunity}>Join</button
          >
        {/if}
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
        <span class="mt-2">{about}</span>
        <span class="mt-2 font-bold"
          >{members}<span class="text-gray-400 ml-1 font-normal"
            >member{members == 1 ? "" : "s"}</span
          ></span
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
          <span>Created {createdAt}</span>
        </span>
      </div>
    </div>
  </div>
  <div class="pl-1 mt-2 pr-1 flex flex-col text-gray-200">
    {#each communityPosts as post}
      {#if post.image != null}
        <PostTextImage
          user={post.user}
          community={post.community}
          id={post.id}
          createdAt={post.createdAt}
          textContent={post.textContent}
          image={post.image}
          likes={post.likes}
          comments={post.comments}
          commImgUrl={imgUrl}
          hover="hover:bg-gray-700"
        />
      {:else if post.video != null}
        <PostTextVideo
          user={post.user}
          community={post.community}
          id={post.id}
          createdAt={post.createdAt}
          textContent={post.textContent}
          video={post.video}
          likes={post.likes}
          comments={post.comments}
          commImgUrl={imgUrl}
          hover="hover:bg-gray-700"
        />
      {:else}
        <PostTextOnly
          user={post.user}
          community={post.community}
          id={post.id}
          createdAt={post.createdAt}
          textContent={post.textContent}
          likes={post.likes}
          comments={post.comments}
          commImgUrl={imgUrl}
          hover="hover:bg-gray-700"
        />
      {/if}
    {:else}
      <div class="text-center">No posts</div>
    {/each}
  </div>
</div>
