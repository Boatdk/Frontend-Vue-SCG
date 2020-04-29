<template>
  <div class="content">
    <b-container fluid>
      <b-card
        header="Problem 2: "
        header-tag="header"
        footer="Card Footer"
        footer-tag="footer"
        title="If A = 21, A+B = 23, A+C = -21 finding B and C value"
      >
        <b-card-text class="answer"
          ><p class="text-danger"><b>ans</b></p>
          : B = {{ ans.b }} and C = {{ ans.c }}
        </b-card-text>
      </b-card>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";

const fetchData = async () => {
  let answer = await axios("http://localhost:4000/api/doscg/problem02");
  const { data } = answer.data;
  return data;
};

export default {
  name: "Problem02",
  data() {
    return {
      ans: ""
    };
  },
  async mounted() {
    this.ans = await fetchData();
  }
};
</script>

<style scoped>
.answer {
  display: flex;
}
.card-answer {
  width: 50%;
}
</style>
