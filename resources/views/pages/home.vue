<template>
    <div>
        Welcome to home page!

        <Link :href="route('home')">Home</Link>
        <Link :href="route('about')">About</Link>
    </div>
</template>

<script>
import {Link} from '@inertiajs/inertia-vue'

export default {
    name: "home",
    components: {
        Link
    }
}
</script>

<style scoped>

</style>
