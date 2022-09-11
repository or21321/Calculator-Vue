<template>
  <main class="calculator-app">
    <calculator
      :result="result"
      @onCalculateExpression="calculateExpression"
    ></calculator>
  </main>
</template>

<script>
import { calculatorService } from "../services/calculator.service";
import calculator from "../cmps/calculator.vue";

export default {
  name: "Calculator-App",
  components: {
    calculator,
  },
  data() {
    return {
      result: "",
    };
  },
  methods: {
    async calculateExpression(expression) {
      console.log("calculateExpression", expression);
      const res = await calculatorService.queryExpressionRes(expression);
      this.result = res.toString();
    },
  },
};
</script>