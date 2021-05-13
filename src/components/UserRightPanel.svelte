<script>
  import ExploreCommunities from "./ExploreCommunities.svelte";

  export let user = "";
</script>

<div class=" 2xl:w-2/5 w-1/3  hidden lg:flex lg:flex-col">
  <div class=" pt-7 flex relative">
    <div class="h-8 w-8  rounded-full right-0 absolute">
      <img src="./img/user.svg" alt="user" />
    </div>
  </div>
  <div class="mt-24 pt-1 pl-4  ">
    <div class="text-gray-200 bg-gray-800 rounded-md p-2 pb-4 flex flex-col">
      <div class=" flex items-center pt-2">
        <div class="h-16 w-16 ">
          <img src="./img/user.svg" alt="user" />
        </div>
        <div class="flex flex-col px-2 text-sm ">
          <span class="font-bold">{user}</span>
          <span class="text-gray-400">@14d5s26s</span>
        </div>
      </div>
      <div class="flex text-sm pt-2">
        <div>
          <span class="font-bold">3.5k</span><span class="text-gray-400 px-2"
            >followers</span
          >
        </div>
        <div class="px-4">
          <span class="font-bold">1k</span><span class="text-gray-400 px-2"
            >following</span
          >
        </div>
      </div>
      <div class="pt-2 text-gray-400 pb-2">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium
        ducimus tenetur officia ut, perferendis dolores eum! Voluptatum totam.
      </div>
      <div
        class="bg-red-500 hover:bg-red-400 cursor-pointer  text-center px-1 py-1 rounded-md"
      >
        Follow
      </div>
    </div>
  </div>
  <ExploreCommunities />
</div>
