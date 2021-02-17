import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { animateScroll as scroll } from "react-scroll";

const variantsTransition = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const index = () => {
  //autoScroll To Top
  useEffect(() => {
    const scrollToTop = () => {
      scroll.scrollToTop();
    };
    scrollToTop();
  }, []);

  const nombreTienda = "Paseo Coder";
  const website = "paseocoder";

  return (
    <motion.div
      variants={variantsTransition}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="terms-conditions"
    >
      <div className="container">
        <div className="title">Terminos y Condiciones</div>
        <div className="text">
          <span>TERMINOS Y CONDICIONES GENERALES</span>
          <div className="block">
            Términos y condiciones generales (los "términos y condiciones
            generales") aplicables al acceso y uso de los servicios ofrecidos
            por {nombreTienda}, paro s.a., cuit 30-70880251-0, ("los servicios")
            dentro del sitio www.{website}.com (www.{website}.com.ar; “
            {nombreTienda}” o “el sitio”). Cualquier persona (en adelante
            "usuario" o en plural "usuarios") que desee acceder y/o usar el
            sitio o los servicios podrá hacerlo sujetándose a los términos y
            condiciones generales respectivos y demás políticas y principios que
            rigen {nombreTienda} incorporados al presente por referencia.
            Cualquier persona que no acepte estos términos y condiciones
            generales, los cuales tienen un carácter obligatorio y vinculante,
            deberá abstenerse de utilizar el sitio y/o los servicios. El usuario
            deberá leer, entender y aceptar todas las condiciones establecidas
            en los términos y condiciones generales, políticas de privacidad y
            demás documentos incorporados a los mismos por referencia, optando
            de forma expresa por recibir los mismos y toda otra información por
            medios digitales.
          </div>
          <div className="block">
            <span>1.CAPACIDAD</span>
            Los servicios sólo están disponibles para personas que tengan
            capacidad legal para contratar. No podrán utilizar los servicios las
            personas que no tengan esa capacidad, los menores de edad o usuarios
            de {nombreTienda} que hayan sido suspendidos temporalmente o
            inhabilitados definitivamente. Si un usuario se registra como
            empresa, debe tener capacidad expresa para contratar a nombre de tal
            entidad y obligar a la misma en los términos del presente acuerdo.
          </div>
          <div className="block">
            <span>2.REGISTRACION</span>
            Es obligatorio completar el formulario de registración en todos sus
            campos con datos válidos para poder utilizar los servicios que
            brinda {nombreTienda}. El futuro usuario deberá completarlo con su
            información personal de manera exacta, precisa y verdadera ("datos
            personales") y asume el compromiso de actualizar sus datos
            personales conforme resulte necesario. El usuario presta expresa
            conformidad con que {nombreTienda} utilice diversos medios para
            identificar sus datos personales, asumiendo el usuario la obligación
            de revisarlos y mantenerlos actualizados. Pasaje en línea no se
            responsabiliza por la certeza de los datos personales de los
            usuarios. Los usuarios garantizan y responden, en cualquier caso, de
            la veracidad, exactitud, vigencia y autenticidad de sus datos
            personales. A su exclusiva discreción, {nombreTienda} podrá requerir
            una registración adicional a los usuarios que accedan a paquetes
            especiales de publicaciones. Pasaje en línea se reserva el derecho
            de solicitar algún comprobante y/o dato adicional a efectos de
            corroborar los datos personales, así como de suspender temporal o
            definitivamente a aquellos usuarios cuyos datos no hayan podido ser
            confirmados. En estos casos de inhabilitación, se dará de baja todos
            los artículos publicados, así como las ofertas realizadas, sin que
            ello genere algún derecho a resarcimiento. El usuario accederá a su
            cuenta personal ("cuenta") mediante el ingreso de su nombre de
            usuario y contraseña de seguridad personal elegida ("contraseña").
            El usuario se obliga a mantener la confidencialidad de esa
            contraseña. La cuenta es personal, única e intransferible, y está
            prohibido que un mismo usuario registre o posea más de una cuenta.
            En caso que {nombreTienda} detecte distintas cuentas que contengan
            datos coincidentes o relacionados, podrá cancelar, suspender o
            inhabilitarlas. El usuario será responsable por todas las
            operaciones efectuadas en su cuenta, pues el acceso a la misma está
            restringido al ingreso y uso de su contraseña de seguridad, de
            conocimiento exclusivo del usuario y su entrega a terceros, no
            involucra responsabilidad de {nombreTienda} en caso de mala
            utilización. El usuario se compromete a notificar a {nombreTienda}
            de forma inmediata y por medio idóneo y fehaciente, cualquier uso no
            autorizado de su cuenta, así como el ingreso por terceros no
            autorizados a la misma. Se aclara que está prohibida la venta,
            cesión o transferencia de la cuenta (incluyendo la reputación) bajo
            ningún título. Pasaje en línea se reserva el derecho de rechazar
            cualquier solicitud de registración o de cancelar una registración
            previamente aceptada, sin que esté obligado a comunicar o exponer
            las razones de su decisión y sin que ello genere derecho a
            indemnización o resarcimiento alguno.
          </div>
          <div className="block">
            <span>3. MODIFICACIONES DEL ACUERDO</span>
            Pasaje en línea podrá modificar los términos y condiciones generales
            en cualquier momento haciendo públicos en el sitio, los términos
            modificados. Todos los términos modificados entrarán en vigor a los
            10 (diez) días de su publicación. Dichas modificaciones serán
            comunicadas a los usuarios que en la configuración de su cuenta de
            {nombreTienda} hayan indicado que desean recibir notificaciones de
            los cambios en los presentes términos y condiciones. Todo usuario
            que no esté de acuerdo con las modificaciones efectuadas por pasaje
            en línea podrá solicitar la baja de la cuenta. El uso del sitio y/o
            sus servicios implica para el usuario la plena aceptación de estos
            términos y condiciones generales de uso de {nombreTienda}.
          </div>
          <div className="block">
            <span>4. FORMAS DE PAGO.</span>
            Cada usuario podrá pactar la forma de pago con la parte compradora.
            En una primera etapa, {nombreTienda} tiene acordado se efectúen con
            mercado pago y pone en conocimiento de los usuarios, que está en
            tratativas con entidades bancarias, para la apertura de una cuenta
            recaudadora para las operaciones realizadas por medio del sitio y/o
            la incorporación de otros medios de pago para dar mayores
            posibilidades y beneficios a los usuarios.
          </div>
          <div className="block">
            <span>4.1 UTILIZACIÓN DE MERCADO PAGO</span>
            Al publicar un anuncio en el sitio, el usuario vendedor consiente
            expresamente la utilización de mercado pago como una de las formas
            disponibles para el pago del bien o servicio ofrecido y se obliga a
            no modificar en nada el precio de venta del bien o servicio si el
            usuario comprador decidiera utilizar ese medio de pago. Asimismo, el
            usuario declara que ha leído, comprendido y aceptado los términos y
            condiciones de utilización de dicho servicio. El usuario vendedor y
            el usuario comprador, deberán leer, comprender y aceptar los
            términos y condiciones de mercado pago en la oportunidad que a cada
            uno se le solicite dicha aceptación para su utilización en el sitio
            {nombreTienda}.
          </div>
          <div className="block">
            <span>4.2. PUBLICACIÓN DE BIENES Y/O SERVICIOS</span>
            El usuario vendedor deberá ofrecer a la venta los bienes y promover
            los servicios en las categorías y subcategorías apropiadas. Las
            publicaciones podrán incluir textos descriptivos, gráficos,
            fotografías y otros contenidos y condiciones pertinentes para la
            venta del bien o la promoción del servicio, siempre que no violen
            ninguna disposición de este acuerdo o demás políticas de pasaje en
            línea. El bien o servicio ofrecido por el usuario vendedor debe ser
            exactamente descripto en cuanto a sus condiciones y características
            relevantes. Se entiende y presume que mediante la inclusión del bien
            o servicio en {nombreTienda}, el usuario vendedor acepta que tiene
            la intención y el derecho de vender el bien u ofrecer el servicio
            referido, o está facultado para ello por su titular. Asimismo, el
            usuario comprador acepta que tiene disponible el bien publicado para
            su entrega inmediata o para el plazo especificado en la publicación,
            así como el servicio para su prestación en el plazo acordado. Se
            establece que los precios de los bienes o servicios publicados
            deberán ser expresados con IVA incluido cuando corresponda la
            aplicación del mismo, y en moneda de curso legal. Pasaje en línea
            podrá remover cualquier publicación cuyo precio no sea expresado de
            esta forma para evitar confusiones o malos entendidos en cuanto al
            precio final del bien o servicio. Se deja expresamente establecido
            que ninguna descripción podrá contener datos personales o de
            contacto, tales como y sin limitarse a, números telefónicos,
            dirección de e-mail, dirección postal, direcciones de páginas de
            internet que contengan datos como los mencionados anteriormente. En
            las categorías autos, motos y otros, inmuebles y servicios, los
            datos personales o de contacto deberán agregarse en la sección
            específicamente prevista para incluir la información sobre el
            vendedor o anunciante. No podrán publicitarse otros medios de pagos,
            distintos de los enunciados por {nombreTienda} en la página de
            publicación de artículos, y/o alterar las condiciones de compra.
          </div>
          <div className="block">
            <span>4.3. INCLUSIÓN DE IMÁGENES Y FOTOGRAFÍAS</span>
            Desde la creación de la publicación, el usuario autoriza a pasaje en
            línea y sus compañías asociadas a utilizar, publicar, reproducir y/o
            adaptar las imágenes y fotografías incluidas en sus publicaciones.
            En particular, el usuario otorga a {nombreTienda} y a sus sociedades
            relacionadas una autorización gratuita, irrevocable, no exclusiva,
            internacional y sin límite temporal para publicar, reproducir y/o
            adaptar las imágenes y fotografías con el fin de ser usadas en todos
            los sitios y aplicaciones de {nombreTienda}, redes sociales y/o en
            cualquier medio masivo y no masivo de comunicación, incluyendo sin
            limitación, plataformas y cualquier otro medio digital o físico que{" "}
            {nombreTienda} considere oportuno o con aquellas otras plataformas o
            sitios de internet con los cuales
            {nombreTienda} haya realizado una alianza, para identificar ofertas,
            clasificar productos, crear catálogos, realizar acciones
            publicitarias y de marketing y sublicenciar el uso a terceros para
            estos fines. El usuario declara y garantiza que es titular o
            licenciatario de los derechos necesarios sobre las imágenes y
            fotografías contenidas en sus publicaciones y cuenta con los
            derechos y facultades necesarias para conceder la autorización
            detallada en esta cláusula, siendo responsable exclusivo por
            cualquier infracción a derechos de terceros. Pasaje en línea podrá
            eliminar la publicación de las imágenes y fotografías, e incluso del
            bien o servicio si interpretara, a su exclusivo criterio, que la
            imagen no cumple con los presentes términos y condiciones. Las
            imágenes y fotografías de bienes o servicios publicados bajo la
            modalidad Premium deberán cumplir con algunos requisitos adicionales
            como condición para ser expuestas en la página principal del sitio
            web.
          </div>
          <div className="block">
            <span>4.4 -ARTÍCULOS PROHIBIDOS</span>
            Sólo podrán ser ingresados en las listas de bienes y servicios
            ofrecidos, aquellos cuya venta no se encuentre tácita o expresamente
            prohibida en los términos y condiciones generales y demás políticas
            de {nombreTienda} o por la ley vigente. 5. Propiedad de la
            información para utilizar los servicios ofrecidos por pasaje en
            línea, los usuarios deberán facilitar determinados datos de carácter
            personal. Su información personal se procesa y almacena en
            servidores o medios magnéticos que mantienen altos estándares de
            seguridad y protección tanto física como tecnológica. Para mayor
            información sobre la privacidad de los datos personales y casos en
            los que será revelada la información personal, se puede consultar
            nuestras políticas de privacidad.
          </div>
          <div className="block">
            <span>6. OBLIGACIONES DE LOS USUARIOS</span>
            <span>6.1 OBLIGACIONES DEL COMPRADOR</span>
            Durante el plazo fijado por el usuario vendedor, los usuarios
            interesados realizarán ofertas de compra para los bienes y servicios
            que permitan la contratación en el sitio y podrán contactar a los
            oferentes de las categorías autos, motos y otros, inmuebles y
            servicios. La oferta de venta se cierra una vez que vence el plazo
            de la publicación o se acaban las cantidades estipuladas por el
            vendedor y la promoción del servicio culmina con el vencimiento del
            plazo de la publicación. El comprador está obligado a intentar
            comunicarse con el vendedor y completar la operación si ha realizado
            una oferta por un artículo salvo, que la operación esté prohibida
            por la ley o los términos y condiciones generales y demás políticas
            de {nombreTienda}, en cuyo caso no estará obligado a concretar la
            operación. Al ofertar por un bien o contratar un servicio, el
            usuario acepta quedar obligado por las condiciones de venta
            incluidas en la publicación, en la medida en que las mismas no
            infrinjan las leyes o los términos y condiciones generales y demás
            políticas de {nombreTienda}. La oferta de compra de un bien o
            contratación de un servicio es irrevocable salvo en circunstancias
            excepcionales, tales como que el vendedor cambie sustancialmente la
            descripción del bien o servicio después de realizada alguna oferta,
            que exista un claro error tipográfico, o que no pueda verificar la
            identidad del vendedor. Las ofertas de compra sólo serán
            consideradas válidas, una vez que hayan sido procesadas por el
            sistema informático de {nombreTienda}. Impuestos. Tal como lo
            establece la normativa fiscal vigente, el comprador debe exigir
            factura o ticket al vendedor como comprobante de la operación. El
            vendedor no estará obligado a emitir factura o ticket sólo en el
            caso de tratarse de una persona física que efectúa ventas
            ocasionalmente.
          </div>
          <div className="block">
            <span>6.2. OBLIGACIONES DEL VENDEDOR</span>
            El usuario vendedor debe tener capacidad legal para vender el bien o
            servicio objeto de su oferta. Asimismo, debe cumplir con todas las
            obligaciones regulatorias pertinentes y contar con los registros,
            habilitaciones, permisos y/o autorizaciones exigidos por la
            normativa aplicable para la venta de los bienes y servicios
            ofrecidos. Si el usuario vendedor ha recibido una oferta queda
            obligado a intentar comunicarse con el comprador y completar la
            operación. La cancelación de una venta por parte del usuario
            vendedor impactará en su reputación. Aquel usuario vendedor que
            tenga un porcentaje de ventas canceladas igual o superior a 2,5%,
            podrá ser advertido, suspendido y/o inhabilitado por {nombreTienda}
            para continuar operando en el sitio. Dado que {nombreTienda} es un
            punto de encuentro entre comprador y vendedor y no participa de las
            operaciones que se realizan entre ellos, el vendedor será
            responsable por todas las obligaciones y cargas impositivas que
            correspondan por la venta de sus bienes y/o servicios, sin que
            pudiera imputársele a {nombreTienda} o alguna de sus compañías y/o
            directivos algún tipo de responsabilidad por incumplimientos en tal
            sentido. Como se menciona anteriormente, {nombreTienda} sólo pone a
            disposición de los usuarios un espacio virtual que les permite
            comunicarse mediante internet para encontrar una forma de vender o
            comprar artículos y/o servicios. Pasaje en línea no tiene
            participación alguna en el proceso de negociación y
            perfeccionamiento del contrato definitivo entre las partes. Por eso,
            {nombreTienda} no es responsable por el efectivo cumplimiento de las
            obligaciones fiscales o impositivas establecidas por la ley vigente.
          </div>
          <div className="block">
            <span>6.3- ENVÍOS</span>
            En una primera etapa y como “promoción lanzamiento”, el envío del
            producto al usuario comprador, se realizará bajo 2 modalidades: (a)
            envío sin cargo, que podrá realizar {nombreTienda} y/o el usuario
            vendedor o; (b) pickup store el vendedor acepta que su comprador
            puede revocar la compra hasta 12 hs de adquirir el producto.
            Asimismo, el vendedor acepta que los compradores podrán pedir el
            cambio del producto hasta 5 días después de su recepción. En
            cualquiera de los mencionados casos, el vendedor deberá aceptar el
            cambio del producto vendido pudiendo establecer que se efectúe en la
            tienda del usuario vendedor.
          </div>
          <div className="block">
            <span>7. PROHIBICIONES</span>
            LOS USUARIOS NO PODRÁN: <br />
            (a) Manipular los precios de los artículos
            <br />
            (b) Mantener cualquier tipo de comunicación por otro medio distinto
            al servicio de mensajería que ofrece {nombreTienda} (incluyendo
            mails, redes sociales, whatsapp, etc.) Ya sea durante la oferta del
            bien o con posterioridad a ella, salvo en la sección de preguntas y
            respuestas y en las categorías autos, motos y otros, servicios e
            inmuebles y propiedades que así lo permitan
            <br />
            (c) Dar a conocer sus datos personales o de otros usuarios a través
            de la sección de preguntas y respuestas y/o por algún otro medio
            (incluyendo pero sin limitar twitter, Facebook y/ o cualquier otra
            red social), salvo en las categorías autos, motos y otros e
            inmuebles y propiedades que así lo permitan
            <br />
            (d) Aceptar datos personales proporcionados por otros usuarios a
            través de la sección de preguntas y respuestas y/o algún otro medio
            (incluyendo pero sin limitar twitter, Facebook y/o cualquier otra
            red social)
            <br />
            (e) Publicar o vender artículos prohibidos por los términos y
            condiciones generales y demás políticas de {nombreTienda} o leyes
            vigentes
            <br />
            (f) Ofrecer y/o comprar monedas virtuales (bitcoins) <br />
            (g) Insultar o agredir a otros usuarios;
            <br />
            (h) Utilizar su reputación, calificaciones o comentarios recibidos
            en {nombreTienda} en cualquier ámbito fuera de {nombreTienda};
            <br />
            (i) Publicar artículos idénticos en más de una publicación. Este
            tipo de actividades será investigado por {nombreTienda} y el
            infractor podrá ser sancionado con la suspensión o cancelación de la
            oferta e incluso de su inscripción como usuario de {nombreTienda}
            y/o de cualquier otra forma que estime pertinente, sin perjuicio de
            las acciones legales a que pueda dar lugar por la configuración de
            delitos o contravenciones o los perjuicios civiles que pueda causar
            a los usuarios oferentes.
          </div>
          <div className="block">
            <span>8. VIOLACIONES DEL SISTEMA O BASES DE DATOS</span>
            No está permitida ninguna acción o uso de dispositivo, software, u
            otro medio tendiente a interferir tanto en las actividades y
            operatoria de {nombreTienda} como en las ofertas, descripciones,
            cuentas o bases de datos de {nombreTienda}. Cualquier intromisión,
            tentativa o actividad violatoria o contraria a las leyes sobre
            derecho de propiedad intelectual y/o a las prohibiciones y demás
            políticas establecidas en el presente, harán pasible a su
            responsable de las acciones legales pertinentes y sanciones
            previstas por estos términos y condiciones y asimismo responsable de
            indemnizar los daños y perjuicios ocasionados.
          </div>
          <div className="block">
            <span>9. SANSIONES. SUSPENSIONES</span>
            Sin perjuicio de otras medidas, {nombreTienda} podrá advertir,
            suspender en forma temporal o definitivamente la cuenta de un
            usuario o una publicación, aplicar una sanción que impacte
            negativamente en la reputación de un usuario, iniciar las acciones
            que estime pertinentes y/o suspender la prestación de sus servicios
            si: (a) se quebrantara alguna ley, o cualquiera de las
            estipulaciones de los términos y condiciones generales y demás
            políticas de {nombreTienda}; (b) si incumpliera sus compromisos como
            usuario; (c) si se incurriera a criterio de {nombreTienda} en
            conductas o actos dolosos o fraudulentos; (d) no pudiera verificarse
            la identidad del usuario o cualquier información proporcionada por
            el mismo fuere errónea; (e) {nombreTienda} entendiera que las
            publicaciones u otras acciones pueden ser causa de responsabilidad
            para el usuario que las publicó, para {nombreTienda} o para los
            demás usuarios en general. En el caso de la suspensión de un
            usuario, sea temporal o definitiva, todos los artículos que tuviera
            publicados serán removidos del sistema.
          </div>
          <div className="block">
            <span>10. RESPONSABILIDAD</span>
            Pasaje en línea pone a disposición de los usuarios un espacio
            virtual, que les permite ponerse en comunicación mediante internet
            para encontrar una forma de vender o comprar servicios o bienes.
            Pasaje en línea no es el propietario de los artículos ofrecidos, no
            tiene posesión de ellos ni los ofrece en venta. Pasaje en línea no
            interviene en el perfeccionamiento de las operaciones realizadas
            entre los usuarios ni en las condiciones por ellos estipuladas para
            las mismas, por ello no será responsable respecto de la existencia,
            calidad, cantidad, estado, integridad o legitimidad de los bienes
            ofrecidos, adquiridos o enajenados por los usuarios, así como de la
            prestación de los servicios y de la capacidad para contratar de los
            usuarios o de la veracidad de los datos personales por ellos
            ingresados. Cada usuario, conoce y acepta ser el exclusivo
            responsable por los bienes y servicios que publica para su venta y/o
            compras que realiza. Debido a que {nombreTienda} no tiene ninguna
            participación durante todo el tiempo en que el bien o servicio se
            publica para la venta, ni en la posterior negociación y
            perfeccionamiento del contrato definitivo entre las partes, no será
            responsable por el efectivo cumplimiento de las obligaciones
            asumidas por los usuarios en el perfeccionamiento de la operación.
            El usuario conoce y acepta que al realizar operaciones con otros
            usuarios o terceros lo hace bajo su propio riesgo. En ningún caso
            {nombreTienda} será responsable por lucro cesante, o por cualquier
            otro daño y/o perjuicio que haya podido sufrir el usuario, debido a
            las operaciones realizadas o no realizadas por artículos publicados
            a través de {nombreTienda}. Pasaje en línea recomienda actuar con
            prudencia y sentido común al momento de realizar operaciones con
            otros usuarios. El usuario debe tener presentes, además, los riesgos
            de contratar con menores o con personas que se valgan de una
            identidad falsa. Pasaje en línea no será responsable por la
            realización de ofertas y/o operaciones con otros usuarios basadas en
            la confianza depositada en el sistema o los servicios brindados por
            {nombreTienda}. En caso que uno o más usuarios o algún tercero
            inicien cualquier tipo de reclamo o acciones legales contra otro u
            otros usuarios, todos y cada uno de los usuarios involucrados en
            dichos reclamos o acciones eximen de toda responsabilidad a pasaje
            en línea, paro s.a. Y a sus directores, gerentes, empleados,
            agentes, operarios, representantes y apoderados. Los usuarios tienen
            un plazo de 60 días desde la compra para iniciar un reclamo contra
            otro u otros usuarios. Una vez vencido este plazo, no podrán iniciar
            un reclamo desde el sitio de {nombreTienda}. En virtud que el
            usuario vendedor tiene la facultad para eliminar preguntas o impedir
            a un usuario hacer preguntas u ofertas en sus publicaciones, se deja
            aclarado que, en ese caso, el usuario vendedor será el exclusivo
            responsable por esa decisión y las consecuencias que pudieran
            acarrear.
          </div>
          <div className="block">
            <span> 11. ALCANCE DE LOS SERVICIOS DE PASAJE EN LINEA</span>
            Este acuerdo no crea ningún contrato de sociedad, de mandato, de
            franquicia, o relación laboral entre {nombreTienda}, paro s.a., y el
            usuario. El usuario reconoce y acepta que {nombreTienda}, paro s.a.
            No son parte en ninguna operación, ni tiene control alguno sobre la
            calidad, seguridad o legalidad de los bienes y servicios anunciados,
            la veracidad o exactitud de los anuncios, la capacidad de los
            usuarios para vender o comprar artículos. Pasaje en línea no puede
            asegurar que un usuario completará una operación ni podrá verificar
            la identidad o datos personales ingresados por los usuarios. Pasaje
            en línea no garantiza la veracidad de la publicidad de terceros que
            aparezca en el sitio y no será responsable por la correspondencia o
            contratos que el usuario celebre con dichos terceros o con otros
            usuarios. De igual forma, el usuario reconoce y acepta que{" "}
            {nombreTienda} no es parte, no interviene ni tiene control alguno
            sobre los servicios de protección extendida que son comercializados
            y prestados en forma exclusiva por los usuarios vendedores.
          </div>
          <div className="block">
            <span>12. FALLAS DEL SISTEMA</span>
            Pasaje en línea no se responsabiliza por cualquier daño, perjuicio o
            pérdida al usuario causados por fallas en el sistema, en el servidor
            o en internet. Pasaje en línea tampoco será responsable por
            cualquier virus que pudiera infectar el equipo del usuario como
            consecuencia del acceso, uso o examen de su sitio web o a raíz de
            cualquier transferencia de datos, archivos, imágenes, textos, o
            audio contenidos en el mismo. Los usuarios no podrán imputarle
            responsabilidad alguna ni exigir pago por lucro cesante, en virtud
            de perjuicios resultantes de dificultades técnicas o fallas en los
            sistemas o en internet. Pasaje en línea no garantiza el acceso y uso
            continuado o ininterrumpido de su sitio. El sistema puede
            eventualmente no estar disponible debido a dificultades técnicas o
            fallas de internet, o por cualquier otra circunstancia ajena a
            {nombreTienda}; en tales casos se procurará restablecerlo con la
            mayor celeridad posible sin que por ello pueda imputársele algún
            tipo de responsabilidad. Pasaje en línea no será responsable por
            ningún error u omisión contenidos en su sitio web.
          </div>
          <div className="block">
            <span>13. SISTEMA DE REPUTACION</span>
            Debido a que la verificación de la identidad de los usuarios en
            internet es difícil, {nombreTienda} no puede confirmar ni confirma
            la identidad pretendida de cada usuario. Por ello el usuario
            vendedor cuenta con un sistema de reputación de usuarios que es
            actualizado periódicamente en base a datos vinculados con su
            actividad en el sitio. Este sistema de reputación, además constará
            de un espacio donde los usuarios compradores podrán hacer
            comentarios sobre la experiencia de compra. Dichos comentarios serán
            incluidos bajo exclusiva responsabilidad de los usuarios que los
            emitan. Pasaje en línea no tiene obligación de verificar la
            veracidad o exactitud de los mismos y no se responsabiliza por los
            dichos allí vertidos por cualquier usuario, por las ofertas de
            compras o ventas que los usuarios realicen teniéndolos en cuenta o
            por la confianza depositada en las opiniones de los compradores o
            por cualquier otro comentario expresado dentro del sitio o a través
            de cualquier otro medio incluido el correo electrónico. Pasaje en
            línea se reserva el derecho de editar y/o eliminar aquellos
            comentarios que sean considerados inadecuados u ofensivos. Pasaje en
            línea mantiene el derecho de excluir a aquellos usuarios que sean
            objeto de comentarios negativos provenientes de fuentes distintas.
          </div>
          <div className="block">
            <span>14. PROPIEDAD INTELECTUAL. LICENCIAS. ENLACES.</span>
            Pasaje en línea, paro s.a. Y/o sus sociedades controlantes,
            controladas, filiales o subsidiarias se reservan todos los derechos,
            incluyendo los derechos de propiedad intelectual e industrial,
            asociados con los servicios de {nombreTienda}, sus sitios web, los
            contenidos de sus pantallas, programas, bases de datos, redes,
            códigos, desarrollo, software, arquitectura, hardware, contenidos,
            información, tecnología, fases de integración, funcionalidades,
            dominios, archivos que permiten al usuario acceder y crear su
            cuenta, herramientas de venta, marcas, patentes, derechos de autor,
            diseños y modelos industriales, nombres comerciales, entre otros, y
            declara que están protegidos por leyes nacionales e internacionales
            vigentes. En ningún caso se entenderá que el usuario tendrá algún
            tipo de derecho sobre los mismos excepto para utilizar el servicio
            de {nombreTienda} conforme a lo previsto en estos términos y
            condiciones generales. El uso indebido o contrario a la normativa
            vigente de los derechos de propiedad intelectual e industrial de
            {nombreTienda}, así como su reproducción total o parcial, queda
            prohibido, salvo autorización expresa y por escrito de pasaje en
            línea. Los usuarios tampoco podrán comunicar que los productos o
            servicios que ofrecen son patrocinados, promovidos, producidos,
            ofrecidos y/o vendidos por {nombreTienda} y deberán abstenerse de
            realizar cualquier acto que pudiera causar un daño, pérdida de
            reputación, o disminución del valor de los derechos de propiedad
            intelectual e industrial de {nombreTienda}. El sitio puede contener
            enlaces a sitios web de terceros. En virtud que {nombreTienda} no
            tiene control sobre tales sitios, no será responsable por los
            contenidos, materiales, acciones y/o servicios prestados por los
            mismos, ni por daños o pérdidas ocasionadas por la utilización de
            éstos, causados directa o indirectamente. La presencia de enlaces a
            otros sitios web no implica una sociedad, relación, aprobación,
            respaldo de {nombreTienda} con dichos sitios y sus contenidos.
          </div>
          <div className="block">
            <span>15. INDEMNIDAD</span>
            El usuario mantendrá indemne a {nombreTienda}, paro s.a., así como a
            sus filiales, empresas controladas y/o controlantes, funcionarios,
            directivos, sucesores, administradores, representantes y empleados,
            por cualquier reclamo iniciado por otros usuarios, terceros o por
            cualquier organismo, relacionado con sus actividades en el sitio, el
            cumplimiento y/o el incumplimiento de los términos y condiciones
            generales o demás políticas, así como respecto de cualquier
            violación de leyes o derechos de terceros. A tal fin, el usuario
            faculta a {nombreTienda} y/o paro s.a. A: intervenir y representarlo
            en dichos reclamos, pudiendo celebrar los acuerdos transaccionales
            que considere oportunos y que tiendan a evitar mayores costos y/o
            evitar eventuales contingencias sin limitación, en su nombre y
            representación; peticionar el recupero de cualquier gasto incurrido
            en relación a los supuestos del párrafo anterior, los cuales podrán
            incluir, entre otros, los honorarios de los letrados intervinientes
            y las costas judiciales en una cantidad razonable.
          </div>
          <div className="block">
            <span>16. ANEXOS</span>
            Forman parte integral e inseparable de los términos y condiciones
            generales, los siguientes documentos y/o políticas y/o anexos de
            {nombreTienda} incorporados por referencia, donde se detallan
            políticas y/o términos y condiciones de diferentes servicios
            ofrecidos en el sitio y que {nombreTienda} podrán ampliar y
            notificar a los usuarios, con su publicación en el sitio web.
            -listado de artículos prohibidos 17. Jurisdicción y ley aplicable
            este acuerdo estará regido en todos sus puntos por las leyes
            vigentes en la república argentina. Cualquier controversia derivada
            del presente acuerdo, su existencia, validez, interpretación,
            alcance o cumplimiento, será sometida ante los tribunales ordinarios
            de la ciudad de la plata, provincia de buenos aires. 18. Domicilio
            se fija como domicilio de {nombreTienda}: calle 50 n° 488, 2° piso
            de la ciudad de la plata, provincia de buenos aires, república
            argentina.
          </div>
          <div className="block">
            <span>LISTADO DE ARTICULOS PROHIBIDOS POR PASAJE EN LINEA</span>
            Armas, municiones y material explosivo
            <br /> Celulares, dispositivos de posicionamiento y servicios fuera
            de ley
            <br /> Estupefacientes y sustancias prohibidas <br />
            Flora (excepto los productos y plantas autorizados en viveros),
            fauna y derivados
            <br />
            Fuegos artificiales
            <br /> Huesos, órganos y residuos humanos
            <br /> Tabaco y productos relacionados (excepto cigarrillos
            autorizados)
            <br /> Productos fuera del comercio
            <br /> Medicamentos, sustancias y productos para la salud <br />
            Productos y servicios financieros <br />
            Listas de correo y base de datos personales
            <br /> Violencia y discriminación <br />
            Publicaciones que violen derechos de propiedad intelectual
            <br /> Documentos legales y personales
            <br />
            Patrimonio histórico, cultural, arqueológico y paleontológico
            <br /> Programas o servicios para hackear dispositivos electrónicos
            <br />
            Loterías y rifas
            <br /> Publicaciones con fines distintos a la venta de un producto o
            servicio
            <br /> Autopartes y repuestos usados <br />
            Manuales, cursos en formato impreso o digital y guías de estudio{" "}
            <br />
            Productos que requieren homologación o autorización de Organismos
            estatales
            <br />
            Vehículos sin documentación y productos para vehículos que infrinjan
            leyes vigentes <br />
            Entradas para espectáculos y/o eventos deportivos
            <br /> Plaguicidas réplicas, falsificaciones y copias no autorizadas
            <br />
            Elementos para envíos <br />
            Prohibiciones para compra internacional <br />
            Productos inflamables <br />
            Membresías o suscripciones <br />
            Cajas misteriosas
            <br />
            Preventa de productos <br />
            Servicios de protección extendida
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default index;
