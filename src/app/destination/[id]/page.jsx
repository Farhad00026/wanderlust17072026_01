import BookingCard from "@/Component/BookingCard";
import Deletealert from "@/Component/Deletealert";
import Editcontact from "@/Component/Editcontact";
import { auth } from "@/lib/auth";
import { Button, Card } from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { GiConfirmed } from "react-icons/gi";

const DestinationPage = async ({ params }) => {
    const { id } = await params;
    const {token} = await auth.api.getToken({
        headers:  await headers()
    })
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination/${id}`,{
        headers:{
            authurization:`Bearer ${token}`
        }
    });
    const data = await res.json();

    const {
        destinationName,
        country,
        price,
        imageUrl,
        duration,
    } = data;


    return (
        <div className="min-h-screen px-4 py-6 sm:px-6 lg:px-10">

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-600 text-center mb-8">
                Destination Detail
            </h1>
            <div className="flex justify-end items-center">
                <Editcontact data={data}></Editcontact>
                <Deletealert data={data} />
            </div>


            {/* Card */}

            <Card className="max-w-5xl mx-auto overflow-hidden shadow-lg">
                {/* Image */}
                <div className="relative w-full h-60 sm:h-80 md:h-[450px]">
                    <Image
                        src={imageUrl}
                        alt={destinationName}
                        fill
                        className="object-cover"
                    />
                </div>
                {/* Details */}
                <div className="flex justify-between">
                    <div className="p-4 sm:p-6 space-y-5">
                        {/* Country + Price */}
                        <div className="
                            flex 
                            flex-col 
                            sm:flex-row 
                            sm:items-center 
                            sm:justify-between 
                            gap-3
                        ">
                            <div className="flex items-center gap-2 text-gray-600 text-sm sm:text-base">
                                <FaMapMarkerAlt className="text-blue-500" />
                                <span>{country}</span>
                            </div>


                            <div className="font-semibold text-base sm:text-lg">
                                Price: ${price}
                            </div>


                        </div>



                        {/* Name + Duration */}
                        <div className="
            flex 
            flex-col 
            sm:flex-row 
            sm:items-center 
            sm:justify-between 
            gap-4
          ">


                            <h2 className="
              text-xl 
              sm:text-2xl 
              font-bold 
              text-gray-700
            ">
                                {destinationName}
                            </h2>



                            <div className="flex items-center gap-2 text-gray-600">
                                <FaCalendarAlt />
                                <span>{duration}</span>
                            </div>


                        </div>




                        {/* Button */}
                        <div className="pt-4">

                            <Button
                                className="
                w-full 
                sm:w-auto 
                bg-green-500 
                text-white 
                font-semibold
                flex 
                items-center 
                justify-center 
                gap-2
              "
                            >

                                
                                View

                            </Button>

                        </div>


                    </div>
                    <BookingCard datas={data} />
                </div>

            </Card>




        </div>
    );
};


export default DestinationPage;