"use client";

import { AlertDialog, Button } from "@heroui/react";
import { BiTrash } from "react-icons/bi";

export function BookingCancleAlert({ bookingId }) {

  const handleCanclebooking = async () => {

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${bookingId}`, {
        method: "DELETE",
        headers:{
            "content-type":"application/json",
        }
    });

    const data = await res.json();
    
    window.location.reload();
};
    return (
        <AlertDialog>
            <Button className="rounded-none text-red-500" variant="outline" >
                <BiTrash></BiTrash>
                Cancle</Button>
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
                                This will permanently delete
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>

                            <Button onPress={handleCanclebooking} slot="close" variant="danger">
                                Delete
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}