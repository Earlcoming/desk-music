<template>
    <div id="app">
        <music-header v-if="!$route.meta.isLogin"/>
        <router-view></router-view>
    </div>
</template>

<script>
import musicHeader from "@/components/header/index";
export default {
    components: {
        musicHeader,
    },
};
</script>
<style lang="sass">
	html,body,#app
		width: 100%
		height: 100%
</style>