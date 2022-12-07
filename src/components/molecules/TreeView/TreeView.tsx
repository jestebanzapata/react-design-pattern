import React from 'react';
import { ITreeNode } from './ITreeNode';
import TreeItem from './TreeItem';
import { StyledTreeViewContainer } from './TreeView.styles';

export const TreeView = ({ name, children }: ITreeNode) => {
  return (
    <StyledTreeViewContainer>
      <ul>
        <TreeItem name={name} children={children}/>
      </ul>
    </StyledTreeViewContainer>
  )
}


export default TreeView;