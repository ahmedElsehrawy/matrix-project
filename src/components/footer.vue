<template>
    <footer>
        <!--<div class="backToUp">
            <a @click="goUp"><i class="fas fa-chevron-up"></i></a>
        </div>-->
        <v-container>
            <v-layout no-wrap justify-center>
                <v-flex xs2 sm1 class="text-center">
                    <v-btn  tag="a" icon class=" white--text SocialIcon" style="outline:none" href="http://www.facebook.com">
                        <v-icon class="icon" size="30">mdi-facebook</v-icon>
                    </v-btn>
                    
                </v-flex>
                <v-flex xs2 sm1 class="text-center">
                    <v-btn tag="a" icon class=" white--text SocialIcon" style="outline:none" href="http://www.twitter.com">
                        <v-icon class="icon" size="30">mdi-twitter</v-icon>
                    </v-btn>
                    
                </v-flex>
                <v-flex xs2 sm1 class="text-center">
                    <v-btn tag="a" icon class=" white--text SocialIcon" style="outline:none" href="http://www.instagram.com">
                        <v-icon class="icon" size="30">mdi-instagram</v-icon>
                    </v-btn>
                   
                </v-flex>
                <v-flex xs2 sm1 class="text-center">
                    <v-btn tag="a" icon class=" white--text SocialIcon" style="outline:none" href="http://www.linkedin.com">
                        <v-icon class="icon" size="30">mdi-linkedin</v-icon>
                    </v-btn>
                   
                </v-flex>
                <v-flex xs2 sm1 class="text-center">
                    <v-btn tag="a" icon class=" white--text SocialIcon" style="outline:none" href="http://www.youtube.com">
                        <v-icon class="icon" size="30" style="">mdi-youtube</v-icon>
                    </v-btn>
                </v-flex>
            </v-layout>
        </v-container>
        <v-container>
            <v-layout no-wrap row justify-center>
                <v-flex xs12>
                     <ul class="footerList">
                            <li><a href="#">HOME</a></li>
                            <li><a href="#">MENU</a></li>
                            <li><a href="#">STORY</a></li>
                            <li><a href="#">DETOX</a></li>
                            <li><a href="#">LOCATIONS</a></li>
                     </ul>
                </v-flex>
            </v-layout>
        </v-container>
        <div class="container">
            
            
            <div class="row contactUs">
                <div class="col-xs-12 col-md-6">
                    <v-card tile class="py-5 " color="#313131">
                        <v-card-title class="headline white--text">Contact Us</v-card-title>
                        <v-textarea class="px-5" dark no-resize lighten label="Leave Your Message"  prepend-inner-icon="mdi-comment"  success></v-textarea>
                        <v-btn tile text class="white--text mx-5">
                            Send
                        </v-btn>
                    </v-card>
                </div>
                <div class="col-xs-12 col-md-6 footerPara">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minimumanen veniam  adipiscing , sed do
                        eiusmod
                    </p>
                </div>
            </div>
            <v-divider color="white" class="my-12"></v-divider>
            <div class="row">
                <div class="col-12 white--text text-center">
                    <div>Released under the <span style=" color: grey ; cursor: pointer; margin-left: 5px ">MIT License</span></div>
                    <div>Copyright &copy; 2016-2020 Matrix, LLC</div>
                    <p class="my-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim
                    </p>
                </div>
            </div>
            
        </div>
    </footer>
</template>
<script>
    export default {
        
        methods: {
            goUp() {
                scrollTo(0, 0);
            }
        }
    }
</script>
<style scoped>
    *{
        box-sizing:border-box;
    }
  
    footer {

    width: 100%;
    background-color: #212121;
    color: #0860f8;
    padding: 50px;
    position: relative;
    box-shadow:-1px -1px 10px #21212180
        
}

.backToUp {
    position: absolute;
    width: 60px;
    height: 60px;
    top: -27px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #212121;
    text-align: center;
    border-radius: 50%;
    padding: 10px
}

.backToUp a {
    color: white;
    transition: all .3s ease;
    


}
a{
    text-decoration:none;
}

.backToUp a:hover {
    color: gold


}

.backToUp a i {
    animation: Up .9s ease infinite;
}

.iconsRow {
    height: 50px;
    align-items: center;
    justify-content: center
}


.forceMargin {
    margin: 0 -15px
}

.footerList {
    display: flex;
    height: 100px;
    width:100%;
    align-items: center;
    justify-content: center
}

.footerList li {
   
   list-style:none;
   width:80px;
   text-align:center
   

}

.footerList li:first-of-type{
margin-left:-30px;
}




.footerList li a {
    color: white;
    font-weight: bold;
    transition: all .25s ease;

}

.footerList li a:hover {
    text-decoration: none;
    color: grey


}



button {
    
    color: white;
    transition: all .3s ease;
    cursor: pointer;
    outline:none

}


.icon:hover {
   
    
    color: deepskyblue;
    
    
}


.footerPara p {
    width: 100%;
    text-align: center;
    color: white;
    padding:15px;
}

.contactUs{
    align-items: center;
}



/* Media Query */
@media screen and (max-width:1000px) {


}

@media screen and (max-width:767px) {

    
    .footerList li a {
      font-size:80%;

    }
   
}


/* Animations */

@keyframes Up {
    0% {
        opacity: 0;

    }

    50% {
        opacity: 1;

    }

    100% {
        transform: translateY(-.25rem);
        opacity: 0
    }
}


</style>