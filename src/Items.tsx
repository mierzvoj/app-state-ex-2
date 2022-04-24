import React, {useState} from "react";
import ReactDOM from "react-dom/client";
import Item from "./Item";

export const Items = ({
                          listItems
                      }
:{
    listItems: any,
}) => {


    const getRandom = () => Math.floor(Math.random() * 10);
    const array: number[] = [];
    for (let k = 0; k < 10; k++) {
        array.push(getRandom());
    }

    listItems = array.map((index, i) => (
        <li key={`${i}`}> {array}</li>));

    const [value, setValue] = useState(listItems);

    const handleDelete = (itemId: number) => {
        const items = [...state.listItems];
        var index = items.findIndex((i) => i.id === itemId);
        if (index !== -1) {
            items.splice(index, 1);
            setValue({items});
        }
    }


    return (

        <div>
            <Item passingItemsToChild = {listItems}/>
        </div>


    );
}

export default Items;


