<script>
  import LeftSidebar from "./LeftSidebar.svelte";
  import RightPostPanel from "./RightPostPanel.svelte";
  import Footer from "./Footer.svelte";
  import LoginRegister from "./LoginRegister.svelte";
  import PostTextOnly from "./PostTextOnly.svelte";
  import PostTextImage from "./PostTextImage.svelte";
  import PostTextVideo from "./PostTextVideo.svelte";
  import {
    user,
    myCommunities,
    myExploreCommunities,
    isMember,
  } from "../stores";
  import { onMount } from "svelte";
  import LogoutorProfileFeed from "./LogoutorProfileFeed.svelte";

  export let params = {};
  let post;

  function getCommImgUrl(postComm) {
    let x = $myCommunities.find((comm) => comm.name == postComm).imgUrl;
    if (x != undefined) return x;
    return $myExploreCommunities.find((comm) => comm.name == postComm).imgUrl;
  }

  function checkIfMember() {
    let res = $myCommunities.find((comm) => comm.name == post.community);
    if (res) $isMember = true;
    else $isMember = false;
    localStorage.setItem("is_member", JSON.stringify($isMember));
  }

  onMount(() => {
    let cachedData = localStorage.getItem("us");
    if (cachedData) {
      cachedData = JSON.parse(cachedData);
      let expired = parseInt(Date.now() / 1000) - cachedData.cacheTime > 15000;
      if (cachedData && !expired) {
        user.set(cachedData.data);
      }
    }

    fetch(`http://localhost:9000/p/getPost/${params.postid}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${$user.jwt}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        post = data;
        checkIfMember();
      });
  });
  $: {
    fetch(`http://localhost:9000/p/getPost/${params.postid}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${$user.jwt}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        post = data;
        checkIfMember();
      });
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

<svelte:head>
  <title>Comm | p/{params.postid}</title>
</svelte:head>

{#if $user.isAuthenticated}
  <LeftSidebar margin="mt-12" />
  <div class=" 2xl:w-3/5 w-full flex flex-col text-gray-200 pl-1 pr-1 pb-2">
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

      <LogoutorProfileFeed />
    </div>

    <div class="bg-gray-800  cursor-pointer mt-16 rounded-md flex flex-col">
      {#if post != undefined}
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
        <div class="flex items-center justify-center mt-12">
          <img src="./img/spinner.gif" alt="" class="h-14  w-14" />
        </div>
      {/if}

      <div class="border-b border-gray-600 py-2  w-2/3 self-center" />

      <div class=" flex flex-col mt-2 p-2">
        <div class="flex items-start mt-2">
          <div class="h-6 w-6 rounded-full bg-green-600 px-3" />
          <div>
            <div class="text-sm ml-2">
              <a href="#/u/xyz" class="hover:underline">xyz</a>
              <span class="text-gray-400">7 hours ago</span>
            </div>
            <div class="text-sm ml-2 pt-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              blanditiis!
            </div>
            <div class="ml-2 -mt-2">
              <Footer likes="50" isComment="true" />
            </div>
          </div>
        </div>
        <div class="flex items-start mt-2">
          <div class="h-6 w-6 rounded-full bg-indigo-600 px-3" />
          <div>
            <div class="text-sm ml-2">
              <a href="#/u/mark" class="hover:underline">mark</a>
              <span class="text-gray-400">7 hours ago</span>
            </div>
            <div class="text-sm ml-2 pt-1">LMAAAAAOOOOOOOOOOOOOO</div>
            <div class="ml-2 -mt-2">
              <Footer likes="22" isComment="true" />
            </div>
          </div>
        </div>
        <div class="flex items-start mt-2">
          <div class="h-6 w-6 rounded-full bg-blue-600 px-3" />
          <div>
            <div class="text-sm ml-2">
              <a href="#/u/seif" class="hover:underline">seif</a>
              <span class="text-gray-400">7 hours ago</span>
            </div>
            <div class="text-sm ml-2 pt-1">YEEEEE BOIII</div>
            <div class="ml-2 -mt-2">
              <Footer likes="7" isComment="true" />
            </div>
          </div>
        </div>
        <div class="flex items-start mt-2">
          <div class="h-6 w-6 rounded-full bg-red-600 px-3" />
          <div>
            <div class="text-sm ml-2">
              <a href="#/u/sam" class="hover:underline">sam</a>
              <span class="text-gray-400">8 hours ago</span>
            </div>
            <div class="text-sm ml-2 pt-1">
              dolor sit amet consectetur adipisicing elit. Quidem blanditiis
              dsfd!
            </div>
            <div class="ml-2 -mt-2">
              <Footer likes="0" isComment="true" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <RightPostPanel community={params.community} />
{:else}
  <LoginRegister />
{/if}
