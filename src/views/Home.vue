<template>
	<div class="home">
		<Carousel></Carousel>
        <Hacker></Hacker>
        <Cards></Cards>
        <v-container >
            <v-layout class="mb-12" justify-center>
                <v-flex xs9 md6>
                    <v-card class="text-center pa-5" tile>
                         <v-btn class="mt-7 mb-5 white--text" tile color="indigo" @click="goAllPlans">
                                Show all plans
                         </v-btn>
                        <br />
                        <card-text class="heading">Show And Choose What you want</card-text>
                        <br />
                        <card-text class="heading grey--text">We Appreciate You !</card-text>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
        <HomeStuff></HomeStuff>
        <v-container class="mb-12">
            <v-layout>
                <v-flex>
                    <v-card>
                        <v-card-title class="headline font-weight-regular">Rate & feedBack</v-card-title>
                        <v-container>
                            <v-form ref="form" v-model="rate">
                                <v-layout row justify-center>

                                    <v-flex xs12 md5 class="mx-5">
                                        <v-textarea filled no-resize counter="100" label="feedBack" :rules="feedbackrule" required></v-textarea>
                                    </v-flex>
                                    <v-flex xs12 md5 class="mx-5">
                                        <div class="text-center">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, </p>
                                            <h4>Rate Us Now</h4>
                                            <v-rating halfIncrements hover ></v-rating>
                                        </div>
                                    </v-flex>

                                </v-layout>

                                <v-layout justify-center>
                                    <v-flex xs12 class="pa-5">
                                        <v-btn tile class="blue darken-4 white--text" block @click="RateUs" :disabled="!rate">
                                            Rate Us
                                        </v-btn>
                                    </v-flex>
                                </v-layout>
                            </v-form>

                        </v-container>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
	</div>
</template>

<script>
    import Carousel from '../components/carousel.vue';
    import HomeStuff from '../components/homeStuff.vue';
    import Cards from '../components/Cards.vue';
    import Hacker from '../components/hackerSvg.vue';
    export default {
        components: {
            Carousel,
            HomeStuff,
            Cards,
            Hacker
        },
        data() {
            return {
                feedbackrule: [
                    v => !!v || 'This Field is Required',
                    v => (v && v.length <= 100) || 'Must be less than 100',
                    v => (v && v.length > 20) || 'Must be more than 20'
                ],
                
               
                rate: true
            }
        },
        methods: {
            RateUs() {
                this.$refs.form.validate();
            },
            goAllPlans() {
                setTimeout(() => {
                    this.$router.push('/plans');
                    scrollTo(0,0)
                }, 1000)
            }
        }
    }
</script>
<style>
    .home{
        margin:0px;
        padding:0px;
    }
    
</style>