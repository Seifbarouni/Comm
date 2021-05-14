<script>
  import { user, myCommunities } from "../stores.js";
  import { onMount } from "svelte";
  export let margin = "mt-24";
  let myHeaders = new Headers();
  let communities = [];
  let expired;
  function getMyCommunities() {
    function makeRequest() {
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Authorization", `Bearer ${$user.jwt}`);
      fetch(`http://localhost:9000/mycommunities/${$user.userId}`, {
        headers: myHeaders,
      })
        .then((res) => res.json())
        .then((data) => {
          data.forEach((element) => {
            communities.push(element);
            communities = communities;
          });
          myCommunities.set(communities);
          let dataToBeCached = {
            data: $myCommunities,
            cacheTime: parseInt(Date.now() / 1000),
          };
          myCommunities.subscribe((value) => {
            if (value)
              localStorage.setItem("my_comm", JSON.stringify(dataToBeCached));
          });
        });
    }
    let cacheLife = 900;
    let cachedData = localStorage.getItem("my_comm");
    if (cachedData) {
      cachedData = JSON.parse(cachedData);
      expired = parseInt(Date.now() / 1000) - cachedData.cacheTime > cacheLife;
    }
    if (cachedData && !expired) {
      $myCommunities = cachedData.data;
    } else {
      makeRequest();
    }
  }
  onMount(() => {
    getMyCommunities();
  });
</script>

<div
  class="text-gray-200 w-auto lg:text-base text-sm sm:flex sm:flex-col mr-4 hidden"
>
  <a href="#/" class="text-red-500  pt-6 pl-2">
    <img src="./img/logo.png" alt="" height="40px" width="40px" />
  </a>

  <div class="hidden 2xl:flex   pl-2 font-bold mt-16 pt-2">
    Your communities
  </div>
  <div class="2xl:hidden  {margin} pt-2 pl-2" />
  <div class="flex flex-col pl-2 pt-4">
    {#each $myCommunities as community}
      <a
        href="#/c/{community.name}"
        class="flex items-center pt-6 cursor-pointer"
      >
        <div class="h-8 w-8 rounded-full flex justify-center">
          <img
            src={community.imgUrl}
            class=" object-cover rounded-full"
            alt=""
          />
        </div>
        <div class="hidden 2xl:flex  px-2 font-bold hover:underline">
          {community.name}
        </div>
      </a>
    {/each}
  </div>
</div>

<!-- 
  to get photo url
  https://api.unsplash.com/photos/PHOTOID/?client_id=34R6E3W0ASu2wvyCxpt4FlQaFHQwxTsOaBxr1CxCSFA
 -->
