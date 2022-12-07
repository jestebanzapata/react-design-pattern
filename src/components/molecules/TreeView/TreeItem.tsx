import { ITreeNode } from './ITreeNode';

export const TreeItem = ({ name, children }: ITreeNode) => {
  return (
    <li>
      {name}
      { children && children.length > 0 &&
        <ul>
          { children.map(child => {
            return <TreeItem name={child.name} children={child.children}/>
          })}
        </ul>
      }
    </li>
  )
}


export default TreeItem;