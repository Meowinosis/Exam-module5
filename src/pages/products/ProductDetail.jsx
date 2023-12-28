import {useEffect} from "react";
import {useNavigate,useParams} from "react-router-dom";
import {getById} from "../../redux/services/ProductService.jsx";
import {useDispatch,useSelector} from "react-redux";


const ProductDetail = () =>{
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    useEffect(() => {
        dispatch(getById(id));
    }, []);
    const product = useSelector(({products}) => {
        return products.newProduct;
    })
    return (
            <>
             <h3>Product detail</h3>
             <h1>{product.title}</h1>
             <h3>{product.price}</h3>
             <h3>{product.description}</h3>
             <button onClick={() => {navigate('/products/list')}}>Back</button>
            </>
    );
}

export default ProductDetail;