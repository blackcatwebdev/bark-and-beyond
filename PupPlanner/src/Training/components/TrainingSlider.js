import { Animated, FlatList, StyleSheet, Text, View } from "react-native";
import React, { useRef, useState } from "react";
import Slides from "../data";

import TrainingSlideItem from "./TrainingSlideItem";
import TrainingPagination from "./TrainingPagination";

const TrainingSlider = () => {
  const [index, setIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const handleOnScroll = (event) => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {
        useNativeDriver: false,
      }
    )(event);
  };

  const handleOnViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems && viewableItems.length > 0) {
      setIndex(viewableItems[0].index);
    }
  }).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  const lastIndex = Slides.length - 1;

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={Slides}
        renderItem={({ item, index }) => (
          <TrainingSlideItem
            item={item}
            index={index}
            lastIndex={lastIndex}
          />
        )}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleOnScroll}
        onViewableItemsChanged={handleOnViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
      />

      <TrainingPagination
        data={Slides}
        scrollX={scrollX}
        index={index}
      />
    </View>
  );
};

export default TrainingSlider;

const styles = StyleSheet.create({});
