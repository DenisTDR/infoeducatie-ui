"use strict";

import React from "react";
import { Grid, Col, Row } from "react-bootstrap";

import Header from "./header";
import JuryDescription from "./jury-description";

import "../main.less";
import gravatar from "../lib/gravatar";
import AlexandruAvatar from "../../assets/img/jury/alexandru_cristian.jpg";
import CezarAvatar from "../../assets/img/jury/cezar_andrici.jpg";
import CasianAvatar from "../../assets/img/jury/casian_lacatusu.jpg";
import CatalinAvatar from "../../assets/img/jury/catalin_stoian.jpg";
import DanielPopaAvatar from "../../assets/img/jury/daniel_popa.jpg";
import DanSpatarelAvatar from "../../assets/img/jury/dan_spatarel.jpg";
import DianaAvatar from "../../assets/img/jury/diana_minca.jpg";
import DomsaAvatar from "../../assets/img/jury/domsa_ovidiu.jpg";
import EmilOneaAvatar from "../../assets/img/jury/emil_onea.jpg";
import ErvinAvatar from "../../assets/img/jury/ervin_szabo.jpg";
import FasanAvatar from "../../assets/img/jury/fasan_mihail.jpg";
import MariusAvatar from "../../assets/img/jury/marius_gibu.jpg";
import MirceaAvatar from "../../assets/img/jury/mircea_zamfira.jpg";
import MihaiAgapeAvatar from "../../assets/img/jury/mihai_agape.jpg";
import MarilenaAvatar from "../../assets/img/jury/marilena_oprea.jpg";
import PetruAvatar from "../../assets/img/jury/petru_dimitriu.jpg";
import RazvanDeaconescuAvatar from "../../assets/img/jury/razvan_deaconescu.jpg";
import RodicaPinteaAvatar from "../../assets/img/jury/rodica_pintea.jpg";
import StefanAvatar from "../../assets/img/jury/stefan_stolniceanu.jpg";
import StelianNiculescuAvatar from "../../assets/img/jury/stelian_niculescu.jpg";
import ValerAvatar from "../../assets/img/jury/valer_szabo.jpg";
import VladAvatar from "../../assets/img/jury/vlad_durnea.jpg";
import DefaultAvatar from "../../assets/img/jury/default.png";
import DefaultDocument from "../../assets/img/icons/doc.png";


