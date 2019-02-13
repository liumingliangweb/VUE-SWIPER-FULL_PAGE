<template>
  <div class="about">
    <!-- <mt-button type="default">default</mt-button>
    <mt-button type="primary">primary</mt-button> -->
    <h1>This is an about page</h1>
    <div @click.self="dothat()" class="testclass">
      <div @click.self="dothis()" class="children"></div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    dothat() {
      console.log('self触发了1');
    },
    dothis() {
      console.log('self触发了2');
    }
  }
}
</script>

<style>
.testclass {
  width: 100%;
  height: 200px;
  background: #e3e3e3;
  display: flex;
  align-items: center;
  justify-content: center;
}
.children {
  width: 100px;
  height: 100px;
  background: #ccc;
}
</style>

