<template>
  <div style="max-width:100%">
    <v-app-bar fixed flat height="50" color="#070e27">
      <div class="logo" @click="scroll">
        <router-link to="/">
          <div>
            <span>M</span>atrix
          </div>
          <!--<v-img src="../assets/matrix.png" height="50" width="150"></v-img>-->
        </router-link>
      </div>
      <v-spacer></v-spacer>
      <i @click="showNavigator = !showNavigator" class="fas fa-bars fa-lg hidden-sm-and-up"></i>
      <div class="links hidden-xs-only">
        <ul>
          <li @click="scroll">
            <router-link to="/">HOME</router-link>
          </li>
          <li @click="scroll">
            <router-link to="/plans">PLANS</router-link>
          </li>

         
        </ul>
      </div>
      <!-- The Navigator -->
    </v-app-bar>
    <transition name="slide">
      <div class="navigator" v-if="showNavigator">
        <i @click="showNavigator = !showNavigator" class="fas fa-times fa-2x"></i>
        <ul>
          <li @click="scrollNavigator">
            <router-link to="/">HOME</router-link>
          </li>
          <li @click="scrollNavigator">
            <router-link to="/plans">Plans</router-link>
          </li>

          <li @click="scrollNavigator">
            <router-link to="/about">ABOUT</router-link>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showNavigator: false
    };
  },
  methods: {
    scroll() {
      scrollTo(0, 0);
    },
    scrollNavigator() {
      this.showNavigator = !this.showNavigator;
      scrollTo(0, 0);
    }
  }
};
</script>

<style scoped>
i {
  color: white;
  margin-left: 5px;
  cursor: pointer;
}

a {
  text-decoration: none;
}

.logo div {
  color: white;
  font-size: 25px;
  font-weight: bold;
  letter-spacing: 3px;
  font-family: Andalus;
}

.logo span {
  color: aqua;
  font-size: 28px;
}

.links ul {
  display: flex;
  list-style: none;
  margin: 0px;
  padding: 0px;
}

.links ul li a {
  padding: 15px;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
}

.links ul li a:hover {
  background-color: rgba(0, 0, 0, 0.3);
}

.navigator {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background: black;
  z-index: 50;
}
.navigator ul {
  position: absolute;
  top: calc(50% - 50px);
  left: 50%;
  transform: translate(-50%);
  list-style: none;
  text-align: center;
  z-index: 1000;
}
.navigator ul li {
  padding: 10px;
}
.navigator ul li a {
  text-decoration: none;
  color: white;
  transition: all 0.3s ease;
}
.navigator ul li a:hover {
  color: #555;
  font-size: 120%;
}

.navigator i {
  color: white;
  padding: 30px;
  position: absolute;
  top: 0px;
  right: 0px;
}

.slide-enter-active {
  animation: slide-in 1s;
}
.slide-leave-active {
  animation: slide-in 1s reverse;
}

@keyframes slide-in {
  from {
    transform: translateX(2000px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>