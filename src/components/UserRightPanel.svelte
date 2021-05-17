<script>
  import ExploreCommunities from "./ExploreCommunities.svelte";
  import { user } from "../stores";
  import { onMount } from "svelte";

  export let username = "";
  let userData = {};
  let isFollowing = true;
  let loading = false;

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
  function follow() {
    isFollowing = !isFollowing;
    userData.followers++;
    fetch(`http://localhost:9000/follow/${$user.userId}/${userData.id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${$user.jwt}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data != "Success") alert(data);
      });
    updateMyProfileData(1);
  }
  function unfollow() {
    isFollowing = !isFollowing;
    userData.followers--;
    fetch(`http://localhost:9000/unfollow/${$user.userId}/${userData.id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${$user.jwt}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data != "Success") alert(data);
      });
    updateMyProfileData(0);
  }

  function updateMyProfileData(incOrDec) {
    let cachedData = localStorage.getItem("us");
    cachedData = JSON.parse(cachedData);
    if (incOrDec == 1) {
      cachedData.data.following++;
      $user.following++;
      console.log($user.following);
    } else {
      cachedData.data.following--;
      $user.following--;
      console.log($user.following);
    }
    localStorage.setItem("us", JSON.stringify(cachedData));
  }
  onMount(() => {
    loading = true;
    fetch(`http://localhost:9000/u/${username}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${$user.jwt}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        userData = data;
        fetch(
          `http://localhost:9000/isFollowing/${$user.userId}/${userData.id}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${$user.jwt}`,
            },
          }
        )
          .then((res) => res.json())
          .then((data) => (isFollowing = data));
      });
    loading = false;
  });
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
  {#if loading == true}
    <div class="flex items-center justify-center mt-36 mb-12">
      <img src="./img/spinner.gif" alt="" class="h-14  w-14" />
    </div>
  {:else}
    <div class="mt-24 pt-1 pl-4  ">
      <div class="text-gray-200 bg-gray-800 rounded-md p-2 pb-4 flex flex-col">
        <div class=" flex items-center pt-2">
          <div class="h-16 w-16 ">
            <img src="./img/user.svg" alt="user" />
          </div>
          <div class="flex flex-col px-2 text-sm ">
            <span class="font-bold">{userData.username}</span>
            <span class="text-gray-400">{userData.email}</span>
          </div>
        </div>
        <div class="flex text-sm pt-2">
          <div>
            <span class="font-bold">{userData.followers}</span><span
              class="text-gray-400 px-2"
              >follower{userData.followers > 1 ? "s" : ""}</span
            >
          </div>
          <div class="px-4">
            <span class="font-bold">{userData.following}</span><span
              class="text-gray-400 px-2">following</span
            >
          </div>
        </div>
        <div class="pt-2 text-gray-400 pb-2">
          {userData.bio}
        </div>
        {#if $user.username != username}
          {#if isFollowing == true}
            <button
              class="border-2 border-red-500 cursor-pointer  text-center px-1 py-1 rounded-md focus:outline-none"
              on:click={unfollow}
            >
              Following
            </button>
          {:else}
            <button
              class="bg-red-500 hover:bg-red-400 cursor-pointer  text-center px-1 py-1 rounded-md focus:outline-none"
              on:click={follow}
            >
              Follow
            </button>
          {/if}
        {/if}
      </div>
    </div>
  {/if}

  <ExploreCommunities />
</div>
