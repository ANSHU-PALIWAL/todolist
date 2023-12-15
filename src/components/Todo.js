import React, { useEffect, useState } from 'react'
import './style.css'

// get local storega data back
const getLocalData = () => {

    const lists = localStorage.getItem("mytodoList");

    if (lists) {
        return JSON.parse(lists);
    }
    else {
        return []
    }
}

const Todo = () => {

    const [inputdata, setInputData] = useState("");
    const [items, setItems] = useState(getLocalData());
    const [isEditItem, setIsEditItem] = useState("");
    const [toggleButton, setToggleButton] = useState(false);

    // add input items
    const additem = () => {
        if (!inputdata) {
            let arr = document.querySelector("input");
            arr.style.border = "0.1rem solid red";

            let arrrrr = document.querySelector(".caption");
            arrrrr.style.color = "red";
            // setTimeout(() => {
            //     alert("FILL OUT THE DATA")
            // }, 100)
        }
        else if (inputdata && toggleButton) {
            setItems(
                items.map((curElem) => {
                    if (curElem.id === isEditItem) {
                        return { ...curElem, name: inputdata }
                    }
                    return curElem;
                })
            )

            setInputData("");
            setIsEditItem(null);
            setToggleButton(false);
        }
        else {
            const myNewInputData = {
                id: new Date().getTime().toString(),
                name: inputdata,
            };
            let arr = document.querySelector("input");
            arr.style.border = "0.1rem solid green";

            let arrrrr = document.querySelector(".caption");
            arrrrr.style.color = "green";

            setItems([...items, myNewInputData]);
            setInputData("");
        }
    }

    // delete input items
    const deleteItem = (index) => {

        const updateItem = items.filter((curElem) => {
            return curElem.id !== index;
        });

        setItems(updateItem);

    }

    // edit items
    const editItem = (index) => {

        const item_todo_edited = items.find((curElem) => {
            return curElem.id === index;
        });

        setInputData(item_todo_edited.name);
        setIsEditItem(index);
        setToggleButton(true);

        let arr = document.querySelector("input");
        arr.style.border = "0.1rem solid green";

        let arrrrr = document.querySelector(".caption");
        arrrrr.style.color = "green";

    };

    // remove all inputs items together
    const removeAll = () => {
        // alert('DO YOU WANT TO CLEAR ALL TASKS')
        setItems([]);
    }

    // adding local storage
    useEffect(() => {
        localStorage.setItem("mytodoList", JSON.stringify(items));
    }, [items]);

    return (
        <>
            <div className='main-div'>
                <div className='container center-r'>
                    <div className='row'>

                        <div className='col-md-6'>

                            {/* heading */}
                            <h1 className='caption'>tasks to do 📃</h1>
                            {/* heading */}


                            {/* input */}
                            <div className='addItems'>
                                <input type='text' placeholder='Add Tasks 📝' className='form-control' value={inputdata} onChange={(event) => setInputData(event.target.value)} required />
                                {toggleButton ? (<i class="fa-solid fa-file-arrow-down" onClick={additem}></i>) : (<i className="fa-solid fa-plus add-btn" onClick={additem}></i>)}
                            </div>
                            {/* input */}


                            {/* added items div */}
                            <div className="showItems">
                                {items.map((curElem) => {
                                    return (
                                        <div className="eachItem" key={curElem.id}>
                                            <h3>{curElem.name}</h3>
                                            <div className="todo-btn">
                                                <i className="fa fa-edit add-btn" onClick={() => editItem(curElem.id)}></i>
                                                <i className="fa fa-trash add-btn" onClick={() => deleteItem(curElem.id)}></i>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                            {/* added items div */}


                            {/* remove button */}
                            <div className='showItems'>
                                <div className="buttons">
                                    <button onClick={removeAll} className="btn"><span></span><p data-start="good luck!" data-text="DELETE ALL !" data-title="REMOVE TASKS"></p></button>
                                </div>
                            </div>
                            {/* remove button */}

                        </div>

                        {/* side image */}
                        <div className='col-md-6'>
                            <div className='vec-image'>
                                <img src='./images/18915856-removebg-preview.png' alt='todologo' />
                            </div>
                        </div>
                        {/* side image */}

                    </div>
                </div>
            </div>
        </>
    )
}
export default Todo