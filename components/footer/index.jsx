import React from "react";
import { View, Text, Linking, Pressable } from "react-native";
import { textStyles } from "../config/textStyles";
import { styles } from "./styles";
import Image from "next/image";

const linkedinLink = "https://www.linkedin.com/in/elene-zed/";
const twitterLink = "https://twitter.com/EleneZed";
const facebookLink = "https://www.facebook.com/elene.zed/";

export const Footer = () => {
  const _openLinkedin = async () => {
    await Linking.openURL(linkedinLink);
  };

  const _openTwitter = async () => {
    await Linking.openURL(twitterLink);
  };

  const _openFacebook = async () => {
    await Linking.openURL(facebookLink);
  };

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Pressable style={styles.icon} onPress={_openLinkedin}>
          <Image
            src="/assets/linkedin.svg"
            width={40}
            height={40}
            alt="Linkedin icon"
          />
        </Pressable>

        <Pressable style={styles.icon} onPress={_openTwitter}>
          <Image
            src="/assets/twitter.svg"
            width={40}
            height={40}
            alt="Twitter icon"
          />
        </Pressable>

        <Pressable style={styles.icon} onPress={_openFacebook}>
          <Image
            src="/assets/facebook.svg"
            width={40}
            height={40}
            alt="Facebook icon"
          />
        </Pressable>
      </View>
      <View style={styles.rightContainer}>
        <Text style={textStyles.body}>Copyright © 2022 Elene Zedginidze.</Text>
        <Text style={textStyles.body}>All rights reserved.</Text>
      </View>
    </View>
  );
};