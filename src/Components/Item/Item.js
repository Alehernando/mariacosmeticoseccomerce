import { useState, useEffect } from 'react';

const Cosmeticos = () => {
    return new Promise((resolve, reject) => {
        const cosmetico = [
            { id: '01', marca: 'Revlon', producto: 'Sombra de ojos', price: 500, stock: 5 },
            { id: '02', marca: 'Lancome', producto: 'Rubor Beige', price: 1000, stock: 6 },
            { id: '03', marca: 'Mac', producto: 'Labial Rojo', price: 1500, stock: 7 },
        ];
        setTimeout(() => resolve(cosmetico), 2000);
    });
};
const Item = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        const listItems = Cosmeticos();
        listItems.then((result) => setItems(result));
        return () => {
            setItems([items]);
        };
    }, []);
};
export default Item;