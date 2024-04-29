<script setup>
import { onMounted, onUnmounted } from "vue";

import DefaultNavbar from "@/examples/navbars/NavbarDefault.vue";
import Information from "./PartyInformation.vue";
import Map from "./PartyMap.vue";

//image
import bg0 from "@/assets/img/bg9.jpg";

//dep
import Typed from "typed.js";
import DefaultFooter from "@/examples/footers/FooterDefault.vue";

var body = document.getElementsByTagName("body")[0];
//hooks
onMounted(() => {
  body.classList.add("about-us");
  body.classList.add("bg-gray-200");

  if (document.getElementById("typed")) {
    // eslint-disable-next-line no-unused-vars
    var typed = new Typed("#typed", {
      stringsElement: "#typed-strings",
      typeSpeed: 90,
      backSpeed: 90,
      backDelay: 200,
      startDelay: 500,
      loop: true,
    });
  }
});

onUnmounted(() => {
  body.classList.remove("about-us");
  body.classList.remove("bg-gray-200");
});
</script>

<template>
  <DefaultNavbar transparent />

  <header class="bg-gradient-dark">
    <div
        class="page-header min-vh-75"
        :style="{ backgroundImage: `url(https://images.pexels.com/photos/2253831/pexels-photo-2253831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)` }"
    >
      <span class="mask bg-gradient-dark opacity-6"></span>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center mx-auto my-auto">
            <h1 class="text-white">
              Venha conosco <span class="text-white" id="typed"></span>
            </h1>
            <div id="typed-strings">
              <h1>comemorar</h1>
              <h1>festejar</h1>
              <h1>enxer o buxo :D</h1>
            </div>
            <p class="lead mb-4 text-white opacity-8">
              Encontre todas as informações que você precisa sobre o evento aqui
            </p>
            <a type="button" class="btn bg-white text-dark" href="#information">
              Vamos lá
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>

  <Information id="information" />
  <Map id="partymap" />
  <DefaultFooter />
</template>