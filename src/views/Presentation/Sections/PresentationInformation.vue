<script setup>
import RotatingCard from "../../../examples/cards/rotatingCards/RotatingCard.vue";
import RotatingCardFront from "../../../examples/cards/rotatingCards/RotatingCardFront.vue";
import RotatingCardBack from "../../../examples/cards/rotatingCards/RotatingCardBack.vue";
import DefaultInfoCard from "../../../examples/cards/infoCards/DefaultInfoCard.vue";

import floresImg from "@/assets/img/flores-rosas.jpeg";
import festaImg from "@/assets/img/festa-1.webp";

var countDownDate = new Date("Feb 8, 2025 18:00:00").getTime();

var intervalFunction = setInterval(function () {
  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  var countDownDateElement = document.getElementById("countDownDate");
  if (countDownDateElement) {
    countDownDateElement.innerHTML =
      days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  }

  if (distance < 0) {
    clearInterval(intervalFunction);
    document.getElementById("countDownDate").innerHTML = "00:00:00";
  }
}, 1000);
</script>
<template>
  <section class="my-5 py-5">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-4 ms-auto me-auto p-lg-4 mt-lg-0 mt-4">
          <RotatingCard>
            <RotatingCardFront
              :image="floresImg"
              icon="touch_app"
              title="Faltam <br> <span id='countDownDate'></span>"
              description="Agora falta pouco para o grande dia, mas não se preocupe! Vamos te avisar quando chegar a hora :D"
            />

            <RotatingCardBack
              :image="festaImg"
              title="Confirme sua presença"
              description="Clique no botão abaixo para confirmar sua presença :D"
              :action="[
                {
                  route: '/pages/landing-pages/confirmation',
                  label: 'Vamos lá',
                },
              ]"
            />
          </RotatingCard>
        </div>
        <div class="col-lg-6 ms-auto">
          <div class="row justify-content-start">
            <DefaultInfoCard
              icon="church"
              title="Igreja"
              description="Igreja Presbiteriana Independente Central, situada no endereço: "
              linkText="R. Siqueira Campos, 815 - Centro, Pres. Prudente - SP."
              linkUrl="https://maps.app.goo.gl/NRdRpKYx7niAQbx38"
            />
            <DefaultInfoCard
              icon="restaurant"
              title="Recepção"
              description="Churrascaria Guaíba, situada no endereço:"
              linkText="R. José Bongiovani, 76 - Vila Liberdade, Pres. Prudente - SP."
              linkUrl="https://maps.app.goo.gl/3JcBwonfEgZeGSvNA"
            />
          </div>
          <div class="row justify-content-start mt-5">
            <DefaultInfoCard
              class="mt-3"
              icon="event"
              title="Save the date"
              description="Reservem a data de 08/02/2025. Será um dia repleto de amor, alegria e memórias inesquecíveis."
            />
            <DefaultInfoCard
              class="mt-3"
              icon="checkroom"
              title="Trajes"
              description="Gostaríamos de solicitar que todos os nossos queridos convidados usem trajes formais para a ocasião."
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
