<template>
    <div class="enroll">
        <v-container class="px-5">
            <v-layout row>
                <v-flex xs12>
                    <v-card tile class="mx-0">
                        <v-card-title class="headline font-weight-regular white--text  profile">Enroll This Plan</v-card-title>
                    </v-card>
                    
                </v-flex>
            </v-layout>
            <v-layout row class="mb-12 pa-8 grey lighten-3" justify-space-between>


                <v-flex xs12 md6>
                    <v-card class="my-5" tile>
                        <v-img  src="../assets/carousel/1.jpg"></v-img>
                    </v-card>
                </v-flex>
                <v-flex xs12 md5 class="pa-5 my-5 white">
                    <v-form ref="form" v-model="valid">
                        <v-text-field label="First Name" counter="15" :rules="firstNameRule" required></v-text-field>

                        <v-text-field label="Last Name" counter="15" :rules="lastNameRule" required></v-text-field>

                        <v-text-field label="E-mail" counter="60" :rules="emailRule" required></v-text-field>

                        <v-select label="Choose Your Plan" :items="items" :rules="selectRule" required></v-select>
                        <v-btn tile class="blue darken-4 white--text" @click="validate" :disabled="!valid">
                            <span>Enroll Now</span>
                        </v-btn>

                    </v-form>
                </v-flex>
                <!-- the Date Picker -->
                <v-flex xs12 class="text-center mt-12">
                    <h3 class="grey--text display-1">Choose a date & Time</h3>
                    {{ submittableDateTime }}
                </v-flex>
                <v-flex xs12 lg6  class="px-1 my-12 text-center">
                   <v-date-picker style= "height:400px" full-width color="#070e27" v-model="date"></v-date-picker>
                </v-flex>
                <v-flex xs12 lg6 class=" px-1 my-12 text-center time">
                    <v-time-picker style= "height:400px" full-width color="#070e27" v-model="time"></v-time-picker>
                </v-flex>
               
                <v-flex>
                    <v-card>
                        <v-card-title class="headline font-weight-regular">Rate & feedBack</v-card-title>
                        <v-container>
                            <v-form ref="form" v-model="rate">
                                <v-layout row justify-center>

                                    <v-flex xs12 md5 class="mx-5">
                                        <v-textarea filled no-resize counter label="feedBack" :rules="feedbackrule" required></v-textarea>
                                    </v-flex>
                                    <v-flex xs12 md5 class="mx-5">
                                        <div class="text-center">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, </p>
                                            <h4>Rate Us Now</h4>
                                            <v-rating halfIncrements hover v-model="rating"></v-rating>
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
    export default {
        data() {
            return {
              
                rating: 0,
                items: [
                    'free tutorial',
                    'premuim',
                    'Exclusive',
                    'Ultimate',
                ],
                
                firstNameRule: [
                    v => !!v || 'First Name is Required',
                    v => (v && v.length > 2) || 'Name Must be more than 2',
                    v => (v && v.length <= 10) || 'Name Must be less than 10'
                ],
                lastNameRule: [
                    v => !!v || 'Last Name is Required',
                    v => (v && v.length > 2) || 'Name Must be more than 2',
                    v => (v && v.length <= 10) || 'Name Must be less than 10'
                ],
                emailRule: [
                    v => !!v || 'Email is Required',
                    v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
                ],
                selectRule: [
                    v => !!v || 'Email is Required',
                ],
                feedbackrule: [
                    v => !!v || 'This Field is Required',
                    v => (v && v.length <= 100 ) || 'Must be less than 100'
                ],
                
                valid: true,
                rate: true,
                 date: '' ,
                time: new Date()
            }
        },
        methods: {
            validate() {
                this.$refs.form.validate();
                
            },
            reset () {
                 this.$refs.form.reset()
            },
            RateUs() {
                this.$refs.form.validate();
            },
            
        },
        computed: {
            submittableDateTime() {
                const date = new Date(this.date)
                
                if (typeof this.time === 'string') {
                    const Hours = this.time.match(/^(\d+)/)[1]
                    const Minutes = this.time.match(/:(\d+)/)[1]
                    date.setHours(Hours)
                    date.setMinutes(Minutes)
                } else {
                     date.setHours(this.time.getHours())
                     date.setMinutes(this.time.getMinutes())
                }
                console.log(date);
                return date
            }
        }
    }
</script>
<style scoped>
    .enroll {
        margin: 60px 0;
        
    }
    .profile{
        background: #1c2d6b;
    }
  
    
</style>