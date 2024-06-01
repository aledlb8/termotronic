import { Accordion, AccordionItem } from "@nextui-org/react";

export default function FAQ() {
  return (
    <div className="mt-16 md:mt-0 max-w-screen-md mx-auto pt-12">
      <h1 className="text-2xl lg:text-2xl font-bold lg:tracking-tight pb-10">
        Preguntas Frecuentes
      </h1>
      <Accordion className="" variant="splitted">
        <AccordionItem key="1" title="¿Como funciona?">
          Para poder explicar cómo funciona Termotronic primero debemos explicar
          cómo funciona un calentador de tanque tradicional:
          <br />
          El calentador tradicional tiene un depósito donde acumula el agua para
          calentarla lentamente. Cuando alcanza la temperatura establecida en su
          termostato se apaga. Este proceso puede durar unos 90 minutos.
          Después, durante el transcurso del día, se prende y apaga varias veces
          para mantener el agua de su tanque caliente, ya sea porque se abrió;
          una llave de agua caliente o porque el agua acumulada se enfrió. De
          esta forma un calentador de tanque desperdicia electricidad:
          calentando un agua que probablemente nadie utilice. En cambio,
          Termotronic no tiene tanque y es activado por flujo. Este sistema le
          brinda cuatro ventajas sobre un calentador tradicional:
          <br />
          1. Al no poseer tanque las dimensiones se reducen a escasos 33
          centímetros de alto por 18 centímetros de ancho y sólo 9 de
          profundidad. Este reducido tamaño le permite ahorrar una gran cantidad
          de espacio.
          <br />
          2. TERMOTRONIC permanece apagado mientras las llaves de agua caliente
          estén cerradas y se activa automáticamente cuando se abre una llave;
          inmediatamente comienza a calentar el agua que está circulando por
          dentro él. Para lograr esto tiene dos resistencias de mucha más
          potencia que un calentador tradicional. Este sistema le ofrece agua
          caliente instantánea. Si por razones de racionamiento usted se ve
          obligado a desenchufar su calentador tradicional, al regresar el agua
          deberá esperar a que se caliente el agua del tanque. Con TERMOTRONIC
          al regresar el agua simplemente se abre una llave y se disfruta de
          agua caliente sin tener que esperar y sin tener la necesidad de
          enchufarlo o desenchufarlo.
          <br />
          3. TERMOTRONIC calienta el agua que circula por dentro de él y por
          esta razón nunca se le acaba el agua caliente, usted disfruta entonces
          de agua caliente ilimitada. Se pueden bañar cinco, diez o más personas
          seguidas, llenar una bañera o un jacuzzi, lavar la ropa y nunca
          faltará agua caliente.
          <br />
          4. Y por último la razón más lógica para instalar TERMOTRONIC en el
          lugar donde estaba el calentador tradicional... el ahorro de
          energía... por estar encendido solo cuando realmente se está
          utilizando agua caliente el gasto de electricidad para calentar agua
          se ve reducido hasta en un 60%. Y en la mayoría de los casos el costo
          del calentador se amortiza con el ahorro de electricidad de un año.
        </AccordionItem>
        <AccordionItem
          key="3"
          title="¿Por qué ahorra electricidad? Ustedes hablan de hasta un 60% de ahorro de electricidad">
          El calentador tradicional tiene un depósito donde acumula el agua y la
          calienta poco a poco, cuando alcanza la temperatura establecida en su
          termostato se apaga. Este proceso puede durar unos 90 minutos.
          Después, durante el transcurso del día, se prende y apaga para
          mantener el agua de su tanque caliente. Agua que probablemente usted
          no use.
          <br />
          Termotornic está encendido solo cuando se está utilizando agua
          caliente. Por lo tanto el gasto de electricidad para calentar agua se
          ve reducido hasta en un 60%. Y en la mayoría de los casos el costo del
          calentador se amortiza con el ahorro de electricidad de un año,
          comparándolo con un calentador de eléctrico con tanque. Cuanto mas
          grande sea un calentador con tanque más energía desperdicia.
          <br />
          Ejemplo: Comparemos un calentador con tanque de 80 litros con
          resistencia de 2000 vatios (2kw) con un Termotronic de 11000 vatios
          (11kw.) instalados en una vivienda donde cohabitan 4 personas. El
          calentador tradicional está encendido unas 10 horas al día, ya sea
          porque alguien está usado agua caliente, porque alguien uso agua
          caliente y el tanque perdió temperatura o por que se enfrió el agua de
          su tanque sin que nadie la usara. 10 horas por 2000 vatios son 20000
          vatios (20kw) consumidos en un día (600kw/hora mensual).
          <br />
          Ahora en el caso del Termotronic, como únicamente se enciende cuando
          alguien está usando el agua caliente, estas cuatro personas se duchan
          cada una en 15 minutos, para un total de una hora de uso. 1 hora por
          11000 vatios son 11000 vatios (11kw) consumidos en un día (330kw/hora
          mensual).
          <br />
          En este ejemplo el ahorro es de un 55%. El ahorro aumenta en zonas de
          clima frío y también mejora si hay menos personas en la vivienda. El
          desperdicio de energía en los calentadores con tanque es directamente
          proporcional al tamaño de su tanque.
        </AccordionItem>
        <AccordionItem
          key="4"
          title="¿Dónde está la pérdida de calor en un calentador tradicional?">
          La pérdida de calor de un calentador tradicional está en el
          intercambio que realiza su tanque con el ambiente. El agua que está
          dentro de tanque se enfría con el ambiente se esté o no usando. Este
          desperdicio de calor lo paga el usuario al cancelar su cuenta de
          electricidad.
        </AccordionItem>
        <AccordionItem
          key="5"
          title="¿Me puede dar agua caliente para toda la casa o solo en un baño?">
          Cualquier calentador puede dar agua para toda la casa ya sea
          tradicional o Termotronic. Pero siempre es recomendable instalar el
          calentador lo más cerca posible del lugar donde se va a usar el agua
          caliente, para ahorrar electricidad, ahorrar agua y para evitar largos
          tiempos de espera por el agua caliente. Para el caso de apartamentos o
          casas muy grandes es recomendable instalar dos o más unidades,
          instaladas siempre lo más cerca posible del lugar de uso.
        </AccordionItem>
        <AccordionItem key="2" title="¿Cuanta presión de agua necesita?">
          Termotronic funciona entre 3 y 150 PSI (0,2 y 10 bar). Pero es
          recomendable que se instale en viviendas con más de 5 PSI (0,4 Bar).
          Funciona perfectamente aunque su suministro de agua sea por gravedad.
        </AccordionItem>
        <AccordionItem
          key="6"
          title="¿A pesar de ser eléctrico es realmente seguro?">
          Los calentadores de agua Termotronic combinan la más alta tecnología y
          el más novedoso diseño para brindarles a sus usuarios años de agua
          caliente de manera segura y confiable.
        </AccordionItem>
        <AccordionItem
          key="7"
          title="¿Este calentador puede trabajar con 110 voltios?">
          Termotronic necesita calentar el agua instantáneamente y según circula
          por dentro de él y para obtener la potencia necesaria para este
          trabajo debe estar conectado a una línea de 220 voltios.
        </AccordionItem>
        <AccordionItem
          key="8"
          title="¿Puede abastecer a dos o tres baños a la vez?">
          No, para abastecer a dos o más baños simultáneamente se requiere de
          una instalación en paralelo de varios Termotronic
        </AccordionItem>
        <AccordionItem
          key="9"
          title="¿A que temperatura calienta el agua? ¿Que factores pueden afectar la temperatura del agua?">
          El rendimiento del TERMOTRONIC puede verse afectado por varios
          factores. La temperatura de entrada del agua al calentador, la
          distancia del TERMOTRONIC a lugar donde se usa el agua caliente, el
          caudal del agua que expide un grifo y por ultimo el voltaje que
          alimenta al calentador.
          <br />
          En el gráfico se puede observar la relación entre la temperatura de
          salida y caudal de agua (en Litros por minuto) basado en una
          temperatura de entrada de 25 grados centígrados.
          <img src="/images/data.png" />
          Temperatura de entrada del agua: cuanto más alta sea la temperatura de
          entrada de agua más caliente será la temperatura de salida. Un
          calentador de 11Kw con agua circulado a 8 litros por minuto aumenta la
          temperatura del agua en 20º C, si el agua está entrado a 20º C esta
          saldrá a 40º C.
          <br />
          La distancia entre el calentador y el punto de uso de agua caliente:
          Un TERMOTRONIC de 11Kw. Produce 2.63 Kcalorías/seg, estas calorías se
          transfieren al agua en un 99%. Por lo tanto la pérdida es casi nula.
          Pero cuando el agua entra a la tubería que la va a transporta hasta su
          lugar de uso comienza un intercambio de calor entre el agua y la
          tubería y segundos mas tarde comienza otro intercambio de calor entre
          la tubería y el ambiente. Estos intercambios de calor no son otra cosa
          que pérdidas de energía (de calor en nuestro caso). Los tres factores
          que influyen en el porcentaje de pérdida son: el largo de la tubería,
          el material de que está hecha la tubería y el aislamiento que esta
          pueda tener. Cuanto mas larga sea la tubería que conduce el agua
          caliente mayor será la pérdida y menor la temperatura de salida. El
          cuanto a los materiales es la tubería de cobre la que tiene más
          pérdida y la de PVC la que tiene menor pérdida. Las construcciones de
          buena calidad incluyen tubería de cobre por ser la mas duradera, pero
          la envuelven con un aislante térmico. Aunque un aislante térmico puede
          parecer costoso a primera vista el ahorro de energía (electricidad)
          que este proporciona paga su costo varias veces. Este ahorro es mayor
          en zonas de clima frío.
          <br />
          Caudal en uso: Cuanto mayor sea en caudal de agua menor será el
          aumento de temperatura.
        </AccordionItem>
        <AccordionItem
          key="10"
          title="¿Cuantos litros por minuto despacha este calentador?">
          Nuevamente nos referimos al gráfico anterior donde se puede observar
          el rendimiento del calentador con relación al caudal entregado.
        </AccordionItem>
        <AccordionItem key="11" title="¿Cuál es la falla más común?">
          La falla más común que presenta este calentador es debida a errores al
          momento de la instalación. Una instalación que siga cuidadosamente las
          instrucciones asegura años de disfrute del TERMOTRONIC. Por favor no
          dude en comunicarse con nuestro departamento de instalaciones.
        </AccordionItem>
        <AccordionItem
          key="12"
          title="¿Puedo utilizarlo para llenar una piscina?">
          Sí, pero el tiempo de espera sería muy largo. A 10 litros por minuto
          una piscina pequeña de unos dos mil litros tardaría unas tres horas.
          Nuestro calentador no fue diseñado para este fin por lo tanto no lo
          recomendamos.
        </AccordionItem>
        <AccordionItem key="13" title="¿Necesita ventilación?">
          No, el TERMOTRONIC no necesita ningún tipo de ventilación. Puede
          colocarse en un gabinete metálico totalmente cerrado.
        </AccordionItem>
        <AccordionItem key="14" title="¿Puede ir empotrado?">
          Si
        </AccordionItem>
        <AccordionItem key="15" title="¿Tienen servicio a domicilio?">
          Sí. Llame a nuestro distribuidor más cercano.
        </AccordionItem>
        <AccordionItem
          key="14"
          title="¿En realidad es agua caliente o solo tibia?">
          Es agua caliente. El rendimiento del calentador puede verse afectados
          por varios factores. La temperatura de entrada del agua al calentador,
          la distancia del calentador a lugar donde se usa el agua caliente, el
          caudal del agua que expide un grifo y por ultimo el voltaje que
          alimenta al calentador.
        </AccordionItem>
        <AccordionItem key="16" title="¿Tienen varias capacidades?">
          El CBX está equipado con un selector de potencia. Con un simple ajuste
          se puede seleccionar entre 11Kw, 8.2Kw o 5.5Kw según la siguiente
          tabla.
          <br />
          Control de potencia:
          <br />
          Selector de potencia Potencia máxima | @ 208 V AC | Cable sugerido |
          Breaker sugerido
          <br />
          Max 11Kw (53 Amp) 8 THHN 60 Amp
          <br />
          Med 8,2Kw (40 Amp) 10 THHN * 50 Amp
          <br />
          Min 5,5Kw (27 Amp) 12 THHN * 40 Amp
          <br />
          *Subir un calibre si el largo del cable es superior a 20 mts.
        </AccordionItem>
        <AccordionItem key="17" title="¿Puedo usarlo con tuberías de PVC?">
          Hemos realizado pruebas con la tubería de PVC para agua caliente marca
          PAVCO con resultados satisfactorios.
        </AccordionItem>
        <AccordionItem key="18" title="¿Cualquier persona puede instalarlo?">
          Solo debe ser instalado por un electricista profesional certificado.
        </AccordionItem>
        <AccordionItem
          key="19"
          title="¿A la hora de una falla, venden ustedes los repuestos?">
          Si, y aparte de vender los repuestos tenemos personal altamente
          calificado para reparar en garantía o fuera de esta, detectar el
          causante de falla en la instalación para evitar futuros problemas y
          entrenamiento o asesoramiento a terceros.
        </AccordionItem>
        <AccordionItem key="20" title="Cuanto tiempo tienen en el mercado?">
          Nuestra planta abrió sus puertas a la fabricación de equipos
          electrónicos en 1987. Termotronic sale por primera vez al mercado en
          1994.
        </AccordionItem>
        <AccordionItem key="21" title="¿Que experiencia han tenido?">
          Todos los que trabajamos en TERMOTRONIC estamos muy estimulados por
          los comentarios de agradecimiento y felicitaciones de nuestros
          clientes que día a día utilizan este novedoso sistema para calentar
          agua.
        </AccordionItem>
        <AccordionItem
          key="22"
          title="¿No es una limitación que trabaje solo con 220 voltios? ¿Por que no puedo conectarlo a 110 voltios?">
          TERMOTRONIC necesita calentar el agua instantáneamente y según circula
          por dentro de él y para obtener la potencia necesaria para este
          trabajo debe estar conectado a una línea de 220 voltios.
        </AccordionItem>
        <AccordionItem
          key="23"
          title="¿Puedo conectar dos calentadores en serie?">
          No, pero si en paralelo. En el caso de que se requieran grandes
          volúmenes de agua, una instalación en paralelo de dos o más
          calentadores es la solución.
        </AccordionItem>
        <AccordionItem key="24" title="¿Que me cubre la garantía?">
          El TERMOTRONIC está garantizado contra cualquier defecto de fábrica,
          en sus partes mecánicas por un período de 5 años y en sus partes
          eléctricas por 1 año, a partir de la fecha de compra, respaldada por
          la factura y el talón de garantía. El no seguir cuidadosamente las
          instrucciones de instalación o la ruptura de los sellos anula la
          garantía.
          <br />
          Esta garantía se limita solamente a reparar o cambiar una unidad
          defectuosa, por lo tanto no cubre daños a personas o aparatos, equipos
          y tuberías conectados al TERMOTRONIC. Para optar por la garantía
          contacte a cualquier distribuidor autorizado. Él le dará toda la
          información requerida para prestarle servicio a su unidad.
        </AccordionItem>
        <AccordionItem
          key="25"
          title="¿Por que sugieren en algunos casos, la instalación de un filtro de paso rápido?">
          En algunas zonas el agua de la calle viene con impurezas (barro,
          sólidos pequeños) que pueden ocasionalmente obstruir el filtro interno
          del TERMOTRONIC, obligando a desmontarlo para limpiarlo, lo que a la
          larga puede ser una molestia. Si esto ocurre con frecuencia es
          aconsejable instalar un filtro de paso rápido.
        </AccordionItem>
        <AccordionItem
          key="26"
          title="¿La variación en el voltaje o picos de voltaje pueden afectar la unidad?">
          La variación de voltaje afecta el rendimiento del calentador (calienta
          mejor sí el voltaje es más alto y viceversa). Los picos de voltaje no
          afectan el funcionamiento del TERMOTRONIC.
        </AccordionItem>
        <AccordionItem
          key="27"
          title="¿Los cortes en el suministro de agua ocasionan algún daño?">
          No. Nuestro calentador solo funciona si está circulando agua.
        </AccordionItem>
        <AccordionItem
          key="28"
          title="¿Es prudente bajar el breaker que alimenta el calentador si voy de viaje?">
          Es prudente apagar todos los breaker de una vivienda cuando va a estar
          desocupada por algún tiempo. Siempre observando no dejar sin
          electricidad la nevera, sistemas de alarma u otros equipos que
          requieran electricidad permanentemente.
        </AccordionItem>
        <AccordionItem
          key="29"
          title="¿Puedo conectar la unidad en un circuito cerrado?">
          No lo recomendamos, Termotronic no fue diseñado para ese uso.
        </AccordionItem>
        <AccordionItem
          key="30"
          title="¿Por que se disparan los breaker en algunas oportunidades?">
          Pueden ser varias las razones:
          <br />
          1 El cable que está utilizando para alimentar el calentador no es
          calibre ocho y se está calentando. Esto hace que el breaker salte para
          evitar un recalentamiento.
          <br />
          2 Los tornillos que fijan el cable al breaker o los que fijan el cable
          a la regleta del calentador no están firmemente apretados.
          <br />
          3 La capacidad de los breaker es inferior a 60 amperios.
          <br />
          4 Los breaker están dañados.
          <br />
          5 La tensión con que se alimenta el calentador supera en un 15% para
          la que fue diseñado.
          <br />6 Otro equipo está conectado a la misma línea que alimenta en
          calentador.
        </AccordionItem>
        <AccordionItem
          key="31"
          title="¿Cuánto tarda en llegar el agua caliente?">
          Depende de la distancia que hay entre el TERMOTRONIC y el punto donde
          se desea obtener agua caliente. Sí el calentador está en la misma
          habitación no más de 5 segundos. Si el calentador esta a unos 15
          metros debe tardar aproximadamente unos 30 a 45 segundos.
        </AccordionItem>
        <AccordionItem key="32" title="¿A que se refieren con instantáneo?">
          Los calentadores eléctricos tradicionales, una vez enchufados, pueden
          tardar mas de 30 minutos en calentar el agua de su tanque. El
          TERMOTRONIC calienta el agua según va circulado por dentro de él, por
          lo tanto no es necesario esperar para poder usar el agua caliente.
        </AccordionItem>
        <AccordionItem
          key="33"
          title="¿Si la distancia que hay entre el calentador y la ducha es muy grande el agua sale mas fría?">
          Sí. La distancia entre el calentador y el punto donde se desea obtener
          agua caliente afectan la temperatura de salida. Esto sucede con
          cualquier tipo de calentador, ya sea de gas, eléctrico tradicional o
          el TERMOTRONIC.
          <br />
          El agua calienta la tubería por la que va circulando y la tubería
          irradia este calor al ambiente, por cada tramo de tubería se “pierden”
          una determinada cantidad de calorías. A mayor cantidad de metros de
          tubería mayor es la perdida de calor.
          <br />
          Factores que afectan la temperatura de salida del agua:
          <br />
          La distancia entre el calentador y el punto de uso de agua caliente:
          Un TERMOTRONIC de 11Kw. Produce 2.63 Kcalorías/seg., estas calorías se
          transfieren al agua en un 99%. Por lo tanto la pérdida es casi nula.
          Pero cuando el agua entra a la tubería que la va a transporta hasta su
          lugar de uso comienza un intercambio de calor entre el agua y la
          tubería y segundos mas tarde comienza otro intercambio de calor entre
          la tubería y el ambiente. Estos intercambios de calor no son otra cosa
          que pérdidas de energía (de calor en nuestro caso), los tres factores
          que influyen en el porcentaje de pérdida son: el largo de la tubería,
          el material de que está hecha la tubería y el aislamiento que esta
          pueda tener. Cuanto mas larga sea la tubería que conduce el agua
          caliente mas es la pérdida y menor la temperatura de salida. El cuanto
          a los materiales es la tubería de cobre la que tiene mas pérdida y la
          de PVC la que tiene menor pérdida. Las construcciones de buena calidad
          incluyen tubería de cobre por ser la mas duradera, pero la envuelven
          con un aislante térmico. Aunque un aislante térmico puede parecer
          costoso a primera vista el ahorro de energía (electricidad) que este
          proporciona paga su costo varias veces. Este ahorro es mayor en zonas
          de clima frío.
          <br />
          Caudal en uso: Cuanto mayor sea en caudal de agua menor será el
          aumento de temperatura. Un TERMOTRONIC de 11Kw.
          <br />
          Temperatura de entrada del agua: cuanto más alta sea la temperatura de
          entrada de agua más caliente será la temperatura de salida. Un
          calentador de 11Kw con agua circulado a 8 litros por minuto aumenta la
          temperatura del agua en 20º C, si el agua está entrado a 20º C esta
          saldrá a 40º C.
        </AccordionItem>
        <AccordionItem
          key="34"
          title="Mi calentador funciona muy bien por uno o dos minutos, entonces se apaga. ¿Qué puede ser?">
          Son tres las posibles causas de esta falla:
          <br />
          1-Baja presión en el sistema hidroneumático de su vivienda.
          Soluciones:
          <br />- Aumente la presión de apagado del presostato del sistema
          hidroneumático (consulte a un especialista antes de probar esta
          sugerencia).
          <br />
          - Coloque el selector de potencia en &quot;Med&quot;. Si la falla
          continua pase el selector a &quot;Min&quot;
          <br />
          2-La ducha que está usando restringe mucho el agua o está tapada.
          Soluciones:
          <br />- Cambie la ducha a un modelo que permita mas flujo de agua o
          limpie los orificios de salida del agua de su ducha.
          <br />- Coloque el selector de potencia en &quot;Med&quot;. Si la
          falla continua pase el selector a &quot;Min&quot;
          <br />
          3-Tuberías de su vivienda obstruidas. (tuberías muy viejas)
          Soluciones:
          <br />
          - Limpieza de tuberías. - Coloque el selector de potencia en
          &quot;Med&quot;. Si la falla continua pase el selector a
          &quot;Min&quot;
          <br />- Aumente la presión de apagado del presostato del sistema
          hidroneumático (consulte a un especialista antes de probar esta
          sugerencia).
          <br />
          Explicación: cuando la cantidad de agua que circula por dentro del
          TERMOTRONIC muy reducida (ya sea por baja presión o por tuberías
          obstruidas) esta puede llegar a 80º C, en este momento el sistema de
          protección del TERMOTRONIC apaga el calentador para evitar un
          sobrecalentamiento.
          <br />
          Para evitar que el agua llegue a tan alta temperatura coloque el
          selector en posición media. Si la presión de agua es extremadamente
          baja y la falla continúa entonces será necesario colocar el selector
          en mínimo.
        </AccordionItem>
      </Accordion>
    </div>
  );
}
