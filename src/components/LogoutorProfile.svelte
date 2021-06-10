<script>
  import { user } from "../stores";

  let isOpen = false;
  function OpenOrClose() {
    isOpen = !isOpen;
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
</script>

<div class=" pt-7 flex relative">
  <div
    class="h-8 w-8  rounded-full right-0 absolute focus:outline-none cursor-pointer"
  >
    <div on:click={OpenOrClose}>
      <img src="./img/user.svg" alt="user" />
    </div>
    {#if isOpen == true}
      <div
        class="origin-top-right absolute right-0 mt-1 w-52 rounded-md shadow-2xl bg-gray-700 text-gray-200  focus:outline-none"
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
</div>
