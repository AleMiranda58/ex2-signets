import Entete from './Entete';
import './Appli.scss';
import ListeDossiers from './ListeDossiers';
//import BtnAjoutRessource from './BtnAjoutRessource';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';

export default function Appli() {
  return (
    <div className="Appli">
        <Entete />
        <section className="contenu-principal">
          <ListeDossiers />
          {/* <BtnAjoutRessource type="ajout-dossier" /> */}
        
          <button><AddCircleRoundedIcon className="hola" /></button>
        </section>
    </div>
  );
}
