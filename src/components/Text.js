import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';

import { colors, sizes, fonts } from '../style/Theme';

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
      primary,
      primary2,
      secondary,
      green,
      black,
      white,
      gray,
      lightGrey,
      textColorDark,
      titleColor2,
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
      primary && styles.primary,
      primary2 && styles.primary2,
      secondary && styles.secondary,
      red && styles.red,
      green && styles.green,
      black && styles.black,
      white && styles.white,
      gray && styles.gray,
      lightGrey && styles.lightGrey,
      textColorDark && styles.textColorDark,
      titleColor2 && styles.titleColor2,
      textColor2 && styles.textColor2,
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
    fontSize: sizes.font,
    color: colors.textColorLight
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
  red: { color: colors.red },
  primary: { color: colors.primary },
  primary2: { color: colors.primary2 },
  secondary: { color: colors.secondary },
  green: { color: colors.green },
  black: { color: colors.black },
  white: { color: colors.white },
  gray: { color: colors.gray },
  lightGrey: { color: colors.lightGrey },
  textColorDark: { color: colors.textColorDark },
  titleColor2: { color: colors.titleColor2 },
  textColor2: { color: colors.textColor2 },
  // fonts
  h1: fonts.h1,
  h2: fonts.h2,
  h3: fonts.h3,
  title: fonts.title,
  body: fonts.body,
  caption: fonts.caption,
  header: fonts.header,
  small: fonts.small
});