<script>
  export let user = "";
  import Footer from "./Footer.svelte";
</script>

<div class=" 2xl:w-3/5 w-full flex flex-col mb-2">
  <div class="pt-6 self-center w-full px-1 flex items-center justify-center">
    <input
      type="text"
      class="bg-gray-600 px-2 py-2 w-full focus:outline-none text-white rounded-md placeholder-gray-200"
      placeholder="Search for users or communities"
    />

    <div class="pl-2 h-8 w-8 pt-1 rounded-full  xl:hidden">
      <img src="./img/user.svg" alt="user" />
    </div>
  </div>

  <div
    class="bg-gray-800 hover:bg-gray-700 cursor-pointer  p-2 rounded-md text-gray-200 mr-1 ml-1 mt-16"
  >
    <div id="header" class="flex items-center text-sm">
      <div class="flex items-center">
        <div class="h-6 w-6 bg-indigo-400 rounded-full" />
        <a href="#/c/entertainment" class="px-1 hover:underline"
          >c/entertainment</a
        >
      </div>
      <div class="pr-1 pl-1 text-gray-400">.</div>
      <div class="text-gray-400">
        Posted by <a href="#/u/{user}" class="hover:underline">u/{user}</a> 14 hours
        ago
      </div>
    </div>
    <div id="txt" class="pt-1">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
      <a
        href="https://yts.mx/"
        target="_blank"
        class="text-blue-600 hover:underline">https://yts.mx/</a
      >
    </div>
    <Footer likes="2.4k" comments="1k" />
  </div>
  <div
    class="bg-gray-800 hover:bg-gray-700 cursor-pointer  p-2 rounded-md text-gray-200 mr-1 ml-1 mt-2"
  >
    <div id="header" class="flex items-center text-sm">
      <div class="flex items-center">
        <div class="h-6 w-6 bg-indigo-400 rounded-full" />
        <a href="#/c/entertainment" class="px-1 hover:underline"
          >c/entertainment</a
        >
      </div>
      <div class="pr-1 pl-1 text-gray-400">.</div>
      <div class="text-gray-400">
        Posted by <a href="#/u/{user}" class="hover:underline">u/{user}</a> 14 hours
        ago
      </div>
    </div>
    <div id="txt" class="pt-1">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
      <a
        href="https://yts.mx/"
        target="_blank"
        class="text-blue-600 hover:underline">https://yts.mx/</a
      >
    </div>
    <Footer likes="2.4k" comments="1k" />
  </div>
</div>
