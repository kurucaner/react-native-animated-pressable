<h1>PressableAnimated</h1>
<p>PressableAnimated is a React Native UI component that allows you to create pressable elements with an animation. The animation is fully customizable, offering flexibility in its usage.</p>
<h2>Table of Contents</h2>
<ul>
<li><a href="#intro" target="_new">Intro</a></li>
<li><a href="#motivation" target="_new">Motivation</a></li>
<li><a href="#installation" target="_new">Installation</a></li>
<li><a href="#demo" target="_new">Demo</a></li>
<li><a href="#usage" target="_new">Usage</a></li>
<li><a href="#api" target="_new">API</a></li>
<li><a href="#example" target="_new">Example</a></li>
</ul>

## Intro 🚀

<p><code><strong>PressableAnimated</strong></code> is not just another UI component; it's a delightful concoction of interactivity, design, and simplicity, crafted meticulously to enhance your React Native apps. It allows developers to harness the power of animations without wrestling with the complexities typically associated with implementing them.</p>

## Motivation 🎯

<p>I created PressableAnimated to make animations more accessible to developers. It packages the vibrant world of animations into an easy-to-use component, offering developers a quick and straightforward way to animate pressable elements, all without compromising customization or control.</p>
<br />
<p>My hope is that PressableAnimated will help you not only to make your apps more engaging and delightful but also to spark your curiosity to explore and play with animations in your own creative ways. Happy coding!</p>

## Installation 💻

<p>Installing <code><strong>PressableAnimated</strong></code>, is a breeze and can be done with either npm or yarn.</p>

```bash
npm install react-native-pressable-animated
```

or

```bash
yarn add react-native-pressable-animated
```

## Demo 🎥

### Example 1

![Example 1](./assets/scale-up.mp4)

### Example 2

![Example 2](./assets/scale-down.mp4)

## Usage

<p>First, import the <code<strong>PressableAnimated</strong></code> component in your project.</p>
<code><strong>import { PressableAnimated } from "./src/components/PressableAnimated";</strong></code>

<p>Then wrap the component you want to animate with the <code><strong>PressableAnimated</strong></code> component.</p>

```jsx
import { PressableAnimated } from "./src/components/PressableAnimated";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <PressableAnimated
        bounce
        customStyles={styles.customStyles}
        scaleValue={1.2}
        onPress={() => {
          console.log("onPress");
        }}
        onPressIn={() => {
          console.log("onPressIn");
        }}
        onPressOut={() => {
          console.log("onPressOut");
        }}
      >
        <Text style={styles.text}>App</Text>
      </PressableAnimated>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  customStyles: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#071D38",
    width: 200,
    height: 200,
    borderRadius: 20,
  },
  text: {
    color: "#fff",
    fontSize: 20,
  },
});
```

## API

<p><code><strong>PressableAnimated</strong></code> accepts the following props:</p>

| Prop           | Type                   | Default     | Description                                                             |
| -------------- | ---------------------- | ----------- | ----------------------------------------------------------------------- |
| `scaleValue`   | `number`               | `1.03`      | The value to which the component scales when pressed.                   |
| `duration`     | `number`               | `500`       | The duration of the scale animation, in milliseconds.                   |
| `isDisabled`   | `boolean`              | `false`     | If `true`, disables the pressable functionality.                        |
| `isPressed`    | `boolean`              | `false`     | Manually controls the pressed state of the component.                   |
| `customStyles` | `StyleProp<ViewStyle>` | `undefined` | Styles the Animated View.                                               |
| `onPress`      | `() => void`           | `undefined` | Callback function invoked when the press is released.                   |
| `onPressIn`    | `() => void`           | `undefined` | Callback function invoked when the press is initiated.                  |
| `onPressOut`   | `() => void`           | `undefined` | Callback function invoked when the press is released.                   |
| `children`     | `React.ReactNode`      | `undefined` | The components to be rendered inside the `PressableAnimated` component. |
