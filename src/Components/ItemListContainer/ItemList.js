import { useState } from 'react';
import Item from '../Item/Item';

function ItemList() {
    const [Item, setItem] = useState([]);
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(Item), 2000);
                {Item.map((prods) => {
                    return (
                    <div>
                      <ul>  
                        <li style={{ color: 'Black' }} key={prods.name}>
                                  {prods.name}
                        </li>
                        <li style={{ color: 'Black' }} key={prods.title}>
                                  {prods.title}
                        </li>
                        <li style={{ color: 'Black' }} key={prods.stock}>
                                  {prods.stock}
                        </li>
                        </ul> 
                    </div>
                    );
                })}
    });
}
export default ItemList;