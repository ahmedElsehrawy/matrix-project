<template>
	<div class="cards">
		<div class="container">
			<div class="row ">
				<div class="col-md-4 col-sm-6 col-xs-12 justify-content-center" v-for="card in cards" :key="card.id">
					<v-card width="400px" class="mx-auto" tile>
						<v-img height="250px" width="100%" class="white--text card-image align-end" :src="card.src">
							<v-card-title> {{ card.title }} </v-card-title>
						</v-img>
						<v-card-text class="text--primary">
							<div>Whitehaven Beach</div>

							<div>Whitsunday Island, Whitsunday Islands</div>
						</v-card-text>
						<v-card-actions>
							<v-btn tile text color="indigo" @click="goEnrollSite(card.id)" style="outline:none">
								<span>Check Plan</span>
							</v-btn>

						</v-card-actions>
					</v-card>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
    export default {
        data() {
            return {
               
                cards: [
                    {
                        src: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
                        title: 'top awesome designs',
						id:'adfhaiudhfwid'
                    },
					{
                        src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
                        title: 'Pre-fab homes',
						id:'sadknoiwsad'
                    },
					{
                        src: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
                        title: ' Top western road trips',
						id:'sadksdfnoiwsad'
                    },
					{
                        src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
                        title: "airlines",
						id:'sadknosdasiwsad'
                    },
					{
                        src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
                        title: "Favorite road trips",
						id:'sadknoiwsadasdw'
                    },{
                        src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
                        title: "Super Model",
						id:'sadknoiwsaddweo'
                    },
					{
                        src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
                        title: "Favorite road trips",
						id:'sadknoiwsaddawdo'
                    },{
                        src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
                        title: "Super Model",
						id:'sadknoiwsadlodka5'
                    },
					{
                        src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
                        title: 'Pre-fab homes',
                        id:'sddlwqp55as'
                    },
                ]
            }
        },
        methods: {
            goEnrollSite(id) {
                setTimeout(() => {
                    this.$router.push('/enroll/' + id);
                    window.scrollTo(0,0)
                    
                },1500)
            },
        },
    }
</script>
<style scoped>
	.cards{
		margin: 80px 0;
	}
	.card-image{
		opacity: 0.8;
		transition: all ease .6s
	}
	.card-image:hover{
		opacity:1;
		
	}
</style>