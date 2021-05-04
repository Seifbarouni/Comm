<script>
  let vid = "./videos/loki.mp4";
  let img = "./img/sp.jpg";
</script>

<div class=" 2xl:w-3/5 w-full flex flex-col">
  <div class="pt-6 self-center w-full px-1 flex items-center justify-center">
    <input
      type="text"
      class="bg-gray-600 px-2 py-2 w-full focus:outline-none text-white rounded-md placeholder-gray-200"
      placeholder="Search by post or by community"
    />

    <div class="pl-2 h-8 w-8 pt-1 rounded-full  xl:hidden">
      <img src="./img/user.svg" alt="user" />
    </div>
  </div>
  <div class="mt-16  text-gray-200  pr-1  flex flex-col  justify-between pb-2">
    <div class=" pl-4 flex justify-between  items-center">
      <div class="font-bold">Your feed</div>
      <div>
        <button
          class="bg-red-500 px-4 py-2  rounded-md font-bold hover:bg-red-400"
          >New post</button
        >
      </div>
    </div>

    <div id="feed" class="pl-1 mt-6 flex flex-col ">
      <div
        class="bg-gray-800 hover:bg-gray-700 cursor-pointer mt-2 p-2 rounded-md"
      >
        <div id="header" class="flex items-center text-sm">
          <div class="flex items-center">
            <div class="h-6 w-6 bg-indigo-400 rounded-full" />
            <div class="px-1">c/entertainment</div>
          </div>
          <div class="pr-1 pl-1 text-gray-400">.</div>
          <div class="text-gray-400">Posted by u/MrShronk 14 hours ago</div>
        </div>
        <div id="txt" class="pt-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
          <a
            href="https://yts.mx/"
            target="_blank"
            class="text-blue-600 hover:underline">https://yts.mx/</a
          >
        </div>
        <div id="footer" class="flex items-center pt-3">
          <span class="px-1">
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              ><path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
              /></svg
            >
          </span>
          <span class="text-sm px-1 md:text-xs">2.4k</span>
          <span class="px-1">
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              ><path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"
              /></svg
            >
          </span>
          <span class="flex text-sm items-center px-2 md:text-xs">
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              ><path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              /></svg
            > <span class="px-1">1k</span> comments
          </span>
          <span class="text-sm flex items-center px-1 md:text-xs">
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              ><path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
              /></svg
            > <span class="px-1">share</span>
          </span>
        </div>
      </div>
      <div
        class="bg-gray-800 hover:bg-gray-700 cursor-pointer mt-2 p-2 rounded-md"
      >
        <div id="header" class="flex items-center text-sm">
          <div class="flex items-center">
            <div class="h-6 w-6 bg-yellow-400 rounded-full" />
            <div class="px-1">c/sports</div>
          </div>
          <div class="pr-1 pl-1 text-gray-400">.</div>
          <div class="text-gray-400">Posted by u/sb 1 hour ago</div>
        </div>
        <div>
          <div class="pt-1 pb-1">Title of this post</div>
          <div>
            <img src={img} alt="" />
          </div>
        </div>
        <div id="footer" class="flex items-center pt-3">
          <span class="px-1">
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              ><path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
              /></svg
            >
          </span>
          <span class="text-sm px-1 md:text-xs">2k</span>
          <span class="px-1">
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              ><path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"
              /></svg
            >
          </span>
          <span class="flex text-sm items-center px-2 md:text-xs">
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              ><path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              /></svg
            > <span class="px-1">900</span> comments
          </span>
          <span class="text-sm flex items-center px-1 md:text-xs">
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              ><path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
              /></svg
            > <span class="px-1">share</span>
          </span>
        </div>
      </div>

      <div
        class="bg-gray-800 hover:bg-gray-700 cursor-pointer mt-2 p-2 rounded-md"
      >
        <div id="header" class="flex items-center text-sm">
          <div class="flex items-center">
            <div class="h-6 w-6 bg-blue-500 rounded-full" />
            <div class="px-1">c/movies</div>
          </div>
          <div class="pr-1 pl-1 text-gray-400">.</div>
          <div class="text-gray-400">Posted by u/sami 3 hours ago</div>
        </div>
        <div>
          <div class="pt-1 pb-1">Title of this video post</div>
          <div>
            <video src={vid} controls autoplay muted />
          </div>
        </div>
        <div id="footer" class="flex items-center pt-3">
          <span class="px-1">
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              ><path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
              /></svg
            >
          </span>
          <span class="text-sm px-1 md:text-xs">11k</span>
          <span class="px-1">
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              ><path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"
              /></svg
            >
          </span>
          <span class="flex text-sm items-center px-2 md:text-xs">
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              ><path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              /></svg
            > <span class="px-1">4k</span> comments
          </span>
          <span class="text-sm flex items-center px-1 md:text-xs">
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              ><path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
              /></svg
            > <span class="px-1">share</span>
          </span>
        </div>
      </div>
    </div>
  </div>
</div>
