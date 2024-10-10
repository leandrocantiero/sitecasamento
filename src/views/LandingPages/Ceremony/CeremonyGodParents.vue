<script setup>
import FilledInfoCard from "@/examples/cards/infoCards/FilledInfoCard.vue";

const godparents = [
  "Eduardo e Lais",
  "Claudete e Valter",
  "Maria e Pedro",
  "Talita e Leandro",
  "Vânia e Alexandre",
  "Vitor e Amanda",
  "Apareido e Luana",
  "Paulo e Débora",
  "Milton e Gisele",
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
            title="Luzinete e Valberto"
          />
        </div>
        <div class="col-6">
          <FilledInfoCard
            class="pt-4 px-4"
            :color="{ text: 'white', background: 'bg-gradient-primary' }"
            :icon="{ component: 'people', color: 'white' }"
            title="Alessandra e Claudivelto"
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
            :color="{ text: 'white', background: 'bg-gradient-primary' }"
            :icon="{ component: 'filter_vintage', color: 'white' }"
            :description="godparent"
            description-class="text-sm"
          />
        </div>
      </div>
    </div>
  </section>
</template>
