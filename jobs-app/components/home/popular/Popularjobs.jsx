import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from "react-native";

import PopularJobCard from "../../../components/common/cards/popular/PopularJobCard";
import styles from "./popularjobs.style";
import { useRouter } from "expo-router";
import { COLORS, SIZES } from "../../../constants";

const Popularjobs = () => {
  const router = useRouter();
  const isLoading = false;
  const error = false;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size={"large"} color={COLORS.secondary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
            data={[1, 2]}
            renderItem={({ item }) => (
              <PopularJobCard
                item={item}
                // selectedJob={{}}
                // handleCardPress={() => {}}
              />
            )}
            keyExtractor={(item) => item.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>
    </View>
  );
};

export default Popularjobs;
