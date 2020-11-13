<template>
  <div>
    <van-sticky :offset-top="0">
      <div class="header">
        <input type="text" class="search" placeholder="请输入商家或商品名称" />
      </div>
    </van-sticky>
    <h6 v-for="(item,index) in arr" :key="index">{{item}}</h6>
  </div>
</template>

<script>
export default {
    data() {
        return {
            arr: []
        }
    },
    created(){
        this.arr = [...("Sticky.".repeat(100).split('.'))]
    }
};
</script>

<style lang="sass" scoped>
.header
    background-color: #1c1b20
    padding: 0.2rem
    .search
        width: 100%
        border: none
        height: 0.6rem
        line-clamp: 0.6rem
        border-radius: 0.3rem
        padding: 0 0.6rem
        box-sizing: border-box
        font-size: 0.28rem
</style>