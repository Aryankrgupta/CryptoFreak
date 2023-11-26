import { Button, Container, HStack, Radio, RadioGroup } from '@chakra-ui/react';
import axios from 'axios';
import React from 'react'
import { server } from '../index';
import CoinCard from './CoinCard';
import ErrorComponents from './ErrorComponents';
import Loader from './Loader';



const Coins = () => {
  const [coins, setCoins] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [pages, setPages] = React.useState(1);
  const [currency, setCurrency] = React.useState("inr")

  const changePage =(page) => {
    setPages(page);
    setLoading(true)
  }

  const btns = new Array(132).fill(1)

  React.useEffect(() => { 
    const fetchCoins = async () => {
      const {data} = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${pages}`);
      try {
        setCoins(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    }
    fetchCoins();
  }, [currency, pages]);

  if (error) return <ErrorComponents />
  
  return (
    <Container maxW={"container.xl"}  >{loading ? ( <Loader /> ) :(<>

      <RadioGroup value={currency} onChange={setCurrency} p={4}>
        <HStack spacing={4}>
          <Radio value={"inr"} >INR</Radio>
          <Radio value={"usd"} >USD</Radio>
        </HStack>
      </RadioGroup>

      <HStack wrap={'wrap'} justifyContent={"center"} >
        {coins.map((i) => (
          <CoinCard 
          key={i.id}
          id={i.id}
          name={i.name} 
          symbol={i.symbol} 
          price={i.current_price} 
          image={i.image}
          currencySymbol={currency === "inr" ? "₹" : "$"} />
          ) 
        )}
      </HStack>
      <HStack overflowX={"auto"} w={"full"} p={1} >
        {btns.map((item, index) => (
          <Button key={index} bgColor={"blackAlpha.800"} color={'white'} onClick={() => changePage(index+1)}>{index + 1}</Button>
        ))}
      </HStack>
    </>)}
    </Container>
  )
}

export default Coins