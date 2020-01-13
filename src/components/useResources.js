import  {useState, useEffect} from 'react';
import axios from 'axios';

// input resource va a recibir post or todos
const useResources = (resource) => {

  const [ resources, setResources ] = useState([])

  useEffect(
    () => {
      (async resource => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`)
      
        setResources( response.data )
      })(resource)
  }, [resource]);

  return resources
}

export default useResources;