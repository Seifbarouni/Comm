<svelte:head>
  <title>Comm | Login/Register</title>
</svelte:head>

<div class="flex flex-col text-gray-200  justify-center items-center mt-6">
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
  <div
    class="flex sm:flex-row flex-col  mt-4 sm:pb-0 pb-2 sm:items-start items-center w-screen justify-center"
  >
    <div class="bg-gray-800 flex flex-col rounded-md p-2 sm:w-72 w-full">
      <div class="text-lg font-bold ml-2 mt-2">Log in</div>
      <form action="" class="flex flex-col p-4">
        <label for="username">Username</label>
        <input
          type="text"
          id="username"
          class="bg-gray-600 px-2 py-1 w-full  focus:outline-none text-white rounded-md placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
        />
        <label for="pass">Password</label>
        <input
          type="password"
          id="pass"
          class="bg-gray-600 px-2 py-1 w-full  focus:outline-none text-white rounded-md placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
        />
        <button
          class="bg-red-500 hover:bg-red-400 px-2 py-2 rounded-md mt-4 font-bold focus:outline-none"
          >Log in</button
        >
      </form>
    </div>
    <div class="text-lg font-bold pl-8 pr-8 sm:pt-0 sm:pb-0 pt-2 pb-2">Or</div>
    <div class="bg-gray-800 flex flex-col rounded-md p-2 sm:w-72 w-full">
      <div class="text-lg font-bold ml-2 mt-2">Register</div>
      <form action="" class="flex flex-col p-4">
        <label for="username">Username</label>
        <input
          type="text"
          id="username"
          class="bg-gray-600 px-2 py-1 w-full  focus:outline-none text-white rounded-md placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
        />
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          class="bg-gray-600 px-2 py-1 w-full  focus:outline-none text-white rounded-md placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
        />
        <label for="pass">Password</label>
        <input
          type="password"
          id="pass"
          class="bg-gray-600 px-2 py-1 w-full  focus:outline-none text-white rounded-md placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
        />
        <label for="re_pass">Confirm password</label>
        <input
          type="password"
          id="re_pass"
          class="bg-gray-600 px-2 py-1 w-full  focus:outline-none text-white rounded-md placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
        />
        <button
          class="bg-red-500 hover:bg-red-400 px-2 py-2 rounded-md mt-4 font-bold focus:outline-none"
          >Register</button
        >
      </form>
    </div>
  </div>
</div>
