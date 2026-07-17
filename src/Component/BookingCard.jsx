'use client'
import { authClient } from "@/lib/auth-client";
import { Button, Card, DateField, Label } from "@heroui/react";
import { useState } from "react";
import toast from "react-hot-toast";
const BookingCard = ({ datas }) => {
    const {
        _id,
        destinationName,
        country,
        price,
        imageUrl,
        duration,
    } = datas;
    const {
        data: session,

    } = authClient.useSession()
    const user = session?.user;
    const [value, setValue] = useState(null);

   const handlebooking = async () => {
    if (!user) {
        console.log("You must be logged in to book.");
        return;
    }
    if (!value) {
        console.log("Please select a date.");
        return;
    }

    const bookingData = {
        userid: user?.id,
        username: user?.name,
        useremail: user?.email,
        userimage: user?.image,
        destinationDate: new Date(value),
        _id,
        destinationName,
        country,
        price,
        imageUrl,
        duration
    };

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(bookingData)
    });
    const results = await res.json();
    toast.success('Your Booked successful');  
};


    return (
        <div>
            <Card className="border mt-5 rounded-none">
                <h1>Booking for country : {country}</h1>
                <p>Starting From : {destinationName}</p>
                <p className="text-3xl text-cyan-300 font-bold">${price}</p>
                <p>Days:{duration}</p>
                <DateField className="w-[256px] rounded-none" name="date" onChange={setValue}>
                    <Label>Date</Label>
                    <DateField.Group>
                        <DateField.Input>

                            {(segment) => <DateField.Segment segment={segment} />}

                        </DateField.Input>
                    </DateField.Group>
                </DateField>
                <Button onClick={handlebooking} className={`rounded-none bg-cyan-300 w-full`}>Book Now</Button>
            </Card>
        </div>
    );
};

export default BookingCard;