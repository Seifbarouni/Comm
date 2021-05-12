<script>
  import LeftSidebar from "./LeftSidebar.svelte";
  import Feed from "./Feed.svelte";
  import RightPanel from "./RightPanel.svelte";
  import LoginRegister from "./LoginRegister.svelte";
  import { user } from "../stores";
  import { onMount } from "svelte";

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
</script>

<svelte:head>
  <title>Comm | Home</title>
</svelte:head>
{#if $user.isAuthenticated}
  <LeftSidebar />
  <Feed />
  <RightPanel />
{:else}
  <LoginRegister />
{/if}
