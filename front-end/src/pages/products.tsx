import React from 'react';

import Layout from '../components/Layout';
import ProductList from '../components/products/Products';


const ProductsPage = () => {
    console.log('location',location);
    
    return (
        <Layout title='Products' >
            <ProductList/>
        </Layout>
    );
};

export default ProductsPage;
