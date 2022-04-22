import React, {useState} from "react";
import "./App.css";
import ReactDOM from "react-dom/client";


const arr: number[] = [];


function App() {
    const getRandom = () => Math.floor(Math.random() * 10);

    for (let k = 0; k < 10; k++) {
        arr.push(getRandom());

    }

    console.log(arr);

    const listItems = arr.map((numbers, i) => (
        <li key={`numbers -${i}`}> {numbers}</li>

    ));


    const [inputNumbers, setValue] = useState([listItems]);


    function handleDelete(itemId: number) {
        const items = [...state.inputNumbers];
        var index = items.findIndex((i) => i.id === itemId);
        if (index !== -1) {
            items.splice(index, 1);
            setValue({items});
        }
    }

    // function deleteHandler = (itemId: number) => handleDelete(itemId);

    return (
        <ul>
            {inputNumbers}
        </ul>

    );
}

export default App;


const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(<App/>);
