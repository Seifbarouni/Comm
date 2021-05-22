<script>
  import Footer from "./Footer.svelte";
</script>

<a
  href="#/c/marvel/p/sdf111sd44448"
  class="bg-gray-800 hover:bg-gray-700 cursor-pointer mt-2 p-2 rounded-md"
>
  <div id="header" class="flex items-center text-sm">
    <div class="flex items-center">
      <div
        class="h-6 w-6  rounded-full
    flex justify-center"
      >
        <img
          src=" https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMzA1MTZ8MHwxfGFsbHx8fHx8fHx8fDE2MjAw=200"
          class="rounded-full object-cover"
          alt=""
        />
      </div>
      <a href="#/c/marvel" class="px-1 hover:underline">c/marvel</a>
    </div>
    <div class="pr-1 pl-1 text-gray-400">.</div>
    <div class="text-gray-400">
      Posted by <a href="#/u/yennefer" class="hover:underline">u/yennefer</a> 3 hours
      ago
    </div>
  </div>
  <div>
    <div class="pt-1 pb-1">Title of this video post</div>
    <div>
      <video src="./videos/loki.mp4" controls autoplay muted />
    </div>
  </div>
  <Footer likes="11k" comments="5k" />
</a>
