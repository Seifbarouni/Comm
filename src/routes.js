import Layout from "./components/Layout.svelte"
import Community from "./components/Community.svelte"
import User from "./components/User.svelte"

export default {
    "/": Layout,

    "/c/:community": Community,

    "/u/:username": User

}