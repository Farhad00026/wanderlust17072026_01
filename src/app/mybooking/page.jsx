import { BookingCancleAlert } from "@/Component/BookingCanclealert";
import { auth } from "@/lib/auth";
import { Button } from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";
import { BiTrash } from "react-icons/bi";

const mybookingpage = async() => {
    const session = await auth.api.getSession({
    headers: await headers() // you need to pass the headers object.
    })
    const user = session?.user;
    

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${user?.id}`);
        const bookings = await res.json();
    return (
        <div className="max-w-7xl mx-auto ">
            <h1 className="text-center text-3xl mb-2"> Booking Information for user : {user?.name}</h1>
            <div>
                {
                    bookings.map(booking => <div key={booking._id} className="flex gap-5 border mb-5 min-w-3xl items-center">
                        <Image src={booking.imageUrl} alt="imgone" height={300} width={300}></Image>
                        <div>
                            <h1 className="text-2xl font-bold">{booking.destinationName}</h1>
                            <p>Date: {new Date(booking.destinationDate).toLocaleDateString()}</p>
                            <p>Booking ID : {booking._id}</p>
                            <p className="text-3xl font-bold text-cyan-300"> ${booking.price}</p>

                            <BookingCancleAlert bookingId={booking?._id}/>
                            
                        </div>

                    </div>)
                }
            </div>
        </div>
    );
};

export default mybookingpage;