import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Boton from "../../components/SharedComponents/Button";
import { editSoc } from '../../redux/Socios/socio.actions';

const EditSoc = () => {

    const [selectedSoc, setSelectedSoc] = useState({});
    const dispatch = useDispatch();
    const socios = useSelector((state) => state.Reduc.socios);
    const currentId = useParams();

    const navigate = useNavigate();
    const onSubmitHandler = () => {
        dispatch(editSoc(selectedSoc));
        navigate("/socios");
    };

    useEffect(() => {
        const socDetail = socios.filter(soc => soc.id === currentId.id);
        setSelectedSoc(socDetail[0]);
    }, [currentId]);

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <label>Nombre:</label>
                <input
                    type="text"
                    onChange={(e) => setSelectedSoc({ ...selectedSoc, name: e.target.value })}
                    value={selectedSoc.name}
                    name="name"
                    placeholder="Enter Name"
                />
                <label>Precio:</label>
                <input
                    type="text"
                    onChange={(e) => setSelectedSoc({ ...selectedSoc, price: e.target.value })}
                    value={selectedSoc.price}
                    name="price"
                    placeholder="Ingrese el precio"
                />
                <label>Stock:</label>
                <input
                    type="text"
                    onChange={(e) => setSelectedSoc({ ...selectedSoc, stock: e.target.value })}
                    value={selectedSoc.stock}
                    name="stock"
                    placeholder="Ingrese el stock"
                />
                <label>Descripcion:</label>
                <input
                    type="text"
                    onChange={(e) => setSelectedSoc({ ...selectedSoc, description: e.target.value })}
                    value={selectedSoc.description}
                    name="description"
                    placeholder="Ingrese la descripcion"
                />
                <Boton
                    tipo='socABM'
                    texto='Guardar' />
            </form>
        </div>
    );
};

export default EditSoc;