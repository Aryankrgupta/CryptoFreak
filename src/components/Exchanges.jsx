import React from 'react'
import axios from 'axios'
import { server } from '../index'
import { Container, HStack } from '@chakra-ui/react';
import Loader from './Loader';
import ExchangeCard from './ExchangeCard';
import ErrorComponents from './ErrorComponents';

const Exchanges = () => {
  const [exchanges, setExchanges] = React.useState([]);
  const [load, setLoad] = React.useState(true);
  const [error, setError] = React.useState(false);
  React.useEffect(() => { 
    const fetchExchanges = async () => {
      const {data} = await axios.get(`${server}/exchanges?per_page=250`);
      try {
        console.log(error);
        setExchanges(data);
        setLoad(false);
      } catch (error) {
        setError(true);
        setLoad(false);
      }
      console.log(error);
    }
    fetchExchanges();
  }, [error]);

  if (error) return <ErrorComponents />
  
  return (
    <Container maxW={"container.xl"}>{load ? ( <Loader /> ) :(<>
      <HStack wrap={'wrap'} justifyContent={"center"}>
        {exchanges.map((i) => (
          <ExchangeCard 
          key={i.id}
          name={i.name} 
          url={i.url} 
          rank={i.trust_score_rank} 
          image={i.image} />
          ) 
        )}
      </HStack>
    </>)}
    </Container>
  )
}

export default Exchanges;