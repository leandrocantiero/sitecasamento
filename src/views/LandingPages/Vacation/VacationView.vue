<script setup>

import DefaultNavbar from "@/examples/navbars/NavbarDefault.vue";
import DefaultFooter from "@/examples/footers/FooterDefault.vue";
</script>

<template>
  <DefaultNavbar transparent />

  <header class="bg-gradient-dark">
    <div
        class="page-header min-vh-75"
        :style="{
        backgroundImage: `url(https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
      }"
    >
      <span class="mask bg-gradient-dark opacity-6"></span>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center mx-auto my-auto">
            <h1 class="text-white">Lua de mel</h1>
            <p class="lead mb-4 text-white opacity-8">

            </p>
            <a type="button" class="btn bg-white text-dark" href="#section">
              Vamos lá
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>

  <DefaultFooter />
</template>