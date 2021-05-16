<script>
  import RightPanel from "./RightPanel.svelte";
  import LeftSidebar from "./LeftSidebar.svelte";
  import CommunityFeed from "./CommunityFeed.svelte";
  import LoginRegister from "./LoginRegister.svelte";
  import { user, myCommunities, isMember } from "../stores";
  import { onMount } from "svelte";

  export let params = {};
  let commData = {};
  let myHeaders = new Headers();
  let loading = false;
  let commName = params.community;
  async function getCommunity() {
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${$user.jwt}`);
    const res = await fetch(`http://localhost:9000/community/${commName}`, {
      headers: myHeaders,
    });
    myHeaders = {};
    return await res.json();
  }
  function checkIfMember() {
    $myCommunities = JSON.parse(localStorage.getItem("my_comm")).data;
    let res = $myCommunities.find((comm) => comm.name == params.community);
    if (res) $isMember = true;
    else $isMember = false;
    localStorage.setItem("is_member", JSON.stringify($isMember));
  }
  onMount(() => {
    loading = true;
    window.scrollTo(0, 0);
    let cachedData = localStorage.getItem("us");
    if (cachedData) {
      cachedData = JSON.parse(cachedData);
      let expired = parseInt(Date.now() / 1000) - cachedData.cacheTime > 15000;
      if (cachedData && !expired) {
        user.set(cachedData.data);
      }
    }
    getCommunity().then((data) => {
      commData = data;
    });
    checkIfMember();
    loading = false;
  });
  $: {
    loading = true;
    fetch(`http://localhost:9000/community/${params.community}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${$user.jwt}`,
      },
    })
      .then((res) => res.json())
      .then((data) => (commData = data));
    checkIfMember();
    loading = false;
  }
</script>

<svelte:head>
  <title>Comm | c/{params.community}</title>
</svelte:head>

{#if $user.isAuthenticated}
  <LeftSidebar />
  {#if !loading}
    <CommunityFeed
      communityName={params.community}
      imgUrl={commData.imgUrl}
      createdAt={commData.createdAt}
      members={commData.members}
      about={commData.about}
      communityId={commData.id}
    />
  {:else}
    <div class="flex items-center justify-center 2xl:w-3/5">
      <img src="./img/spinner.gif" alt="" class="h-14  w-14" />
    </div>
  {/if}

  <RightPanel />
{:else}
  <LoginRegister />
{/if}
