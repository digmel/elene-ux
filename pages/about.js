import { StyleSheet, View } from "react-native";
import { Screen, Section } from "../components";
import Image from "next/image";

export default function Page({ isMobile }) {
  return (
    <Screen isAbout={true} isMobile={isMobile}>
      <View style={{ flexDirection: isMobile ? "column" : "row" }}>
        {isMobile && (
          <View
            style={{
              marginTop: -100,
              transform: [
                {
                  scale: 0.7,
                },
              ],
            }}
          >
            <Image
              src="/assets/about-cover.jpeg"
              width={404}
              height={390}
              alt="Author Image"
              style={{
                borderRadius: 8,
              }}
            />
          </View>
        )}

        <View style={styles.contentStart}>
          <Section
            isMobile={isMobile}
            content={[
              {
                subtitle: "Who is Elene",
                text: "I'm Elene, UX/UI Designer interested in designing meaningful experiences that shape how we interact with various products or services. Ever since childhood, I’ve wondered why people make the decisions they do, and find it exciting to guess others' emotions, thoughts, or motivations. Furthermore, I've always loved putting myself in someone else's shoes but later realized that it’s a great skill named empathy. That's one of the reasons why UX design is so enjoyable to me.",
              },
            ]}
          />

          <Section
            isMobile={isMobile}
            topSpace={-32}
            content={[
              {
                subtitle: "Background & BA Degree",
                text: "The skills and views I’ve gained during my BA (Engineering and Computer Science) are essential to UX design. After graduating, I became interested in graphic design and worked on freelance projects, which led me to UX Design and took the best courses of Google, Idxf, and DesignLab. Completing those comprehensive courses helped me become a confident UX designer.",
              },
            ]}
          />

          <Section
            isMobile={isMobile}
            topSpace={-32}
            content={[
              {
                subtitle: "Elene in UX Field",
                text: "I continued my career in UX research, took some courses, did several research projects, and worked as a UX Researcher in the biggest bank of Georgia.\n\nI truly enjoyed being UX Researcher and gained remarkable experience that makes me very comfortable working with other researchers. During that time I realized that I wanted the whole package of UX, and wanted to use my other design skills too. That's how I moved to a design agency as a Product Designer.",
              },
            ]}
          />

          <Section
            isMobile={isMobile}
            topSpace={-32}
            content={[
              {
                subtitle: "Outside the Work",
                text: "Outside work, you can find me roller skating! 🛼",
              },
            ]}
          />
        </View>

        <View style={styles.contentEnd}>
          {isMobile ? (
            <></>
          ) : (
            <Image
              src="/assets/about-cover.jpeg"
              width={404}
              height={390}
              alt="Author Image"
              style={{ borderRadius: 8 }}
            />
          )}
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
  contentStart: {
    flex: 1,
  },
  contentEnd: {
    marginLeft: 90,
    marginTop: 20,
    borderRadius: 4,
  },
});
