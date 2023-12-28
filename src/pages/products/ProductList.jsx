import {useEffect} from "react";
import "./products.css"
import {Link} from "react-router-dom";
import {getAll, removeById} from "../../redux/services/ProductService.jsx";
import {useDispatch, useSelector} from "react-redux";


const ProductList = () => {
    const dispatch = useDispatch();
    const products = useSelector(({products}) => {
        return products.list;
    })
    useEffect(() => {
        dispatch(getAll());
    }, [])

    function remove(id) {
        let isConfirmed = confirm("Are you sure you want to delete");
        if (isConfirmed)    {
            dispatch(removeById(id)).then(()=> {
                dispatch(getAll());
            })
        }
        else {
            alert("Oke la")
        }
    }

    return (
        <>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">Price</th>
                    <th scope="col">Description</th>
                    <th colSpan={2}>Update - Delete</th>
                </tr>
                </thead>
                <tbody>
                {
                    products.map((item) => {
                        return (
                        <tr key={item.id}>
                            <th scope="row">{item.id}</th>
                            <td><Link to={`/products/${item.id}`}>{item.title}</Link></td>
                            <td>{item.price}</td>
                            <td>{item.description}</td>
                            <td>{item.action}</td>
                            <td><Link to={`/products/edit/${item.id}`}>
                                    <button>Update</button>
                            </Link></td>
                            <td>
                                <button onClick={() => {remove(item.id)}}>Delete</button>
                            </td>
                        </tr>
                        )
})}

                </tbody>
            </table>

        </>
    )
}

export default ProductList;