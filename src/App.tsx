import './App.css';
import { useEffect, useState } from 'react';
import { bubbleSort, heapSort, mergeSort, quickSort } from './algorithms';
function App() {
    interface Bar {
        value: number,
        color: string
    }
    enum Algorithms {
        quickSort = 'Quick Sort',
        mergeSort = 'Merge Sort',
        heapSort = 'Heap Sort',
        bubbleSort = 'Bubble Sort'
    }
    const [algo, setalgo]: any = useState(Algorithms.quickSort);
    const [array, setarray] = useState<Bar[]>([]);
    const [change, setchange]: any = useState(0.8);
    const size = 80;
    useEffect(() => {
        resetArray();
    }, [])
    function resetArray() {
        let temp: Bar[] = [];
        for (let i = 0; i < size; i++) {
            let min = 20, max = 500;
            temp.push({ value: Math.floor(Math.random() * (max - min + 1) + min), color: "#7CB9E8" });
        }
        setarray(temp);
    }
    function handleAlgoChange(e: any) {
        setalgo(e.currentTarget.value);
        resetArray();
    }
    async function sort() {
        let arr = array;
        console.log("before: ", arr);
        switch (algo) {
            case Algorithms.quickSort:
                await quickSort(arr, 0, arr.length - 1, setchange);
                break;
            case Algorithms.mergeSort:
                await mergeSort(arr, 0, arr.length - 1, setchange);
                break;
            case Algorithms.bubbleSort:
                await bubbleSort(arr, setchange);
                break;
            case Algorithms.heapSort:
                await heapSort(arr, setchange);
                break;
            default:
                break;
        }
        console.log("after: ", arr);
    }

    return (
        <>
           
            <div className="head">
                <div className="frame">
                    <div className="boundary-sorting">
                        {array.map((e: Bar, idx) => <div className="bar" key={idx} style={{ height: e.value, background: e.color, width: (window.innerWidth * 0.6) / size }}></div>)}
                    </div>
                </div>
            </div>
            <div className="nav">
                <h3>Sorting Algorithm: {algo}</h3>
                <select onChange={handleAlgoChange}>
                    <option>{Algorithms.quickSort}</option>
                    <option>{Algorithms.mergeSort}</option>
                    <option>{Algorithms.heapSort}</option>
                    <option>{Algorithms.bubbleSort}</option>
                </select>
                <button onClick={resetArray}>Reset</button>
                <button onClick={sort}>Sort</button>

            </div>
        </>
    )
}

export default App;