import Layout from "./components/Layout.svelte"
import Community from "./components/Community.svelte"

export default {
    "/": Layout,

    "/c/:community": Community

}