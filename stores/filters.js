// stores/filters.js

import { defineStore } from "pinia";
import { ref } from "vue";

export const useFiltersStore = defineStore("filters", {
  state: () => ({
    selectedTypes: [],
    data: [],
  }),

  actions: {
    toggleFilters(type) {
      console.log("action pinia");
      const selectedTypes = ref([]);
      const index = selectedTypes.value.indexOf(type);
      if (index !== -1) {
        selectedTypes.value.splice(index, 1);
      } else {
        selectedTypes.value.push(type);
      }
      console.log(selectedTypes.value);
    },

    async fetchData(filters) {
      console.log("this", this.selectedTypes);
      // Appel API avec filters
      // Mettre à jour this.data
    },
  },
});
