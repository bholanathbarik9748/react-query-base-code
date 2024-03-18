import axios from "axios";

export const getReq = async () => {
    try {
        const response = await axios.get("https://reqres.in/api/users");
        return response.data; 
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error; 
    }
}

export const postReq = async (body) => {
    try {
        const response = await axios.post("https://reqres.in/api/users", body);
        return response.data; 
    } catch (error) {
        console.error("Error posting data:", error);
        throw error; 
    }
}
