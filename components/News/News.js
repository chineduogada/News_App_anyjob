import React, { useCallback, useEffect, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  RefreshControl,
  StyleSheet,
  Text,
  View,
} from "react-native";
import DateTimeFormat from "format-date-time";
import Section from "../Section";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../../redux";

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
  const dispatch = useDispatch();
  const { loading, error, news } = useSelector(({ news }) => news);

  const getNews = useCallback(() => dispatch(fetchNews()), [fetchNews]);

  useEffect(() => {
    getNews();
  }, [getNews]);

  return (
    <Section heading="news">
      <View>
        {error ? (
          <Text>{error}</Text>
        ) : (
          <FlatList
            style={styles.newList}
            data={news}
            renderItem={({ item }) => <Item data={item} />}
            keyExtractor={(item) => `${item.title}`}
            refreshControl={
              <RefreshControl refreshing={loading} onRefresh={getNews} />
            }
          />
        )}
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

// import React from "react";
// import {
//   RefreshControl,
//   View,
//   // ScrollView as View,
//   StyleSheet,
//   Text,
// } from "react-native";

// const wait = (timeout) => {
//   return new Promise((resolve) => setTimeout(resolve, timeout));
// };

// const News = () => {
//   const [refreshing, setRefreshing] = React.useState(false);

//   const onRefresh = React.useCallback(() => {
//     setRefreshing(true);
//     wait(2000).then(() => setRefreshing(false));
//   }, []);

//   return (
//     <View
//       style={styles.scrollView}
//       refreshControl={
//         <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
//       }
//     >
//       <Text>Pull down to see RefreshControl indicator</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   scrollView: {
//     flex: 1,
//     backgroundColor: "pink",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

// export default News;
