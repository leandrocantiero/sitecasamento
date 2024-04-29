<script setup>
// example components
import DefaultInfoCard from "@/examples/cards/infoCards/DefaultInfoCard.vue";
import CenteredBlogCard from "@/examples/cards/blogCards/CenteredBlogCard.vue";

import party from "@/assets/img/festa-1.webp";
</script>
<template>
  <section class="py-7">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <div class="row justify-content-start">
            <DefaultInfoCard
              color="info"
              icon="restaurant"
              title="Menu"
              description="Teremos uma mesa de frios, buffet com sobremesa, água, coca-cola e suco a vontade."
            />
            <DefaultInfoCard
              color="info"
              icon="checkroom"
              title="Trajes"
              description="Gostaríamos de solicitar que todos os nossos queridos convidados usem trajes formais para a ocasião."
            />
          </div>
          <div class="row justify-content-start mt-4">
            <DefaultInfoCard
              color="info"
              icon="celebration"
              title="Eventos"
              description="Não posso falar muito :/ mas teremos vários eventos divertidos para os convidados."
            />
            <DefaultInfoCard
              color="info"
              icon="schedule"
              title="Início e Duração"
              description="Iniciaremos logo após a cerimônia, cerca de 19h30 e terá duração de 5 horas."
            />
          </div>
        </div>
        <div class="col-lg-4 ms-auto mt-lg-0 mt-6">
          <CenteredBlogCard
            :image="party"
            title="Churrascaria Guaíba"
            description="R. José Bongiovani, 76 - Vila Liberdade, Pres. Prudente - SP."
            :action="{
              color: 'bg-gradient-success',
              label: 'Ver no mapa',
              href: '#partymap',
            }"
          />
        </div>
      </div>
    </div>
  </section>
</template>
