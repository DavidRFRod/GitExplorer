import { RepositoryItem } from "./RepositoryItem"


export function RepositoryList(){
    return(
        <section className="repository-list">
            <h1>Repository List</h1>
            <ul>
                <RepositoryItem title="Repository One" />
                <RepositoryItem title="Repository Two" />
                <RepositoryItem title="Repository One" />
            
            </ul>
        </section>
    )
}