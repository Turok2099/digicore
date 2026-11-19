import type { Metadata } from "next";
import { container, sectionY } from "@/lib/ui";
import {
  CORREO_CONTACTO,
  DOMICILIO_RESPONSABLE,
  RESPONSABLE_NOMBRE,
  WHATSAPP_NUMERO,
  WHATSAPP_VISIBLE,
} from "@/lib/contacto";

export const metadata: Metadata = {
  title: "Aviso de privacidad | Digicore Studio",
  description:
    "Quién es responsable de tus datos personales, qué datos recabamos, para qué los usamos y cómo ejercer tus derechos de acceso, rectificación, cancelación y oposición.",
  alternates: { canonical: "/aviso-de-privacidad" },
};

const FECHA_ACTUALIZACION = "18 de noviembre de 2026";

const h2 = "mt-10 font-poppins text-xl font-semibold tracking-tight sm:text-2xl";
const p = "mt-3 leading-relaxed text-muted";
const ul = "mt-3 list-disc space-y-2 pl-6 leading-relaxed text-muted marker:text-border-strong";
const enlace = "font-medium text-accent hover:text-accent-hover";

export default function AvisoPrivacidadPage() {
  return (
    <section className={`${sectionY}`}>
      <div className={`${container} max-w-3xl`}>
        <h1 className="font-poppins text-3xl font-bold tracking-tight sm:text-4xl">Aviso de privacidad</h1>
        <p className="mt-3 text-sm text-muted">Última actualización: {FECHA_ACTUALIZACION}</p>

        <p className={p}>
          En este aviso te explicamos qué datos personales recabamos cuando usas digicorestudio.com o nos escribes, para
          qué los usamos y cómo puedes ejercer tus derechos, conforme a la Ley Federal de Protección de Datos
          Personales en Posesión de los Particulares y demás normatividad aplicable.
        </p>

        <h2 className={h2}>1. Responsable del tratamiento</h2>
        <p className={p}>
          {RESPONSABLE_NOMBRE}, persona física, que opera este sitio bajo el nombre comercial Digicore Studio, es
          responsable del tratamiento de tus datos personales.
        </p>
        <ul className={ul}>
          <li>
            Correo electrónico:{" "}
            <a href={`mailto:${CORREO_CONTACTO}`} className={enlace}>
              {CORREO_CONTACTO}
            </a>
          </li>
          <li>
            Teléfono y WhatsApp:{" "}
            <a href={`tel:+${WHATSAPP_NUMERO}`} className={enlace}>
              {WHATSAPP_VISIBLE}
            </a>
          </li>
          {DOMICILIO_RESPONSABLE && <li>Domicilio: {DOMICILIO_RESPONSABLE}</li>}
        </ul>

        <h2 className={h2}>2. Datos personales que recabamos</h2>
        <p className={p}>Según cómo te pongas en contacto con nosotros:</p>
        <ul className={ul}>
          <li>
            <strong className="font-semibold text-text">Formulario del sitio:</strong> nombre, correo electrónico,
            teléfono o WhatsApp (opcional), profesión o giro de tu negocio, paquete o servicio de interés, si ya tienes
            página web (opcional) y el mensaje que escribas (opcional).
          </li>
          <li>
            <strong className="font-semibold text-text">Origen de la solicitud:</strong> la página desde la que
            enviaste el formulario y, si llegaste desde un anuncio o enlace de campaña, sus parámetros de campaña
            (fuente, medio, campaña, término y contenido), los identificadores publicitarios de Google (gclid, gbraid
            o wbraid), la primera página que visitaste con esos parámetros y el sitio desde el que llegaste. Estos
            datos solo se adjuntan a tu solicitud si decides enviarla.
          </li>
          <li>
            <strong className="font-semibold text-text">Datos técnicos del envío:</strong> para evitar abusos del
            formulario usamos un código irreversible derivado de tu dirección IP (no guardamos la IP en claro) y el
            número de envíos recientes, que se borra en pocas horas.
          </li>
          <li>
            <strong className="font-semibold text-text">Correo o WhatsApp:</strong> los datos que nos compartas al
            escribirnos, como tu nombre, tu número de teléfono y el contenido de tus mensajes.
          </li>
          <li>
            <strong className="font-semibold text-text">Medición del sitio:</strong> datos técnicos y de uso (por
            ejemplo, páginas vistas, tipo de dispositivo y clics en botones) solo si aceptas la medición. Ver el
            apartado 7.
          </li>
        </ul>
        <p className={p}>
          No te pedimos datos personales sensibles, como los relativos a tu salud, origen racial o étnico, creencias
          religiosas, ideología política o información financiera. Te pedimos no incluirlos en el campo de mensaje.
        </p>

        <h2 className={h2}>3. Para qué usamos tus datos</h2>
        <p className={p}>
          <strong className="font-semibold text-text">Finalidades necesarias</strong>, sin las cuales no podríamos
          atenderte:
        </p>
        <ul className={ul}>
          <li>Responder tu solicitud y contactarte por correo, teléfono o WhatsApp.</li>
          <li>Preparar y enviarte la propuesta o cotización que pediste.</li>
          <li>Dar seguimiento a la relación comercial si decides contratar un servicio.</li>
        </ul>
        <p className={p}>
          <strong className="font-semibold text-text">Finalidades que no son necesarias:</strong>
        </p>
        <ul className={ul}>
          <li>
            Análisis estadístico del sitio y de las campañas, para saber de dónde llegan las solicitudes y mejorar el
            sitio. La medición con Google Analytics y el guardado del origen por 30 días dependen de que la aceptes
            en el aviso de cookies.
          </li>
        </ul>
        <p className={p}>
          Si no quieres que usemos tus datos para esta finalidad, escríbenos a{" "}
          <a href={`mailto:${CORREO_CONTACTO}`} className={enlace}>
            {CORREO_CONTACTO}
          </a>
          . Tu negativa no afectará la atención de tu solicitud.
        </p>
        <p className={p}>
          Al enviar el formulario o escribirnos entendemos que conoces este aviso y consientes el tratamiento de tus
          datos en los términos descritos. Si no estás de acuerdo, no envíes el formulario.
        </p>

        <h2 className={h2}>4. Con quién compartimos tus datos</h2>
        <p className={p}>No vendemos ni cedemos tus datos personales. Los datos pueden ser tratados por:</p>
        <ul className={ul}>
          <li>
            Proveedores que nos prestan servicios de alojamiento del sitio, almacenamiento de las solicitudes y envío de
            correo electrónico. Tratan los datos por nuestra cuenta y solo para prestarnos ese servicio. Algunos pueden
            almacenar o procesar información fuera de México.
          </li>
          <li>
            Google, si la medición del sitio está activa (ver apartado 7), y WhatsApp, si decides escribirnos por ese
            medio. Cada uno trata tus datos conforme a sus propias políticas de privacidad.
          </li>
          <li>Autoridades competentes, cuando exista una obligación legal o un mandato de autoridad.</li>
        </ul>

        <h2 className={h2}>5. Tus derechos y cómo ejercerlos</h2>
        <p className={p}>
          Tienes derecho a acceder a tus datos y saber cómo los tratamos, a rectificarlos si son inexactos o están
          incompletos, a cancelarlos y a oponerte a su tratamiento (derechos ARCO). También puedes revocar tu
          consentimiento y limitar el uso o la divulgación de tus datos.
        </p>
        <p className={p}>
          Para ejercerlos, envía tu solicitud a{" "}
          <a href={`mailto:${CORREO_CONTACTO}`} className={enlace}>
            {CORREO_CONTACTO}
          </a>{" "}
          indicando:
        </p>
        <ul className={ul}>
          <li>Tu nombre y un medio para responderte.</li>
          <li>Una copia de una identificación oficial vigente (o de tu representante, con su acreditación).</li>
          <li>La descripción clara de los datos sobre los que quieres ejercer el derecho y de lo que solicitas.</li>
          <li>Cualquier elemento que nos ayude a localizar tus datos.</li>
        </ul>
        <p className={p}>
          Te responderemos por el mismo medio, dentro de los plazos que establece la ley. Si consideras que tu derecho
          de protección de datos fue vulnerado, puedes acudir a la autoridad competente en la materia (actualmente, la
          Secretaría Anticorrupción y Buen Gobierno).
        </p>

        <h2 className={h2}>6. Cuánto tiempo conservamos tus datos</h2>
        <p className={p}>
          Conservamos tus datos el tiempo necesario para atender tu solicitud, cumplir las finalidades descritas y
          atender obligaciones legales. Después los eliminamos o los anonimizamos. Puedes pedir su cancelación antes en
          cualquier momento, según el apartado 5.
        </p>

        <h2 id="medicion" className={`${h2} scroll-mt-24`}>7. Medición del sitio y cookies</h2>
        <p className={p}>
          Al entrar al sitio te preguntamos si aceptas la medición. Hasta que decidas, y si la rechazas, no cargamos
          Google Analytics ni enviamos eventos de medición. Si activas Global Privacy Control en tu navegador lo
          tratamos como un rechazo.
        </p>
        <ul className={ul}>
          <li>
            <strong className="font-semibold text-text">Si aceptas:</strong> cargamos Google Analytics para medir
            visitas y acciones, como clics en botones o el envío del formulario. Los eventos no incluyen tu nombre,
            correo, teléfono ni el contenido de tu mensaje, ni tus parámetros de campaña. Google puede recopilar datos
            técnicos de tu dispositivo y usar cookies o tecnologías similares. Además, guardamos en tu navegador (no en
            una cookie) de qué anuncio o enlace llegaste durante 30 días, para saber qué campañas generan solicitudes.
          </li>
          <li>
            <strong className="font-semibold text-text">Si rechazas o no decides:</strong> el origen de campaña solo
            se guarda mientras la pestaña esté abierta y se usa únicamente si envías el formulario. Al rechazar,
            eliminamos el origen que hubiéramos guardado antes por 30 días.
          </li>
          <li>
            <strong className="font-semibold text-text">Datos necesarios para el funcionamiento:</strong> recordamos tu
            decisión sobre este aviso y el paquete que elegiste, en el almacenamiento de tu navegador.
          </li>
        </ul>
        <p className={p}>
          Puedes cambiar tu decisión en cualquier momento desde «Preferencias de cookies», al pie de cada página, y
          borrar los datos del sitio desde la configuración de tu navegador.
        </p>

        <h2 className={h2}>8. Seguridad</h2>
        <p className={p}>
          Aplicamos medidas de seguridad administrativas, técnicas y físicas razonables para proteger tus datos contra
          daño, pérdida, alteración, destrucción o uso no autorizado. Ningún sistema es completamente infalible; si
          ocurre una vulneración que afecte de forma significativa tus derechos, te lo informaremos.
        </p>

        <h2 className={h2}>9. Menores de edad</h2>
        <p className={p}>
          Este sitio no está dirigido a menores de edad. Si crees que un menor nos envió sus datos, escríbenos para
          eliminarlos.
        </p>

        <h2 className={h2}>10. Cambios a este aviso</h2>
        <p className={p}>
          Podemos actualizar este aviso. Publicaremos la versión vigente en esta página, con su fecha de última
          actualización.
        </p>
      </div>
    </section>
  );
}
