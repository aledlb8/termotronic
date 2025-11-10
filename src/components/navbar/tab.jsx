import { Tabs, Tab } from "@nextui-org/react";

export default function TabsComponent({ product }) {
  const products = {
    termotronic: {
      caracteristicas: `
        Los Termotronic son calentadores eléctricos de agua instantáneos que ofrecen agua caliente ilimitada a demanda.<br />
        Su capacidad es de 12 Kw, suficiente para una abundante ducha.<br /><br />
        
        Beneficios:<br />
        - Agua caliente instantánea: No hay que esperar a que se caliente un tanque de agua.<br />
        - Ahorro de energía: Solo consumen energía cuando se está utilizando agua caliente.<br />
        - Ahorro de espacio: Son compactos y se pueden instalar en cualquier lugar.<br />
        - Durabilidad: Están fabricados con materiales de alta calidad para una larga vida útil.<br />
        - Agua caliente ilimitada: El agua caliente nunca se agota. <br />
        - Confiabilidad: Rigurosos controles de calidad durante su fabricación aseguran años de uso. <br />
        - Ecológicos: Además de ahorrar energía son fabricados con materials reciclados y 98% reciclables.
      `,
      especificaciones: `
        <table>
          <tr><th>Especificaciones Técnicas</th></tr>
          <tr><td>Voltaje de Entrada</td><td>200~240 V.AC.</td></tr>
          <tr><td>Consumo en Max</td><td>55 Amp @ 220V 12Kw</td></tr>
          <tr><td>Rango de Trabajo</td><td>10 PSI Min. a 150 PSI Max.</td></tr>
          <tr><td>Flujo mínimo</td><td>1.5 LPM</td></tr>
          <tr><td>Eficiencia</td><td>99%</td></tr>
          <tr><td>Materiales</td><td>Cobre y Acero</td></tr> 
          <tr><td>Conexiones de Agua</td><td>FLARE 1/2”</td></tr>
          <tr><td>Potencia (@220V)</td><td>12.000 Vatios</td></tr>
          <tr><td>Dimensiones</td><td>370 mm X 180 mm X 90 mm</td></tr>
          <tr><td>Peso</td><td>3.9 Kg</td></tr>
        </table>
      `,
    },

    cbx: {
      caracteristicas: `
        Los CBX son calentadores eléctricos de agua instantáneos que ofrecen agua caliente ilimitada a demanda.<br />
        Su capacidad es de 12 Kw suficiente para una abundante ducha con agua caliente.<br /><br />

        Beneficios:<br />
        - Agua caliente instantánea: No hay que esperar a que se caliente un tanque de agua.<br />
        - Ahorro de energía: Solo consumen energía cuando se está utilizando agua caliente.<br />
        - Ahorro de espacio: Son compactos y se pueden instalar en cualquier lugar.<br />
        - Económicos: Es el equipo de 12Kw más económico del mercado.<br />
        - Agua caliente ilimitada: El agua caliente nunca se agota. <br />
        - Garantizados: Tenemos la mejor garantía y centros de servico en toda Venezuela.<br />
        - Ecológicos: Además de ahorrar energía son fabricados con materials reciclados y 98% reciclables.
      `,
      especificaciones: `
        <table>
          <tr><th>Especificaciones Técnicas</th></tr>
          <tr><td>Voltaje de Entrada</td><td>100~240 V.AC.</td></tr>
          <tr><td>Consumo en Max</td><td>55 Amp @ 220V 12Kw</td></tr>
          <tr><td>Consumo en Max</td><td>33 Amp @ 120V  4Kw</td></tr>
          <tr><td>Rango de Trabajo</td><td>10 PSI Min. a 150 PSI Max.</td></tr>
          <tr><td>Flujo mínimo</td><td>2 LPM</td></tr>
          <tr><td>Eficiencia</td><td>99%</td></tr>
          <tr><td>Materiales</td><td>Cobre, Aluminio y Acero</td></tr>
          <tr><td>Conexiones de Agua</td><td>FLARE 1/2”</td></tr>
          <tr><td>Potencia (@220V)</td><td>4.000 W Min – 8.000 W Med - 12.000 W Max</td></tr> 
          <tr><td>Dimensiones</td><td>370 mm X 180 mm X 90 mm</td></tr>
          <tr><td>Peso</td><td>3.9 Kg</td></tr>
        </table><br />
<table >
  <thead>
         <tr><th>Tabla de potencias, consumos y calibre recomendado (con el selector en MAX) </th></tr> 
  </thead>
</table>        
<table >
    <thead>
    <tr>
      <th style="width: 80px; text-align: left;">V AC</th>
      <th style="width: 100px; text-align: left;">Vatios</th>
      <th style="width: 80px; text-align: left;">Amp</th>
      <th style="width: 120px; text-align: left;">AWG (THHN)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>240</td>
      <td>14 Kw</td>
      <td>61</td>
      <td>6</td>
    </tr>
    <tr>
      <td>220</td>
      <td>12 Kw</td>
      <td>56</td>
      <td>6</td>
    </tr>
    <tr>
      <td>208</td>
      <td>11 Kw</td>
      <td>53</td>
      <td>8</td>
    </tr>
    <tr>
      <td>120</td>
      <td>3.7 Kw</td>
      <td>31</td>
      <td>10</td>
    </tr>
    <tr>
      <td>110</td>
      <td>3 Kw</td>
      <td>30</td>
      <td>10</td>
    </tr>
  </tbody>
</table><br />
<table >
  <thead>
         <tr><th>Potencias variando el selector (en Kw)</th></tr> 
  </thead>
</table>        

<table>
  <thead>
    <tr>
      <th style="width: 80px; text-align: left;">Voltios</th>
      <th style="width: 100px; text-align: left;">MAX</th>
      <th style="width: 100px; text-align: left;">MED</th>
      <th style="width: 100px; text-align: left;">MIN</th>
    </tr>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>240V</td>
      <td>14.6</td>
      <td>9.7</td>
      <td>4.8Kw</td>
    </tr>
    <tr>
      <td>220V</td>
      <td>12</td>
      <td>8</td>
      <td>4Kw</td>
    </tr>
    <tr>
      <td>208V</td>
      <td>11.2</td>
      <td>7.3</td>
      <td>3.6Kw</td>
    </tr>
    <tr>
      <td>120V</td>
      <td>3.7</td>
      <td>2.5</td>
      <td>1.2Kw</td>
    </tr>
    <tr>
      <td>110V</td>
      <td>3.3</td>
      <td>2.2</td>
      <td>1.1Kw</td>
    </tr>
  </tbody>
</table> 
      `,
    },

    kit: {
      caracteristicas: `
        Los kits de Termotronic son conjuntos de piezas que se utilizan para instalar los calentadores de agua Termotronic y CBX.<br /><br />

        El kit de instalación incluye:<br />
        - Válvulas de Paso: Permiten controlar el flujo de agua hacia el calentador.<br />
        - Conexiones de tuberías: Conectan el calentador a las tuberías de agua fría y caliente.<br />
        - Válvula de alivio de presión: Libera la presión en caso de obstrucción o falla.<br />
        - Filtro de agua: Elimina los sedimentos del agua para proteger el calentador.<br />
        - Instrucciones: Guían al usuario a través del proceso de instalación.<br /><br />

        Los kits de instalación Termotronic están disponibles para su compra en línea y en tiendas especializadas de mejoras para el hogar.<br />
        La instalación de un kit Termotronic debe ser realizada por un plomero calificado.
      `,
      especificaciones: `
        <table>
          <tr><th>Especificaciones Técnicas</th></tr>
          <tr><td>Adaptador</td><td>Flare 1/2"</td></tr>
          <tr><td>Filtro de paso rápido</td><td>1/2 NPT</td></tr>
          <tr><td>Vávula de alivio</td><td>150 PSI ajustable</td></tr>
          <tr><td>Rango de Trabajo</td><td>10 PSI Min. a 150 PSI Max.</td></tr>
          <tr><td>Materiales</td><td>Latón y Acero inoxidable</td></tr>
          <tr><td>Conexiones de Agua</td><td>FLARE 1/2”</td></tr>
          <tr><td>Peso</td><td>0.5 Kg</td></tr>
        </table>
      `,
    },
  };

  return (
    <div className="flex w-full flex-col mt-8 mb-8 justify-center items-center">
      <Tabs
        aria-label="Product information tabs"
        color="danger"
        variant="underlined"
        classNames={{
          tabList: "gap-6 w-full relative rounded-lg p-1 bg-white/50 backdrop-blur-sm border border-gray-200 shadow-soft",
          cursor: "w-full bg-brand-600",
          tab: "max-w-fit px-6 py-3 h-12",
          tabContent: "group-data-[selected=true]:text-brand-600 font-semibold text-base sm:text-lg"
        }}
      >
        <Tab
          key="Caracteristicas"
          title={
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="hidden sm:inline">Características</span>
              <span className="sm:hidden">Info</span>
            </div>
          }>
          <div className="mt-6 p-6 rounded-xl bg-white shadow-soft border border-gray-200">
            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{
                __html: products[product]?.caracteristicas || "",
              }}
            />
          </div>
        </Tab>
        <Tab
          key="Especificaciones"
          title={
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
              <span className="hidden sm:inline">Especificaciones</span>
              <span className="sm:hidden">Specs</span>
            </div>
          }>
          <div className="mt-6 p-6 rounded-xl bg-white shadow-soft border border-gray-200">
            <div
              className="prose prose-lg max-w-none prose-table:border-collapse prose-th:bg-gradient-to-r prose-th:from-brand-600 prose-th:to-brand-700 prose-th:text-white prose-th:p-3 prose-th:text-left prose-td:border prose-td:border-gray-300 prose-td:p-3"
              dangerouslySetInnerHTML={{
                __html: products[product]?.especificaciones || "",
              }}
            />
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}