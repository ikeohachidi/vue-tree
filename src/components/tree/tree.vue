<template>
    <ul>
        <li v-for="(node, nodeIndex) in nodes" :key="nodeIndex"
            draggable="true"
            @dragover.stop.prevent
            @dragenter.stop.prevent
            @dragstart.stop="onDragNode(node, $event)"
            @drop.prevent.stop="onDropNode(node, $event)"
            @click.prevent.stop="onClick"
        >
            <slot name="node" :node="node">
                {{ node.name }}
            </slot>

            <tree v-model="node.children" :style="{ paddingLeft: getIndentLevel }">
                <template v-for="(_, slot) of $slots" v-slot:[slot]="props">
                    <slot :name="slot" v-bind="props"/>
                </template>
            </tree>
        </li>
    </ul>
</template>

<script lang='ts'>
import { defineComponent, PropType, ref } from 'vue';

import { treeItem } from '@/types/tree';
import Inspector from './inspector';

export default defineComponent({
    props: {
        modelValue: {
            type: Array as PropType<treeItem[]> 
        },
        indentLevel: {
            default: 10,
            type: Number
        },
        treeNode: Object
    },
    emits: {
        ['update:modelValue'](value: treeItem[]) {
            return true
        }
    },
    computed: {
        nodes(): treeItem[] {
            return this.modelValue as treeItem[];
        },
        getIndentLevel(): string {
            return `${this.indentLevel}px`
        },
    },
    methods: {
        onDragNode(node: treeItem, event: DragEvent): void {
            if (event.dataTransfer) {
                event.dataTransfer.setData('text/plain', JSON.stringify(node));

                Inspector.updateActiveNode({ nodeList: this.modelValue, activeChild: node })
            }
        },
        onDropNode(dropLocation: treeItem, event: DragEvent): void {
            if (event.dataTransfer) {
                const droppedNode = JSON.parse(event.dataTransfer.getData('text/plain')) as treeItem;

                if (!dropLocation || !droppedNode) {
                    return
                }

                if (JSON.stringify(dropLocation) === JSON.stringify(droppedNode)) {
                    return
                }

                if (dropLocation.validator && !dropLocation.validator(droppedNode, dropLocation)) {
                    return
                }

                dropLocation.children.push(droppedNode)

                this.$emit('update:modelValue', this.nodes)

                Inspector.deleteActiveNodeChild()
            }
        }
    },
})
</script>

<style scoped>
ul {
    padding: 0;
    list-style: none;
}
</style>
