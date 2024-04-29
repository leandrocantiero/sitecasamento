<script setup>
import DefaultFooter from "@/examples/footers/FooterDefault.vue";
import DefaultNavbar from "@/examples/navbars/NavbarDefault.vue";

import bg0 from "@/assets/img/bg9.jpg";
import ExampleCard from "@/views/Presentation/Components/ExampleCard.vue";
import MaterialBadge from "@/components/MaterialBadge.vue";
const imagesPrefix = "https://images.pexels.com/photos/1676124";

const data = [
  {
    id: "kitchen",
    heading: "Cozinha",
    description: "Uma seleção de itens de cozinha",
    items: [
      {
        image: `https://panasonic.vtexassets.com/arquivos/ids/159776-1000-1000/NR-BB53PV3XA.jpg?v=637703448456530000`,
        title: "Geladeira Panasonic bb53",
        subtitle: "Geladeira Panasonic Frost Free 425L A+++ de aço escovado",
        route:
          "https://loja.panasonic.com.br/geladeira-frost-free-nr-bb53pv3x-425l/p?skuId=35193",
      },
      {
        image: `https://m.media-amazon.com/images/I/61UpYBI858L._AC_SL1200_.jpg`,
        title: "Jogo de Panelas Cerâmica 10 Peças",
        subtitle: "Jogo de Panelas Cerâmica 10 Peças Marmol Mimo Style",
        route:
          "https://www.amazon.com.br/Panelas-Cer%C3%A2mica-Indu%C3%A7%C3%A3o-Mimo-Style/dp/B0CNH9GB7Q/ref=asc_df_B0CNH9GB7Q/?tag=googleshopp00-20&linkCode=df0&hvadid=676045623741&hvpos=&hvnetw=g&hvrand=11074269163394929095&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1001760&hvtargid=pla-2264161151187&psc=1&mcid=cadebf36b41739af93c144763222b4a7",
      },
      {
        image: `https://cliente.havan.com.br/FileStreamApi/api/imagem/produto/grande/856667`,
        title: "Jogo Talheres de Churrasco Tramontina",
        subtitle: "para Churrasco Jumbo Inox com 12 Peças",
        route: "https://lista.havan.com.br/Convidado/ItensListaPresente/743666",
      },
      {
        image: `https://cliente.havan.com.br/FileStreamApi/api/imagem/produto/grande/684783`,
        title: "Tábua de Churrasco Tramontina",
        subtitle: "Tábua de Churrasco Tramontina 37x21",
        route:
          "https://lista.havan.com.br/Convidado/ItensListaPresente/743666",
      },
      {
        image: `https://cliente.havan.com.br/FileStreamApi/api/imagem/produto/grande/873917`,
        title: "Forno Elétrico Espelhado",
        subtitle: "Forno Elétrico 44 Litros Sonetto Espelhado G3 Mueller",
        route:
          "https://lista.havan.com.br/Convidado/ItensListaPresente/743666",
      },
      {
        image: `https://cliente.havan.com.br/FileStreamApi/api/imagem/produto/grande/806569`,
        title: "Faqueiro Havaí Tramontina 36 Peças",
        subtitle: "Faqueiro Havaí Tramontina 36 Peças Inox",
        route:
          "https://lista.havan.com.br/Convidado/ItensListaPresente/743666",
      },
    ],
  },
  {
    id: "room",
    heading: "Quarto",
    description: "Uma seleção de itens para o quarto",
    items: [
      {
        image:
          "https://www.lg.com/content/dam/channel/wcms/br/images/ar-condicionado-residencial/s3-q12jaqal_eb2gam1_essp_br_c/basic-compact-450.jpg",
        title: "Ar-Condicionado LG",
        subtitle:
          "Ar-Condicionado LG Dual Inverter Compact +AI 12.000 BTU Frio 220V",
        route:
          "https://www.lg.com/br/ar-condicionado-residencial/dual-inverter-split/s3-q12jaqal-1/",
      },
      {
        image:
          "https://www.havan.com.br/media/catalog/product/cache/73a52df140c4d19dbec2b6c485ea6a50/j/o/jogo-de-cama-queen-4-pecas-buona-fortuna-_886407.jpg",
        title: "Jogo de cama Queen",
        subtitle: "Jogo de cama Queen Percal 200 Fios Buona Fortuna 4 Peças",
        route: "https://lista.havan.com.br/Convidado/ItensListaPresente/743666",
      },
      {
        image:
          "https://emcompre.com.br/media/catalog/product/2/8/281041-1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700",
        title: "Cama Box Baú Queen",
        subtitle:
          "Cama Box Baú Queen Bamboo Molas Ensacadas 158x198x64 BF Colchões",
        route:
          "https://www.havan.com.br/media/catalog/product/cache/73a52df140c4d19dbec2b6c485ea6a50/j/o/jogo-de-cama-queen-4-pecas-buona-fortuna-_886407.jpg",
      },
    ],
  },
  {
    id: "general",
    heading: "Geral",
    description: "Uma seleção de itens gerais de casa",
    items: [
      {
        image:
          "https://www.havan.com.br/media/catalog/product/cache/73a52df140c4d19dbec2b6c485ea6a50/a/s/aspirador-de-po-vertical-electrolux-powerspeed-ultra-stk15_501439_2.jpg",
        title: "Aspirador de Pó Vertical Electrolux",
        subtitle:
          "Aspirador de Pó Vertical Electrolux PowerSpeed Ultra STK15 1300W",
        route: "https://lista.havan.com.br/Convidado/ItensListaPresente/743666",
      },
    ],
  },
];
</script>

<template>
  <DefaultNavbar transparent />

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
              Veja nossa lista de presentes e escolha um para nos presentear :D
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
            <p class="lead">
              Utilize o código <span class="text-success">26221427-9</span>
            </p>
            <a
              class="lead"
              href="https://lista.havan.com.br/Convidado"
              target="_blank"
              >Clique aqui para ver</a
            >
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="container mt-sm-5 mt-3">
    <div class="row text-center justify-content-center">
      <div class="col-1" v-for="{ id, heading } in data" :key="id">
        <a :href="`#${id}`">
          <MaterialBadge size="" color="info" rounded>{{
            heading
          }}</MaterialBadge>
        </a>
      </div>
    </div>
  </div>

  <div class="container mt-sm-5 mt-3">
    <p class="lead">
      Atenção! Sinta-se a vontade para procurar por melhores preços em outras
      lojas :D
    </p>

    <div
      v-for="({ id, heading, description, items }, index) in data"
      :class="`row ${index != 0 && index != -1 ? 'pt-lg-6' : ''}`"
      :key="id"
      :id="id"
    >
      <div :class="`${col1 ?? 'col-lg-3'}`">
        <div
          class="position-sticky pb-lg-5 pb-3 mt-lg-0 mt-5 ps-2"
          style="top: 100px"
        >
          <h3>{{ heading }}</h3>
          <h6 class="text-secondary font-weight-normal pe-3">
            {{ description }}
          </h6>
        </div>
      </div>
      <div :class="`${col2 ?? 'col-lg-9'}`">
        <div :class="`row ${index != 0 ? 'mt-3' : ''}`">
          <div
            class="col-md-4 mt-md-0"
            v-for="{ image, title, subtitle, route, pro } in items"
            :key="title"
          >
            <ExampleCard
              class="min-height-160 shadow-lg mt-4"
              :image="image"
              :title="title"
              :subtitle="subtitle"
              :route="route"
              :pro="pro"
            />
          </div>
        </div>
      </div>
    </div>
  </div>

  <DefaultFooter />
</template>
