<template>
    <v-app>
        <v-btn fab fixed bottom right dark v-show="fab" v-scroll="onScroll" @click="toTop" color="#253c8d" class="white--text  " style="outline:none">
            <v-icon class="toTop">mdi-chevron-up</v-icon>
        </v-btn>
        <navBar></navBar>
        <v-content>
            <router-view></router-view>
        </v-content>
        <app-footer></app-footer>

    </v-app>
</template>

<script>
    import navBar from "./components/navBar.vue";
    import appFooter from './components/footer.vue';
export default {
  components: {
        navBar,
        appFooter
        },
        data() {
            return {
                fab: false
            }
        },
        methods: {
            onScroll (e) {
                if (typeof window === 'undefined') return
                    const top = window.pageYOffset ||   e.target.scrollTop || 0
                this.fab = top > 20
            },
            toTop() {
                scrollTo(0,0)
            }
        }
};
</script>
<style>
    .toTop{
        animation: toTop 1s infinite linear;
    }

    @keyframes toTop{
        0%{
            transform:translateY(0px);
            opacity:0;
        }
        50%{
            transform:translateY(-4px);
            opacity:1
            
        }
        100%{
            transform:translateY(0);
            opacity:0
        }
    }
</style>