import { Params, useParams } from "react-router-dom";

function ContateDetails(){
    const { id } = useParams();

    return(
        <div>
            <h1>Exibindo mais contatos: {id}</h1>
        </div>
    )
}

export default ContateDetails;