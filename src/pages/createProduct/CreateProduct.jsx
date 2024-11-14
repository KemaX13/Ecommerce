import { useState } from "react";
import { createProduct } from "../../services/ApiProductsService";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const CreateProduct = () => {
    const [name, setName] = useState("");
    const [developer, setDeveloper] = useState("");
    const [platform, setPlatform] = useState("");
    const [date, setDate] = useState("");
    const [price, setPrice] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");

    const navigate = useNavigate();

    const addProduct = async (event) => {
        event.preventDefault();

        const newProduct = {
            name: name,
            developer: developer,
            platform: platform,
            date: date,
            price: price,
            imageUrl: imageUrl,
            category: category,
            description: description
        }

        await createProduct(newProduct);
        navigate("/")
    }

    return (
        <form onSubmit={addProduct}>
            <div>
                <label>Nombre:</label>
                <input type="text"
                       value={ name }
                       onChange={(event) => setName(event.target.value)}/>
            </div>
            <div>
                <label>Desarollador:</label>
                <input type="text"
                       value={developer}
                       onChange={(event) => setDeveloper(event.target.value)}
                />
            </div>
            <div>
                <label>Plataforma:</label>
                <input type="text"
                       value={platform}
                       onChange={(event) => setPlatform(event.target.value)}
                />
            </div>
            <div>
                <label>Fecha:</label>
                <input type="text"
                       value={date}
                       onChange={(event) => setDate(event.target.value)}
                />
            </div>
            <div>
                <label>Precio:</label>
                <input type="text"
                       value={price}
                       onChange={(event) => setPrice(event.target.value)}/>
            </div>
            <div>
                <label>Url de la imagen:</label>
                <input type="text"
                       value={imageUrl}
                       onChange={(event) => setImageUrl(event.target.value)}/>
            </div>
            <div>
                <label>Categoria:</label>
                <input type="text"
                       value={category}
                       onChange={(event) => setCategory(event.target.value)}/>
            </div>
            <div>
                <label>Descripción:</label>
                <input type="text"
                       value={description}
                       onChange={(event) => setDescription(event.target.value)}/>
            </div>
            <button type="submit">Add Product</button>
            <Link to={"/"}><button>Cancel</button></Link>
        </form>
    )
}

export default CreateProduct