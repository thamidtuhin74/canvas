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
        
        })
        console.log(width)
            console.log(height)

        const circle = new fabric.Circle({
            radius: 50,
            fill: 'red',
            top:50,
            left: 50
        
        })
        // circle.set({ radius: 50, fill: '#f00', opacity: 0.7 });
        canvas.add(circle);


    },[dataFromModal])

    

    return (
        <div className='container mx-auto bg-black h-screen text-purple-700'>
            
            

            {/* <NewProjectModal></NewProjectModal> */}
            
            <Modal sendDataToCanvas={handleModalData}></Modal>
            <div>
                <h3 className="font-bold text-3xl text-center py-5
                ">This is Canvas</h3>
                {/* <canvas ></canvas> */}
                <canvas className=" " ref={canvasRef}></canvas>
            </div>
            {/* <div>
                <form onSubmit={handleSubmit(onSubmit) }>
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input className=' text-input input-bordered w-full max-w-xs bg-white  rounded' defaultValue="" placeholder=" name here" {...register("name", { required: true })} type="text" />
                {errors.exampleRequired && <span>This field is required</span>}
                        </div>
                        
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Height</span>
                            </label>
                            <input {...register("height", { required: true })} type="number" placeholder="Height" className="input input-bordered" />
                            {errors.exampleRequired && <span>This field is required</span>}

                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Width</span>
                            </label>
                            <input {...register("width", { required: true })} type="number" placeholder="width" className="input input-bordered" />
                            {errors.exampleRequired && <span>This field is required</span>}

                        </div>

                        

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </form> 
            </div> */}
        </div>
    );
};

export default Canvas;