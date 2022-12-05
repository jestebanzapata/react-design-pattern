import AddButton from '../../molecules/AddButton/AddButton';
import CounterViewer from '../../molecules/CounterViewer/CounterViewer';
import ResetButton from '../../molecules/ResetButton/ResetButton';
import SubstractButton from '../../molecules/SubstractButton/SubstractButton';
import { StyledContainer } from './CounterContainer.styles';

interface CounterContainerProps {
  size: number;
}

export const CounterContainer = ({ size }: CounterContainerProps) => {

  return (
    <StyledContainer>
      {new Array(size).fill(undefined).map((item, index) => {
        return <CounterViewer key={`viewer${index}`} id={`viewer${index}`}/>
      })}
      <AddButton/>
      <ResetButton/>
      <SubstractButton />
    </StyledContainer>
  )
}

export default CounterViewer;
