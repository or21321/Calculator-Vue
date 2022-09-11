<template>
  <section class="calculator">
    <p class="calculator-screen">
      <span>
        {{ result || currExpressionForScreen }}
      </span>
    </p>
    <div class="calculator-controls">
      <div
        class="calc-btn"
        @click="onClickOperator(operator)"
        v-for="(operator, idx) in operators"
        :key="idx"
      >
        <span>{{ operator }}</span>
      </div>
      <div
        class="calc-btn"
        @click="onClickDigit(digit)"
        v-for="digit in digits"
        :key="digit"
      >
        <span>{{ digit }}</span>
      </div>
      <span class="calc-btn equal" @click="onClickOperator('=')">=</span>
      <span class="calc-btn reset" @click="onResetCalculator()">AC</span>
    </div>
  </section>
</template>

<script>
export default {
  name: "Calculator",
  emits: ["onCalculateExpression"],
  props: {
    result: {
      type: String,
    },
  },
  data() {
    return {
      digits: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "."],
      operators: ["+", "-", "*", "/"],
      currExpressionForScreen: "",
      currExpressionFull: "",
    };
  },
  methods: {
    onClickDigit(clickedVal) {
      console.log("clickedVal", clickedVal);
      this.currExpressionForScreen += clickedVal + "";
    },
    onClickOperator(clickedVal) {
      console.log("clickedVal", clickedVal);
      if (clickedVal === "=") {
        this.currExpressionFull += this.currExpressionForScreen;
        this.currExpressionForScreen = "";
        this.$emit("onCalculateExpression", this.currExpressionFull);
      } else {
        this.currExpressionFull +=
          this.currExpressionForScreen + ` ${clickedVal} `;
        this.currExpressionForScreen = "";
        console.log("this.currExpressionFull", this.currExpressionFull);
      }
    },
    onResetCalculator() {
      this.currExpressionForScreen = "";
      this.currExpressionFull = "";
    },
  },
};
</script>