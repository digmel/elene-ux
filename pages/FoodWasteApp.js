import { Screen, Section, SectionHero, SectionFinal } from "../components";

export default function Page({ isMobile, constants }) {
  return (
    <Screen isProject={true} isMobile={isMobile}>
      <SectionHero
        isMobile={isMobile}
        link={constants.links.FoodWasteApp}
        image="food-waste-hero"
        headline="Reduce Food Waste"
        label="App allows people to share unused Grocery Products & Foods with NGO communities."
      />

      <Section
        title="Project Overview"
        isMobile={isMobile}
        content={[
          {
            subtitle: "Background",
            text: "With this app, people are connected to the nonprofit organization - Katarthis which cares about homeless people by offering them daily meals. They can visit Katarthis cafe and have breakfast or dinner there.",
          },
          {
            subtitle: "The Goal",
            text: "The goal was to design a solution for people who want to reduce their food waste and help others at the same time.",
          },
          {
            subtitle: "My Role & Project Duration",
            list: [
              {
                icon: "section-icon.svg",
                text: "Product Designer",
              },
              {
                icon: "section-icon.svg",
                text: "UX Researcher",
              },
              {
                text: "8 Weeks (Self-started project)",
              },
            ],
          },
        ]}
      />

      <Section
        title="Research"
        isMobile={isMobile}
        content={[
          {
            subtitle: "Research Method",
            text: "In order to gather related information from other people and understand whether it’s a problem that needs to be solved, I’ve conducted 2 interviews. During the research, it became a lot more obvious that food waste is something my interviewees also think and worry about, I should mention that at that time I wasn’t really sure what would be the final product but those interviews helped me to get some insights and come up with the ideas.",
          },
          {
            subtitle: "Some interview questions",
            list: [
              {
                icon: "section-icon.svg",
                text: "“What kind of food becomes wasted mostly in your house?”",
              },
              {
                icon: "section-icon.svg",
                text: "“How much food do your throw away in a week?”",
              },
              {
                icon: "section-icon.svg",
                text: "“What motivates or encourages you to reduce food waste?”",
              },
              {
                icon: "section-icon.svg",
                text: "“What challenges do you face while trying to reduce your waste?”",
              },
              {
                icon: "section-icon.svg",
                text: "“Have you ever encouraged others to reduce food waste? And how?”",
              },
              {
                icon: "section-icon.svg",
                text: "“Have you ever given away extra food from your house?”",
              },
            ],
          },
          {
            subtitle: "Received Insights",
            list: [
              {
                icon: "section-icon.svg",
                text: "Both of the participants are worried about food waste.",
              },
              {
                icon: "section-icon.svg",
                text: "Both of them are interested in teaching their children about that topic.",
              },
              {
                icon: "section-icon.svg",
                text: "When everyone in the family eats different food, reducing waste becomes difficult.",
              },
              {
                icon: "section-icon.svg",
                text: "Family members often buy products that become leftovers.",
              },
              {
                icon: "section-icon.svg",
                text: "There are always some expired products in the fridge.",
              },
              {
                icon: "section-icon.svg",
                text: "Throwing away rotten food makes them worried and ashamed.",
              },
            ],
          },
        ]}
      />

      <Section
        title="Usability Tests"
        isMobile={isMobile}
        content={[
          {
            subtitle: "Prototype & Scenarios for Tests ",
            list: [
              {
                text: "After analyzing the insights from the interviews I started creating low-fidelity wireframes and created the first prototype in Axure that was used for usability testing.",
              },
              {
                text: "Scenarios for Usability Tests",
              },
              {
                icon: "section-icon.svg",
                text: "What do we see here? Please walk me through your options. What kind of information does the app provide at this point?",
              },
              {
                icon: "section-icon.svg",
                text: "Imagine you have some leftovers from the birthday party that you would like to share. Use our application to donate that food.",
              },
              {
                icon: "section-icon.svg",
                text: "Let’s say you want to see what you have sent already. Where could you find it?",
              },
              {
                icon: "section-icon.svg",
                text: "Imagine that you want to share some milk and yogurts. Use the app to submit your request.",
              },
            ],
          },
          {
            subtitle: "Test Findings",
            list: [
              {
                icon: "section-error-icon.svg",
                text: "The participant mentioned that he’d skip the onboarding screens in real life.",
              },
              {
                icon: "section-success-icon.svg",
                text: "Need to explain the purpose of the app inside the application, not only on the onboarding screens.",
              },
              {
                icon: "section-error-icon.svg",
                text: "One of the participants was concerned whether products will be good for consumption by the time the courier comes to pick it up.",
              },
              {
                icon: "section-success-icon.svg",
                text: "Explain how the couriers work.",
              },
              {
                icon: "section-error-icon.svg",
                text: "Not sure about the meaning of “Start saving food” and “Overall impact”.",
              },
              {
                icon: "section-success-icon.svg",
                text: "Change the wording, for example to “Our community’s impact”",
              },
              {
                icon: "section-error-icon.svg",
                text: "Adding the expiration date of the product would be interesting.",
              },
              {
                icon: "section-success-icon.svg",
                text: "Add input for the expiration date.",
              },
            ],
          },
          {
            image: "food-waste-usability",
          },
        ]}
      />

      <Section
        title="User Journey"
        isMobile={isMobile}
        content={[
          {
            subtitle: "Created the UJ",
            text: "After usability testing, I created the user journey for the scenario where the person is worried about her food waste and the friend suggests downloading this application.",
          },
          {
            image: "food-waste-user-journey",
            style: "end",
          },
        ]}
      />

      <Section
        headline="Designing & Iterating Screens"
        isMobile={isMobile}
        topSpace={isMobile ? -190 : -300}
        content={[
          {
            subtitle: "Log In",
            list: [
              {
                text: "I shortened and simplified the registration process as much as possible and didn't include the number and address fields because:",
              },
              {
                icon: "section-icon.svg",
                text: "Asking lots of info at the beginning bothers users.",
              },
              {
                icon: "section-icon.svg",
                text: "They might lose interest/motivation to continue.",
              },
              {
                icon: "section-icon.svg",
                text: "Asking that info while donating would be more relevant",
              },
              {
                icon: "section-icon.svg",
                text: "After the first donation, those details would be saved to their profile and would be easy to use next time",
              },
            ],
          },
          {
            image: "food-waste-login",
            style: "end",
          },
        ]}
      />

      <Section
        isMobile={isMobile}
        variant="isMobile-reverse"
        topSpace={isMobile ? -20 : -150}
        content={[
          {
            image: "food-waste-home",
            style: "start",
          },
          {
            style: "center",
            subtitle: "Home",
            list: [
              {
                text: "Using the nav bar helped in avoiding the cluttered design and made the navigation easier. From the nav bar:",
              },
              {
                icon: "section-icon.svg",
                text: "users can navigate to ‘Your Donations’, where would be all their previous donations,",
              },
              {
                icon: "section-icon.svg",
                text: "using the action button in the middle starts the donation flow,",
              },
              {
                icon: "section-icon.svg",
                text: "users are able to click the community and see what others are donating.",
              },
              {
                text: "In order to encourage first-time users to take action, I've added a microcopy with an arrow and instructions for them to start donating, that’s an empty state.",
              },
            ],
          },
        ]}
      />

      <Section
        isMobile={isMobile}
        topSpace={isMobile ? -80 : -100}
        content={[
          {
            style: "center",
            subtitle: "Ongoing Donation",
            list: [
              {
                text: "When the user has an ongoing donation along with the donation history, the ongoing donation should stand out to draw the users' attention. To make it more prominent I’ve:",
              },
              {
                icon: "section-icon.svg",
                text: "created an extended version of the card where the most important info, such as courier details and arrival time is shown ",
              },
              {
                icon: "section-icon.svg",
                text: "added notification indication on the nav bar ",
              },
            ],
          },
          {
            image: "food-waste-ongoing-donation",
          },
        ]}
      />

      <Section
        isMobile={isMobile}
        content={[
          {
            subtitle: "Goal of Donation",
            text: "Donating flow should be very simple and effortless otherwise people won't use it. Keeping that in mind, I tried to make the flow as easy as possible.",
          },
          {
            subtitle: "Donating Flow",
            text: "Users can choose different kinds of products from the categories after clicking on continue, they will be asked for different details depending on the chosen products (for ex, apple - quantity, yogurt - quantity & expiration date). Then if he/she is a first-time user they will need to fill in personal information such as phone number and address. Users might be interested in tracking the courier, so on the ‘Thank you’ screen is a secondary button ‘Follow Courier’ that opens the map.",
          },
          {
            image: "food-waste-donation-flow",
          },
        ]}
      />

      <Section
        isMobile={isMobile}
        title="Next Steps"
        content={[
          {
            subtitle: "What's next?",
            text: "I believe that the overall mindset behind the intention of donation would need more exploration. Currently, there is an MVP of the community feature, where users can share their donations and see what others are sharing. If I'd continue working on this app, I would start with finding answers about the community feature, as well as conducting usability tests to discover how the existing design addresses users' pain points. There are some questions I’d consider first.",
          },
          {
            subtitle: "Research Questions",
            list: [
              {
                icon: "section-icon.svg",
                text: "How would people use the community?",
              },
              {
                icon: "section-icon.svg",
                text: "Is it the right motivational feature?",
              },
              {
                icon: "section-icon.svg",
                text: "Would they be interested in sharing and seeing others' donations?",
              },
              {
                icon: "section-icon.svg",
                text: "What would be the best way to create a community in such kind of application?",
              },
              {
                icon: "section-icon.svg",
                text: "What way would they prefer to measure products? How can I make this flow less time-consuming for the users?",
              },
              {
                icon: "section-icon.svg",
                text: "What would be the best way to show the users how their donations are spent, who receives those products, and when?",
              },
            ],
          },
          {
            image: "food-waste-community",
          },
        ]}
      />

      <Section
        isMobile={isMobile}
        content={[
          {
            subtitle: "App Screens",
            image: "food-waste-screens",
            style: "full",
          },
        ]}
      />

      <SectionFinal isMobile={isMobile} link={constants.links.FoodWasteApp} />
    </Screen>
  );
}
