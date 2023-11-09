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

      if (filters && filters.length) {
        const params = new URLSearchParams();
        params.append("filters", JSON.stringify(filters));
        url += `?${params.toString()}`;
      }
      // console.log("url", url);
      const response = await fetch(url);
      const data = await response.json();

      this.collectivites = data;
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
