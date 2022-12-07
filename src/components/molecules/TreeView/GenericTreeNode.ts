import { ITreeNode } from "./ITreeNode";

export class GenericTreeNode implements ITreeNode {
  name: string;
  children: ITreeNode[] = [];

  constructor(name: string){
    this.name = name;
  }

  addNode(treeNode: any) {
    this.children.push(treeNode);
  }
  removeNode(treeNode: any) {
    const indexNode =this.children.findIndex(node => node === treeNode);
    this.children.splice(indexNode, 1);
  }

}