import { defineStore } from 'pinia';

export default defineStore('modal', {
  state: () => ({
    isOpen: false,
  }),
  getters: {
    hiddenClass(state) {
      if (state.isOpen) return '';
      else return 'hidden';
    },
  },
});
