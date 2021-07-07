<template>
  <div>
    <!-- <Tree v-model="nodes" :indent-level="20">
      <template #node="{ node }">
        <p v-if="node.type === 'deck'" class="m-0 py-2 border-y-gray">📓 {{ node.name }}</p>
        <span v-if="node.type === 'folder'">📁 {{ node.name }}</span>
      </template>
    </Tree> -->
  </div>
</template>

<script lang="ts">
// import { definecomponent } from 'vue-demi'

// import tree from './components/tree/tree.vue';

// import data from './data';

// export default definecomponent({
//   name: 'app',
//   components: {
//     tree
//   },
//   data() {
//     return {
//       checkednodes: [],
//       nodes: data
//     }
//   }
// })
</script>

<style>
.p-0 {
  padding: 0;
}

.m-0 {
  margin: 0;
}

.py-2 {
  padding-top: 10px;
  padding-bottom: 10px;
}

.px-2 {
  padding-top: 10px;
  padding-bottom: 10px;
}

.border-y-gray {
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
}
</style>