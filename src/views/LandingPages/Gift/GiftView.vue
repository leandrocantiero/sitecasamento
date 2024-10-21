<script setup>
import DefaultFooter from "@/examples/footers/FooterDefault.vue";
import DefaultNavbar from "@/examples/navbars/NavbarDefault.vue";

import pix from "@/assets/img/pix.png";
</script>

<template>
  <DefaultNavbar transparent/>

  <header class="bg-gradient-dark">
    <div
        class="page-header min-vh-75"
        :style="{
        backgroundImage: `url(https://images.pexels.com/photos/759495/pexels-photo-759495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
      }"
    >
      <span class="mask bg-gradient-dark opacity-6"></span>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center mx-auto my-auto">
            <h1 class="text-white">Lista de presentes</h1>
            <p class="lead mb-4 text-white opacity-8">
              Veja nossa lista e escolha um para nos presentear :D
            </p>
            <a type="button" class="btn bg-white text-dark" href="#section">
              Vamos lá
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>

  <section id="section" class="py-3">
    <div class="container">
      <div class="row">
        <div class="row text-center my-sm-5 mt-5">
          <div class="col-lg-6 mx-auto">
            <h2 class="">Temos uma lista na havan!</h2>
            <a
                class="lead text-danger"
                href="https://lista.havan.com.br/Convidado/ItensListaPresente/743666"
                target="_blank"
            >Clique aqui para ver</a
            >
          </div>
        </div>
      </div>

      <div class="row">
        <div class="row text-center my-sm-5 mt-5">
          <div class="col-lg-6 mx-auto">
            <h2 class="">Também temos uma lista na Magazine Luiza</h2>
            <a
                class="lead text-danger"
                href="https://www.querodecasamento.com.br/lista-de-casamento/leandro-campagnolo-andrielly-ramalho"
                target="_blank"
            >Clique aqui para ver</a
            >
          </div>
        </div>
      </div>

      <div class="row">
        <div class="row text-center my-sm-5 mt-5">
          <div class="col-lg-6 mx-auto">
            <h2 class="">Caso prefira dar seu presente em dinheiro</h2>
            <img :src="pix">
          </div>
        </div>
      </div>
    </div>
  </section>

  <!--  <div class="container mt-sm-5 mt-3">-->
  <!--    <div class="row text-center justify-content-center">-->
  <!--      <div class="col-1" v-for="{ id, heading } in data" :key="id">-->
  <!--        <a :href="`#${id}`">-->
  <!--          <MaterialBadge size="" color="info" rounded>{{-->
  <!--            heading-->
  <!--          }}</MaterialBadge>-->
  <!--        </a>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--  </div>-->

  <!--  <div class="container mt-sm-5 mt-3">-->
  <!--    <p class="lead">-->
  <!--      Atenção! Sinta-se a vontade para procurar por melhores preços em outras-->
  <!--      lojas :D-->
  <!--    </p>-->

  <!--    <div-->
  <!--      v-for="({ id, heading, description, items }, index) in data"-->
  <!--      :class="`row ${index != 0 && index != -1 ? 'pt-lg-6' : ''}`"-->
  <!--      :key="id"-->
  <!--      :id="id"-->
  <!--    >-->
  <!--      <div :class="`${col1 ?? 'col-lg-3'}`">-->
  <!--        <div-->
  <!--          class="position-sticky pb-lg-5 pb-3 mt-lg-0 mt-5 ps-2"-->
  <!--          style="top: 100px"-->
  <!--        >-->
  <!--          <h3>{{ heading }}</h3>-->
  <!--          <h6 class="text-secondary font-weight-normal pe-3">-->
  <!--            {{ description }}-->
  <!--          </h6>-->
  <!--        </div>-->
  <!--      </div>-->
  <!--      <div :class="`${col2 ?? 'col-lg-9'}`">-->
  <!--        <div :class="`row ${index != 0 ? 'mt-3' : ''}`">-->
  <!--          <div-->
  <!--            class="col-md-4 mt-md-0"-->
  <!--            v-for="{ image, title, subtitle, route, pro } in items"-->
  <!--            :key="title"-->
  <!--          >-->
  <!--            <ExampleCard-->
  <!--              class="min-height-160 shadow-lg mt-4"-->
  <!--              :image="image"-->
  <!--              :title="title"-->
  <!--              :subtitle="subtitle"-->
  <!--              :route="route"-->
  <!--              :pro="pro"-->
  <!--            />-->
  <!--          </div>-->
  <!--        </div>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--  </div>-->

  <DefaultFooter/>
</template>
