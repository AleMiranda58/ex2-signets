import './Entete.scss'; 
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


export default function Entete() {
  return (
    <header className="Entete">
      <div className="logo">Signets</div>
      <div className="avatar">Camille Semaan <AccountCircleIcon/></div>
    </header>
  );
}