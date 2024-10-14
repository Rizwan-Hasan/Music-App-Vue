<template>
  <!-- Login Form -->
  <div
    class="mb-4 rounded p-4 text-center font-bold text-white"
    v-if="login_show_alert"
    v-bind:class="login_alert_variant"
  >
    {{ login_alert_msg }}
  </div>
  <vee-form v-bind:validation-schema="loginSchema" v-on:submit="login">
    <!-- Email -->
    <div class="mb-3">
      <label class="mb-2 inline-block">Email</label>
      <vee-field
        as="input"
        name="email"
        type="email"
        class="block w-full rounded border border-gray-300 px-3 py-1.5 text-gray-800 transition duration-500 focus:border-black focus:outline-none"
        placeholder="Enter Email"
      />
      <vee-error-message class="text-red-600" name="email" />
    </div>
    <!-- Password -->
    <div class="mb-3">
      <label class="mb-2 inline-block">Password</label>
      <vee-field
        as="input"
        name="password"
        type="password"
        class="block w-full rounded border border-gray-300 px-3 py-1.5 text-gray-800 transition duration-500 focus:border-black focus:outline-none"
        placeholder="Password"
      />
      <vee-error-message class="text-red-600" name="password" />
    </div>
    <button
      type="submit"
      class="block w-full rounded bg-purple-600 px-3 py-1.5 text-white transition hover:bg-purple-700"
      v-bind:disabled="login_in_submission"
    >
      Submit
    </button>
  </vee-form>
</template>

<script>
export default {
  name: 'LoginForm',
  data() {
    return {
      loginSchema: {
        email: 'required|email',
        password: 'required|min:9|max:100',
      },
      login_in_submission: false,
      login_show_alert: false,
      login_alert_variant: 'bg-blue-500',
      login_alert_msg: 'Please wait! We are logging you in.',
    };
  },
  methods: {
    login(form_data) {
      console.log('Login', form_data);

      this.login_show_alert = true;
      this.login_in_submission = true;
      this.login_alert_variant = 'bg-blue-500';
      this.login_alert_msg = 'Please wait! We are logging you in.';
      this.login_alert_variant = 'bg-green-500';
      this.login_alert_msg = 'Success! You are now logged in.';
    },
  },
};
</script>
