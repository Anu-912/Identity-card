export default function ({sgender,sname,semail,studentcode,idpic}) {
  return (
    <div className="flex flex-col items-center">
<div className="w-[600px] h-[400px] rounded-3xl bg-blue-400 p-6">
  <div className="border-b-2 border-b-emerald-500 w-[500px]  ">   
     <h1 className="text-3xl font-bold text-emerald-500">STUDENT</h1>
</div>
<div className="flex">
  <div className="flex flex-col">
<p className="text-[20px] text-amber-50">IDENTITY CARD</p>
<p className="text-[20px] text-emerald-500">Gender</p>
<p className="text-[20px] text-black">{sgender}</p>
<p className="text-[20px] text-emerald-500">Name</p>
<p className="text-[20px] text-black">{sname}</p>
<p className="text-[20px] text-emerald-500">Email</p>
<p className="text-[20px] text-black">{semail}</p>
</div>
<div className="flex flex-col">
              <img className="h-[250px] w-[250px] object-cover " src={idpic} />
<p className="text-[20px] text-black" >{studentcode}</p>
</div>
</div>
</div>
</div>  );
}
