<script>
  import RightPanel from "./RightPanel.svelte";
  import LeftSidebar from "./LeftSidebar.svelte";
  import CommunityFeed from "./CommunityFeed.svelte";
  import LoginRegister from "./LoginRegister.svelte";
  import { user } from "../stores";
  import { onMount } from "svelte";

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
  <title>Comm | c/{params.community}</title>
</svelte:head>

{#if $user.isAuthenticated}
  <LeftSidebar />
  <CommunityFeed community={params.community} />
  <RightPanel />
{:else}
  <LoginRegister />
{/if}
