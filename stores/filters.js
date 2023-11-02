// stores/filters.js

import { defineStore } from "pinia";
import { ref } from "vue";

export const useFiltersStore = defineStore("filters", {
  state: () => ({
    selectedTypes: ref([]),
    collectivites: ref([]),
    data: [],
  }),

  actions: {
    toggleFilters(type) {
      // Vérifier si type existe déjà
      const index = this.selectedTypes.indexOf(type);

      // Ajouter ou enlever selon que ça existe ou non
      if (index === -1) {
        this.selectedTypes.push(type);
      } else {
        this.selectedTypes.splice(index, 1);
      }
      //   console.log("all", this.selectedTypes);
    },

    async fetchData(filters) {
      //   console.log("filters", filters);
      // Appel API avec filters
      const {
        data: collectivitesFiltered,
        pending,
        error,
      } = useLazyFetch(() => "/api/collectivites", {
        key: "collectivites",
      });
      // console.log("collectivitesFiltered", collectivitesFiltered);
      // Mettre à jour this.data
    },
  },
});
