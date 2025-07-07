import { useState } from "react"
import { newListing } from "../hooks/useNewListing";
import { useNavigate } from 'react-router-dom';

export default function ListingForm() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const {handleNewListing, error, loading } = newListing;

    const onSubmit = async (e) => {
        e.preventDefault();
        const result = await handleNewListing(name, price, description, image);
        if (result) {
            navigate('/')
        }
    };
    
    return (
    <form onSubmit={onSubmit}>
        <input
        type="text"
        id="name"
        name="name"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Listing Name"
        />
        <input 
        type="number"
        step="0.01"
        min="0"
        id="price"
        name="price"
        required
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Set Price"
        />
        <textarea 
        id="description"
        name="description"
        required
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        />
        <input 
            type="text"
            id="image"
            name="image"
            required
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="Image URL"
        />
        <button type="submit" disabled={loding}>
            {loading ? "Creating listing" : "Create"}
        </button>
        {error && <p style={{ color: "red"}}>{error}</p>}
    </form>
    );
}