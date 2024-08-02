<script setup>
import logoDark from "@/assets/img/logo-ct-dark.png";

defineProps({
  brand: {
    type: Object,
    name: String,
    logo: String,
    route: "",
    default: () => ({
      name: "Leandro & Andrielly",
      logo: logoDark,
      route: "/",
    }),
  },
  socials: {
    type: Array,
    icon: String,
    link: String,
    default: () => [],
  },
  menus: {
    type: Array,
    name: String,
    items: {
      type: Array,
      name: String,
      href: String,
    },
    default: () => [
      {
        name: "Sobre",
        items: [
          {
            name: "Festa",
            href: "/pages/landing-pages/party",
          },
          {
            name: "Cerimônia",
            href: "/pages/landing-pages/ceremony",
          },
        ],
      },
      {
        name: "Presentes",
        items: [
          { name: "Lista de presentes", href: "/pages/landing-pages/gift" },
        ],
      },
      {
        name: "Outros",
        items: [
          {
            name: "Confirmar presença",
            href: "/pages/landing-pages/confirmation",
          },
        ],
      },
    ],
  },
});
</script>
<template>
  <footer class="footer pt-5 mt-5">
    <div class="container">
      <div class="row">
        <div class="col-md-3 mb-4">
          <div>
            <a :href="brand.route">
              <h6 class="font-weight-bolder mb-4">{{ brand.name }}</h6>
            </a>
          </div>
          <div>
            <ul class="d-flex flex-row ms-n3 nav">
              <li
                class="nav-item"
                v-for="{ icon, link } of socials"
                :key="link"
              >
                <a
                  class="nav-link pe-1"
                  :href="link"
                  target="_blank"
                  v-html="icon"
                >
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          class="col-md-2 col-sm-6 col-6 mb-4"
          v-for="{ name, items } of menus"
          :key="name"
        >
          <h6 class="text-sm">{{ name }}</h6>
          <ul class="flex-column ms-n3 nav">
            <li class="nav-item" v-for="item of items" :key="item.name">
              <a class="nav-link" :href="item.href">
                {{ item.name }}
              </a>
            </li>
          </ul>
        </div>

        <div class="col-12">
          <div class="text-center">
            <p class="text-dark my-4 text-sm font-weight-normal">
              Esse site foi feito por Leandro Cantiero (o noivo :D). Copyright ©
              {{ new Date().getFullYear() }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
