<template>
    <div class="carousel">
        <v-carousel :hide-delimiters="true" show-arrows-on-hover cycle height="105vh" width="100%">
             <v-carousel-item>
                    <v-img height="100%" width="100%" src="../assets/carousel/1.jpg">
                        <div class="overlay"></div>
                    </v-img>
             </v-carousel-item>
             <v-carousel-item>
                    <v-img height="100%" width="100%" src="../assets/carousel/2.jpg">
                        <div class="overlay"></div>
                    </v-img>
             </v-carousel-item>
             <v-carousel-item>
                    <v-img height="100%" width="100%" src="../assets/carousel/3.jpg">
                        <div class="overlay"></div>
                    </v-img>
             </v-carousel-item>
             <v-carousel-item>
                    <v-img height="100%" width="100%" src="../assets/carousel/4.jpg">
                        <div class="overlay"></div>
                    </v-img>
             </v-carousel-item>
        </v-carousel>
        <div class="header">
            <div>Technology is different</div>
            <div>with us</div>
            
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                
                
            };
        }
    }

</script>

<style scoped>
    .carousel{
        position:relative;
        top: 50px;
        left:0%;
        width:100%;

    }
    .header{
        position: absolute;
        top: 40%;
        left: 10%;
        color: #ffffffd6;
        font-size:3.5rem;
        font-weight:bold
    }
    .overlay{
        height:100%;
        width:100%;
        background-color: rgba(0,0,0,0.4);
    }
  

    @media screen and (max-width: 900px){
        .header {
            font-size: 2.25rem;
        }
    }
    
    @media screen and (max-width: 450px){
          .header{
              font-size:1.5rem;
          }
          
    }
</style>