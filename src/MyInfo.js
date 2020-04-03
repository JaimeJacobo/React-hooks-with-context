import React, {useContext} from 'react';
import MyContext from './context';

const MyInfo = ()=>{
  const valueFromContext = useContext(MyContext)
  console.log(valueFromContext)
  return(
    <div>
      <h2>Mi apellido es {valueFromContext.hooksState.lastName}</h2>
      <button onClick={()=>valueFromContext.changeHooksState(
        {...valueFromContext.hooksState, name: 'Pedro', lastName: 'Garcia'}
      )}>CHANGE NAME AND LAST NAME</button>
    </div>
  )
}


export default MyInfo;