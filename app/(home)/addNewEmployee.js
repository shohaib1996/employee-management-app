import { Alert,Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
// import DateTimePicker from '@react-native-community/datetimepicker'
import { useState } from 'react'
import React from 'react'
import axios from 'axios';


const addNewEmployee = () => {
    const [name, setName] = useState("");
    const [employeeId, setEmployeeId] = useState("");
    const [mobileNo, setMobileNo] = useState("");
    const [salary, setSalary] = useState("");
    const [address, setAddress] = useState("");
    const [designation, setDesignation] = useState("");
    const [dob, setDob] = useState("");
    const [joiningDate, setJoiningDate] = useState("");
    const handleAddNewEmployee = () => {
        const employeeData = {
            employeeId,
            employeeName: name,
            designation,
            dateOfBirth: dob,
            joiningDate: joiningDate,
            salary,
            activeEmployee: true,
            phoneNumber: mobileNo,
            address,
        }

        console.log(employeeData);

        axios.post("https://api-orcin-five.vercel.app/employees", employeeData)
            .then((response) => {
                // console.log(response.data)
                Alert.alert(
                    "Registration Successful",
                    "You have been registered successfully"
                );
                setName("");
                setEmployeeId("");
                setDob("");
                setMobileNo("");
                setSalary("");
                setAddress("");
                setJoiningDate("");
                setDesignation("");
            })
            .catch((error) => {
                Alert.alert(
                    "Registration Fail",
                    "An error occurred during registration"
                );
                console.log("register failed", error);
            });

    }
    return (
        <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
            <View style={{ padding: 10 }}>
                <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}>
                    Add a New Employee
                </Text>
                <View style={{ marginVertical: 10 }}>
                    <Text style={{ fontSize: 17, fontWeight: "bold" }}>
                        Full Name (First and last Name)
                    </Text>
                    <TextInput
                        value={name}
                        onChangeText={(text) => setName(text)}
                        style={styles.textInput}
                        placeholder="enter your name"
                        placeholderTextColor={"black"}
                    />
                </View>

                <View>
                    <Text style={{ fontSize: 17, fontWeight: "bold" }}>Employee Id</Text>
                    <TextInput
                        value={employeeId}
                        onChangeText={(text) => setEmployeeId(text)}
                        style={styles.textInput}
                        placeholder="Employee Id"
                        placeholderTextColor={"black"}
                    />
                </View>

                <View style={{ marginVertical: 10 }}>
                    <Text style={{ fontSize: 17, fontWeight: "bold" }}>Designation</Text>
                    <TextInput
                        value={designation}
                        onChangeText={(text) => setDesignation(text)}
                        style={styles.textInput}
                        placeholder="Designation"
                        placeholderTextColor={"black"}
                    />
                </View>

                <View>
                    <Text style={{ fontSize: 17, fontWeight: "bold" }}>
                        Mobile Number
                    </Text>
                    <TextInput
                        value={mobileNo}
                        onChangeText={(text) => setMobileNo(text)}
                        style={styles.textInput}
                        placeholder="Mobile No"
                        placeholderTextColor={"black"}
                    />
                </View>
                <View style={{ marginVertical: 10 }}>
                    <Text style={{ fontSize: 17, fontWeight: "bold" }}>
                        Date of Birth
                    </Text>
                    <TextInput
                        value={dob}
                        onChangeText={(text) => setDob(text)}
                        style={{
                            padding: 10,
                            borderColor: "#D0D0D0",
                            borderWidth: 1,
                            marginTop: 10,
                            borderRadius: 5,
                        }}
                        placeholder="DD/MM/YYYY"
                        placeholderTextColor={"black"}
                    />
                </View>

                <View>
                    <Text style={{ fontSize: 17, fontWeight: "bold" }}>Joining Date</Text>
                    <TextInput
                        value={joiningDate}
                        onChangeText={(text) => setJoiningDate(text)}
                        style={{
                            padding: 10,
                            borderColor: "#D0D0D0",
                            borderWidth: 1,
                            marginTop: 10,
                            borderRadius: 5,
                        }}
                        placeholder="DD/MM/YYYY"
                        placeholderTextColor={"black"}
                    />
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginTop: 10,
                    }}
                >
                    <Text>Active Employee</Text>
                    <Text>True</Text>
                </View>
                <View style={{ marginVertical: 10 }}>
                    <Text style={{ fontSize: 17, fontWeight: "bold" }}>Salary</Text>
                    <TextInput

                        value={salary}
                        onChangeText={(text) => setSalary(text)}
                        style={styles.textInput}
                        placeholder="Enter Salary"
                        placeholderTextColor={"black"}
                    />
                </View>

                <View>
                    <Text style={{ fontSize: 17, fontWeight: "bold" }}>Address</Text>
                    <TextInput
                        value={address}
                        onChangeText={(text) => setAddress(text)}
                        style={styles.textInput}
                        placeholder="Enter Address"
                        placeholderTextColor={"black"}
                    />
                </View>

                <Pressable
                    style={styles.addBtn}
                    onPress={handleAddNewEmployee}
                >
                    <Text style={{ fontWeight: "bold", color: "white" }}>
                        Add Employee
                    </Text>
                </Pressable>
            </View>
        </ScrollView>
    )
}

export default addNewEmployee

const styles = StyleSheet.create({
    textInput: {
        padding: 10,
        borderColor: "#D0D0D0",
        borderWidth: 1,
        marginTop: 10,
        borderRadius: 5,
    },
    addBtn: {
        backgroundColor: "#70e000",
        padding: 10,
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
    }
})