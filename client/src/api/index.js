import axios from 'axios';

export const getPlacesData = async (lat, lng) => {
    try {
        // request to
        const {data} = await axios.get(`http://localhost:4000/places/${lat}/${lng}`);

        return data;
    } catch (error) {
        console.log(error);
    }
};
