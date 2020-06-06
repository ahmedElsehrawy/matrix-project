<template>
    <div class="plans">
        <div class="text-center display-1" style="width:100%; margin-top:120px"> First Section </div>
        <Cards></Cards>
        <div class="text-center display-1" style="width:100%"> Second Section </div>
        <Cards></Cards>
        <div class="text-center display-1" style="width:100%"> Third Section </div>
        <Cards></Cards>
    </div>       
</template>
<script>
    import Cards from '../components/Cards.vue'
    export default {
        components: {
            Cards
        }
    }
</script>
<style scoped lang="scss">
    .plans{
        color: #070e27;
        
    }
</style>