

import { Button, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import axios from 'axios'
import { useRouter } from 'expo-router';

const employees = () => {
    const router = useRouter()
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        axios.get("https://api-orcin-five.vercel.app/employees")
            .then(res => {
                // console.log(res.data);
                setEmployees(res.data)
            })
            .catch(error => {
                console.error("Error fetching data: ", error);
            });
    }, []);



    return (
        <ScrollView>
            <View style={styles.listFlex}>
                <Text style={styles.list}>Employees List</Text>
                <Pressable style={styles.plusBtn} onPress={() => router.push("/(home)/addNewEmployee")}>
                    <AntDesign name="pluscircleo" size={28} color="white" />
                </Pressable>
            </View>
            <View style={{ padding: 10 }}>
                <Pressable
                    style={styles.searchBtn}
                >
                    <AntDesign
                        style={{ marginLeft: 10 }}
                        name="search1"
                        size={20}
                        color="black"
                    />
                    <TextInput
                        style={{ flex: 1 }}
                        placeholder="Search"
                    />
                </Pressable>
            </View>
            <View>
                {
                    employees.map(employee =>
                        <Pressable style={{ paddingHorizontal: 12 }} key={employee._id}>
                            <Text onPress={() => router.push(`/(home)/${employee._id}`)} style={styles.employee}>{employee.employeeName}</Text>
                        </Pressable>
                    )
                }
            </View>

        </ScrollView>
    )
}

export default employees

const styles = StyleSheet.create({
    list: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        padding: 12,
        flex: 1,
    },
    plusBtn: {
        backgroundColor: "#70e000",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 25,
        marginTop: 10,
        flex: 1,
        padding: 8,
        marginRight: 15,
    },
    listFlex: {
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: "row",
        gap: 50
    },
    searchBtn: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 7,
        gap: 10,
        backgroundColor: "white",
        borderRadius: 3,
        height: 40,
        flex: 1,
        marginVertical: 10,
    },
    employee: {
        padding: 12,
        backgroundColor: "#ff85a1",
        marginBottom: 5,
        fontSize: 16,
        fontWeight: "bold",
        color: "white",
        borderRadius: 25,
    }
})