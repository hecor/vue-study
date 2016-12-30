<template>
  <div class="card">
    <div class="card-header">{{ card.name }}</div>
    <img v-bind:src="card.background_img_url" alt="Card image" class="card-image">
    <div class="card-block">
      <span class="card-tag card-tag-default" v-for="tag in card.type">{{ tag }}</span>
      <div class="card-content">
        课程是指学校学生所应学习的学科总和及其进程与安排，广义的课程是指学校为实现培养目标而选择的教育内容及其进程的总和。
        萨克拉多房间阿萨德理科计划卢卡斯，斯蒂芬妮卡斯酒店分离空间阿萨德理科和，第三轮福建省大口径宏观i哦i看录得升幅稍大交互。
        Check the numbers below against the numbers on your card. Check the numbers below against the numbers on your card.
        Check the numbers below against the numbers on your card. Check the numbers below against the numbers on your card.
      </div>
      <div class="card-source">{{ card.begin_time }}</div>
    </div>
  </div>
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
  .card {
    position: relative;
    display: block;
    margin-bottom: 0.75rem;
    background-color: #fff;
    border-radius: 0.25rem;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-color: #5cb85c;
  }

  .card-block {
    padding: 0.75rem;
    text-align: left;
  }

  .card-header {
    padding: 0.75rem 1.25rem;
    margin-bottom: 0;
    background-color: #d0f6db;
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  }

  .card-tag {
    display: inline-block;
    padding: 0.25em 0.4em;
    font-size: 75%;
    font-weight: bold;
    line-height: 1;
    color: #fff;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: 0.25rem;
    margin-bottom: 0.5rem;
    margin-right: 0.25rem;
  }

  .card-tag-default {
    background-color: #f0ad4e;
  }

  .card-content {
    text-align: left;
    font-size: 100%;
  }

  .card-source {
    text-align: right;
    margin-top: 10px;
    font-size: 75%;
    color: grey;
  }

  .card-image {
    max-width: 100%;
    height: auto;
  }

</style>
