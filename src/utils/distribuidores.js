import { readFileSync, existsSync } from 'fs';

/**
 * @typedef {Object} Distribuidor
 * @property {string} nombre
 * @property {string} direccion
 * @property {string} ciudad
 * @property {string} estado
 * @property {string} telefonos
 * @property {boolean} [esAutorizado]
 * @property {string} [instagram]
 * @property {string} [website]
 */

/**
 * @typedef {Object.<string, Object.<string, Distribuidor[]>>} DistribuidoresPorEstado
 */

/**
 * @returns {DistribuidoresPorEstado}
 */
export function leerDistribuidores() {
  try {
    const rutaDebian = '/home/debian/termotronic/whatsappbot/knowledge/Distribuidores.txt';
    const rutaWindows = 'D:\\ElCodigo\\whatsappbot\\knowledge\\Distribuidores.txt';
    
    // Determinar qué ruta usar
    let filePath;
    if (existsSync(rutaDebian)) {
      filePath = rutaDebian;
    } else if (existsSync(rutaWindows)) {
      filePath = rutaWindows;
    } else {
      throw new Error('No se encontró el archivo de distribuidores en ninguna ubicación');
    }
    
    // Leer el archivo
    const contenido = readFileSync(filePath, 'utf-8');
    
    return parsearDistribuidores(contenido);
  } catch (error) {
    console.error('Error leyendo archivo de distribuidores:', error);
    return {};
  }
}

/**
 * @param {string} contenido
 * @returns {DistribuidoresPorEstado}
 */
function parsearDistribuidores(contenido) {
  const lineas = contenido.split('\n');
  const distribuidores = {};
  
  let i = 0;
  let dentroDeListado = false;
  
  // Buscar el inicio de la lista
  while (i < lineas.length) {
    if (lineas[i].includes('Inicio lista de distribuidores')) {
      dentroDeListado = true;
      i++;
      break;
    }
    i++;
  }
  
  if (!dentroDeListado) {
    console.error('No se encontró el inicio de la lista de distribuidores');
    return {};
  }
  
  // Procesar cada distribuidor
  while (i < lineas.length) {
    const linea = lineas[i].trim();
    
    // Fin de la lista
    if (linea.includes('Fin de lista de distribuidores')) {
      break;
    }
    
    // Saltar líneas vacías
    if (!linea) {
      i++;
      continue;
    }
    
    // Detectar inicio de nuevo distribuidor (nombre)
    if (linea && !linea.startsWith('0') && !linea.startsWith('58-') && 
        !linea.includes('Edo ') && !linea.includes('WHATSAPP') && 
        !linea.includes('@') && !linea.includes('.com')) {
      
      const nombre = linea;
      i++;
      
      // Leer dirección (puede ser múltiples líneas)
      let direccion = '';
      while (i < lineas.length && lineas[i].trim() && 
             !lineas[i].includes('Edo ') && 
             !lineas[i].trim().match(/^[0-9]/)) {
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
        if (!distribuidores[estado]) {
          distribuidores[estado] = {};
        }
        if (!distribuidores[estado][ciudad]) {
          distribuidores[estado][ciudad] = [];
        }
        
        // Detectar si es centro autorizado (basado en los datos del astro original)
        const esAutorizado = esDistribuidorAutorizado(nombre);
        
        distribuidores[estado][ciudad].push({
          nombre,
          direccion,
          ciudad,
          estado,
          telefonos,
          esAutorizado,
          instagram: extraerInstagram(nombre),
          website: extraerWebsite(nombre)
        });
      }
    } else {
      i++;
    }
  }
  
  return distribuidores;
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

/**
 * @param {string} nombre
 * @returns {boolean}
 */
function esDistribuidorAutorizado(nombre) {
  // Basado en tu archivo original, estos son centros autorizados
  const autorizados = [
    'Comercializadora JAB',
    'Distribuidora TermoCenter',
    'Monigas',
    'Multibrands Latina',
    'Instaveca'
  ];
  
  return autorizados.some(autorizado => 
    nombre.toLowerCase().includes(autorizado.toLowerCase())
  );
}

/**
 * @param {string} nombre
 * @returns {string|undefined}
 */
function extraerInstagram(nombre) {
  // Mapeo de nombres a Instagram basado en tu archivo original
  const instagrams = {
    'Comercializadora JAB': 'somosjab',
    'Distribuidora TermoCenter': 'termocenter.ve',
    'Multibrands Latina': 'multibrands_latina',
    'Marco Emarket': 'termotronicve',
    'Ferremateriales La Fuerte': 'lafuerteonline'
  };
  
  for (const [key, value] of Object.entries(instagrams)) {
    if (nombre.toLowerCase().includes(key.toLowerCase())) {
      return value;
    }
  }
  
  return undefined;
}

/**
 * @param {string} nombre
 * @returns {string|undefined}
 */
function extraerWebsite(nombre) {
  if (nombre.toLowerCase().includes('multibrands latina')) {
    return 'multibrandslatina.com';
  }
  return undefined;
}