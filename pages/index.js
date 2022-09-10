import { Card, textStyles, Screen, HomeHero } from "../components";
import { Text, View } from "react-native";

export default function App() {
  return (
    <Screen isHome={true}>
      <HomeHero />
      <View>
        <Text style={textStyles.h2}>Case Studies</Text>
      </View>

      <Card
        link={`/GlutenFreeApp`}
        imagePath="/assets/gluten-hero.svg"
        imageWidth={559}
        imageHeight={438}
        label="1-WEEK UX/UI CHALLENGE"
        title="Gluten-Free Restaurant Finder"
        description="The app allows users to find restaurant based on their preferences."
      />
      <Card
        link={`/FoodWasteApp`}
        imagePath="/assets/waste-hero.svg"
        imageWidth={444}
        imageHeight={438}
        label="RESEARCH / PRODUCT DESIGN"
        title="Reduce Food Waste by Sharing It"
        description="Using the app people reduce food waste while helping others as well."
      />
      <Card
        link={`/FirstAidApp`}
        imagePath="/assets/first-aid-hero.svg"
        imageWidth={649}
        imageHeight={419}
        label="RESEARCH / PRODUCT DESIGN"
        title="First Aid App"
        description="Learn how to handle yourself and casualties during an emergency."
      />
    </Screen>
  );
}
