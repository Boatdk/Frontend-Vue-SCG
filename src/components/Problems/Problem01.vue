<template>
  <div>
    <b-container fluid>
    <b-card
      header="Problem 1: "
      header-tag="header"
      footer="Card Footer"
      footer-tag="footer"
      title="X, Y, 5, 9, 15, 23, Z finding X, Y, Z value"
    >
      <b-card-text class="answer"><p class="text-danger"><b>ans</b></p>:  {{ ans }} </b-card-text>
    </b-card>
    </b-container>
  </div>
</template>

<script>
import axios from 'axios'

    const fetchData = async () => {
      let answer = await axios('http://localhost:4000/api/doscg/problem01')
      console.log(answer.data.message)
      const {data} = answer.data
      console.log(data)
      return data
    }

export default {
  name: 'Problem01',
  data(){
    return {
      ans: []
    }
  },
  async mounted(){
    this.ans = await fetchData()
  }
}
</script>

<style scoped>
  .answer {
    display: flex;
  }
  .card-answer {
    width: 50%;
  }
</style>