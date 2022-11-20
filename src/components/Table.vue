<template>
    <v-data-table
      :headers="headers"
      :items="items"
      hide-default-footer
      class="elevation-1 overflow-hidden"
      :items-per-page="items?.length"
    ></v-data-table>
  </template>
  
  <script>
  export default {
    name: "TableVue",
  
    data: () => ({
      years: Array(7).fill(2000).map((i, j) => i + j),
  
      cities: [
        "Аргентина",
        "Ямайка",
        "США",
        "Германия",
        "Россия",
        "Бразилия",
        "Греция",
        "Италия",
        "Украина",
        "Испания",
        "Турция",
        "Египет",
        "Япония",
        "ЮАР",
        "Ирландия",
        "Норвегия",
        "Грузия",
        "Польша",
        "Чехия",
      ]
    }),
  
    computed: {
      headers() {
        return [
          {
            text: "Country Name",
            value: "country",
          },
        ].concat(this.years.map((i) => ({ text: i, value: String(i) })))
      },
  
      items() {
          return this.cities.map(c => this.years.reduce((acc, v) => ({
              ...acc, 
              [String(v)]: Math.round(Math.random() * 100000) / 100
          }), { country: c}))
      }
    },
  };
  </script>