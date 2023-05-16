import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";

const AddProduct = () => {

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const Navigate = useNavigate();

    const saveProduct = async (e) => {

        e.preventDefault();
        const product = { title, price };

        await fetch('http://localhost:8080/products', {

            method: "POST",
            body: JSON.stringify(product),
            headers: {
                'Content-Type': 'application/json'
            }

        });

        Navigate('/');

    }

    return (
        <div className="ml-5 mr-5 mt-5">
            <form onSubmit={saveProduct}>
                <h3 className="title is-3 ml-auto me-auto">ADD PRODUCT</h3>
                <Link to={'/'} className="button is-warning is-small mb-3">Back</Link>
                <div className="field mb-4">
                    <label htmlFor="" className="label">Title</label>
                    <div className="control">
                        <input type="text" className="input" value={title} placeholder="Enter title" onChange={(e) => setTitle(e.target.value)} />
                    </div>
                </div>
                <div className="field mb-5">
                    <label htmlFor="" className="label">Price</label>
                    <div className="control">
                        <input type="number" className="input" value={price} placeholder="Enter Price" min="1" onChange={(e) => setPrice(e.target.value)} />
                    </div>
                </div>
                <button className="button is-link is-fullwidth">Save</button>
            </form>
        </div>
    )
}

export default AddProduct
