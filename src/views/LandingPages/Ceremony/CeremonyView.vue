<script setup>

import DefaultFooter from "@/examples/footers/FooterDefault.vue";
import DefaultNavbar from "@/examples/navbars/NavbarDefault.vue";

import Information from "./CeremonyInformation.vue";
import GodParents from "./CeremonyGodParents.vue";
import Map from "./CeremonyMap.vue";

import bg0 from "@/assets/img/bg9.jpg";
</script>

<template>
  <DefaultNavbar transparent />

  <header class="bg-gradient-dark">
    <div
        class="page-header min-vh-75"
        :style="{ backgroundImage: `url(https://images.pexels.com/photos/19699674/pexels-photo-19699674/free-photo-of-igreja-capela-catedral-san-francisco.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)` }"
    >
      <span class="mask bg-gradient-dark opacity-6"></span>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center mx-auto my-auto">
            <h1 class="text-white">
              A cerimônia
            </h1>
            <p class="lead mb-4 text-white opacity-8">
              Encontre todas as informações que você precisa sobre a cerimônia aqui
            </p>
            <a type="button" class="btn bg-white text-dark" href="#godparents">
              Vamos lá
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>

  <GodParents id="godparents" />
  <Information id="information" />
  <Map id="map" />
  <DefaultFooter />
</template>