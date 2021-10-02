import React from 'react';

import Layout from '../components/Layout';
import ProductList from '../components/products/Products';

const ProductsPage = () => {
    return (
        <Layout title='Products'>
            <h1>List of products</h1>
            <ProductList/>
        </Layout>
    );
};

export default ProductsPage;
