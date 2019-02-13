<template>
  <div class="home">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link to="/fullpage">Full_Page</router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// require('../utils/canvas2image.js');
// import html2canvas from 'html2canvas';
var relationship = require("relationship.js");
// import TestCom from '../components/Test';

export default {
  name: 'home',
  components: {
    // TestCom,
  },
  data() {
    return {
      testData: '测试props命名规则',
    }
  },
  methods: {
    getRelationship() {
      var options = {text:'爸爸的妈妈的妈妈',sex:1};
      console.log(relationship(options));
    }
  }
}
</script>
<style lang="scss" scoped>
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

