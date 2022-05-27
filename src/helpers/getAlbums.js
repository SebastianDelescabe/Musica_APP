import axios from "axios";

export const getAlbums = async (query) => {
    const token = sessionStorage.getItem('token')
    const { data } = await axios.get("https://api.spotify.com/v1/search", {
        headers: {
            Authorization: `Bearer ${token}`
        },
        params: {
            q: query,
            type: "track",
            market: 'ES',
            limit: 50,
            offset: 50
        }
    })

    return data.tracks.items
}
