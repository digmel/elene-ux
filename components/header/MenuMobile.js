import { View, Text, Modal } from "react-native";
import React from "react";
import { textStyles, Colors, AnimatedView } from "..";
import Image from "next/image";

export const MenuMobile = ({ isHome, isProject, isAbout }) => {
  return (
    <Modal transparent>
      <AnimatedView>
        <View
          style={{
            zIndex: 10,
            flex: 1,
            backgroundColor: Colors.grayHover,
            marginStart: 64,
            paddingVertical: 64,
            paddingStart: 32,
            borderLeftColor: Colors.gray,
            borderLeftWidth: 1,
          }}
        >
          <View
            style={{
              marginTop: -55,
              marginEnd: 10,
              alignSelf: "flex-end",
            }}
          >
            <Image src="/assets/mobile-menu-close.svg" width={45} height={45} />
          </View>

          <View
            style={{ marginBottom: 12 }}
            accessibilityRole="link"
            href={`/`}
          >
            <Text style={[textStyles.h3, { fontSize: 20 }]}>Home</Text>

            {isHome && (
              <AnimatedView>
                <View
                  style={{
                    alignItems: "flex-start",
                    marginStart: -12,
                    marginTop: 4,
                  }}
                >
                  <Image
                    src="/assets/active-menu.svg"
                    width={131}
                    height={16}
                  />
                </View>
              </AnimatedView>
            )}
          </View>

          <View style={{ marginTop: 24 }}>
            <Text style={[textStyles.h3, { fontSize: 22 }]}>Projects</Text>

            {isProject && (
              <AnimatedView>
                <View
                  style={{
                    alignItems: "flex-start",
                    marginStart: -12,
                    marginTop: 4,
                  }}
                >
                  <Image
                    src="/assets/active-menu.svg"
                    width={131}
                    height={16}
                  />
                </View>
              </AnimatedView>
            )}
          </View>

          <View
            style={{ marginTop: 16, marginStart: 16 }}
            accessibilityRole="link"
            href={`/GlutenFreeApp`}
          >
            <Text style={[textStyles.h3, { fontSize: 20, fontWeight: 300 }]}>
              Gluten Free Finder App
            </Text>
          </View>

          <View
            style={{ marginTop: 32, marginStart: 16 }}
            accessibilityRole="link"
            href={`/FoodWasteApp`}
          >
            <Text style={[textStyles.h3, { fontSize: 20, fontWeight: 300 }]}>
              Reduce Food Waste App
            </Text>
          </View>

          <View
            style={{ marginTop: 32, marginStart: 16 }}
            accessibilityRole="link"
            href={`/FirstAidApp`}
          >
            <Text style={[textStyles.h3, { fontSize: 20, fontWeight: 300 }]}>
              Learn First Aid App
            </Text>
          </View>

          <View
            style={{ marginTop: 32, marginStart: 16 }}
            // accessibilityRole="link"
            // href={`/`}
          >
            <Text
              style={[
                textStyles.h3,
                { fontSize: 20, fontWeight: 300, color: "gray" },
              ]}
            >
              Portfolio Website
            </Text>
          </View>

          <View
            style={{ marginTop: 32, marginStart: 16 }}
            // accessibilityRole="link"
            // href={`/`}
          >
            <Text
              style={[
                textStyles.h3,
                { fontSize: 20, fontWeight: 300, color: "gray" },
              ]}
            >
              Startup Info Website
            </Text>
          </View>

          <View
            style={{ marginTop: 48 }}
            accessibilityRole="link"
            href={`/about`}
          >
            <Text style={[textStyles.h3, { fontSize: 20 }]}>About me</Text>

            {isAbout && (
              <AnimatedView>
                <View
                  style={{
                    alignItems: "flex-start",
                    marginStart: -12,
                    marginTop: 4,
                  }}
                >
                  <Image
                    src="/assets/active-menu.svg"
                    width={131}
                    height={16}
                  />
                </View>
              </AnimatedView>
            )}
          </View>

          <View
            style={{
              marginTop: 200,
              borderBottomColor: Colors.grayDark,
              borderBottomWidth: 0.5,
              marginEnd: 32,
              paddingBottom: 4,
              marginBottom: 12,
            }}
          >
            <Text style={[textStyles.h3, { fontSize: 20 }]}>Contact</Text>
          </View>
          <Text style={textStyles.link}>elene.uxdesign@gmail.com</Text>
        </View>
      </AnimatedView>
    </Modal>
  );
};