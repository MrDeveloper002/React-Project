import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { delteItem } from "./cartSlice";

function DeleteItem({ pizzaId }) {
   const dispatch = useDispatch();

   return (
      <Button type='small' onClick={() => dispatch(delteItem(pizzaId))}>
         Delete
      </Button>
   );
}

export default DeleteItem;
