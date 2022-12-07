

export interface ITreeNode {

  name: string;

  children: ITreeNode[];

  test?: string;

  addNode?(node: ITreeNode): void;

  removeNode?(node: ITreeNode): void;

}