import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

const ProductList = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        fetchData();

    }, []);

    const fetchData = async() => {

        const response = await fetch('http://localhost:8080/products');
        const data = await response.json();
        setProducts(data);

    }

    const deleteProduct = async(id) => {

        await fetch(`http://localhost:8080/products/${id}`, {

            method: "DELETE",
            headers: {

                'Content-Type': 'application/json'

            }

        });

        fetchData();

    }

    return (
        <div className="my-5 ml-5">
            {/* CARA LOOPING DI REACT */}

            <Link to={'/add-product'} className="button is-link is-small mb-4">Add Product</Link>

            <table className="table is-hoverable is-striped is-fullwidth mt-5">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    { products.map((product,index) => (

                        <tr key={ product.id }>
                            <td>{ index + 1 }</td>
                            <td>{ product.title }</td>
                            <td>{ product.price }</td>
                            <td>
                                <Link to={`/edit-product/${product.id}`} className="button is-warning is-small">Edit</Link>
                                <button onClick={() => deleteProduct(product.id)} className="button is-danger is-small ml-2">Hapus</button>
                            </td>
                        </tr>

                    )) }

                </tbody>
            </table>

        </div>
    )
}

export default ProductList
