import { Badge, Box, Button, Container, HStack, Image, Progress, Radio, RadioGroup, Stat, StatArrow, StatHelpText, StatLabel, StatNumber, Text, VStack } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import { server } from "../index";
import Chart from "./Chart";
import Loader from "./Loader";

const CoinDetails = () => {
  const [coin, setCoin] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  const [currency, setCurrency] = React.useState("inr");
  const [days, setDays] = React.useState("365d")
  const [chartsArray, setChartArray] = React.useState([])


  const btn = ["24h", "7d", "14d", "30d", "6m", "1y", "5y","max" ]

  const params = useParams();
  React.useEffect(() => {
    const fetchCoin = async () => {
      const { data } = await axios.get(`${server}/coins/${params.id}`);
      
      const { data: chartsData } = await axios.get(`${server}/coins/${params.id}/market_chart?vs_currency=${currency}&days=${days}`)
      
      // console.log(chartsData);
      try {
        setCoin(data);
        setChartArray(chartsData.prices);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    fetchCoin();
  }, [params.id, currency, days]);

  const switchPrice = (key) => {
    switch (key) {
      case "24h":
        setDays("24h")
        setLoading(true)
        break;
      case "7d":
        setDays("7d")
        setLoading(true)
        break;
      case "14d":
        setDays("14d")
        setLoading(true)
        break;
      case "30d":
        setDays("30d")
        setLoading(true)
        break;
      case "6m":
        setDays("200d")
        setLoading(true)
        break;
      case "1y":
        setDays("365d")
        setLoading(true)
        break;
      case "5y":
        setDays("1725")
        setLoading(true)
        break;
      case "max":
        setDays("max")
        setLoading(true)
        break;
    
      default:
        break;
    }
  }

  return (
    <Container maxW={"container.xl"}  wrap={'wrap'} justifyContent={"center"}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Box width={"full"} borderWidth={1}>
            <Chart arr={chartsArray} currency={currency === "inr" ? "₹" : "$"} days={days} />
          </Box>
          <HStack p={6} m={2} overflowX={"auto"}>
            {btn.map((i) => (
              <Button key={i} onClick={() => switchPrice(i)} bgColor={days === i && "gray"} >{i}</Button>
            ))}
          </HStack>
          <RadioGroup value={currency} onChange={setCurrency} p={4}>
            <HStack spacing={4}>
              <Radio value={"inr"}>INR</Radio>
              <Radio value={"usd"}>USD</Radio>
            </HStack>
          </RadioGroup>
          <VStack spacing={4} p="16" alignItems={"flex-start"}>
            <Text fontSize={"small"} alignSelf={"center"} opacity={0.7} >
              Last Updated on {" "} {Date(coin.last_updated).split("G")[0]}
            </Text>

            <Image src={coin.image.large} w={16} h={16} objectFit={"contain"} />

            <Stat>
              <StatLabel>{coin.name}</StatLabel>
              <StatNumber>{ currency === "inr" ? "₹" : "$" }{" "}{coin.market_data.current_price[currency]}</StatNumber>
              <StatHelpText>
                <StatArrow type={ coin.market_data.price_change_percentage_24h > 0 ? "increase" : "decrease" } />
                {coin.market_data.price_change_percentage_24h}{" "}%
              </StatHelpText>
            </Stat>
            <Badge fontSize={"xl"} >{`#${coin.market_cap_rank}`}</Badge>
            <CustomBar low={`${currency === "inr" ? "₹" : "$"} ${coin.market_data.low_24h[currency]}`} high={`${currency === "inr" ? "₹" : "$"} ${coin.market_data.high_24h[currency]}`} />
            
            <Box w={"full"} p={4} >
              <Item title={"Max Supply"} value={coin.market_data.max_supply} />

              <Item title={"Circulating Supply"} value={coin.market_data.circulating_supply} />
              
              <Item title={"Market Cap"} value={`${currency === "inr" ? "₹" : "$"} ${coin.market_data.market_cap[currency]}`} />
              
              <Item title={"All Time High"} value={`${currency === "inr" ? "₹" : "$"} ${coin.market_data.ath[currency]}`} />
              
              <Item title={"All Time Low"} value={`${currency === "inr" ? "₹" : "$"} ${coin.market_data.atl[currency]}`} />
            </Box>

          </VStack>
        </>
      )}
    </Container>
  );
};

const Item = ({ value, title }) => (
  <HStack justifyContent={"space-between"} w={"full"} my={4} >
    <Text fontFamily={"Bebas Neue"} letterSpacing={"widest"} >
      {title}
    </Text>
    <Text>
      {value}
    </Text>
  </HStack>
)


const CustomBar = ({ high, low }) =>(
  <VStack w={"full"} >
    <Progress value={50} colorScheme={"teal"} w={"full"} />
    <HStack wrap={"wrap"} justifyContent={"space-between"}>
      <Badge children={low} colorScheme={"red"} />
      <Text>24H Range</Text>
      <Badge children={high} colorScheme={"green"} />
    </HStack>
  </VStack>
)

export default CoinDetails;