export default React.createClass({
  displayName: "Jury",
  render() {
    let presedinte = [
    //{"avatar": EmilOneaAvatar, "name": "Emil Onea", "occupation": "Profesor @ Colegiul Naţional “Unirea“ Focşani"},
      {"avatar": DomsaAvatar, "name": "Domșa Ovidiu", "occupation": "Lector la Universitatea 1 Decembrie Alba Iulia"}
    ];

    let presedinteExecutiv = [

      {"avatar": MarilenaAvatar, "name": "Marilena Oprea", "occupation": "I.S.J. Vrancea"}
    ];
    let presedinteOnorific = [

      {"avatar": StelianNiculescuAvatar, "name": "Stelian Niculescu", "occupation": ""}
    ];

    let secretar = [
      {"avatar": FasanAvatar, "name": "Fâsan Mihail", "occupation": "I.S.J. Vrancea"}
    ];

    let comisiaTehnica = [

      {"avatar": DefaultAvatar, "name": "Dan Roșioru", "occupation": "Profesor @ Colegiul Naţional “Unirea“ Focşani"},
      {"avatar": DefaultAvatar, "name": "Daniel Gherasim", "occupation": "Profesor la CCD Vrancea"},
      {"avatar": DefaultAvatar, "name": "Cristina Andreescu", "occupation": "Profesor @ Colegiul tehnic Edmond Nicolau București"},
      {"avatar": DefaultAvatar, "name": "Narcisa Dima", "occupation": "Profesor @ Liceul teoretic Ion Barbu, Pitesti"}
    ];

    var educational = [
        {"avatar": RazvanDeaconescuAvatar, "name": "Răzvan Deaconescu", "occupation": "Șef lucrări @ Universitatea Politehnică din București"},
        {"avatar": RodicaPinteaAvatar, "name": "Rodica Pintea", "occupation": "Profesor @ Liceul 'Grigore Moisil' Bucureşti"},
        {"avatar": DanSpatarelAvatar, "name": "Dan Spătărel", "occupation": "Profesor @ Colegiul Național Tudor Vianu, Bucuresti"},
        {"avatar": DianaAvatar, "name": "Diana Ghinea", "occupation": "Studentă la Universitatea din București, Facultatea de Matematică și Informatică"},
        {"avatar": PetruAvatar, "name": "Petru Dimitriu", "occupation": "Student la Universitatea Tehnică Gheroghe Asachi din Iași, Facultatea de Automatică și Calculatoare"},
    ];
    var media = [
        {"avatar": DefaultAvatar, "name": "Cătălina Burlacu", "occupation": "Profesor @ Colegiul Dunărea Galaţi"},
        {"avatar": DefaultAvatar, "name": "Roxana Tâmplaru", "occupation": "Profesor @ Colegiul „Stefan Odobleja” Craiova"},
        {"avatar": ErvinAvatar, "name": "Ervin Szabo", "occupation": "Student la Facultatea de Teatru si Televiziune, Universitatea Babeș-Bolyai"},
        {"avatar": ValerAvatar, "name": "Valer Szabo", "occupation": "Student la Facultatea de Teatru si Televiziune, Universitatea Babeș-Bolyai"},
        {"avatar": VladAvatar, "name": "Vlad Durnea", "occupation": "Graphic Designer, Photo & Video Editor, Photographer, Tribe Chife and Jedi Grand Master"},
    //    {"avatar": CarmenLascoiuAvatar, "name": "Carmen Lascoiu", "occupation": "studenta @ Universitatea Națională de Arte Teatrale 'I. L. Caragiale' București"}
    ];
    var robots = [
        {"avatar": MihaiAgapeAvatar, "name": "Mihai Agape", "occupation": "Profesor @ Palatul Copiilor Drobeta Turnu Severin, Filiala Orșova"},
        {"avatar": MirceaAvatar, "name": "Mircea Zamfira", "occupation": "Membru al echipei de robotică FLEX, Student la Universitatea Politehnica Bucuresti"},
        {"avatar": MariusAvatar, "name": "Marius Gibu", "occupation": "Membru al echipei de robotică FLEX, Student la Universitatea Politehnica Bucuresti"},
        {"avatar": DefaultAvatar, "name": "Stan Maria", "occupation": "Profesor @ Colegiul Tehnic Radu Negru Galaţi"},
        {"avatar": DefaultAvatar, "name": "Penu Ionela", "occupation": "Profesor @ Scoala Gimnazială Miron Costin Galați"},

    ];
    var utilitar = [
        {"avatar": DefaultAvatar, "name": "Ovidiu Rosca", "occupation": "Profesor @ Colegiul National Dragoș Vodă Sighetu Marmaţiei"},
        {"avatar": DanielPopaAvatar, "name": "Daniel Popa", "occupation": "profesor @ Colegiul National 'Aurel Vlaicu' Orastie"},
        {"avatar": DefaultAvatar, "name": "Bibicu Dorin", "occupation": "profesor @ Liceul Teoretic Dunărea Galaţi"},
        {"avatar": DefaultAvatar, "name": "Alexandru Ionașcu", "occupation": "Student la Universitatea din București, Facultatea de Matematică și Informatică"},
        {"avatar": CezarAvatar, "name": "Cezar Andrici", "occupation": "Full Stack Developer at CTF365"},
        {"avatar": StefanAvatar, "name": "Ștefan Stolniceanu", "occupation": "Software Development Engineer Intern and All Around Community Enthusiast"},

    ];
    var web = [
        {"avatar": DefaultAvatar, "name": "Chereș Adriana", "occupation": "Profesor @ Liceul Teoretic Nicolae Bălcescu Cluj Napoca"},
        {"avatar": DefaultAvatar, "name": "Carmocanu Gheorghe", "occupation": "Profesor @ Liceul Teoretic Nicolae Iorga Botoşani"},
        {"avatar": DefaultAvatar, "name": "Andrei Florea", "occupation": "Profesor @ Colegiul Național I.L. Caragiale Bucuresti"},
        {"avatar": CasianAvatar, "name": "Casian Lăcătușu", "occupation": "Student la Universitatea Politehnică din București, Facultatea de Automatică și Calculato"},
        {"avatar": AlexandruAvatar, "name": "Alexandru Cristian", "occupation": "Student la Drexel University, College of Computing and Informatics"},
        {"avatar": CatalinAvatar, "name": "Cătălin Stoian", "occupation": "Student la Facultatea de Informatica, Universitatea „Alexandru Ioan Cuza” "},

    ];

    var criteria = [
      {"name": "Educațional", "link": "http://data.infoeducatie.ro/manual/educational.pdf"},
      {"name": "Multimedia", "link": "http://data.infoeducatie.ro/manual/multimedia.pdf"},
      {"name": "Roboți", "link": "http://data.infoeducatie.ro/manual/roboti.pdf"},
      {"name": "Utilitar", "link": "http://data.infoeducatie.ro/manual/utilitar.pdf"},
      {"name": "Web", "link": "http://data.infoeducatie.ro/manual/web.pdf"}
    ];

    return <div className="jury">
        <div className="blue-section-wrapper">
          <Grid className="blue-section">
            <Header isLoggedIn={this.props.isLoggedIn}
                    current={this.props.current}
                    language={this.props.language}
                    changeLanguage={this.props.changeLanguage}
                    logout={this.props.logout} />
            <Row className="xsmall-spacing" />
            <Row>
              <Col xs={12}>
                <h1>Juriul InfoEduca&#355;ie </h1>
                <h2>Ediția {this.props.current.edition.name}</h2>
              </Col>
            </Row>
          </Grid>
        </div>




        <Grid className="white-section">
          <Row>
            <JuryDescription name="președinte" members={presedinte}/>
            <JuryDescription name="președinte executiv" members={presedinteExecutiv}/>
            <JuryDescription name="președinte onorific" members={presedinteOnorific}/>
            <JuryDescription name="secretar" members={secretar}/>
          </Row>
          <Row>
            <JuryDescription iconClass="section-icon educational" name="comisia software educațional" members={educational}/>
          </Row>
          <Row>
            <JuryDescription iconClass="section-icon utilitar" name="comisia software utilitar" members={utilitar}/>
          </Row>
          <Row>
            <JuryDescription iconClass="section-icon web" name="comisia aplicații web" members={web}/>
          </Row>
          <Row>
            <JuryDescription iconClass="section-icon roboti" name="comisia roboți" members={robots}/>
          </Row>
          <Row>
            <JuryDescription iconClass="section-icon multimedia" name="comisia multimedia" members={media}/>
          </Row>
          <Row>
            <JuryDescription name="comisia tehnică" members={comisiaTehnica}/>
          </Row>
        </Grid>

        <div className="orange-section-wrapper">
          <Grid className="orange-section">
            <Row>
              <Col className="block">
                <Row className="jury-criteria-desc">
                    <span className="pink-dash" />
                      criterii de jurizare
                    <span className="pink-dash" />
                </Row>
                <Row className="jury-criteria-documents">
                  {criteria.map(function(doc) {
                    return <div key={doc.link} className="jury-criteria">
                      <div className="jury-criteria-txt">{doc.name}</div>
                      <div className="jury-criteria-img"><a href={doc.link} target="_blank"><img src={DefaultDocument} alt={doc.link} /></a></div>
                    </div>;
                  })}
                </Row>
              </Col>
            </Row>
          </Grid>
        </div>

    </div>;
  }
});
