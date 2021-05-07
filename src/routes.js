import Layout from "./components/Layout.svelte"
import Community from "./components/Community.svelte"
import User from "./components/User.svelte"
import LoginRegister from "./components/LoginRegister.svelte"
import Post from "./components/Post.svelte"
import NotFound from "./components/NotFound.svelte"

export default {
    "/": Layout,

    "/c/:community": Community,

    "/u/:username": User,

    "/x/loginregister": LoginRegister,

    "/c/:community/p/:postid": Post,

    "*": NotFound

}