
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import api from '../services/api';
import { IProduct } from '../store/modules/cart/types';
import CatalogItem from './CatalogItem';

const Catalog: React.FC = () => {
  const dispatch = useDispatch();
  const [catalog, setCatalog] = useState<IProduct[]>([]);

  useEffect(() => {
    api.get('products').then(response => {
      setCatalog(response.data);
    })
  }, []);



  return (
    <main>
      <h1>Catalog</h1>
      <br />
      {catalog.map(product => (
        <CatalogItem key={product.id} product={product} />
      ))}
    </main>
  );
}

export default Catalog;