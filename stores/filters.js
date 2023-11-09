// stores/filters.js

import { defineStore } from "pinia";
import { ref } from "vue";

export const useFiltersStore = defineStore("filters", {
  state: () => ({
    selectedTypes: ref([]),
    selectedDepartement: ref([]),
    collectivites: ref([]),
    data: [],
  }),

  actions: {
    toggleFilters(selfilters) {
      // Vérifier si type existe déjà
      const index = this.selectedTypes.indexOf(selfilters);

      // Ajouter ou enlever selon que ça existe ou non
      if (index === -1) {
        this.selectedTypes.push(selfilters);
      } else {
        this.selectedTypes.splice(index, 1);
      }
      console.log("filtres2", this.selectedTypes);
    },

    async fetchData(filters) {
      const {
        data: collectivitesFiltered,
        pending,
        error,
      } = useLazyFetch(() => "/api/collectivites", {
        key: "collectivites",
      });
    },
  },
});
