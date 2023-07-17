import { usePressAnimation } from "../hooks/usePressAnimation";
import {
  Animated,
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from "react-native";

interface IPressableAnimated extends PressableProps {
  bounce?: boolean;
  children: React.ReactNode;
  customStyles?: StyleProp<ViewStyle>;
  onPress?: () => void;
  onPressIn?: () => void;
  onPressOut?: () => void;
  isDisabled?: boolean;
  isPressed?: boolean;
  scaleValue?: number;
}

export const PressableAnimated = ({
  bounce = false,
  children,
  customStyles,
  isDisabled = false,
  isPressed = false,
  onPress,
  onPressIn,
  onPressOut,
  scaleValue = 1.03,
  ...props
}: IPressableAnimated) => {
  const { scale, animateIn, animateOut } = usePressAnimation({
    scaleValue,
    bounce,
  });

  const handleOnPress = () => {
    onPress && onPress();
  };

  const handleOnPressIn = () => {
    onPressIn && onPressIn();
    animateIn();
  };

  const handleOnPressOut = () => {
    onPressOut && onPressOut();
    animateOut();
  };

  return (
    <Pressable
      disabled={isDisabled}
      onPress={handleOnPress}
      onPressIn={handleOnPressIn}
      onPressOut={handleOnPressOut}
      style={styles.pressable}
      {...props}
    >
      <Animated.View
        style={[
          customStyles,
          {
            transform: [
              {
                scale: isPressed ? scaleValue : scale,
              },
            ],
          },
        ]}
      >
        {children}
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressable: {
    width: "100%",
  },
});
