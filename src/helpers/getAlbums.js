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

    const usableData = data.tracks.items.map(element => {
        return {
            id: element.album.id,
            release_date: element.album.release_date,
            image: element.album.images[0],
            name: element.album.name,
            favorite: false
        }
    })

    return usableData
}
