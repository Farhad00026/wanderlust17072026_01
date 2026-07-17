import { Button, Card } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { GiConfirmed } from "react-icons/gi";

const DestinationCard = ({ data }) => {
  const {
    destinationName,
    country,
    price,
    imageUrl,
    duration,
    _id
  } = data;

  return (
    <Card className="w-full overflow-hidden shadow-md hover:shadow-lg transition">
      
      {/* Image */}
      <div className="relative w-full h-48 sm:h-56 md:h-64">
        <Image
          src={imageUrl}
          alt={destinationName}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-4">

        {/* Country + Price */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          
          <div className="flex items-center gap-2 text-sm sm:text-base">
            <FaMapMarkerAlt className="text-primary" />
            <span>{country}</span>
          </div>

          <div className="font-semibold text-sm sm:text-base">
            Price: ${price}
          </div>

        </div>


        {/* Destination + Duration */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

          <h3 className="font-semibold text-base sm:text-lg">
            {destinationName}
          </h3>


          <div className="flex items-center gap-2 text-sm text-gray-600">
            <FaCalendarAlt />
            <span>{duration}</span>
          </div>

        </div>

      </div>
      <Link href={`/destination/${_id}`}>
            <Button variant="outline" className="text-blue-300"> <span><GiConfirmed /></span>Book Now</Button>

      </Link>

    </Card>
  );
};

export default DestinationCard;