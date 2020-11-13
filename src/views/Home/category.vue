<template>
  <div>
    <ul class="cate-box">
      <li class="cate-list" v-for="(item,index) in 10" :key="index">
        <img
          class="cate-img"
          src="http://admin.gxxmglzx.com/tender/upload/test/type1.png"
        />
        <p>美食</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.cate-box {
  display: flex;
  flex-wrap: wrap;
  
  .cate-list {
    width: 20%;
    text-align: center;
    font-size: 11px;
    padding-top: 0.3rem;
    .cate-img {
      width: 0.88rem;
      height: 0.88rem;
      margin-bottom: 0.1rem;
    }
  }
}
</style>