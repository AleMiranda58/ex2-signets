import Entete from './Entete';
import './Appli.scss';
import ListeDossiers from './ListeDossiers';
import BtnAjoutRessource from './BtnAjoutRessource';

export default function Appli() {
  return (
    <div className="Appli">
        <Entete />
        <section className="contenu-principal">
          <ListeDossiers />
          <BtnAjoutRessource type="ajout-dossier" />
        </section>
    </div>
  );
}
