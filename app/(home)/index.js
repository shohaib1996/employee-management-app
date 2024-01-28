import { Dimensions, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from "expo-linear-gradient"
import { Entypo, Ionicons, Octicons, Feather } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from 'expo-router';

const screenHeight = Dimensions.get('window').height

const index = () => {
    const router = useRouter()
    return (

        <ScrollView style={styles.scrollView}>
            <LinearGradient colors={["#0d47a1", "#42a5f5"]} style={[styles.scrollBackground, { minHeight: screenHeight }]}>
                <View style={styles.container}>
                    <Entypo name="bar-graph" size={24} color="white" />
                    <Text style={styles.text}>Employee Management System</Text>
                    <Entypo name="lock" size={24} color="white" />

                </View>
                <View style={styles.buttonContainer}>
                    <Pressable style={styles.employeeListBtn} onPress={() => router.push("/(home)/employees")}>
                        <View style={styles.people}>
                            <FontAwesome6 name="people-roof" size={24} color="black" />
                        </View>
                        <Text style={styles.text}>Employee List</Text>
                    </Pressable>
                    <Pressable style={styles.markAttendanceBtn}>
                        <View style={styles.people}>
                            <Entypo name="bookmark" size={24} color="black" />
                        </View>
                        <Text style={styles.text}>Mark Attendance</Text>
                    </Pressable>
                </View>
                <View
                    style={styles.pressableContainer}
                >
                    <Pressable
                        style={styles.pressableBtn}
                    >
                        <View
                            style={styles.iconContainer}
                        >
                            <Ionicons name="newspaper-outline" size={24} color="white" />
                        </View>
                        <Text
                            style={styles.textContainer}
                        >
                            Attendance Report
                        </Text>
                        <View
                            style={styles.iconContainer}
                        >
                            <Entypo name="chevron-right" size={24} color="white" />
                        </View>
                    </Pressable>
                    <Pressable
                        style={styles.pressableBtn}
                    >
                        <View
                            style={styles.iconContainer}
                        >
                            <Octicons name="repo-pull" size={24} color="white" />
                        </View>
                        <Text
                            style={styles.textContainer}
                        >
                            Summary Report
                        </Text>
                        <View
                            style={styles.iconContainer}
                        >
                            <Entypo name="chevron-right" size={24} color="white" />
                        </View>
                    </Pressable>
                    <Pressable
                        style={styles.pressableBtn}
                    >
                        <View
                            style={styles.iconContainer}
                        >
                            <Octicons name="report" size={24} color="white" />
                        </View>
                        <Text
                            style={styles.textContainer}
                        >
                            All Generate Reports
                        </Text>
                        <View
                            style={styles.iconContainer}
                        >
                            <Entypo name="chevron-right" size={24} color="white" />
                        </View>
                    </Pressable>
                    <Pressable
                        style={styles.pressableBtn}
                    >
                        <View
                            style={styles.iconContainer}
                        >
                            <Ionicons name="people" size={24} color="white" />
                        </View>
                        <Text
                            style={styles.textContainer}
                        >
                            Overtime Employees
                        </Text>
                        <View
                            style={styles.iconContainer}
                        >
                            <Entypo name="chevron-right" size={24} color="white" />
                        </View>
                    </Pressable>
                </View>
                <View
                    style={styles.lowerBtnContainer}
                >
                    <View
                        style={styles.lowerBtn}
                    >
                        <View
                            style={styles.lowerBtnIcon}
                        >
                            <MaterialCommunityIcons
                                name="guy-fawkes-mask"
                                size={24}
                                color="black"
                            />
                        </View>
                        <Text style={{ marginTop: 5, fontSize: 16, fontWeight: 'bold'}}>Attendance Criteria</Text>
                    </View>
                    <View
                        style={styles.lowerBtn}
                    >
                        <View
                            style={styles.lowerBtnIcon}
                        >
                            <Feather name="bar-chart" size={24} color="black" />
                        </View>
                        <Text style={{marginTop: 5, fontSize: 16, fontWeight: 'bold'}}>Increased Workflow</Text>
                    </View>
                </View>

            </LinearGradient>
        </ScrollView>

    )
}

export default index

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        justifyContent: "space-around"
    },
    text: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
    },
    people: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
    },
    employeeListBtn: {
        backgroundColor: "#90caf9",
        padding: 10,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        flex: 1

    },
    markAttendanceBtn: {
        backgroundColor: "#4cc9f0",
        padding: 10,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        flex: 1

    },
    buttonContainer: {
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center",
        gap: 20,
        padding: 10
    },
    pressableContainer: {
        marginTop: 20,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 7,
    },
    pressableBtn: {
        backgroundColor: "#BE93C5",
        borderRadius: 6,
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10,
    },
    iconContainer: {
        padding: 7,
        width: 45,
        height: 45,
        borderRadius: 7,
        alignItems: "center",
        justifyContent: "center",
    },
    textContainer: {
        marginLeft: 10,
        fontSize: 16,
        fontWeight: "600",
        flex: 1,
        color: 'white',
    },
    lowerBtnContainer: {
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
    },
    lowerBtn: {
        backgroundColor: "#bbdefb",
        borderRadius: 6,
        padding: 15,
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
    },
    lowerBtnIcon: {
        width: 35,
        height: 35,
        borderRadius: 7,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
    },
    scrollView: {
    },
    scrollBackground: {
        minHeight: screenHeight,
    },
})