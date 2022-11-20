<template>
    <v-app>
      <Navbar1 v-if="$route.name === 'flow21'"/>
      <Navbar2 v-else/>
  
      <v-main>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-main>
    </v-app>
  </template>
    
  <script>
  import Navbar1 from "./Navbar1";
  import Navbar2 from "./Navbar2";
  
  export default {
    name: "Page1Vue",
    components: {
      Navbar1,
      Navbar2
    },
  };
  </script>