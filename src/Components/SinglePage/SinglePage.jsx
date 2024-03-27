import data from '/fakeData.json'
import { useLoaderData, useParams } from 'react-router-dom';


const SinglePage = () => {

    // const page = useLoaderData();
    
    const { id } = useParams();
    console.log(id);

    return (
        <div>
            <h2>single page details</h2>
            {/* <h2>{page[0].author}</h2> */}
        </div>
    );
};

export default SinglePage;