import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams } from 'expo-router';
import axios from 'axios';

const employee = () => {

    const params = useLocalSearchParams();
    const [employeeData, setEmployeeData] = useState(null);

    const handleUpdate = () => {
        // Navigation or function to handle the update logic
        console.log('Update for ID:', _id);
    };

    const handleDelete = () => {
        // Function to handle the delete logic
        console.log('Delete for ID:', _id);
    };




    useEffect(() => {
        const employeeId = params.employee;
        const fetchEmployeeData = async () => {
            try {
                const response = await axios.get(`https://api-orcin-five.vercel.app/employees/${employeeId}`);
                setEmployeeData(response.data);
            } catch (error) {
                console.error("Error fetching employee data: ", error);
            }
        };

        if (employeeId) {
            fetchEmployeeData();
        }
    }, [params.employeeId]);

    console.log(employeeData);
    const {
        _id,
        employeeId,
        employeeName,
        designation,
        joiningDate,
        dateOfBirth,
        salary,
        activeEmployee,
        phoneNumber,
        address,
        createdAt,
    } = employeeData || {};


    return (
        <View style={styles.container}>
            <Text style={styles.header}>Employee Details</Text>
            <Text>Employee ID: {employeeId}</Text>
            <Text>Name: {employeeName}</Text>
            <Text>Designation: {designation}</Text>
            <Text>Joining Date: {joiningDate}</Text>
            <Text>Date of Birth: {dateOfBirth}</Text>
            <Text>Salary: ${salary}</Text>
            <Text>Active Employee: {activeEmployee ? 'Yes' : 'No'}</Text>
            <Text>Phone Number: {phoneNumber}</Text>
            <Text>Address: {address}</Text>
            <Text>Created At: {createdAt}</Text>

            <View style={styles.buttonContainer}>
                <Button title="Update" onPress={handleUpdate} />
                <Button title="Delete" onPress={handleDelete} color="red" />
            </View>
        </View>
    )
}

export default employee

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },
    header: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    buttonContainer: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    },
})