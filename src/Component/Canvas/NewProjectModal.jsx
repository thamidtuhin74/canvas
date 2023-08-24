import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';


const NewProjectModal = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();


    const onSubmit = (data) => {
        console.log(data);
    }

    const newProjectHandeler = () =>{
        // const { value: formValues } = await Swal.fire({
        //     title: 'Multiple inputs',
            
        //     focusConfirm: false,
        //     preConfirm: () => {
        //       return [
        //         document.getElementById('swal-input1').value,
        //         document.getElementById('swal-input2').value
        //       ]
        //     }
        //   })
          
        //   if (formValues) {
        //     Swal.fire(JSON.stringify(formValues))
        //   }
        

    }

    return (
        <div>
            <button className="btn" onClick={()=>newProjectHandeler()}>New Project</button>

            {/* You can open the modal using ID.showModal() method */}
            <button className="btn" onClick={()=>window.my_modal_3.showModal()}>open modal</button>
            <dialog id="my_modal_3" className="modal">
                {/* <form method="dialog" className="modal-box">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Press ESC key or click on ✕ button to close</p>
                </form> */}
                {
                
                
    
            }

                <div method="dialog" className="modal-box">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    <form onSubmit={handleSubmit(onSubmit) }>
                        {/* <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            <h3 className="font-bold text-lg">Hello!</h3>
                            <p className="py-4">Press ESC key or click on ✕ button to close</p>
                        */}
                        
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input className=' text-input input-bordered w-full max-w-xs bg-white  rounded' defaultValue="" placeholder=" name here" {...register("name")} type="text" />
                                {errors.exampleRequired && <span>This field is required</span>}
                            </div>
                            
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Height</span>
                                </label>
                                <input {...register("height")} type="number" placeholder="Height" className="input input-bordered" />
                                {errors.exampleRequired && <span>This field is required</span>}

                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Width</span>
                                </label>
                                <input {...register("width")} type="number" placeholder="width" className="input input-bordered" />
                                {errors.exampleRequired && <span>This field is required</span>}

                            </div>

                            

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Submit</button>
                            </div>
                        </div>
                        
                    </form> 
                    <div className="modal-action">
                        {/* if there is a button, it will close the modal */}
                            <button className="btn">Close</button>
                        </div>
                </div>
                
            </dialog>
        </div>
    );
};

export default NewProjectModal;