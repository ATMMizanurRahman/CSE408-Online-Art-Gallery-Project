import React,{ useState, useEffect} from 'react';
import Products from '../../Products/ProductsBootstrap';
import Axios from "axios";

const Abstract = () => {
    const [products, setProducts] = useState([]);

    const getProduct = () => {
        Axios({
            method: "GET",
            withCredentials: true,
            url:"http://localhost:4000/products/style/Abstract"      //this is API url
        }).then((res)=>{
            //console.log(res.data);
            const {data} = res;
            setProducts(data);
        })
    }
    //console.log(products);
    
    useEffect(()=>{
        getProduct();
    },[] );

    return <div>
        <Products productData={products}/>
    </div>
}

export default Abstract;