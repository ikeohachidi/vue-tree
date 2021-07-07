import { treeItem } from './types/tree';

const data: treeItem[] = [
    {
        name: 'Western Deck',
        type: 'deck',
        children: [
            {
                name: 'Flow stations',
                type: 'folder',
                children: [
                    {
                        name: 'PECON-1 FS',
                        type: 'flow',
                        children: []
                    },
                ],
            },
            {
                name: 'Modules',
                type: 'folder',
                children: [
                    {
                        name: 'PECON-01 INCA',
                        type: 'module',
                        children: []
                    }
                ]
            }
        ]
    },
    {
        name: 'Ajuju Deck',
        type: 'deck',
        children: [
            {
                name: 'Flow stations',
                type: 'folder',
                children: [
                    {
                        name: 'PECON-1 FS',
                        type: 'flow',
                        children: []
                    },
                ],
            },
            {
                name: 'Modules',
                type: 'folder',
                children: [
                    {
                        name: 'PECON-01 INCA',
                        type: 'module',
                        children: []
                    }
                ]
            }
        ]
    },
]


export default data