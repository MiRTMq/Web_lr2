import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import { Product } from '../App';

export enum ItemAction {
  select,
  unSelect
};

interface Props {
  product: Product;
  onChange: (id: number) => void;
  showCheckBox: boolean;
}
const  Item =   ({  product, showCheckBox, onChange }: Props) =>{


  



  return (
    <Card style={{ width: '12rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Form>
          {product.price} грн
          <div
            key={product.name}
            className="mb-3"
            hidden={!showCheckBox}
          >
            <Form.Check
             onChange={() => onChange(product.id)}
             checked={product.selected}
              label={
                (!product.selected)
                  ? "до кошика"
                  : "у кошику"}
              id={product.id.toString()}
            />
          </div>
        </Form>
        <div>

        </div>
      </Card.Body>
    </Card>
  );
}

export default Item;
