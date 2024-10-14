<template>
  <!-- Registration Form -->
  <div
    class="mb-4 rounded p-4 text-center font-bold text-white"
    v-if="reg_show_alert"
    v-bind:class="reg_alert_variant"
  >
    {{ reg_alert_msg }}
  </div>
  <vee-form
    v-bind:validation-schema="schema"
    v-on:submit="register"
    v-bind:initial-values="userData"
  >
    <!-- Name -->
    <div class="mb-3">
      <label class="mb-2 inline-block">Name</label>
      <vee-field
        as="input"
        name="name"
        type="text"
        class="block w-full rounded border border-gray-300 px-3 py-1.5 text-gray-800 transition duration-500 focus:border-black focus:outline-none"
        placeholder="Enter Name"
      />
      <vee-error-message class="text-red-600" name="name" />
    </div>
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
    <!-- Age -->
    <div class="mb-3">
      <label class="mb-2 inline-block">Age</label>
      <vee-field
        as="input"
        name="age"
        type="number"
        class="block w-full rounded border border-gray-300 px-3 py-1.5 text-gray-800 transition duration-500 focus:border-black focus:outline-none"
      />
      <vee-error-message class="text-red-600" name="age" />
    </div>
    <!-- Password -->
    <div class="mb-3">
      <label class="mb-2 inline-block">Password</label>
      <vee-field name="password" v-bind:bails="false" v-slot="{ field, errors }">
        <input
          type="password"
          class="block w-full rounded border border-gray-300 px-3 py-1.5 text-gray-800 transition duration-500 focus:border-black focus:outline-none"
          placeholder="Password"
          v-bind="field"
        />
        <div class="text-red-600" v-for="error in errors" v-bind:key="error">
          {{ error }}
        </div>
      </vee-field>
    </div>
    <!-- Confirm Password -->
    <div class="mb-3">
      <label class="mb-2 inline-block">Confirm Password</label>
      <vee-field
        as="input"
        name="confirm_password"
        type="password"
        class="block w-full rounded border border-gray-300 px-3 py-1.5 text-gray-800 transition duration-500 focus:border-black focus:outline-none"
        placeholder="Confirm Password"
      />
      <vee-error-message class="text-red-600" name="confirm_password" />
    </div>
    <!-- Country -->
    <div class="mb-3">
      <label class="mb-2 inline-block">Country</label>
      <vee-field
        as="select"
        name="country"
        class="block w-full rounded border border-gray-300 px-3 py-1.5 text-gray-800 transition duration-500 focus:border-black focus:outline-none"
      >
        <option disabled default>Select country</option>
        <option value="USA">USA</option>
        <option value="Japan">Japan</option>
        <option value="Bangladesh">Bangladesh</option>
        <option value="India">India</option>
      </vee-field>
      <vee-error-message class="text-red-600" name="country" />
    </div>
    <!-- TOS -->
    <div class="mb-3 pl-6">
      <vee-field
        as="input"
        name="tos"
        value="1"
        type="checkbox"
        class="float-left -ml-6 mt-1 h-4 w-4 rounded"
      />
      <vee-error-message class="text-red-600" name="tos" />
      <label class="inline-block">Accept terms of service</label>
    </div>
    <!-- Submit -->
    <button
      type="submit"
      class="block w-full rounded bg-purple-600 px-3 py-1.5 text-white transition hover:bg-purple-700"
      v-bind:disabled="reg_in_submission"
    >
      Submit
    </button>
  </vee-form>
</template>

<script>
export default {
  name: 'RegisterForm',
  data() {
    return {
      schema: {
        name: 'required|min:3|max:100|alpha_spaces',
        email: 'required|min:3|max:100|email',
        age: 'required|min_value:18|max_value:100',
        password: 'required|min:9|max:100|excluded:password',
        confirm_password: 'password_mismatch:@password',
        country: 'required|country_excluded:India',
        tos: 'tos',
      },
      userData: {
        country: 'Bangladesh',
      },
      reg_in_submission: false,
      reg_show_alert: false,
      reg_alert_variant: 'bg-blue-500',
      reg_alert_msg: 'Please wait! Your account is being created.',
    };
  },
  methods: {
    register(form_data) {
      console.log('Registration', form_data);
      this.reg_show_alert = true;
      this.reg_in_submission = true;
      this.reg_alert_variant = 'bg-blue-500';
      this.reg_alert_msg = 'Please wait! Your account is being created.';

      this.reg_alert_variant = 'bg-green-500';
      this.reg_alert_msg = 'Success! Your account has been created.';
    },
  },
};
</script>
