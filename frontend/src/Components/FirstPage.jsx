import React, { useEffect, useState } from "react";
import { Progress } from "flowbite-react";
import Foter from "./Footer";
import { Button, Drawer, Label, Textarea, TextInput } from "flowbite-react";
import { HiEnvelope } from "react-icons/hi2";

const text =
  "ECHIPA TA - Campioana unei mari iubiri Fondat în 1948, Clubul Sportiv Universitatea Craiova a fost un veritabil ambasador al României. Golurile lui Oblemenco, Balaci, Cârțu ori Cămătaru și marile meciuri europene au făcut să iasă în stradă sute de mii de români! Care s-au identificat și au iubit Știința! Au făcut din Craiova capitala fotbalului românesc ani la rând.Din 1948 până în 1992, cât timp clubul și implicit secția sa de fotbal s-au aflat sub tutela Ministerului Educației Naționale, CS Universitatea Craiova a realizat marile performanțe: patru titluri naționale și cinci cupe ale României, plus calificarea în premieră pentru o echipă românească în semifinalele unei cupe europene.În 1992, secția de fotbal a CS Universitatea Craiova s-a desprins de clubul-mamă. În 2013, după numeroase cereri depuse la Ministerul Educației, CS Universitatea Craiova a primit acceptul reînființării secției de fotbal, pasul esențial pentru demararea noului proiect.Renașterea echipei de suflet a Craiovei are la baza un contract de asociere încheiat între trei entități, conform legislației în vigoare, fără a se constitui într-o nouă societate cu personalitate juridică. Părțile, una de drept privat și două de  drept public, sunt: Club Sportiv U Craiova S.A., C.S. Universitatea Craiova și Municipiul Craiova. Club Sportiv U Craiova S.A. va asigura, din surse proprii și surse atrase, tot suportul financiar necesar desfășurării activităților sportive, de administrare și organizare a obiectului central de activitate: fotbalul. Societatea comercială, deținătoare a Certificatului de Identate Sportivă, va înscrie echipele de copii, juniori și seniori în campionatele și competițiile de fotbal, naționale și internaționale, demarând cu înscrierea echipei de seniori în Liga a II-a de fotbal profesionist, în sezonul 2013-2014. Clubul sportiv universitar, aflat sub tutela Ministerului Educației Naționale, își alătură girul, marca, titulatura, culorile, palmaresul și emblema sub care Universitatea a cunoscut marea performanță. Primăria Municipiului Craiova pune la dispoziție baza sportivă Ion Oblemenco. Comunitatea locală a fost reprezentată la luarea istoricei decizii prin consilierii municipali aleși care au votat pentru realizarea acestui proiect în UNANIMITATE.CS Universitatea Craiova are drept principal obiectiv reînvierea spiritului alb-albastru! Redarea demnității și mândriei suporterilor olteni !Hai „Știința“!";

export default function FirstPage() {
  const [progress, setProgress] = useState(0);
  
  
  useEffect(() => {
    const timer = setTimeout(() => {
      if (progress < 100) {
        setProgress(progress + 1);
      }
    },2);

    return () => clearTimeout(timer);
  }, [progress]);
  return (
    <div className="container80">
      <div className="info_container">
        <Progress
          className={`mb-8 ${ progress == 100 ? ' hidden' : ''}`}
          progress={progress}
          textLabel=""
          size="lg"
          labelProgress
          labelText
        />
        <div className="card">
          <img src="logo192.png" className="team-logo2"></img>
          <h1 className="text-center mb-2">Informatii Generale</h1>
          <div className="ziar">
            <p>{text}</p>
          </div>
        </div>
        <div className="card mt-8">
          <img src="logo192.png" className="team-logo2"></img>
          <h1 className="text-center mb-2">Informatii Generale</h1>
          <div className="ziar">
            <p>{text}</p>
          </div>
        </div>
        <div className="card mt-8">
          <img src="logo192.png" className="team-logo2"></img>
          <h1 className="text-center mb-2">Informatii Generale</h1>
          <div className="ziar">
            <p>{text}</p>
          </div>
        </div>
      </div>
      <Foter />
    </div>
  );
}
