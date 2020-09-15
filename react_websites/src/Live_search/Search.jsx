import  React , {useState} from 'react';
import Result from './Result';

export default function Search() {
    const [img, setImg] = useState("");

    return( 
        <>
        <div className="search_div">
            <input type="text" placeholder=" serch here " value={img}
             onChange={(e) => {
                 e.preventDefault();
                 setImg(e.target.value);
                 }}  />
             { img === "" ? null: <Result query = {img} /> }

        </div>

        </>
    );
 };
 