<template>
  <div>
    <ul class="cate-box">
      <li class="cate-list" v-for="(item, index) in cateList" :key="item.id">
        <img class="cate-img" :src="item.img" />
        <p>{{ item.name }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import {getCategory} from "../../api/home"
export default {
  data() {
    return {
      cateList: [],
    };
  },
  created() {
    this._getCategory()
  },
  methods: {
      _getCategory() {
          getCategory().then(res=>{
            //   console.log('分类数据',res);
              this.cateList = res.data
          })
      }
  },
};
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