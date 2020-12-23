import React, { useState } from "react";

import { Container, Row, Col, Label, Input } from "reactstrap";

import { isMobile } from "react-device-detect";

const EuropeanProjectInfo = () => {
  const [checked, setChecked] = useState(false);
  const handleClick = () => setChecked(!checked);

  let image = isMobile ? (
    <Col>
      <img
        src="https://katina.bg/wp-content/uploads/2018/04/bl-euro.jpg"
        alt="..."
        style={{
          width: "330px",
          height: "205px",
          objectFit: "contain"
        }}
      />
    </Col>
  ) : (
    <Col>
      <img
        src="https://katina.bg/wp-content/uploads/2018/04/bl-euro.jpg"
        alt="..."
      />
    </Col>
  );

  let languageVersion = checked ? (
    <Row id="bgVer">
      <p>
        На 24.02.2020г. <strong>Булмаг АД</strong> подписа договор за
        безвъзмездни средства по{" "}
        <strong>
          Оперативна програма „Иновации и конкурентоспособност“ 2014-2020
          процедура „Подобряване на производствения капацитет на МСП“.
        </strong>
        <p>
          {" "}
          Общата стойност на проекта е <strong>1 071 000.00 лв.</strong>, от
          които 637 245.00 лв. европейско финансиране, 112 455.00 лв. национално
          съфинансиран, както и 321 300.00 лв. самофинансиране от бенефициента.
        </p>{" "}
        Основната цел на проекта е подобряване на производствения капацитет на
        Булмаг АД с цел повишаване на конкурентоспособността и засилване на
        експортния потенциал на предприятието. Поставената цел ще бъде
        постигната посредством инвестицията във високотехнологично оборудване и
        специализиран софтуер за предоставяне на услуги в областта на
        информационните технологии. Вследствие на изпълнението на проект
        „Подобряване на производствения капацитет на Булмаг АД“ очакваме да
        постигнем следните резултати: повишаване конкурентоспособността на
        предприятието и по-успешното му присъствие на националните и външни
        пазари чрез увеличаване обема на услугите, които предоставя,
        оптимизиране на процесите, постигане на по-висока ефективност,
        намаляване на разходите, подобряване на предлаганите услуги.
        <p>
          {" "}
          Начало на проекта: 24.02.2020г. <br />
          Край на проекта: 24.02.2021г.
        </p>
        <p>
          <a href="https://bulmag.bg/docs/company/Project-2020-2021.7z">Свалете документите</a>
        </p>
        <div style={{ border: "solid 1px red" }}></div>
      </p>
      <p>
        На 25.05.2018г. <strong>Булмаг АД</strong> подписа договор за
        безвъзмездни средства по{" "}
        <strong>
          Оперативна програма „Иновации и конкурентоспособност“ 2014-2020
          процедура „Разработване на продуктови и производствени иновации“.
        </strong>
        <p>
          {" "}
          Общата стойност на проекта е <strong>656 335.00лв.</strong>, от които
          423 246.23лв. европейско финансиране, 74 690.52лв. национално
          съфинансиран, както и 158 398.25лв. самофинансиране от бенефициента.
        </p>{" "}
        Основната цел на проектното предложение е разработване на нов продукт -
        Иновативният робот за индустриални цели с иновативен софтуер, който за
        разлика от всички други конкурентни продукти, позволява както ръчна,
        така и пространствена и отдалечена манипулация на робот. С изпълнението
        на дейностите по проекта се цели преминаване през редица индустриални
        научни изследвания, включващи проучвания и тествания за придобиване на
        необходимите компетенции за валидиране на технологията в лабораторна и в
        релевантна среда. Разработване на отделните компоненти, съставляващи
        сложната система на иновативното устройство, тестването им и
        асемблирането им в единна система - прототип, който да се тества в
        симулирана и в релевантна среда.
        <p>
          Партньор в изпълнението на проекта ще бъде{" "}
          <strong>СДРУЖЕНИЕ ЗА НАУЧНОИЗСЛЕДОВАТЕЛСКА И РАЗВОЙНА ДЕЙНОСТ</strong>{" "}
          към <strong>София Тех Парк АД</strong>.
        </p>
        <p>
          {" "}
          Начало на проекта: 25.05.2018г. <br />
          Край на проекта: 24.01.2020г.
        </p>
        <p>
          Процедурата по открит избор с публична покана стартира на 16.11.2018г.
          <br />
          Процедура открит избор с публична покана за „Доставка на ДМА – 12
          мотора „ Поканата и документацията за участие може да бъде свалена от
          ТУК на адреса на единния информационен портал за обща информация за
          управлението на Структурните фондове и Кохезионния фонд на Европейския
          съюз на Република България на следния линк
          (https://eumis2020.government.bg/) Процедура по открит избор с
          публична покана стартира на 11.07.2019г.
          <br /> Процедура по открит избор с публична покана за „Избор на
          консултант за провеждане на: Обособена позиция 1: Тестване и
          оптимизиране на електрониката Обособена позиция 2: Якостен анализ на
          механичната конструкция„. <br />
          <br />
          Поканата и документацията за участие може да бъде свалена от адреса на
          единния информационен портал за обща информация за управлението на
          Структурните фондове и Кохезионния фонд на Европейския съюз на
          Република България на следния линк (https://eumis2020.government.bg/)
        </p>
        <div style={{ border: "solid 1px red" }}></div>
      </p>
      <p>
        На 29.03.2016 г. <strong>Булмаг АД</strong> подписа договор за
        безвъзмездни средства по{" "}
        <strong>
          Оперативна програма „Иновации и конкурентоспособност“ 2014-2020
          процедура „Подобряване на производствения капацитет на МСП“.
        </strong>
      </p>
      <p>
        Общата стойност на проекта е <strong>1 088 520,00 лева</strong>, от
        които 637 491,73 лева, европейско финансиране, 112 498,55 лева.
        национално финансиране и 338 529,72 лв., самофинансиране от
        бенефициента.
      </p>
      <p>
        Основната цел на проектното предложение е да създаде условия за
        осъществяване на експортна дейност и по този начин да увеличи
        производствения капацитет на предприятието под формата на увеличаване на
        обема на предоставяните услуги. Това ще бъде постигнато чрез въвеждането
        на нова високотехнологична уеб-базирана софтуерна платформа за
        автоматизирано съхранение на потребителска информация (архивиране и
        възстановяване) на отдалечен сървър. Уеб базирана версия на платформата
        ще осигури достъп до услугата от всяка точка на света, което ще даде
        възможност за износ на тази конкретна услуга. Предоставянето на услугата
        не е свързано с физическото присъствие на служител на компанията или
        инсталацията на лаптопа на клиента, което ще оптимизира производствения
        процес чрез намаляване на ангажираното работно време и също така ще
        подобри ефективността на разходите за ресурси.
      </p>
      <param />
      По време на изпълнението на проектното предложение, заедно с основната
      цел, ще бъдат постигнати още няколко съпътстващи конкретни цели:
      <p>
        <p> 1. Увеличаване на продажбите;</p>
        <p> 2. Разширяване на пазарния дял;</p>
        <p>
          3. Международният пазар получи приходи. 6-10% от нетния доход на
          компанията да се извлича от международните пазари като краткосрочна
          цел;{" "}
        </p>{" "}
        <p>4. Увеличаване на производителността на труда;</p>
        <p>5. Подобряване на ефективността на ресурсите.</p>
      </p>
      <p>
        Успешното изпълнение на проекта и постигането на целите са предпоставка
        за постигане на силно развитие в Булмаг АД. Всичко това ще увеличи
        значително конкурентоспособността на компанията и ще позволи
        заграбването на солидни международни пазарни позиции.
      </p>
      <p>
        Постигането на тези цели пряко съответства на целите на тази процедура
        „за увеличаване на производствения капацитет и увеличаване на експортния
        потенциал“. Изпълнение на целите на проекта и оптимизиране на
        производствените процеси и разширяване на потенциала на компанията до
        по-широк спектър от услуги. Това съответства на другия край на ОП
        „Иновации и конкурентоспособност“ 2014-2020 г., а именно „устойчив
        растеж чрез насърчаване на по-конкурентна икономика с по-ефективно
        използване на ресурсите“.
      </p>
    </Row>
  ) : (
    <Row id="enVer">
      <p>
        On February 24, 2020, <strong>Bulmag AD</strong> has concluded a grant
        contract under{" "}
        <strong>
          Operational Programme "Innovation and Competitiveness" 2014-2020
          procedure "Improving the production capacity of SMEs"
        </strong>{" "}
        <p>
          The total value of the project is 1 071 000.00 BGN, of which 637
          245.00 BGN is European funding, 112 455.00 BGN is nationally
          co-financed, and 321 300.00 BGN is self-financing from the
          beneficiary.
        </p>{" "}
        The main objective of the project is to improve the production capacity
        of Bulmag AD in order to increase the competitiveness and enhance the
        export potential of the company. The goal will be achieved by investing
        in high-tech equipment and specialized software to provide information
        technology services.{" "}
        <p>
          {" "}
          As a result of the implementation of the project "Improving the
          production capacity of Bulmag AD" we expect to achieve the following
          results: increasing the competitiveness of the company and its more
          successful presence on national and foreign markets by increasing the
          volume of services it provides, optimizing the processes, achieving
          higher efficiency, reduced costs, improved service delivery.
          <p>
            Project start: 24.02.2020
            <br />
            Projct end: 24.02.2021
          </p>
          <p>
          <a href="https://bulmag.bg/docs/company/Project-2020-2021.7z">Download documents</a>
        </p>
        </p>
        <div style={{ border: "solid 1px red" }}></div>
      </p>
      <p>
        On May 25, 2018, <strong> Bulmag AD </strong> signed a contract
        for grants under{" "}
        <strong>
          Operational Program "Innovation and Competitiveness"
          2014-2020 procedure "Product and Manufactoring Innovation Develoment".
        </strong>
        <p>
          The total cost of the project is
          <strong> 656 335.00 BGN </strong>, of which 423 246.23 BGN European
          funding, 74 690.52лв. nationally co-financed as well as 158 398.25 BGN
          self-financing by the beneficiary.         
        </p>
        The main objective of the project proposal is to develop a new product -
         An innovative industrial robot with innovative software that unlike all
        other competing products, it allows both manual,  as well as spatial and
        remote manipulation of a robot. With the performance  the activities of
        the project are intended to go through a number of industrial ones
        scientific research, including studies and tests for the acquisition of
        the necessary competencies to validate the technology in the laboratory
        and in relevant environment. Development of the individual components
        that make up the complex system of the innovative device, their testing
        and assembling them into a single system - a prototype to test in
        simulated and in a relevant environment.         
        <p>
          The project implementation partner will be
          <strong> RESEARCH AND DEVELOPMENT ASSOCIATION </strong>to
          <strong> Sofia Tech Park AD </strong>.
          <br />
          Project start: 25.05.2018 <br />
          Project end: 24.01.2020         
        </p>
        <p>
          The open procedure with public invitation started on November 16,
          2018.           
          <br />
          Open selection procedure with public invitation for "Supply of
          Equipment - 12 pcs "The invitation and documentation for participation
          can be downloaded from the single general information portal for the
          management of the Structural Funds and the Cohesion Fund of the
          European Union Union of the Republic of Bulgaria at the following
          link (https://eumis2020.government.bg/) Open selection procedure with
          public invitation starts on 11.07.2019.
          <br /> Open procedure with public invitation to "Select consultant to
          conduct: Lot 1: Testing and optimization of electronics Lot 2: Quality
          analysis of mechanical construction ". <br />           
          <br />
          The invitation and documentation for participation can be downloaded
          from the single information portal for general management information
          on The Structural Funds and the Cohesion Fund of the European Union
          The Republic of Bulgaria at the following link
          (https://eumis2020.government.bg/)         
        </p>
        <div style={{ border: "solid 1px red" }}></div>
      </p>
      <p>
        On March 29, 2016, <strong>Bulmag AD</strong> signed a contract for
        grants under the{" "}
        <strong>
          Operational Programme "Innovation and Competitiveness" 2014-2020
          procedure "Improving the production capacity of SMEs"
        </strong>
        .
      </p>
      <p>
        The total cost of the project is
        <strong>1 088 520.00 BGN</strong>, of which 637 491.73 BGN, european
        funding, 112 498.55 BGN. national funding and 338 529.72 BGN,
        self-financing by the beneficiary.
      </p>
      <p>
        The main objective of the project proposal is to create conditions for
        implementation of export activity and thus increase the production
        capacity of the enterprise in the form of increasing the volume of
        services provided. This will be achieved through the introduction of new
        high-tech web-based software platform for automated storage of user
        information (Backup and Restore) to a remote server. Web-based version
        of the platform will provide access to the service from anywhere in the
        world, which will enable the export of that particular service.
        Delivering the service is not related with the physical presence of
        employee of the company or installation on customer’s laptop, which will
        optimize the manufacturing process by reducing the committed labor time
        and also will improve the efficiency of resource costs.
      </p>
      <param />
      During the execution of the project proposal along with the main objective
      several other accompanying specific objectives will be met:
      <p>
        <ul>
          <li>Increase sales</li>
          <li>Expand market share</li>
          <li>
            International market obtained revenue. 6-10% of the net income of
            the company to be derived from international markets as a short-term
            goal
          </li>
          <li>Increase labor productivity</li>
          <li>Improve resource efficiency.</li>
        </ul>
      </p>
      <p>
        The successful project implementation and achievement of goals are a
        prerequisite of achieving a strong development at Bulmag AD. All this
        will increase significantly the competitiveness of the company and will
        allow the seizure of solid international market positions.
      </p>
      <p>
        Achieving these objectives directly corresponds with the objectives of
        this procedure "to increase the production capacity and enhance export
        potential." Implementation of project goals and optimize production
        processes and expand the potential of the company to a wider range of
        services. This corresponds to the other end of the OP "Innovation and
        Competitiveness" 2014-2020, namely "sustainable growth by fostering a
        more competitive economy with more efficient use of resources".
      </p>
    </Row>
  );

  return (
    <section className="section section-lg pt-lg-0 mt--200">
      <Container className="py-lg-md d-flex">
        <div className="col px-2">
          {image}
          <Row>
            <Col className="justify-content-center align-items-center">
              <Row className={checked ? "text-primary" : "text-secondary"}>
                <Label className="custom-toggle">
                  <Input
                    type="checkbox"
                    onClick={handleClick}
                    checked={checked}
                  />
                  <span className="custom-toggle-slider rounded-circle" />
                </Label>
                {!checked ? " English" : " Български"}
              </Row>
            </Col>
          </Row>
          {languageVersion}
        </div>
      </Container>
    </section>
  );
};

export default EuropeanProjectInfo;
