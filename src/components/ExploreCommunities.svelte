<script>
  import { onMount } from "svelte";
  import { user } from "../stores.js";

  let myHeaders = new Headers();
  let communities = [];
  let loading = false;
  async function getMyExploreData() {
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${$user.jwt}`);
    const res = await fetch(`http://localhost:9000/explore/${$user.userId}`, {
      headers: myHeaders,
    });
    return await res.json();
  }
  onMount(() => {
    loading = true;
    getMyExploreData().then((data) => {
      data.forEach((element) => {
        communities.push(element);
        communities = communities;
      });
    });
    loading = false;
  });
</script>

<div
  class="bg-gray-800 mt-4 ml-4 mb-2 rounded-md p-2 flex flex-col text-gray-200 "
>
  <div class="pt-1 pb-2 font-bold">Explore communities and topics</div>
  <div>
    <hr />
  </div>
  <div>
    <div class="flex flex-col  pb-4">
      {#if !loading}
        {#each communities as community}
          <a
            href="#/c/{community.name}"
            class="flex items-center mt-4 hover:bg-gray-600 px-1 py-1 rounded-md cursor-pointer"
          >
            <div class="h-8 w-8 rounded-full flex justify-center">
              <img
                src={community.imgUrl}
                class=" object-cover rounded-full object-right"
                alt={community.name}
              />
            </div>
            <div class="px-2 font-bold">{community.name}</div>
          </a>
        {/each}
      {:else}
        <div class="flex items-center justify-center mt-12">
          <img src="./img/spinner.gif" alt="" class="h-14  w-14" />
        </div>
      {/if}
    </div>
  </div>
</div>
