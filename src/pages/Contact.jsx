import { useLocation } from "react-router-dom"
export default function Contact() {
    const queryString = useLocation().search
    const queryParams = new URLSearchParams(queryString)
    const name = queryParams.get("name")
    return (
        <div>
            <h2>Hey {name}, Contact us here...</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Recusandae ea odit ipsum! Labore neque maxime dolores itaque 
                voluptas sed ipsa ex velit magni rerum! Atque ipsam nulla porro 
                cum quaerat!
            </p>
        </div>
    )
}
