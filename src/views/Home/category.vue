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
import axios from "axios";
export default {
  data() {
    return {
      cateList: [],
    };
  },
  created() {
    axios({
      url: "http://admin.gxxmglzx.com/tender/test/get_type",
    })
      .then((res) => {
        if (res.data.errcode === 200) {
          console.log("获取分类数据", res.data);
          this.cateList = res.data.data;
        } else {
          console.log(res.data.errmsg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
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