import "./create.css"
import {useNavigate} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import {useDispatch} from "react-redux";
import {add} from "../../redux/services/ProductService.jsx";
const Create =() => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const addProduct = (values) => {
        dispatch(add(values)).then(() => {
            navigate('/products/list');
        })
    }
    return (
        <>
            <div className="create-form">
                <h2>Create</h2>

                <Formik initialValues={{
                    title: "",
                    price: "",
                    description: ""
                }
                } onSubmit={addProduct}>

                    <Form>
                        <Field name="title" placeholder={"Title"} type={"text"}/>
                        <Field name="price" placeholder={"Price"} type={"text"}/>
                        <Field name="description" placeholder={"Description"} type={"text"}/>
                        <button type={"submit"}>Add</button>

                    </Form>

                </Formik>
            </div>
        </>

    )
}
export default Create;