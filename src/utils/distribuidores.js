import { readFileSync } from 'fs';
import { join } from 'path';

export interface Distribuidor {
  nombre: string;
  direccion: string;
  ciudad: string;
  estado: string;
  telefonos: string;
  esAutorizado?: boolean;
  instagram?: string;
  website?: string;
}

export interface DistribuidoresPorEstado {
  [estado: string]: {
    [ciudad: string]: Distribuidor[];
  };
}

export function leerDistribuidores(): DistribuidoresPorEstado {
  try {
    // Leer el archivo desde la ruta especificada
    const filePath = '/home/debian/termotronic/whatsappbot/knowledge/Distribuidores.txt';
    const contenido = readFileSync(filePath, 'utf-8');
    
    return parsearDistribuidores(contenido);
  } catch (error) {
    console.error('Error leyendo archivo de distribuidores:', error);
    return {};
  }
}

function parsearDistribuidores(contenido: string): DistribuidoresPorEstado {
  const lineas = contenido.split('\n');
  const distribuidores: DistribuidoresPorEstado = {};
  
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
      const { ciudad, estado } = parsearCiudadEstado(ciudadEstado);
      
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

function parsearCiudadEstado(ciudadEstado: string): { ciudad: string; estado: string } {
  if (!ciudadEstado.includes('Edo ')) {
    return { ciudad: '', estado: '' };
  }
  
  const partes = ciudadEstado.split('Edo ');
  const ciudad = partes[0].trim();
  const estado = partes[1].trim();
  
  return { ciudad, estado };
}

function esDistribuidorAutorizado(nombre: string): boolean {
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

function extraerInstagram(nombre: string): string | undefined {
  // Mapeo de nombres a Instagram basado en tu archivo original
  const instagrams: { [key: string]: string } = {
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

function extraerWebsite(nombre: string): string | undefined {
  if (nombre.toLowerCase().includes('multibrands latina')) {
    return 'multibrandslatina.com';
  }
  return undefined;
}