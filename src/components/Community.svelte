<script>
  import RightPanel from "./RightPanel.svelte";
  import LeftSidebar from "./LeftSidebar.svelte";
  import CommunityFeed from "./CommunityFeed.svelte";
  import { onMount } from "svelte";

  export let params = {};

  onMount(() => {
    window.scrollTo(0, 0);
  });
</script>

<svelte:head>
  <title>Comm | c/{params.community}</title>
</svelte:head>

<LeftSidebar />
<CommunityFeed community={params.community} />
<RightPanel />
