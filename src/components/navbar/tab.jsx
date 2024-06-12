import { Tabs, Tab } from "@nextui-org/react";

export default function TabsComponent({ product }) {
  const products = {
    termotronic: {
      caracteristicas: `
        Los Termotronic son calentadores eléctricos de agua instantáneos que ofrecen agua caliente ilimitada a demanda.<br />
        Su capacidad es de 11 Kw, suficiente para una abundante ducha.<br /><br />
        
        Beneficios:<br />
        - Agua caliente instantánea: No hay que esperar a que se caliente un tanque de agua.<br />
        - Ahorro de energía: Solo consumen energía cuando se está utilizando agua caliente.<br />
        - Ahorro de espacio: Son compactos y se pueden instalar en cualquier lugar.<br />
        - Durabilidad: Están fabricados con materiales de alta calidad para una larga vida útil.<br />
        - Agua caliente ilimitada: El agua caliente nunca se agota.
      `,
      especificaciones: `
        <table>
          <tr><th>Especificaciones Técnicas</th></tr>
          <tr><td>Voltaje de Entrada</td><td>200~240 V.AC.</td></tr>
          <tr><td>Consumo en Max</td><td>56 Amp @ 220V 12Kw</td></tr>
          <tr><td>Rango de Trabajo</td><td>10 PSI Min. a 150 PSI Max.</td></tr>
          <tr><td>Flujo mínimo</td><td>15 LPM</td></tr>
          <tr><td>Eficiencia</td><td>99%</td></tr>
          <tr><td>Materiales</td><td>Cobre y Acero</td></tr>
          <tr><td>Conexiones de Agua</td><td>FLARE 1/2”</td></tr>
          <tr><td>Potencia (220V)</td><td>12.000 Vatios</td></tr>
          <tr><td>Dimensiones</td><td>370 mm X 180 mm X 90 mm</td></tr>
          <tr><td>Peso</td><td>3.9 Kg</td></tr>
        </table>
      `,
    },

    cbx: {
      caracteristicas: `
        Los CBX son calentadores eléctricos de agua instantáneos que ofrecen agua caliente ilimitada a demanda.<br />
        Su capacidad es de 11 Kw suficiente para una abundante ducha con agua caliente.<br /><br />

        Beneficios:<br />
        - Agua caliente instantánea: No hay que esperar a que se caliente un tanque de agua.<br />
        - Ahorro de energía: Solo consumen energía cuando se está utilizando agua caliente.<br />
        - Ahorro de espacio: Son compactos y se pueden instalar en cualquier lugar.<br />
        - Durabilidad: Están fabricados con materiales de alta calidad para una larga vida útil.<br />
        - Agua caliente ilimitada: El agua caliente nunca se agota.
      `,
      especificaciones: `
        <table>
          <tr><th>Especificaciones Técnicas</th></tr>
          <tr><td>Voltaje de Entrada</td><td>200~240 V.AC.</td></tr>
          <tr><td>Consumo en Max</td><td>56 Amp @ 220V 12Kw</td></tr>
          <tr><td>Rango de Trabajo</td><td>10 PSI Min. a 150 PSI Max.</td></tr>
          <tr><td>Flujo mínimo</td><td>15 LPM</td></tr>
          <tr><td>Eficiencia</td><td>99%</td></tr>
          <tr><td>Materiales</td><td>Aluminio y Acero</td></tr>
          <tr><td>Conexiones de Agua</td><td>FLARE 1/2”</td></tr>
          <tr><td>Potencia (208V)</td><td>3.600 Min – 7.200 Med - 11.000 Max</td></tr>
          <tr><td>Dimensiones</td><td>370 mm X 180 mm X 90 mm</td></tr>
          <tr><td>Peso</td><td>3.9 Kg</td></tr>
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
    <div className="flex w-full flex-col mt-4 justify-center items-center">
      <Tabs aria-label="Options" color="primary" variant="bordered">
        <Tab
          key="Caracteristicas"
          title={
            <div className="flex items-center space-x-2">
              <span>Caracteristicas</span>
            </div>
          }>
          <h1
            dangerouslySetInnerHTML={{
              __html: products[product]?.caracteristicas || "",
            }}
          />
        </Tab>
        <Tab
          key="Especificaciones"
          title={
            <div className="flex items-center space-x-2">
              <span>Especificaciones</span>
            </div>
          }>
          <h1
            dangerouslySetInnerHTML={{
              __html: products[product]?.especificaciones || "",
            }}
          />
        </Tab>
      </Tabs>
    </div>
  );
}