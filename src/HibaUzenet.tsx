import { HibaUzenetProps } from './HibaUzenetProps';

export function HibaUzenet(props: HibaUzenetProps) {

  return <ul 
    className={props.sulyos ? 'sulyoshiba' : ''}
    style={{
      color: 'red',
      backgroundColor: props.sulyos ? 'yellow' : '',
      
    }}>
    {props.hibauzenetek.map(msg => <li> {msg} </li>)}
  </ul>;
}
