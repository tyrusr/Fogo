import { useState } from "react"
import { newListing } from "../hooks/useNewListing";
import { useNavigate } from 'react-router-dom';

export default function ListingForm() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const { handleNewListing, error, loading } = newListing();

    const placeholderUrl = "https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg";

    const onSubmit = async (e) => {
        e.preventDefault();
        
        //ensures the image was given and if not then we use the placeholder
        const finalImage = image.trim() === "" ? placeholderUrl : image;

        const result = await handleNewListing(name, price, description, finalImage);
        if (result) {
            navigate('/')
        }
    };
    
    return (
    <form onSubmit={onSubmit}>
        <div className="new-listing-form">
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
                value={image}
                onChange={(e) => setImage(e.target.value)}
                placeholder="Image URL"
            />
            <button type="submit" disabled={loading}>
                {loading ? "Creating listing" : "Create"}
            </button>
            {error && <p style={{ color: "red"}}>{error}</p>}
        </div>
    </form>
    );
}