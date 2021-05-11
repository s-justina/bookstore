import axios from "axios";

export const fetchBooks = async () => {
    return await axios.get("http://localhost:3001/api/book");
};