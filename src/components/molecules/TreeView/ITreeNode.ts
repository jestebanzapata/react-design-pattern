

export interface ITreeNode {

  identifier: string;

  children: ITreeNode[];

  addNode(node: ITreeNode): void;

  removeNode(node: ITreeNode): void;

}