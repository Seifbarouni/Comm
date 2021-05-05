<script>
  import LeftSidebar from "./LeftSidebar.svelte";
  import UserFeed from "./UserFeed.svelte";
  import UserRightPanel from "./UserRightPanel.svelte";
  export let params = {};
</script>

<svelte:head>
  <title>Comm | u/{params.username}</title>
</svelte:head>

<LeftSidebar />
<UserFeed user={params.username} />
<UserRightPanel user={params.username} />
