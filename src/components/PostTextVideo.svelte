<script>
  import Footer from "./Footer.svelte";
  export let commImgUrl;
  export let community;
  export let id;
  export let user;
  export let createdAt;
  export let textContent;
  export let likes;
  export let video;
  export let comments;
  export let hover = "";
</script>

<a
  href="#/c/{community}/p/{id}"
  class="bg-gray-800 {hover} cursor-pointer mt-2 p-2 rounded-md"
>
  <div id="header" class="flex items-center text-sm">
    <div class="flex items-center">
      <div
        class="h-6 w-6  rounded-full
    flex justify-center"
      >
        <img src={commImgUrl} class="rounded-full object-cover" alt="" />
      </div>
      <a href="#/c/{community}" class="px-1 hover:underline">c/{community}</a>
    </div>
    <div class="pr-1 pl-1 text-gray-400">.</div>
    <div class="text-gray-400">
      Posted by <a href="#/u/{user}" class="hover:underline"
        >u/{user}
      </a>{createdAt}
    </div>
  </div>
  <div>
    <div class="pt-1 pb-1">{textContent}</div>
    <div>
      <video src="data:video/mp4;base64,{video}" controls autoplay muted />
    </div>
  </div>
  <Footer {likes} {comments} {id} />
</a>
