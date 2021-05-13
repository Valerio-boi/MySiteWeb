import React from "react";
import BackgroundInitial from "../background/background2.jpg";
import LinkLogo from "./LinkLogo";
import NavBar from "./navBar";
import "bootstrap/dist/css/bootstrap.min.css";
import TimeLine from "./Timeline";
import CodeWarsJava from "./CodeWars/javaCodewars";
import CodeWarsPython from "./CodeWars/pythonCodeWars";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function backgroundDiv() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${BackgroundInitial})`,
          height: "100vh",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          textAlign: "center",
        }}
      >
        <NavBar />
        <h1 style={{ marginTop: "30px" }}>Valerio Boi</h1>

        <br></br>

        <p>
          Sviluppatore informatico presso Exolab S.R.L, in ambito Java EE,
          consulente Sogei. Prima di essere un lavoro è una grande passione che
          porto avanti giorno dopo giorno con detizione e impegno.
          <br />
          <br />
          “The best programs are written so that computing machines can perform
          them quickly and so that human beings can <br />
          understand them clearly. A programmer is ideally an essayist who works
          with traditional aesthetic and literary forms as well <br />
          as mathematical concepts, to communicate the way that an algorithm
          works and to convince a reader that the results will be correct.”{" "}
          <br />― Donald E. Knuth
        </p>
        <TimeLine />

        <div
          style={{
            position: "absolute",
            left: "50%",
            bottom: "-30px",
            transform: "translate(-50%, -50%)",
            margin: "0 auto",
          }}
        >
          <LinkLogo />
        </div>
      </div>
      <div
        style={{
          backgroundColor: "black",
          height: "100vh",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          textAlign: "center",
        }}
      >
        <br />
        <h1>
          CodeWars{" "}
          <img
            src="https://www.codewars.com/users/Restorm12/badges/large"
            alt="CodeWars"
          />
        </h1>
        <br />
        <br />

        <p>
          Codewars è una comunità educativa per la programmazione di computer .
          Sulla piattaforma, gli sviluppatori di software si allenano sulle
          <br />
          sfide di programmazione note come kata. Questi esercizi di
          programmazione discreta addestrano una gamma di abilità in una varietà
          <br />
          di linguaggi di programmazione e vengono completati all'interno di un
          ambiente di sviluppo integrato online. Su Codewars la comunità e la
          <br />
          progressione della sfida sono gamificati , con gli utenti che
          guadagnano gradi e onore per aver completato kata, kata contributivo e
          soluzioni di qualità.
        </p>

        <br />
        <br />
        <Container fluid>
          <Row>
            <Col>
              <h1>Java</h1>
              <CodeWarsJava />
            </Col>
            <Col>
              <h1>Python</h1>
              <CodeWarsPython />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
