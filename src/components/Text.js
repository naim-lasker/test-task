import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';

export default class Typography extends Component {
  render() {
    const {
      h1,
      h2,
      h3,
      title,
      body,
      caption,
      header,
      small,
      size,
      transform,
      align,
      // styling
      regular,
      bold,
      medium,
      weight,
      light,
      center,
      right,
      spacing,
      height, // line-height
      // colors
      color,
      red,
      green,
      black,
      white,
      textColor2,
      style,
      children,
      ...props
    } = this.props;

    const textStyles = [
      styles.text,
      h1 && styles.h1,
      h2 && styles.h2,
      h3 && styles.h3,
      title && styles.title,
      body && styles.body,
      caption && styles.caption,
      header && styles.header,
      small && styles.small,
      size && { fontSize: size },
      transform && { textTransform: transform },
      align && { textAlign: align },
      height && { lineHeight: height },
      spacing && { letterSpacing: spacing },
      weight && { fontWeight: weight },
      regular && styles.regular,
      bold && styles.bold,
      medium && styles.medium,
      light && styles.light,
      center && styles.center,
      right && styles.right,
      color && styles[color],
      color && !styles[color] && { color },
      // color shortcuts
      red && styles.red,
      green && styles.green,
      black && styles.black,
      white && styles.white,
      style
    ];

    return (
      <Text style={textStyles} {...props}>
        {children}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  // default style
  text: {
    fontSize: 14,
    color: '#777'
  },
  // Font Weight
  regular: {
    fontWeight: "normal",
  },
  bold: {
    fontWeight: "bold",
  },
  medium: {
    fontWeight: "500",
  },
  light: {
    fontWeight: "200",
  },
  // position
  center: { textAlign: "center" },
  right: { textAlign: "right" },
  // colors
  red: { color: 'red' },
  green: { color: 'green' },
  black: { color: 'black' },
  white: { color: '#fff' },
  // fonts
  h1: 24,
  h2: 20,
  h3: 18,
  title: 16,
  body: 14 ,
  caption: 16,
  header: 16,
  small: 10
});