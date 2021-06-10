<script>
  import { user } from "../stores";
  import ExploreCommunities from "./ExploreCommunities.svelte";
  import LogoutorProfile from "./LogoutorProfile.svelte";
</script>

<div class=" 2xl:w-2/5 w-1/3  hidden lg:flex lg:flex-col">
  <LogoutorProfile />
  <div class="mt-24 pt-1 pl-4 ">
    <div class="text-gray-200 bg-gray-800 rounded-md p-2 flex flex-col">
      <div class=" flex items-center pt-2">
        <div class="h-16 w-16">
          <img src="./img/user.svg" alt="user" />
        </div>
        <div class="flex flex-col px-2 text-sm">
          <span class="font-bold">{$user.username}</span>
          <span class="text-gray-400">{$user.email}</span>
        </div>
      </div>
      <div class="flex text-sm pt-2">
        <div>
          <span class="font-bold">{$user.followers}</span><span
            class="text-gray-400 px-2"
            >follower{$user.followers == 1 ? "" : "s"}</span
          >
        </div>
        <div class="px-4">
          <span class="font-bold">{$user.following}</span><span
            class="text-gray-400 px-2">following</span
          >
        </div>
      </div>
      <div class="pt-2 text-gray-400 pb-2">{$user.bio}</div>
    </div>
  </div>
  <ExploreCommunities />
</div>
