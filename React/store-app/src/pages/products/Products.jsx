import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import { useForm } from "react-hook-form";
import { db } from "../../firebase/config";
import { useEffect } from "react";
import { useState } from "react";

export const Products = () => {
  const { register, handleSubmit, reset, setValue } = useForm();
  const [products, setProducts] = useState([]);
  const [editId, setEditId] = useState(null);

  // Read -> traer todos los documentos desde FireStore
  const getProducts = async () => {
    const productsCollection = await getDocs(collection(db, "products"));
    const data = productsCollection.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    console.log(data);
    setProducts(data);
  };

  // Create -> Enviar un nuevo doc a la coleccion de Firebase
  const addProduct = async (data) => {
    console.log(data);
    // Enviar a firestore
    const response = await addDoc(collection(db, "products"), {
      name: data.name,
      price: parseFloat(data.price),
      stock: parseInt(data.stock)
    });
    console.log(response);
    reset();
    getProducts();
  };

  // editProduct  -> obtener los datos del producto y setearlos en los input del form
  const editProduct = (producto) => {
    console.log("Editando un producto");
    console.log(producto);
    setValue("name", producto.name);
    setValue("price", producto.price);
    setValue("stock", producto.stock);
    // Guardamos el id para poder actualizar el producto
    setEditId(producto.id);
  };

  // updateProduct -> actualizar un doc en la coleccion
  const updateProduct = async (data) => {
    const docRef = doc(db, "products", editId);

    await updateDoc(docRef, {
      name: data.name,
      price: parseFloat(data.price),
      stock: parseInt(data.stock)
    });

    setEditId(null);
    reset();
    getProducts();
  };

  // Eliminar un documento de la coleccion
  const deleteProduct = async (id) => {
    const docRef = doc(db, "products", id);
    await deleteDoc(docRef);

    getProducts();
  };

  useEffect(() => {
    // Ejecutamos funciones al momento de montar el componente
    getProducts();
  }, []);
  return (
    <>
      <h2>Productos</h2>

      <form onSubmit={editId ? handleSubmit(updateProduct) : handleSubmit(addProduct)}>
        <section>
          <label htmlFor="">Nombre de producto</label>
          <input type="text" {...register("name")} required />
        </section>
        <section>
          <label htmlFor="">Precio</label>
          <input type="text" {...register("price")} required />
        </section>
        <section>
          <label htmlFor="">Cantidad</label>
          <input type="text" {...register("stock")} required />
        </section>
        <button type="submit">{editId ? "Editar" : "Enviar"}</button>
      </form>
      <main>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              // Listar los productos
              products.map((product) => {
                return (
                  <tr key={product.id}>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.stock}</td>
                    <td>
                      <button
                        onClick={() => {
                          editProduct(product);
                        }}
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => {
                          deleteProduct(product.id);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      </main>
    </>
  );
};
