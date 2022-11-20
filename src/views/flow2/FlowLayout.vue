<template>
    <v-app>
      <Navbar></Navbar>
  
      <v-main>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-main>
    </v-app>
  </template>
    
  <script>
  import Navbar from "./Navbar";
  
  export default {
    name: "Page1Vue",
    components: {
      Navbar,
    },
  };
  </script>