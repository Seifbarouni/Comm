<script>
  import { user } from "../stores";
  import { fade } from "svelte/transition";
  let username = "";
  let password = "";
  let registerUsername = "";
  let registerPassword = "";
  let registerPasswordConfirm = "";
  let registerEmail = "";
  let loading = false;
  let errMessage = "";
  let registerErrMessages = "";
  async function fetchRequest(url, payload) {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    return await res.json();
  }
  function addToStoreAndSub(data) {
    user.set({
      isAuthenticated: true,
      username: data.username,
      email: data.email,
      userId: data.userId,
      bio: data.bio,
      followers: data.followers,
      following: data.following,
      jwt: data.jwt,
    });
    let persistData = {
      data: $user,
      cacheTime: parseInt(Date.now() / 1000),
    };
    user.subscribe((value) => {
      if (value) localStorage.setItem("us", JSON.stringify(persistData));
    });
  }
  async function loginUser() {
    if (username != "" && password != "") {
      loading = true;
      let payload = {
        username: username,
        password: password,
      };
      let data = await fetchRequest("http://localhost:9000/auth", payload);
      if (data.message != "Success") {
        errMessage = "Invalid username or password";
      } else {
        addToStoreAndSub(data);
      }
      username = password = "";
      loading = false;
    }
  }
  async function registerUser() {
    registerErrMessages = "";
    if (registerUsername.length < 6)
      registerErrMessages += "- username too short (+6 characters needed)\n";
    if (registerPassword.length < 8)
      registerErrMessages += "- password too short (+8 characters needed)\n";
    if (registerPassword !== registerPasswordConfirm)
      registerErrMessages += "- passwords don't match\n";
    if (registerErrMessages == "") {
      loading = true;
      let payload = {
        username: registerUsername,
        email: registerEmail,
        password: registerPassword,
      };
      let data = await fetchRequest("http://localhost:9000/register", payload);
      if (data.message != "Success") {
        registerErrMessages = data.message;
      } else {
        addToStoreAndSub(data);
      }
      loading = false;
    }
  }
</script>

<svelte:head>
  <title>Comm</title>
</svelte:head>

<div
  class="flex flex-col text-gray-200  justify-center items-center mt-6"
  in:fade
>
  <div class="text-red-500 pt-1 pr-2 h-36 w-36">
    <img src="./img/logo.png" alt="" />
  </div>
  <div class="font-bold text-lg">Welcome to Comm!</div>
  <div>A place to join and build communities</div>
  <div class="text-gray-400">
    Inspired by <a
      class="hover:underline"
      target="_blank"
      href="https://www.reddit.com/">Reddit</a
    >
  </div>
  {#if loading}
    <img src="./img/spinner.gif" alt="loading" class="h-14  w-14" />
  {:else}
    <div
      class="flex sm:flex-row flex-col  mt-4 sm:pb-0 pb-2 sm:items-start items-center w-screen justify-center"
    >
      <div
        class="bg-gray-800 flex flex-col rounded-md p-2 md:w-96 w-5/6 md:ml-2"
      >
        <div class="text-lg font-bold ml-2 mt-2">Log in</div>
        <form
          action=""
          class="flex flex-col p-4"
          on:submit|preventDefault={loginUser}
        >
          <label for="username_login">Username</label>
          <input
            type="text"
            id="username_login"
            bind:value={username}
            class="bg-gray-600 px-2 py-1 mt-1 mb-1 w-full  focus:outline-none text-white rounded-md placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
          />
          <label for="pass_log">Password</label>
          <input
            type="password"
            id="pass_log"
            bind:value={password}
            class="bg-gray-600 px-2 py-1 mt-1 mb-1 w-full  focus:outline-none text-white rounded-md placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
          />
          <div class="mt-2 text-red-600">{errMessage}</div>
          <button
            class="bg-red-500 hover:bg-red-400 px-2 py-2 rounded-md mt-4 font-bold focus:outline-none"
            type="submit">Log in</button
          >
        </form>
      </div>
      <div class="text-lg font-bold pl-4 pr-4 sm:pt-0 sm:pb-0 pt-2 pb-2">
        Or
      </div>
      <div
        class="bg-gray-800 flex flex-col rounded-md p-2 md:w-96 w-5/6 md:mr-2"
      >
        <div class="text-lg font-bold ml-2 mt-2">Register</div>
        <form
          action=""
          class="flex flex-col p-4"
          on:submit|preventDefault={registerUser}
        >
          <label for="username">Username</label>
          <input
            type="text"
            id="username"
            bind:value={registerUsername}
            class="bg-gray-600 px-2 py-1 mt-1 mb-1 w-full  focus:outline-none text-white rounded-md placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            required
          />
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            bind:value={registerEmail}
            class="bg-gray-600 px-2 py-1 mt-1 mb-1  w-full  focus:outline-none text-white rounded-md placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            required
          />
          <label for="pass">Password</label>
          <input
            type="password"
            id="pass"
            bind:value={registerPassword}
            class="bg-gray-600 px-2 py-1 mt-1 mb-1 w-full  focus:outline-none text-white rounded-md placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            required
          />
          <label for="re_pass">Confirm password</label>
          <input
            type="password"
            id="re_pass"
            bind:value={registerPasswordConfirm}
            class="bg-gray-600 px-2 py-1 mt-1 mb-1  w-full  focus:outline-none text-white rounded-md placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            required
          />
          <div class="mt-2 text-red-600 whitespace-pre-wrap">
            {registerErrMessages}
          </div>
          <button
            class="bg-red-500 hover:bg-red-400 px-2 py-2 rounded-md mt-4 font-bold focus:outline-none"
            type="submit">Register</button
          >
        </form>
      </div>
    </div>
  {/if}
</div>
