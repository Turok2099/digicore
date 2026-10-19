// Proyectos verificables. La sección se muestra solo si hay elementos.
// Agregar un proyecto únicamente con enlace público, alcance real y permiso del cliente.
export interface Proyecto {
  nombre: string;
  descripcion: string;
  url: string;
  imagen: string;
  imagenAlt: string;
}

export const PROYECTOS: Proyecto[] = [];
