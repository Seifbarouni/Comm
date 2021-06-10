<script>
  import { onDestroy } from "svelte";

  import { user, isLogoutOpen } from "../stores.js";

  function OpenOrClose() {
    $isLogoutOpen = !$isLogoutOpen;
  }
  function Logout() {
    user.set({
      isAuthenticated: false,
      username: "",
      userId: 0,
      bio: "",
      followers: 0,
      following: 0,
      jwt: "",
    });
    localStorage.removeItem("us");
    localStorage.removeItem("my_comm");
    localStorage.removeItem("exp_comm");
    localStorage.removeItem("is_member");
  }
  onDestroy(() => {
    isLogoutOpen.set(false);
  });
</script>

<div class="pl-2 h-10 w-10 pt-1 rounded-full  lg:hidden focus:outline-none">
  <div on:click={OpenOrClose} class="cursor-pointer">
    <img src="./img/user.svg" alt="user" />
  </div>
  {#if $isLogoutOpen == true}
    <div
      class=" absolute right-28 mt-2 w-44 rounded-md shadow-2xl bg-gray-700 text-gray-200  focus:outline-none"
    >
      <div class="" role="none">
        <a
          href="#/u/{$user.username}"
          class="block px-4 py-2 text-sm hover:bg-gray-600 rounded-md"
          >My profile</a
        >
        <button
          class="block w-full px-4 py-2 text-sm hover:bg-gray-600 rounded-md text-left focus:outline-none"
          on:click={Logout}>Logout</button
        >
      </div>
    </div>
  {/if}
</div>
