<template>
    <div class="music-header">
        <div class="container d-flex align-center">
            <div class="logo">
                <router-link :to="{name: 'home'}"></router-link>
            </div>
            <div class="nav">
                <ul>
                    <li>
                        <router-link :to="{name: 'home'}">发现音乐</router-link>
                    </li>
                    <li>
                        <router-link :to="{name: 'rank'}">排行榜</router-link>
                    </li>
                    <li>
                        <router-link :to="{name: 'playlist'}">歌单</router-link>
                    </li>
                    <li>
                        <router-link :to="{name: 'player'}">歌手</router-link>
                    </li>
                    <li>
                        <router-link :to="{name: 'video'}">视频</router-link>
                    </li>
                    <li>
                        <router-link :to="{name: 'mv'}">MV</router-link>
                    </li>
                </ul>
            </div>
            <div class="search">
                <music-search />
            </div>
        </div>
    </div>
</template>

<script>
import musicSearch from '@/components/header/musicSearch'
export default {
    data() {
        return {
        }
    },
    components: {
        musicSearch
    }
}
</script>
<style lang="sass" scoped>
.music-header
    position: fixed
    height: 70px
    box-shadow: 0 0 8px 2px rgba(0,0,0,.1)
    left: 0
    top: 0
    right: 0
    .logo a
        background: url('../../assets/img/logo_black.png') no-repeat center
        display: flex
        width: 145px 
        height: 70px
        margin-right: 50px
    .nav
        flex: 1
        ul
            display: flex
            li
                a
                    margin: 0 .8vw
                    position: relative
                    padding-bottom: 5px
                    &.active::after
                        display: block
                        position: absolute
                        left: 50%
                        bottom: -5px
                        width: 4px
                        height: 4px
                        border-radius: 50%
                        background-color: #fa2800
                        content: ''
                        opactive: 1
                    &.active
                        color: #fa2800
</style>