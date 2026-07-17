import Destinationcard from "@/Component/Destinationcard";

const destinationpage = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination`);
    const datas = await res.json();
    return (
        <div className="max-w-7xl mx-auto">
            <h1 className="text-green-300 font-bold text-3xl text-center">Your Destination Place </h1>
            <div className="grid grid-cols-3 gap-3">
                {
                    datas.map(data => <Destinationcard key={data._id} data={data}></Destinationcard>)
                }
            </div>

        </div>
    );
};

export default destinationpage;