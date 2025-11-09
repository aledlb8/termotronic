import { readFileSync, existsSync } from 'fs';

/**
 * @typedef {Object} CentroServicio
 * @property {string} nombre
 * @property {string} direccion
 * @property {string} ciudad
 * @property {string} estado
 * @property {string} telefonos
 */

/**
 * @typedef {Object.<string, Object.<string, CentroServicio[]>>} CentrosPorEstado
 */

/**
 * @returns {CentrosPorEstado}
 */
export function leerCentrosServicio() {
  try {
    const rutaDebian = '/home/debian/termotronic/whatsappbot/knowledge/CentrosServicio.txt';
    const rutaWindows = 'D:\\ElCodigo\\whatsappbot\\knowledge\\CentrosServicio.txt';
    
    // Determinar qué ruta usar
    let filePath;
    if (existsSync(rutaDebian)) {
      filePath = rutaDebian;
    } else if (existsSync(rutaWindows)) {
      filePath = rutaWindows;
    } else {
      throw new Error('No se encontró el archivo de centros de servicio en ninguna ubicación');
    }
    
    // Leer el archivo
    const contenido = readFileSync(filePath, 'utf-8');
    
    return parsearCentrosServicio(contenido);
  } catch (error) {
    console.error('Error leyendo archivo de centros de servicio:', error);
    return {};
  }
}

/**
 * @param {string} contenido
 * @returns {CentrosPorEstado}
 */
function parsearCentrosServicio(contenido) {
  const lineas = contenido.split('\n');
  const centros = {};
  
  let i = 0;
  let dentroDeListado = false;
  
  // Buscar el inicio de la lista
  while (i < lineas.length) {
    if (lineas[i].includes('Inicio Lista de Centros de Servicio')) {
      dentroDeListado = true;
      i++;
      break;
    }
    i++;
  }
  
  if (!dentroDeListado) {
    console.error('No se encontró el inicio de la lista de centros de servicio');
    return {};
  }
  
  // Procesar cada centro de servicio
  while (i < lineas.length) {
    const linea = lineas[i].trim();
    
    // Fin de la lista
    if (linea.includes('Fin de Lista de Centros de Servicio')) {
      break;
    }
    
    // Saltar líneas vacías
    if (!linea) {
      i++;
      continue;
    }
    
    // Detectar inicio de nuevo centro (nombre)
    if (linea && !linea.startsWith('0') && !linea.startsWith('58-') && 
        !linea.includes('Edo ') && !linea.includes('WHATSAPP') && 
        !linea.includes('@') && !linea.includes('.com')) {
      
      const nombre = linea;
      i++;
      
      // Leer dirección (puede ser múltiples líneas)
      let direccion = '';
      while (i < lineas.length && lineas[i].trim() && 
             !lineas[i].includes('Edo ') && 
             !lineas[i].trim().match(/^[0-9]/) &&
             !lineas[i].trim().match(/^58-/)) {
        if (direccion) direccion += ' ';
        direccion += lineas[i].trim();
        i++;
      }
      
      // Leer ciudad y estado
      let ciudadEstado = '';
      if (i < lineas.length && lineas[i].includes('Edo ')) {
        ciudadEstado = lineas[i].trim();
        i++;
      }
      
      // Leer teléfonos
      let telefonos = '';
      while (i < lineas.length && lineas[i].trim() && 
             (lineas[i].trim().match(/^[0-9]/) || 
              lineas[i].includes('WHATSAPP') ||
              lineas[i].includes('58-'))) {
        if (telefonos) telefonos += ' / ';
        telefonos += lineas[i].trim();
        i++;
      }
      
      // Parsear ciudad y estado
      const resultado = parsearCiudadEstado(ciudadEstado);
      const ciudad = resultado.ciudad;
      const estado = resultado.estado;
      
      if (nombre && ciudad && estado) {
        // Inicializar estructura si no existe
        if (!centros[estado]) {
          centros[estado] = {};
        }
        if (!centros[estado][ciudad]) {
          centros[estado][ciudad] = [];
        }
        
        centros[estado][ciudad].push({
          nombre,
          direccion,
          ciudad,
          estado,
          telefonos
        });
      }
    } else {
      i++;
    }
  }
  
  return centros;
}

/**
 * @param {string} ciudadEstado
 * @returns {{ciudad: string, estado: string}}
 */
function parsearCiudadEstado(ciudadEstado) {
  if (!ciudadEstado.includes('Edo ')) {
    return { ciudad: '', estado: '' };
  }
  
  const partes = ciudadEstado.split('Edo ');
  const ciudad = partes[0].trim();
  const estado = partes[1].trim();
  
  return { ciudad, estado };
}