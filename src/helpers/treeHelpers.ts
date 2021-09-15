/* eslint-disable no-param-reassign */
import { FilesTree } from '../types';

export const findItemById = (
  tree: FilesTree,
  id: FilesTree['id']
): FilesTree | null => {
  if (!tree || !id) return null;

  const queue = [tree];

  while (queue.length > 0) {
    const currentNode = queue.shift();

    if (currentNode?.id === id) return currentNode;

    if (currentNode?.children && currentNode.children.length) {
      const { children } = currentNode;

      children.forEach(node => {
        queue.push(node);
      });
    }
  }

  return null;
};

export const replaceNodeInATree = (
  tree: FilesTree,
  node: FilesTree
): FilesTree => {
  if (tree.children) {
    if (tree.id === node.parentId) {
      tree.children = tree.children.map(i => (i.id === node.id ? node : i));
      return tree;
    }

    tree.children.forEach(item => {
      replaceNodeInATree(item, node);
    });
  }

  return tree;
};

export const flattenTree = (nodesTree: FilesTree): FilesTree[] => {
  let flatArray: FilesTree[] = [nodesTree];

  for (let i = 0; i < flatArray.length; i += 1) {
    const { children } = flatArray[i];

    if (children) {
      flatArray = flatArray.concat(children);
    }
  }

  return flatArray;
};

const findItemIndexInArray = (array: FilesTree[], node: FilesTree) =>
  array.findIndex(item => item.id === node.id);

const getArrayFirtsPart = (array: any[], endIndex: number) => {
  const arr = [...array];
  arr.length = endIndex;
  return arr;
};

export type FoldersPathArray = FilesTree[];

export const getPathToTheRoot = (
  tree: FilesTree,
  node: FilesTree
): FoldersPathArray => {
  if (!tree && !node) return [];
  if (tree === node) return [tree];

  const flatArray = flattenTree(tree);
  const index = findItemIndexInArray(flatArray, node);
  const neededPartOfArray = getArrayFirtsPart(flatArray, index + 1);

  let positionPointer = -1;

  const pathArray = neededPartOfArray.reduceRight((acc: FilesTree[], item) => {
    const isFirstNode = item.id === node.id;
    const isParentNode =
      positionPointer > -1 && item.id === acc[positionPointer].parentId;

    if (isFirstNode || isParentNode) {
      acc.push(item);
      positionPointer += 1;
    }

    return acc;
  }, []);

  return pathArray.reverse();
};
