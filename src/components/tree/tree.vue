<template>
    <ul>
        <li v-for="(node, nodeIndex) in nodes" :key="nodeIndex"
            :draggable="true"
            @dragover.stop.prevent
            @dragenter.stop.prevent
            @dragstart.stop="onDragNode(node, $event)"
            @drop.prevent.stop="onDropNode(node, $event)"
        >
            <slot name="node" :node="node">
                {{ node.name }}
            </slot>

            <tree 
                v-if="node.children"
                v-model="node.children" 
                :indent-level="indentLevel" 
                :border="border"
                :style="{ paddingLeft: getIndentLevel, ...nodeBorder }"
            >
                <template v-for="(_, slot) of $slots" v-slot:[slot]="props">
                    <slot :name="slot" v-bind="props"/>
                </template>
            </tree>
        </li>
    </ul>
</template>

<script lang='ts'>
import { defineComponent, PropType } from 'vue-demi';

import { treeItem, borderConfig, borderDefault } from '../../types/tree';
import Inspector from './inspector';

export default defineComponent({
    compatConfig: {
        COMPONENT_V_MODEL: false,
    },
    props: {
        modelValue: {
            type: Array as PropType<treeItem[]> 
        },
        indentLevel: {
            default: 10,
            type: Number
        },
        border: {
            default: () => ({ ...borderDefault }),
            type: Object as PropType<borderConfig>
        },
        allowDragNDrop: {
            default: false,
            type: Boolean
        }
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
        nodeBorder(): {[cssProperties: string]: string} {
            const border = {
                width: this.border.width || borderDefault.width,
                type: this.border.type || borderDefault.type,
                color: this.border.color || borderDefault.color,
            }

            return {
                borderLeft: `${border.width}px ${border.type} ${border.color}`
            }
        },
        getIndentLevel(): string {
            return `${this.indentLevel}px`
        },
    },
    methods: {
        onDragNode(node: treeItem, event: DragEvent): void {
            if (event.dataTransfer && this.allowDragNDrop) {
                event.dataTransfer.setData('text/plain', JSON.stringify(node));

                Inspector.updateActiveNode({ nodeList: this.modelValue, activeChild: node })
            }
        },
        onDropNode(dropLocation: treeItem, event: DragEvent): void {
            if (event.dataTransfer && this.allowDragNDrop) {
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
    font-size: 14px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
</style>
