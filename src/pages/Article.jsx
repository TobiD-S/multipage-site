import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

export default function Article() {
    const {id} = useParams()
    const url = 'http://localhost:3000/articles/'+ id
    const {data:article, isPending, error} = useFetch(url)
    const history = useNavigate()

    useEffect(() => {
        if (error){
            setTimeout(() => {
                history('/')
            }, 2000)
        }
    }, [error, history])
    
    return (
        <div>
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {article && (
                <div>
                    <h2>{article.title}</h2>
                    <p>By {article.author}</p>
                    <p>{article.body}</p>
                </div>
            )}
        </div>
    )
}
