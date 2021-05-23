<script>
  import { myCommunities, myExploreCommunities } from "../stores";
  import PostTextOnly from "./PostTextOnly.svelte";
  import PostTextImage from "./PostTextImage.svelte";
  import PostTextVideo from "./PostTextVideo.svelte";
  import { onMount } from "svelte";

  export let userPosts = [];
  let loading = false;

  function getCommImgUrl(postComm) {
    let x = $myCommunities.find((comm) => comm.name == postComm).imgUrl;
    if (x != undefined) return x;
    return $myExploreCommunities.find((comm) => comm.name == postComm).imgUrl;
  }

  onMount(() => {
    loading = true;
    setTimeout(() => {
      loading = false;
    }, 400);
  });
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
  <div class="pl-1 mt-14 pr-1 flex flex-col text-gray-200">
    {#if !loading}
      {#each userPosts as post}
        {#if post.image != null}
          <PostTextImage
            user={post.user}
            community={post.community}
            id={post.id}
            createdAt={post.createdAt}
            textContent={post.textContent}
            image={post.image}
            likes={post.likes}
            comments={post.comments}
            commImgUrl={getCommImgUrl(post.community)}
          />
        {:else if post.video != null}
          <PostTextVideo
            user={post.user}
            community={post.community}
            id={post.id}
            createdAt={post.createdAt}
            textContent={post.textContent}
            video={post.video}
            likes={post.likes}
            comments={post.comments}
            commImgUrl={getCommImgUrl(post.community)}
          />
        {:else}
          <PostTextOnly
            user={post.user}
            community={post.community}
            id={post.id}
            createdAt={post.createdAt}
            textContent={post.textContent}
            likes={post.likes}
            comments={post.comments}
            commImgUrl={getCommImgUrl(post.community)}
          />
        {/if}
      {:else}
        <div class="text-center">No posts</div>
      {/each}
    {:else}
      <div class="flex items-center justify-center">
        <img src="./img/spinner.gif" alt="" class="h-14  w-14" />
      </div>
    {/if}
  </div>
</div>
