import { FlatList, Image, StyleSheet, View } from "react-native";

import AppText from "../components/Text";
import Icon from "../components/Icon";
import Screen from "../components/Screen";
import { ListItem, ListItemSeparatorComponent } from "../components/lists";
import colors from "../config/colors";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
  },
];

function AccountScreen(props) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <View style={{ flexDirection: "row" }}>
          <Image style={styles.image} source={require("../assets/icon.png")} />
          <View style={styles.detailsContainer}>
            <AppText style={styles.title}>User Name</AppText>
            <AppText style={styles.subTitle}>username@gmail.com</AppText>
          </View>
        </View>
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparatorComponent}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <View style={styles.container}>
        <View
          style={[
            styles.detailsContainer,
            {
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
            },
          ]}
        >
          <Icon name="logout" backgroundColor="#ffe66d" />
          <AppText style={[styles.title, { marginLeft: 10 }]}>Log Out</AppText>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  container: {
    marginVertical: 20,
    backgroundColor: colors.white,
    padding: 15,
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  subTitle: {
    color: colors.medium,
  },
  title: {
    fontWeight: "500",
  },
});

export default AccountScreen;
