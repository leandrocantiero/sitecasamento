<script setup>
// example components
import DefaultInfoCard from "@/examples/cards/infoCards/DefaultInfoCard.vue";
import CenteredBlogCard from "@/examples/cards/blogCards/CenteredBlogCard.vue";

import flores from "@/assets/img/flores-rosas.jpeg";
</script>
<template>
  <section class="py-7">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <div class="row justify-content-start">
            <DefaultInfoCard
              color="info"
              icon="church"
              title="A igreja"
              description="Escolhemos o local com muito carinho, onde faremos um casamento tradicional."
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
              icon="chair"
              title="Assentos"
              description="Teremos assentos reservados para os padrinhos e pedimos que os convidados sente-se mais ao centro."
            />
            <DefaultInfoCard
              color="info"
              icon="schedule"
              title="Início e Duração"
              description="Iniciaremos as 17h30 e terá duração de no máximo 2 horas."
            />
          </div>
        </div>
        <div class="col-lg-4 ms-auto mt-lg-0 mt-6">
          <CenteredBlogCard
            :image="flores"
            title="Ministério Apostólico Sopro de Deus"
            description="R. Álvares Machado, 440 - Vila Euclides"
            :action="{
              color: 'bg-gradient-success',
              label: 'Ver no mapa',
              href: '#map',
            }"
          />
        </div>
      </div>
    </div>
  </section>
</template>
