import React from 'react'
import CardTime from './cardTime'
import Row from 'react-bootstrap/Row'





export default function TimeLine() {

    const titleScuola = () => {
        return (
            <>
                <h5>Scuola superiore Giovanni Paolo II.</h5>
                <h6>sett 2014 – giu 2019 · 5 anni</h6>
                <br/>
            </>
        );

    }

    const titleCorso = () => {
        return (
            <>
                <h5>Corso formativo.</h5>
                <h6>ott 2019 – gen 2020 · 4 mesi</h6>
                <br/>
            </>
        );

    }

    const titleStage = () => {
        return (
            <>
                <h5>Stage junior Java Developer.</h5>
                <h6>gen 2020 – set 2020 · 9 mesi</h6>
                <br/>
            </>
        );

    }

    const titleDipendente = () => {
        return (
            <>
                <h5>Dipendente a tempo pieno.</h5>
                <h6>Settembre 2020/Presente</h6>
                <br/>
            </>
        );

    }

    return (
        <>
            <Row style={{ marginTop: '6em' }}>
                <div class="col d-flex justify-content-center">

                    <CardTime title={titleScuola()}
                        content='
                                 Diploma di scuola secondaria superiore, Informatica.
                                 Primo approccio a python e java, studi in ambito sistemistico praticando con CISCO,
                                 studio pratico di arduino.' />
                </div>

                <div class="col d-flex justify-content-center">

                    <CardTime title={titleCorso()}
                        content='Concluso percorso di formazione in ambiente java, 
                 della durata di tre mesi (Ottobre 2019-Gennaio 2020) presso 
                 la societa Exolab S.R.L, successivamente nel mese di gennaio 
                 2020 ho iniziato lo stage presso tale societa. Il corso mi ha 
                 permesso di acquisire competenze in: Java fondamenti, 
                 OOP, SQL, JDBC, HTML/CSS, JavaScript/Jquery, Servlet/JSP, 
                 JPA, Hibernate, Spring, RESTful.'/>

                </div>

                <div class="col d-flex justify-content-center">

                    <CardTime title = {titleStage()}
                    content = 'Durante lo stage ho avuto modo di approfondire 
                    gli argomenti trattati al corso, e avere la possibilità di 
                    lavorare nei vari progetti aziendali, assumendo confidenza 
                    con JSF, Oracle, Mybatis, PrimeFaces, RestFul, Servizi soap, 
                    git, Java ee, Json, Xml.'/>

                </div>

                <div class="col d-flex justify-content-center">

                    <CardTime title = {titleDipendente()}
                    content = 
                    {
                        <ul>
                            <li>sviluppo software Java.</li>
                            <li>Ambienti di sviluppo: Eclipse, Visual Studio code.</li>
                            <li> Framework: JSF.</li>
                            <li>WEB: bootstrap, JQuery, Css, React.</li>
                      </ul>   
                    }/>

                </div>

                
            </Row>


        </>
    );
}



