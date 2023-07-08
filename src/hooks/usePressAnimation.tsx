import { useState } from "react";
import { Animated } from "react-native";

interface IUsePressAnimation {
  scaleValue?: number;
  bounce?: boolean;
}

export const usePressAnimation = ({
  scaleValue = 1.03,
  bounce = false,
}: IUsePressAnimation = {}) => {
  const [scale] = useState(new Animated.Value(1));

  const animateIn = () => {
    Animated.spring(scale, {
      toValue: scaleValue,
      useNativeDriver: true,
    }).start();
  };

  const animateOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      speed: bounce ? 1 : 100,
      useNativeDriver: true,
    }).start();
  };

  return {
    scale,
    animateIn,
    animateOut,
  };
};
