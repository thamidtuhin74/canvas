// import React from 'react';
import { fabric } from "fabric";
import { useEffect, useRef, useState } from "react";
import { useForm } from 'react-hook-form';
import NewProjectModal from "./NewProjectModal";
import Swal from 'sweetalert2'
import Modal from "./Modal";

const Canvas = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [height , setHeight] = useState();
    const [width , setWidth] = useState();
    const [name , setName] = useState();
    const [dataFromModal, setDataFromModal] = useState();
    const [penWidth , setPenWidth] = useState(3);
    const [fabricCanvas , setFabricCanvas] = useState();

    const handleModalData = (data) => {
        setDataFromModal(data);
        console.log(data);
        console.log(dataFromModal);

      };

    const onSubmit = (data) => {
        

        setHeight(data.height);
        setWidth(data.width);
        setName(data.name);

        console.log(height);

    };

    // const [newProject, setNewProject] = useState(false);
    const canvasArea = {
        height : 500,
        width: 800
    }



    const canvasRef = useRef(null);

    useEffect(()=>{
        const canvas = new fabric.Canvas(canvasRef.current,{
            backgroundColor: 'white',
            width: `${dataFromModal?.width}`,
            

            height: `${dataFromModal?.height}`,
        
            // width: `${canvasArea.width}`,
            // height: `${canvasArea.height}`,
            isDrawingMode: true,
            // selection:true,
            // selectionColor: 'yellow',
            // selectionLineWidth:3,
            
        
        })

        setFabricCanvas(canvas);

        const circle = new fabric.Circle({
            radius: 50,
            fill: 'red',
            top:50,
            left: 50
        
        })
        // circle.set({ radius: 50, fill: '#f00', opacity: 0.7 });
        canvas.add(circle);


    },[dataFromModal])

    const changePenWidth = (width) =>{
        if(fabricCanvas){
            fabricCanvas.freeDrawingBrush.width = width;
            setPenWidth(width);
            fabricCanvas.renderAll.bind(fabricCanvas);
        }
    }

    

    return (
        <div className='container mx-auto bg-black h-screen text-purple-700'>
           
            <Modal sendDataToCanvas={handleModalData}></Modal>
            <div>
                <h3 className="font-bold text-3xl text-center py-5
                ">This is Canvas</h3>
                {/* <canvas ></canvas> */}
                <canvas className=" " ref={canvasRef}></canvas>
            </div>
            <div>
                <label htmlFor="Pen WIdth - "></label>
                <input type="range" onChange={e=> changePenWidth(e.target.value)} value={penWidth} min={1} max={30} />
            </div>
            
        </div>
    );
};

export default Canvas;