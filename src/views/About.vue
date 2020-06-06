<template dark>
    <div class="about">

        <div class="text-center" style="width:100% ; margin-top:50px">
            <h3 class="white--text">The Main List</h3>
        </div>
        <v-list flat dark max-height="330px" min-height="330" class="area" data-simplebar>
            <v-list-item-group>
                <v-list-item v-for="(item, i) in items" :key="i">
                    <v-list-item-icon>
                        <v-icon v-text="item.icon"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title v-text="item.text"></v-list-item-title>
                    </v-list-item-content>
                    <v-spacer></v-spacer>
                    <v-btn small text fab @click="deleteThis(i)">
                        <v-icon>mdi-delete</v-icon>
                    </v-btn>
                </v-list-item>
            </v-list-item-group>
        </v-list>
        <div class="text-center" style="width:100% ; margin-top:50px">
            <h3 class="white--text">Add New Items to the List</h3>
            <i class="fas fa-angle-double-down white--text infiniteArrowDown"></i>
        </div>
        <div style="width:100% " class="text-center">
            <v-btn large tile color="red lighten-2" dark v-on="on" @click="dialog = true" class=" my-5 mx-12 px-5">
                Add new Item
            </v-btn>
        </div>
        <div class="text-center my-12">
            <v-dialog v-model="dialog" width="500" persistent>
                <v-card width="500">
                    <v-card-title class="headline grey lighten-2">
                        Add New Item
                        <v-spacer></v-spacer>
                        <v-btn small fab text @click="dialog = false">
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
                    </v-card-title>
                    <div style=" width:100%" class="text-center">
                        <div class="text-center" style="margin :0px auto">
                            <v-text-field label="text" v-model="text" class="mx-5"></v-text-field>
                            <v-text-field label="icon" v-model="icon" class="mx-5"></v-text-field>
                            <v-btn tile color="red" class="white--text my-5" @click="addThis">Add New Item</v-btn>
                        </div>
                    </div>
                </v-card>
            </v-dialog>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
               
                items: [
                   { text: 'Real-Time', icon: 'mdi-clock' },
                   { text: 'Audience', icon: 'mdi-account' },
                   { text: 'Conversions', icon: 'mdi-flag' },
                   { text: 'Real-Time', icon: 'mdi-clock' },
                   { text: 'Audience', icon: 'mdi-account' },
                   { text: 'Conversions', icon: 'mdi-flag' },{ text: 'Real-Time', icon: 'mdi-clock' },
                   { text: 'Audience', icon: 'mdi-account' },
                   { text: 'Conversions', icon: 'mdi-flag' },
                ],
                text: '',
                icon: '',
                dialog: false
            }
        },
        methods: {
            deleteThis(i) {
                this.$delete(this.items, i)    // =====>>>>  //this.items.splice(i, 1)
            },
            addThis() {
                if (this.text === '' || this.text === null || this.text === undefined || this.icon === '' || this.icon === undefined || this.icon === null) {
                    this.dialog = false
                } else {
                    this.items.push({ text: this.text, icon: this.icon })
                    this.text = ''
                    this.icon = ''
                    this.dialog = false
                }
            }
            
        }
    }
</script>
<style scoped>

    .about{ 
        padding:50px 0;
        height: 210vh;
        background-color: #1e1e1e;
        
        
    }
    button{
        outline:none
    }

    .infiniteArrowDown{
        animation:arrowInfinate 1s infinite ease
    }
    .area {
      padding: 1rem;
      background: white;
      height: 250px;
      overflow:hidden
      
    }

    .area:hover{
        overflow: auto;
    }

    @keyframes arrowInfinate{
        0%{
            transform:translateY(0);
            opacity:0
        }
        100%{
            transform:translateY(10px);
            opacity:1
        }
    }
</style>