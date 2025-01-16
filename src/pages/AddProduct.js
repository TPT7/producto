// src/pages/AddProduct.js
import { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import styled from 'styled-components';


const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  background-color: #007BFF;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

function AddProduct() {
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState(0);

  const handleAddProduct = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, 'products'), {
      name: productName,
      description: productDescription,
      price: productPrice,
      addedBy: 'USER_ID' // Replace with actual user ID
    });
  };

  return (
    <Form onSubmit={handleAddProduct}>
      <Input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} placeholder="Product Name" />
      <textarea value={productDescription} onChange={(e) => setProductDescription(e.target.value)} placeholder="Product Description"></textarea>
      <Input type="number" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} placeholder="Product Price" />
      <Button type="submit">Add Product</Button>
    </Form>
  );
}

export default AddProduct;
