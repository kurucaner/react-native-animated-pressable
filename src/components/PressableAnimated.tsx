import { usePressAnimation } from "../hooks/usePressAnimation";
import { Animated, Pressable, StyleProp, ViewStyle } from "react-native";

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
}: {
  bounce?: boolean;
  children: React.ReactNode;
  customStyles?: StyleProp<ViewStyle>;
  isDisabled?: boolean;
  isPressed?: boolean;
  onPress?: () => void;
  onPressIn?: () => void;
  onPressOut?: () => void;
  scaleValue?: number;
}) => {
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
