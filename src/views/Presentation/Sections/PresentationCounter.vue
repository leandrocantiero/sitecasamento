<script setup>
import DefaultCounterCardDate from "../../../examples/cards/counterCards/DefaultCounterCardDate.vue";
</script>

<template>
  <section class="pt-3 pb-4" id="count-stats">
    <div class="container">
      <div class="row">
        <div class="col-lg-9 z-index-2 border-radius-xl mx-auto py-3">
          <div class="row align-content-center">
            <span class="text-center my-4">Vamos nos casar em</span>

            <DefaultCounterCardDate
              color="success"
              :year="2025"
              month="Fevereiro"
              :day="8"
              :duration="3000" />

            <span class="text-center my-4">Estaremos esperando por você!</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
