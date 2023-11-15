// stores/filters.js

import { defineStore } from "pinia";
import { ref } from "vue";

export const useFiltersStore = defineStore("filters", {
  state: () => ({
    filtersArray: {
      types: [],
      departements: [],
    },

    collectivites: ref([]),
    data: [],
  }),

  actions: {
    toggleFilters(filterCategory, filterValue) {
      if (filterCategory === "type") {
        this.filtersArray.types.includes(filterValue)
          ? this.filtersArray.types.splice(
              this.filtersArray.types.indexOf(filterValue),
              1
            )
          : this.filtersArray.types.push(filterValue);
      } else if (filterCategory === "departement") {
        this.filtersArray.departements.includes(filterValue)
          ? this.filtersArray.departements.splice(
              this.filtersArray.departements.indexOf(filterValue),
              1
            )
          : this.filtersArray.departements.push(filterValue);
      }
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
