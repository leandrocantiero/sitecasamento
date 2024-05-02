<script setup>
import { ref, onMounted } from "vue";
import emailjs from "@emailjs/browser";
import MaterialButton from "@/components/MaterialButton.vue";
import MaterialInput from "@/components/MaterialInput.vue";
import MaterialTextArea from "@/components/MaterialTextArea.vue";
import bgContact from "@/assets/img/examples/blog2.jpg";
import festaImg from "@/assets/img/festa-1.webp";
import setTooltip from "@/assets/js/tooltip";
import {
  MAILJS_ENDPOINT,
  MAILJS_PUBLIC_KEY,
  MAILJS_SERVICE_ID,
  MAILJS_TEMPLATE_ID,
} from "@/global";
import { useAppStore } from "@/stores";
import { useAxios } from "@/plugins/axios";
import { useToast } from "vue-toastification";

const store = useAppStore();
const { loading, fetchData } = useAxios();
const { success, error } = useToast();
const form = ref(null);

function validateData(params) {
  if (!params.name) {
    error("Informe seu nome");
    return false;
  }

  if (params.name.length < 5) {
    error("Informe seu nome completo");
    return false;
  }

  if (!params.email) {
    error("Informe seu email");
    return false;
  }

  const emailRegex = /^[\w-.]+@([\w-.]+\.)+[a-zA-Z]{2,}$/;
  if (!emailRegex.test(params.email)) {
    error("Informe um email válido");
    return false;
  }

  if (!params.phone) {
    error("Informe seu telefone");
    return false;
  }

  if (params.phone.length !== 11) {
    error("Informe um telefone válido");
    return false;
  }

  if (!params.guestCount || params.guestCount === 0) {
    error("Informe o quantas pessoas vão");
    return false;
  }

  if (!params.kidsCount) {
    error("Informe o quantas crianças vão");
    return false;
  }

  return true;
}

const sendEmail = function () {
  var data = {
    service_id: MAILJS_SERVICE_ID,
    template_id: MAILJS_TEMPLATE_ID,
    user_id: MAILJS_PUBLIC_KEY,
    template_params: {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      guestCount: document.getElementById("guestCount").value,
      kidsCount: document.getElementById("kidsCount").value,
      message: document.getElementById("message").value,
    },
  };

  if (!validateData(data.template_params)) {
    return;
  }

  loading.value = true;
  fetchData(MAILJS_ENDPOINT, { method: "POST", data: data })
    .then(() => {
      success("Obrigado por confirmar sua presença :D");
      form.value?.reset();
    })
    .catch((err) => {
      error(
        "Ops! Parece que tivemos um problema, pode tentar novamente mais tarde?"
      );
      console.error("Error sending email:", err);
    });
};

onMounted(() => {
  setTooltip(store.bootstrap);
});
</script>
<template>
  <section class="py-lg-5">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="card box-shadow-xl overflow-hidden mb-5">
            <div class="row">
              <div
                class="col-lg-5 position-relative bg-cover px-0"
                :style="{ backgroundImage: `url(${festaImg})` }"
                loading="lazy"
              >
                <div
                  class="z-index-2 text-center d-flex h-100 w-100 d-flex m-auto justify-content-center"
                >
                  <div class="mask bg-gradient-dark opacity-8"></div>
                  <div
                    class="p-5 ps-sm-8 position-relative text-start my-auto z-index-2"
                  >
                    <h3 class="text-white">Confirmar presença</h3>
                    <p class="text-white opacity-8 mb-4">
                      Utilize o formulário para confirmar sua presença no nosso
                      evento.
                    </p>
                    <div class="d-flex p-2 text-white">
                      <div>
                        <i class="material-icons opacity-8"> church </i>
                      </div>
                      <div class="ps-3">
                        <a
                          href="https://maps.app.goo.gl/NRdRpKYx7niAQbx38"
                          target="_blank"
                          class="text-sm opacity-8 text-white"
                          >R. Siqueira Campos, 815 - Centro, Pres. Prudente -
                          SP.</a
                        >
                      </div>
                    </div>
                    <div class="d-flex p-2 text-white">
                      <div>
                        <i class="material-icons opacity-8"> restaurant </i>
                      </div>
                      <div class="ps-3">
                        <a
                          href="https://maps.app.goo.gl/3JcBwonfEgZeGSvNA"
                          target="_blank"
                          class="text-sm opacity-8 text-white"
                          >R. José Bongiovani, 76 - Vila Liberdade, Pres.
                          Prudente - SP.</a
                        >
                      </div>
                    </div>
                    <div class="d-flex p-2 opacity-8 text-white">
                      <i class="material-icons"> event </i>
                      <div class="ps-3">
                        <span class="text-sm opacity-8"
                          >Save the Date! 08/02/2025</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-7">
                <form class="p-3" id="form" ref="form" method="post">
                  <div class="card-header px-4 py-sm-5 py-3">
                    <h2>Preencha o formulário</h2>
                    <p class="lead"></p>
                  </div>
                  <div class="card-body pt-1">
                    <div class="row">
                      <div class="col-md-12 pe-2 mb-3">
                        <MaterialInput
                          id="name"
                          class="input-group-static mb-4"
                          label="Seu nome completo"
                          type="text"
                          placeholder="João da Silva"
                        />
                      </div>
                      <div class="col-md-12 pe-2 mb-3">
                        <MaterialInput
                          id="email"
                          class="input-group-static mb-4"
                          label="Seu email"
                          type="email"
                          placeholder="joaosilva@hotmail.com"
                        />
                      </div>
                      <div class="col-md-12 pe-2 mb-3">
                        <MaterialInput
                          id="phone"
                          class="input-group-static mb-4"
                          label="Seu contato (Whatsapp de preferência)"
                          type="tel"
                          placeholder="(00) 00000-0000"
                        />
                      </div>
                      <div class="col-md-12 pe-2 mb-3">
                        <MaterialInput
                          id="guestCount"
                          class="input-group-static mb-4"
                          label="Quantas pessoas vão? (contando você)"
                          type="number"
                          placeholder="3"
                        />
                      </div>
                      <div class="col-md-12 pe-2 mb-3">
                        <MaterialInput
                          id="kidsCount"
                          class="input-group-static mb-4"
                          label="Quantas crianças vão? (até 10 anos)"
                          type="number"
                          placeholder="1"
                        />
                      </div>
                      <div class="col-md-12 pe-2 mb-3">
                        <MaterialTextArea
                          id="message"
                          class="input-group-static mb-4"
                          placeholder="Vocês já tem geladeira?"
                          :rows="6"
                          >Está animado? Deixe uma mensagem!
                        </MaterialTextArea>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6 text-end ms-auto">
                        <MaterialButton
                          variant="gradient"
                          color="success"
                          type="button"
                          class="mb-0"
                          :loading="loading"
                          @click="sendEmail()"
                          >Confirmar
                        </MaterialButton>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
