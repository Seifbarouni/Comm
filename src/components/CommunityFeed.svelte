<script>
  import Footer from "./Footer.svelte";
  export let community = "";
</script>

<div class=" 2xl:w-3/5 w-full flex flex-col mb-2">
  <div class="pt-6 self-center w-full  flex  justify-center items-center">
    <a href="#/" class="text-red-500 pt-1 pr-2 h-10 w-10 sm:hidden">
      <img src="./img/logo.png" alt="" />
    </a>
    <div class="sm:w-full w-5/6">
      <input
        type="text"
        class="bg-gray-600 px-2 py-2 w-full  focus:outline-none text-white rounded-md placeholder-gray-200"
        placeholder="Search for users or communities"
      />
    </div>

    <div class="pl-2 h-10 w-10 pt-1 rounded-full  lg:hidden">
      <img src="./img/user.svg" alt="user" />
    </div>
  </div>
  <div
    class="mt-16 mb-2  text-gray-200  flex flex-col  justify-between pb-2 px-1"
  >
    <div class="bg-gray-800 text-gray-200 rounded-md flex flex-col pb-2">
      <div class="w-full bg-black h-40  rounded-t-md" />
      <div class="flex relative">
        <span>
          <div
            class="h-24 w-24 ml-2 bg-yellow-400 rounded-full absolute -top-8"
          />
        </span>
        <span class="ml-28 flex flex-col">
          <span class="font-bold text-lg">c/{community}</span>
          <span class="text-xs text-gray-400">c/{community}</span>
        </span>
      </div>
      <div class="mt-8 ml-2 flex flex-col">
        <span class="text-gray-400">About Community</span>
        <span class="mt-2"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          voluptatum optio quasi.</span
        >
        <div class="w-2/3 self-center mt-2 mb-1 border-b border-gray-600" />
        <span class="text-gray-400 mt-2">Created Sep 17, 2007</span>
      </div>
    </div>
  </div>
  <a
    href="#/c/{community}/p/s12dsqdxxf45s"
    class="bg-gray-800 hover:bg-gray-700 cursor-pointer  p-2 rounded-md text-gray-200 mr-1 ml-1 mt-2"
  >
    <div id="header" class="flex items-center text-sm">
      <div class="flex items-center">
        <div class="h-6 w-6 bg-indigo-400 rounded-full" />
        <a href="#/c/entertainment" class="px-1 hover:underline"
          >c/{community}</a
        >
      </div>
      <div class="pr-1 pl-1 text-gray-400">.</div>
      <div class="text-gray-400">
        Posted by <a href="#/u/seif" class="hover:underline">u/seif</a> 14 hours
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
  </a>
  <a
    href="#/c/{community}/p/s12dsf45sd4s"
    class="bg-gray-800 hover:bg-gray-700 cursor-pointer  p-2 rounded-md text-gray-200 mr-1 ml-1 mt-2"
  >
    <div id="header" class="flex items-center text-sm">
      <div class="flex items-center">
        <div class="h-6 w-6 bg-indigo-400 rounded-full" />
        <a href="#/c/entertainment" class="px-1 hover:underline"
          >c/{community}</a
        >
      </div>
      <div class="pr-1 pl-1 text-gray-400">.</div>
      <div class="text-gray-400">
        Posted by <a href="#/u/mark" class="hover:underline">u/mark</a> 14 hours
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
  </a>
</div>
