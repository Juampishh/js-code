import { errorMessage } from '../components/error.js';
import { datos } from '../data/datos.js';


export const api =  async(city= "Buenos Aires", country = "AR") => {
  const apiKEY = 'c13ce90d3bc56f66583aa4094c25be4a'
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKEY}`;
  
  try {
    const respuesta = await fetch(url);
    const resultado = await respuesta.json();
    const { name, main } = resultado;
    datos(name, main);

  } catch (error) {
    errorMessage('No se pudo obtener la información');
  }
}