<template>
  <div>
    <Tree v-model="nodes">
      <!-- <template #node="{ node }">
        <input type="checkbox" :value="node" v-model="checkedNodes">
        <span v-if="node.type === 'Folder'">
          🇳🇬
        </span>
        <span v-else>
          🇩🇪 
        </span>
        {{ node.name}}
      </template> -->
    </Tree>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Tree from './components/tree/tree.vue';
import { treeItem } from './types/tree';

export default defineComponent({
  name: 'App',
  components: {
    Tree
  },
  methods: {
    generateArr(prepend: string): treeItem[] {
      return Array.from(Array(5)).map((_, index) => {
        return {
          name: `${prepend} content ${index}`,
          type: 'File',
          // validator: (dragged: treeItem, dropLocation: treeItem) => {
          //   if (dropLocation.type !== 'Folder') return false 

          //   return true 
          // },
          children: []
        }
      })
    }
  },
  watch: {
    nodes: {
      handler(value: treeItem[]) {
        console.log(value)
      },
      deep: true
    }
  },
  data() {
    return {
      checkedNodes: [],
      nodes: [
        {
          name: 'First folder',
          type: 'Folder',
          children: [
            ...this.generateArr('First')
          ]
        },
        {
          name: 'Weird file',
          type: 'Folder',
          children: [
            ...this.generateArr('Second')
          ]
        },
      ]
    }
  }
})
</script>