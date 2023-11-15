// stores/filters.js

import { defineStore } from "pinia";
import { ref } from "vue";

// stores/collectivites.js

export const useCollectivitesStore = defineStore("collectivites", {
  state: () => ({
    collectivites: [],
    filters: [],
  }),

  actions: {
    async fetchCollectivites(filters) {
      let url = "/api/collectivites";
      console.log("filtres1", filters);
      if (filters) {
        const params = new URLSearchParams();

        Object.entries(filters).forEach(([filterType, filterValues]) => {
          filterValues.forEach((filterValue) => {
            params.append(filterType, filterValue);
          });
        });

        url += `?${params.toString()}`;
      }
      console.log("url", url);
      const response = await fetch(url);
      const data = await response.json();

      this.collectivites = data;
      console.log("ici", data);
      // console.log("collfiltred", data);
    },
  },

  getters: {
    filteredCollectivites(state) {
      return state.collectivites.filter((collectivite) => {
        // Filtrer en fonction des filters sélectionnés
      });
    },
  },
});
