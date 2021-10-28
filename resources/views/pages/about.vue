<template>
    <div>
        Welcome to about page!

        <Link :href="route('home')">Home</Link>
        <Link :href="route('about')">About</Link>
    </div>
</template>

<script>
import {Link} from '@inertiajs/inertia-vue'

export default {
    name: "about",
    components: {
        Link
    }
}
</script>

<style scoped>

</style>
