<script>
  import LeftSidebar from "./LeftSidebar.svelte";
  import UserFeed from "./UserFeed.svelte";
  import UserRightPanel from "./UserRightPanel.svelte";
  import { onMount } from "svelte";
  import LoginRegister from "./LoginRegister.svelte";
  import { user } from "../stores";

  export let params = {};

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
  });
</script>

<svelte:head>
  <title>Comm | u/{params.username}</title>
</svelte:head>
{#if $user.isAuthenticated}
  <LeftSidebar />
  <UserFeed user={params.username} />
  <UserRightPanel username={params.username} />
{:else}
  <LoginRegister />
{/if}
