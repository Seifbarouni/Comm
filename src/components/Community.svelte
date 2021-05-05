<script>
  import RightPanel from "./RightPanel.svelte";
  import LeftSidebar from "./LeftSidebar.svelte";
  import CommunityFeed from "./CommunityFeed.svelte";
  export let params = {};
</script>

<svelte:head>
  <title>Comm | c/{params.community}</title>
</svelte:head>

<LeftSidebar />
<CommunityFeed community={params.community} />
<RightPanel />
