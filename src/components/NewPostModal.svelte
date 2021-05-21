<script>
  import { isOpen, user, myCommunities } from "../stores.js";
  import moment from "moment";

  const unsubscribe = isOpen.subscribe((value) => {});
  let text = "";
  let files;
  let community = "";
  function closeSelf() {
    isOpen.set(false);
  }
  function handleSubmit() {
    let formData = new FormData();
    if (files != undefined) formData.append("file", files[0]);
    fetch(
      `http://localhost:9000/p/addPost/${community}/${
        $user.username
      }/${moment().format("YYYY-MM-DD HH:m:s")}/${text}/`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${$user.jwt}`,
        },
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data != "Success") alert(data);
      });
  }
</script>

<div class="fixed z-10 inset-0 overflow-y-auto text-gray-200">
  <div
    class="flex items-end justify-center min-h-screen text-center sm:block sm:p-0"
  >
    <div
      class="fixed inset-0 bg-black bg-opacity-75 transition-opacity"
      aria-hidden="true"
    />
    <span
      class="hidden sm:inline-block sm:align-middle sm:h-screen"
      aria-hidden="true">&#8203;</span
    >
    <div
      class="inline-block align-bottom bg-gray-700 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full p-4"
    >
      <div class="font-bold text-lg">Add a new post</div>
      <form
        action=""
        class="flex flex-col mt-2"
        on:submit|preventDefault={handleSubmit}
        enctype="multipart/form-data"
      >
        <label for="comm">Choose a community:</label>

        <select
          id="comm"
          class="bg-gray-600 px-1 py-1 rounded-md focus:outline-none mt-1"
          required
          bind:value={community}
        >
          <option value="">Select community</option>
          {#each $myCommunities as comm}
            <option value={comm.name}>c/{comm.name}</option>
          {/each}
        </select>

        <textarea
          cols="30"
          rows="4"
          class="bg-gray-600 mt-2 rounded-md px-1 py-1 focus:outline-none"
          placeholder="Type whatever you want"
          required
          bind:value={text}
        />

        <div class="mt-1 flex flex-col">
          <label for="files" class="py-1">Add image or video</label>
          <input
            type="file"
            id="files"
            name="files"
            accept="image/*,video/*"
            bind:files
          />
        </div>
        <div
          class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse bg-gray-700"
        >
          <button
            type="submit"
            class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-500 text-base font-medium  hover:bg-red-400 focus:outline-none   focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
            >Post</button
          >
          <button
            type="button"
            class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset- sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            on:click|preventDefault={closeSelf}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  </div>
</div>
