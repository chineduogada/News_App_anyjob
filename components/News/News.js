import React, { useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import DateTimeFormat from "format-date-time";
import Section from "../Section";

const newsList = [
  {
    source: {
      id: 1,
      name: "VentureBeat",
    },
    author: "Kyle Wiggers",
    title:
      "Pony.ai raises $100 million more to advance its autonomous vehicle tech",
    description:
      "Autonomous vehicle startup Pony.ai has raised $100 million more, bringing its total raised to over $1 billion at a $5.3 billion valuation.",
    url:
      "https://venturebeat.com/2021/02/07/pony-ai-raises-100-million-more-to-advance-its-autonomous-vehicle-tech/",
    urlToImage:
      "https://venturebeat.com/wp-content/uploads/2019/08/ad1de834-abf3-471e-b4cc-3408c731b4f4-e1566788588385.png?w=1200&strip=all",
    publishedAt: "2021-02-07T14:00:51Z",
  },
  {
    source: {
      id: 2,
      name: "VentureBeat",
    },
    author: "Kyle Wiggers",
    title:
      "Pony.ai raises $100 million more to advance its autonomous vehicle tech",
    description:
      "Autonomous vehicle startup Pony.ai has raised $100 million more, bringing its total raised to over $1 billion at a $5.3 billion valuation.",
    url:
      "https://venturebeat.com/2021/02/07/pony-ai-raises-100-million-more-to-advance-its-autonomous-vehicle-tech/",
    urlToImage:
      "https://venturebeat.com/wp-content/uploads/2019/08/ad1de834-abf3-471e-b4cc-3408c731b4f4-e1566788588385.png?w=1200&strip=all",
    publishedAt: "2021-02-07T14:00:51Z",
  },
  {
    source: {
      id: 3,
      name: "VentureBeat",
    },
    author: "Kyle Wiggers",
    title:
      "Pony.ai raises $100 million more to advance its autonomous vehicle tech",
    description:
      "Autonomous vehicle startup Pony.ai has raised $100 million more, bringing its total raised to over $1 billion at a $5.3 billion valuation.",
    url:
      "https://venturebeat.com/2021/02/07/pony-ai-raises-100-million-more-to-advance-its-autonomous-vehicle-tech/",
    urlToImage:
      "https://venturebeat.com/wp-content/uploads/2019/08/ad1de834-abf3-471e-b4cc-3408c731b4f4-e1566788588385.png?w=1200&strip=all",
    publishedAt: "2021-02-07T14:00:51Z",
  },
  {
    source: {
      id: 4,
      name: "VentureBeat",
    },
    author: "Kyle Wiggers",
    title:
      "Pony.ai raises $100 million more to advance its autonomous vehicle tech",
    description:
      "Autonomous vehicle startup Pony.ai has raised $100 million more, bringing its total raised to over $1 billion at a $5.3 billion valuation.",
    url:
      "https://venturebeat.com/2021/02/07/pony-ai-raises-100-million-more-to-advance-its-autonomous-vehicle-tech/",
    urlToImage:
      "https://venturebeat.com/wp-content/uploads/2019/08/ad1de834-abf3-471e-b4cc-3408c731b4f4-e1566788588385.png?w=1200&strip=all",
    publishedAt: "2021-02-07T14:00:51Z",
  },
  {
    source: {
      id: 5,
      name: "VentureBeat",
    },
    author: "Kyle Wiggers",
    title:
      "Pony.ai raises $100 million more to advance its autonomous vehicle tech",
    description:
      "Autonomous vehicle startup Pony.ai has raised $100 million more, bringing its total raised to over $1 billion at a $5.3 billion valuation.",
    url:
      "https://venturebeat.com/2021/02/07/pony-ai-raises-100-million-more-to-advance-its-autonomous-vehicle-tech/",
    urlToImage:
      "https://venturebeat.com/wp-content/uploads/2019/08/ad1de834-abf3-471e-b4cc-3408c731b4f4-e1566788588385.png?w=1200&strip=all",
    publishedAt: "2021-02-07T14:00:51Z",
  },
  {
    source: {
      id: 6,
      name: "VentureBeat",
    },
    author: "Kyle Wiggers",
    title:
      "Pony.ai raises $100 million more to advance its autonomous vehicle tech",
    description:
      "Autonomous vehicle startup Pony.ai has raised $100 million more, bringing its total raised to over $1 billion at a $5.3 billion valuation.",
    url:
      "https://venturebeat.com/2021/02/07/pony-ai-raises-100-million-more-to-advance-its-autonomous-vehicle-tech/",
    urlToImage:
      "https://venturebeat.com/wp-content/uploads/2019/08/ad1de834-abf3-471e-b4cc-3408c731b4f4-e1566788588385.png?w=1200&strip=all",
    publishedAt: "2021-02-07T14:00:51Z",
  },
  {
    source: {
      id: 7,
      name: "VentureBeat",
    },
    author: "Kyle Wiggers",
    title:
      "Pony.ai raises $100 million more to advance its autonomous vehicle tech",
    description:
      "Autonomous vehicle startup Pony.ai has raised $100 million more, bringing its total raised to over $1 billion at a $5.3 billion valuation.",
    url:
      "https://venturebeat.com/2021/02/07/pony-ai-raises-100-million-more-to-advance-its-autonomous-vehicle-tech/",
    urlToImage:
      "https://venturebeat.com/wp-content/uploads/2019/08/ad1de834-abf3-471e-b4cc-3408c731b4f4-e1566788588385.png?w=1200&strip=all",
    publishedAt: "2021-02-07T14:00:51Z",
  },
  {
    source: {
      id: 8,
      name: "VentureBeat",
    },
    author: "Kyle Wiggers",
    title:
      "Pony.ai raises $100 million more to advance its autonomous vehicle tech",
    description:
      "Autonomous vehicle startup Pony.ai has raised $100 million more, bringing its total raised to over $1 billion at a $5.3 billion valuation.",
    url:
      "https://venturebeat.com/2021/02/07/pony-ai-raises-100-million-more-to-advance-its-autonomous-vehicle-tech/",
    urlToImage:
      "https://venturebeat.com/wp-content/uploads/2019/08/ad1de834-abf3-471e-b4cc-3408c731b4f4-e1566788588385.png?w=1200&strip=all",
    publishedAt: "2021-02-07T14:00:51Z",
  },
  {
    source: {
      id: 9,
      name: "VentureBeat",
    },
    author: "Kyle Wiggers",
    title:
      "Pony.ai raises $100 million more to advance its autonomous vehicle tech",
    description:
      "Autonomous vehicle startup Pony.ai has raised $100 million more, bringing its total raised to over $1 billion at a $5.3 billion valuation.",
    url:
      "https://venturebeat.com/2021/02/07/pony-ai-raises-100-million-more-to-advance-its-autonomous-vehicle-tech/",
    urlToImage:
      "https://venturebeat.com/wp-content/uploads/2019/08/ad1de834-abf3-471e-b4cc-3408c731b4f4-e1566788588385.png?w=1200&strip=all",
    publishedAt: "2021-02-07T14:00:51Z",
  },
  {
    source: {
      id: 10,
      name: "VentureBeat",
    },
    author: "Kyle Wiggers",
    title:
      "Pony.ai raises $100 million more to advance its autonomous vehicle tech",
    description:
      "Autonomous vehicle startup Pony.ai has raised $100 million more, bringing its total raised to over $1 billion at a $5.3 billion valuation.",
    url:
      "https://venturebeat.com/2021/02/07/pony-ai-raises-100-million-more-to-advance-its-autonomous-vehicle-tech/",
    urlToImage:
      "https://venturebeat.com/wp-content/uploads/2019/08/ad1de834-abf3-471e-b4cc-3408c731b4f4-e1566788588385.png?w=1200&strip=all",
    publishedAt: "2021-02-07T14:00:51Z",
  },
];

const Item = ({ data }) => {
  const defaultFormatter = new DateTimeFormat();

  const date = defaultFormatter.parse(data.date, "HH:mm:ss");

  return (
    <View style={stylesItem.container}>
      <Image source={{ uri: data.urlToImage }} style={stylesItem.image} />
      <View>
        <View style={stylesItem.textHeader}>
          <Text numberOfLines={1} style={stylesItem.title}>
            {data.title}
          </Text>

          <Text numberOfLines={1} style={stylesItem.date}>
            {date}
          </Text>
        </View>
        <Text numberOfLines={3} style={stylesItem.description}>
          {data.description}
        </Text>
      </View>
    </View>
  );
};

const News = () => {
  const [value, onChangeText] = useState("");

  return (
    <Section heading="news">
      <View>
        <FlatList
          style={styles.newList}
          data={newsList}
          renderItem={({ item }) => <Item data={item} />}
          keyExtractor={(item) => `${item.source.id}`}
        />
      </View>
    </Section>
  );
};

export default News;

// Style sheets
const stylesItem = StyleSheet.create({
  container: {
    // height: 40,
    flexDirection: "row",
    borderColor: "#aaa",
    borderBottomWidth: 1,
    borderRadius: 5,
    marginBottom: 5,
    paddingBottom: 5,
    paddingLeft: 5,
    paddingRight: 5,
  },
  description: {
    width: Dimensions.get("screen").width - 90,
    fontSize: 12,
  },
  image: {
    width: 60,
    height: 60,
    marginRight: 10,
    borderRadius: 60 / 2,
  },
  title: {
    width: Dimensions.get("screen").width - 150,
    marginBottom: 5,
    fontWeight: "bold",
    opacity: 0.5,
    fontSize: 15,
  },
  textHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
const styles = StyleSheet.create({
  newList: {
    height: Dimensions.get("window").height - 200,
  },
});
