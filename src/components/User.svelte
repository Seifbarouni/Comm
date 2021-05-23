<script>
  import LeftSidebar from "./LeftSidebar.svelte";
  import UserFeed from "./UserFeed.svelte";
  import UserRightPanel from "./UserRightPanel.svelte";
  import LoginRegister from "./LoginRegister.svelte";
  import { user } from "../stores";
  import { onMount } from "svelte";

  export let params = {};
  let userPosts = [];

  function getPostsByUser() {
    fetch(`http://localhost:9000/p/getPostsByUser/${params.username}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${$user.jwt}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        userPosts = data;
        userPosts = userPosts;
      });
  }

  onMount(() => {
    window.scrollTo(0, 0);
    let cachedData = localStorage.getItem("us");
    if (cachedData) {
      cachedData = JSON.parse(cachedData);
      let expired = parseInt(Date.now() / 1000) - cachedData.cacheTime > 15000;
      if (cachedData && !expired) {
        user.set(cachedData.data);
      }
    }
    getPostsByUser();
  });
  $: {
    getPostsByUser();
  }
</script>

<svelte:head>
  <title>Comm | u/{params.username}</title>
</svelte:head>
{#if $user.isAuthenticated}
  <LeftSidebar margin="mt-6" />
  <UserFeed {userPosts} />
  <UserRightPanel username={params.username} />
{:else}
  <LoginRegister />
{/if}
