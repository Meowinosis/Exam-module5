import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { getById, update } from "../../redux/services/ProductService.jsx";

const Update = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    useEffect(() => {
        dispatch(getById(id));
    }, []);
    const dispatch = useDispatch();
    const product = useSelector(({ products }) => {
        return products.newProduct;
    });

    const save = (values) => {
        dispatch(update(values)).then(() => {
            navigate('/products/list');
        });
    };


    return (
        <>
            <Formik
                initialValues={product}
                onSubmit={save}
                enableReinitialize={true}
            >

                <Form>
                    <Field name="title" placeholder={"Title"} type={"text"} />
                    <Field name="price" placeholder={"Price"} type={"text"} />
                    <Field name="description" placeholder={"Description"} type={"text"} />
                    <button type={"submit"}>Save</button>
                </Form>

            </Formik>

        </>
    );
};

export default Update;