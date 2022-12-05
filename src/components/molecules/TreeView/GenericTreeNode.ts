import { ITreeNode } from "./ITreeNode";

export class GenericTreeNode implements ITreeNode {
  identifier: string;
  children: ITreeNode[] = [];

  constructor(nodeIdentifier: string){
    this.identifier = nodeIdentifier;
  }

  addNode(treeNode: any) {
    this.children.push(treeNode);
  }
  removeNode(treeNode: any) {
    const indexNode =this.children.findIndex(node => node === treeNode);
    this.children.splice(indexNode, 1);
  }

}