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
        На 24.02.2020г. Булмаг АД сключи договор за безвъзмездна финансова помощ
        по Оперативна Програма „Иновации и конкурентоспособност“ 2014-2020,
        процедура за „Подобряване на производствения капацитет в МСП“.{" "}
        <p>
          {" "}
          Общата стойност на проекта е 1 071 000.00 лв., от които 637 245.00 лв.
          европейско финансиране, 112 455.00 лв. национално съфинансиран, както
          и 321 300.00 лв. самофинансиране от бенефициента.
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
        намаляване на разходите, подобряване на предлаганите услуги. Начало на
        проекта: 24.02.2020г. Край на проекта: 24.02.2021г.
      </p>
      <p>
        На 29.03.2016 г. <strong>Булмаг АД</strong> подписа договор за
        безвъзмездни средства по{" "}
        <strong>
          Оперативна програма „Иновации и конкурентоспособност“ 2014-2020
          процедура „Подобряване на производствения капацитет на МСП“.
        </strong>
        .
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
        1. Увеличаване на продажбите; 2. Разширяване на пазарния дял; 3.
        Международният пазар получи приходи. 6-10% от нетния доход на компанията
        да се извлича от международните пазари като краткосрочна цел; 4.
        Увеличаване на производителността на труда; 5. Подобряване на
        ефективността на ресурсите.
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
        On 02/24/2020 Bulmag AD has concluded a grant contract under Operational
        Program "Innovation and Competitiveness" 2014-2020, procedure for
        "Improving the production capacity in SMEs".{" "}
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
        </p>
      </p>
      <p>
        On 29/03/2016, the <strong>Bulmag AD</strong> signed a contract for
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
        1. Increase sales; 2. Expand market share; 3. International market
        obtained revenue. 6-10% of the net income of the company to be derived
        from international markets as a short-term goal; 4. Increase labor
        productivity; 5. Improve resource efficiency.
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
              <Label className="custom-toggle">
                <Input
                  type="checkbox"
                  onClick={handleClick}
                  checked={checked}
                />
                <span className="custom-toggle-slider rounded-circle" />
              </Label>
            </Col>
          </Row>
          {languageVersion}
        </div>
      </Container>
    </section>
  );
};

export default EuropeanProjectInfo;
