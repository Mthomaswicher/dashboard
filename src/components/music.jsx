import { useEffect, useState} from "react"
import axios from "axios"
import { Stack, Form, Button, InputGroup } from "react-bootstrap"

const Music = () => {
    const CLIENT_ID = "28e015080fdf4d29b21374784cbb1f95";
    const REDIRECT_URI = "https://mthomaswicher.github.io/dashboard/";
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
    const RESPONSE_TYPE = "token";
    const SCOPE = "user-read-currently-playing";

    const [token, setToken] = useState("")
    const [searchKey, setSearchKey] = useState("")
    const [artists, setArtists] = useState([])
    const [song, setSong] = useState([]);

    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")

        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

            window.location.hash = ""
            window.localStorage.setItem("token", token)
        }

        setToken(token)

    }, [])

    const logout = () => {
        setToken("")
        window.localStorage.removeItem("token")
    }

    const searchArtists = async (e) => {
        e.preventDefault()
        const {data} = await axios.get("https://api.spotify.com/v1/search", {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                q: searchKey,
                type: "artist"
            }
        })

        setArtists(data.artists.items)
    }


    const renderArtists = () => {
        return artists.map(artist => (
            <div key={artist.id}>
                {artist.images.length ? <img width={"100%"} src={artist.images[0].url} alt=""/> : <div>No Image</div>}
                {artist.name}
            </div>
        ))
    }

    const skipSong = () => {
        const {data} = axios.post("https://api.spotify.com/v1/me/player/next", {
            headers: {
                Authorization: `Bearer ${token}`
        }})
        console.log(data)

    }


    return (
        <><div className="cardContainer">
            {!token ?
                <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`}>Login
                    to Spotify</a>
                : 
                <Stack direction="horizontal">
                        <Button variant="danger" onClick={logout}>Logout</Button>
                        <div className="vr" />
                        <img className="spotifyimg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png"></img>
                </Stack>

                }
            {token ?
            <><><Form>
                <InputGroup>
                <Form.Control type="text" onChange={e => setSearchKey(e.target.value)} onSubmit={searchArtists}>
                    </Form.Control>
                    <Button onClick={searchArtists} type={"submit"}>Search</Button>
                </InputGroup>
                    
                </Form></></>

                : <h2>Please login</h2>}
            {renderArtists()}
        </div>
        
        
        
        </>
    //     <Stack direction="horizontal" gap={3}>
    //   <Form.Control className="me-auto" placeholder="Add your item here..." />
    //   <Button variant="secondary">Submit</Button>
    //   <div className="vr" />
    //   <Button variant="outline-danger">Reset</Button>
    // </Stack>

    );
}


export default Music;







