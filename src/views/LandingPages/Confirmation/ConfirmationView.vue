<script setup>
import ContactForm from "@/views/LandingPages/Author/Sections/ContactForm.vue";
import DefaultFooter from "@/examples/footers/FooterDefault.vue";
import DefaultNavbar from "@/examples/navbars/NavbarDefault.vue";
</script>

<template>
  <div class="container position-sticky z-index-sticky top-0">
    <div class="row">
      <div class="col-12">
        <DefaultNavbar :sticky="true" />
      </div>
    </div>
  </div>

  <ContactForm class="my-7" />

  <DefaultFooter />
</template>
