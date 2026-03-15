import { useParams } from "react-router-dom";
import { products } from "../data/Product";

export default function ProductDetails(){

const { slug } = useParams();

const product = products.find((p)=>p.slug === slug);

if(!product){
return <div className="p-20 text-center">Product not found</div>
}

return (

<div className="py-40 px-6 bg-gray-50">

<div className="max-w-7xl mx-auto">

<h1 className="text-4xl font-bold mb-10">
{product.name}
</h1>

<div className="grid md:grid-cols-4 gap-8">

{product.items.map((item,index)=>(

<div
key={index}
className="bg-white rounded-lg shadow hover:shadow-xl transition p-4 text-center"
>

<img
src={item.img}
className="w-full h-[180px] object-contain mb-4"
/>

<h3 className="font-medium">
{item.name}
</h3>

</div>

))}

</div>

</div>

</div>

)
}