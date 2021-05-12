import { writable } from 'svelte/store';

export const isOpen = writable(false);
export const user = writable({
    isAuthenticated: false,
    username: "",
    email: "",
    userId: 0,
    bio: "",
    followers: 0,
    following: 0,
    jwt: ""
})