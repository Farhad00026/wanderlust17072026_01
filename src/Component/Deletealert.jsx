"use client";
import { TrashBin } from "@gravity-ui/icons";
import { AlertDialog, Button } from "@heroui/react";
import { redirect } from "next/navigation";
const Deletealert = ({data}) => {
    const {_id}=data;
    const handledelete= async()=>{
        const res= await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination/${_id}`,{
            method:"DELETE",
            headers:{
                'content-type':'application/json',
            }
            
        });
        const data = await res.json();
        redirect("/destination");

    }
    return (
        <div>
            <AlertDialog>
                <Button  className=" text-red-400 rounded-none" variant="outline"> <TrashBin/> Delete</Button>
                <AlertDialog.Backdrop>
                    <AlertDialog.Container>
                        <AlertDialog.Dialog className="sm:max-w-[400px]">
                            <AlertDialog.CloseTrigger />
                            <AlertDialog.Header>
                                <AlertDialog.Icon status="danger" />
                                <AlertDialog.Heading>Delete project permanently?</AlertDialog.Heading>
                            </AlertDialog.Header>
                            <AlertDialog.Body>
                                <p>
                                    This will permanently delete.
                                </p>
                            </AlertDialog.Body>
                            <AlertDialog.Footer>                               
                                <Button onClick={handledelete} slot="close" variant="danger">
                                    Delete
                                </Button>
                            </AlertDialog.Footer>
                        </AlertDialog.Dialog>
                    </AlertDialog.Container>
                </AlertDialog.Backdrop>
            </AlertDialog>
        </div>
    );
};

export default Deletealert;