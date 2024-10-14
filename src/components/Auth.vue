<template>
  <!-- Auth Modal -->
  <div class="fixed inset-0 z-10 overflow-y-auto" id="modal" v-bind:class="hiddenClass">
    <div
      class="flex min-h-screen items-end justify-center px-4 pb-20 pt-4 text-center sm:block sm:p-0"
    >
      <div class="fixed inset-0 transition-opacity">
        <div class="absolute inset-0 bg-gray-800 opacity-75"></div>
      </div>

      <!-- This element is to trick the browser into centering the modal contents. -->
      <span class="hidden sm:inline-block sm:h-screen sm:align-middle">&#8203;</span>

      <div
        class="inline-block transform overflow-hidden rounded-lg bg-white text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:align-middle"
      >
        <!-- Add margin if you want to see some of the overlay behind the modal-->
        <div class="px-6 py-4 text-left">
          <!--Title-->
          <div class="flex items-center justify-between pb-4">
            <p class="text-2xl font-bold">Your Account</p>
            <!-- Modal Close Button -->
            <div
              class="modal-close z-50 cursor-pointer"
              v-on:click.prevent="modalVisibility = false"
            >
              <i class="fas fa-times"></i>
            </div>
          </div>

          <!-- Tabs -->
          <ul class="mb-4 flex flex-wrap">
            <li class="flex-auto text-center">
              <a
                class="block rounded px-4 py-3 transition"
                href="#"
                v-bind:class="{
                  'bg-blue-600 text-white hover:text-white': tab === 'login',
                  'hover:text-blue-600': tab === 'register',
                }"
                v-on:click.prevent="tab = 'login'"
              >
                Login
              </a>
            </li>
            <li class="flex-auto text-center">
              <a
                class="block rounded px-4 py-3 transition"
                href="#"
                v-bind:class="{
                  'bg-blue-600 text-white hover:text-white': tab === 'register',
                  'hover:text-blue-600': tab === 'login',
                }"
                v-on:click.prevent="tab = 'register'"
              >
                Register
              </a>
            </li>
          </ul>

          <app-login-form-vue v-if="tab === 'login'" />
          <app-register-form-vue v-else />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapWritableState } from 'pinia';
import useModalStore from '@/stores/modal';
import AppLoginFormVue from '@/components/LoginForm.vue';
import AppRegisterFormVue from '@/components/RegisterForm.vue';

export default {
  name: 'Auth',
  components: {
    AppLoginFormVue,
    AppRegisterFormVue,
  },
  data() {
    return {
      tab: 'login',
    };
  },
  computed: {
    ...mapState(useModalStore, ['hiddenClass']),
    ...mapWritableState(useModalStore, {
      modalVisibility: 'isOpen',
    }),
  },
  methods: {},
};
</script>
