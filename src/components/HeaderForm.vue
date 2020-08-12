<template>
  <div >
    <v-app-bar
      color="white"
      dense
      light
      
    >

      <h3>Life Flower</h3>
      <v-spacer></v-spacer>

     <router-link active-class="current " v-bind:to="{ name: 'Form'}">
      <v-btn icon>
        <v-icon class=''>mdi-file-document-outline</v-icon>
      </v-btn>
     </router-link>

      <router-link active-class="current" v-bind:to="{ name: 'Login'}">
      <v-btn icon>
        <v-icon>mdi-login</v-icon>
      </v-btn>
     </router-link>

    </v-app-bar>
  </div>
  
</template>

<style>

h3{
  color:black;
}

</style>