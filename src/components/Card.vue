<template>
  <el-card :body-style="{ padding: '0px' }">
    <h4 class="card-title">{{ card.name }}</h4>
    <h6 class="card-subtitle text-muted">{{ card.type }}</h6>
    <img v-bind:src="card.background_img_url" alt="Card image" class="card-image">
    <div class="card-text">{{ card.introduction }}</div>
    <div class="bottom clearfix card-source">{{ card.begin_time }}</div>
  </el-card>
</template>

<script>
  export default {
    data () {
      return {}
    },
    props: {
      card: {
        type: Object
      }
    }
  }
</script>

<style>
  .card-source {
    margin-top: 10px;
    font-size: xx-small;
    color: grey;
  }
  .card-image {
    max-width: 100%;
    height: auto;
  }
</style>
