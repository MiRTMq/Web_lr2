import { Product } from "../App";
import Item from "./Item";

export enum ListAction {
  selectAll,
  unSelectAll,
  none

};

interface Props {
  products: Product[];
  showCheckBoxes: boolean;
  allAction?: ListAction;
  onSelectedChange: (id: number) => void;
}

const List = ({  showCheckBoxes, products, onSelectedChange }: Props) => {


  return (
    <>
      <h1>({products.filter(e=>e.selected).length}) selected </h1>
      <div className="container text-center">
        <div className="row align-items-center justify-cintent-between">
          {products.map((product) => (
            <div className="col  p-2" >
              <Item
                showCheckBox={showCheckBoxes}
                product={product}
                onChange={onSelectedChange}
                checked={product.selected}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default List;
