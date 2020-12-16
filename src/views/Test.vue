<template>
  <div class="container">
    <h2>
      count:<span class="count"> {{ count }}</span>
    </h2>
    <button @click="actionIncrease">+</button>
    <button @click="actionDecrease">-</button>
    <h3>{{ info }}</h3>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
// import { mapGetters } from "vuex";
import { ref, onMounted } from "vue";
import axios from "axios";

export default {
  methods: {
    ...mapActions(["actionIncrease", "actionDecrease", "getTrafficData"]),
  },
  computed: {
    // ...mapGetters({
    //   count: "getCount",
    // }),
    ...mapState(["count"]),
  },
  setup() {
    // reactive state
    const info = ref();
    // lifecycle
    onMounted(() => {
      axios
        .get("http://e-traffic.taichung.gov.tw/DataAPI/api/ThsrStationAPI")
        .then((res) => {
          console.table(res.data);
          info.value = res.data;
          // console.log(info);
        })
        .catch((error) => {
          console.error(error);
        });
    });
    // expose bindings on render context
    return {
      info,
    };
  },
};
</script>

<style scoped lang="scss">
.count {
  color: red;
}
</style>