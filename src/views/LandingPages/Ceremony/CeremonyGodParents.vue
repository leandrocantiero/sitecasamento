<script setup>
import FilledInfoCard from "@/examples/cards/infoCards/FilledInfoCard.vue";

const godparents = [
  "Eduardo e Lais Bernardes",
  "Claudete e Valter Campagnolo",
  "Maria e Pedro Cantiero",
  "Talita e Leandro Assis",
  "Vânia e Alexandre Ramalho",
  "Vitor e Amanda Ramalho",
  "Apareido e Luana Bernardes",
  "Paulo e Débora",
];
</script>

<template>
  <section class="py-3">
    <div class="container">
      <div class="row">
        <div class="row text-center my-sm-5 mt-5">
          <div class="col-lg-6 mx-auto">
            <h2 class="">Nossos padrinhos</h2>
            <p class="lead">Veja aqui quem são nossos padrinhos.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="container">
      <div class="row text-center justify-content-center">
        <div class="col-6">
          <FilledInfoCard
            class="pt-4 px-4"
            :color="{ text: 'white', background: 'bg-gradient-primary' }"
            :icon="{ component: 'people', color: 'white' }"
            title="Luzinete e Valberto Ramalho"
            description="Pais da noiva"
          />
        </div>
        <div class="col-6">
          <FilledInfoCard
            class="pt-4 px-4"
            :color="{ text: 'white', background: 'bg-gradient-primary' }"
            :icon="{ component: 'people', color: 'white' }"
            title="Alessandra e Claudivelto Campagnolo"
            description="Pais do noivo"
          />
        </div>
      </div>

      <div class="row mt-4 text-center justify-content-center">
        <div
          v-for="godparent in godparents"
          v-bind:key="godparent"
          class="col-4 mb-2 text-2xl"
        >
          <FilledInfoCard
            class="pt-4 px-4"
            :color="{ text: 'white', background: 'bg-gradient-danger' }"
            :icon="{ component: 'filter_vintage', color: 'white' }"
            :description="godparent"
            description-class="text-sm"
          />
        </div>
      </div>
    </div>
  </section>
</template>
