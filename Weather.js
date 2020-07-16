import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions = {
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#373B44", "#4286f4"],
    title: "우르르쾅쾅",
    subtitle: "번개가 치고있어요, 집에서 쉬길..."
  },
  Drizzle: {
    iconName: "weather-hail",
    gradient: ["#89F7FE", "#66A6FF"],
    title: "이슬비",
    subtitle: "기분좋은 비가 내릴거에요, 우산은 챙기세요"
  },
  Rain: {
    iconName: "weather-rainy",
    gradient: ["#00C6FB", "#005BEA"],
    title: "비오는 풍경",
    subtitle: "우산 챙겼어요? 감기걸리지 않게 조심하세요"
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#7DE2FC", "#B9B6E5"],
    title: "눈이 와요",
    subtitle: "내 집 앞마당은 내가 쓸기"
  },
  Atmosphere: {
    iconName: "weather-hail",
    gradient: ["#89F7FE", "#66A6FF"]
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#FEF253", "#FF7300"],
    title: "화창한 하루",
    subtitle: "오늘도 기분 좋은 날이 되길 바랄게요"
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#D7D2CC", "#304352"],
    title: "구름이 가득",
    subtitle: "하지만 근심은 저 멀리~"
  },
  Mist: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "안개가 꼈어요",
    subtitle: "운전하실때 조심하세요, 앞에 누가 있어요!"
  },
  Dust: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "마스크 꼭 쓰세요",
    subtitle: "미세먼지는 너무 싫어요 ㅠ.ㅠ"
  },
  Haze: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "앞이 잘 안보여요",
    subtitle: "밖으로 나가지 마세요!"
  }
};


export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          size={96}
          name={weatherOptions[condition].iconName}
          color="white"
        />
        <Text style={styles.temp}>{temp}°C</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>
          {weatherOptions[condition].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
      "Thunderstorm",
      "Drizzle",
      "Rain",
      "Snow",
      "Atmosphere",
      "Clear",
      "Clouds",
      "Haze",
      "Mist",
      "Dust"
    ]).isRequired
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    temp: {
      fontSize: 42,
      color: "white"
    },
    halfContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    },
    title: {
      color: "white",
      fontSize: 44,
      fontWeight: "300",
      marginBottom: 10,
      textAlign: "left"
    },
    subtitle: {
      fontWeight: "600",
      color: "white",
      fontSize: 22,
      textAlign: "left"
    },
    textContainer: {
      alignItems: "flex-start",
      paddingHorizontal: 40,
      justifyContent: "center",
      flex: 1
    }
  });