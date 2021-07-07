export interface treeItem {
    name: string;
    children: treeItem[];
    validator?: (draggedNode: treeItem, dropLocation: treeItem) => boolean;
    [otherProperties: string]: any;
}