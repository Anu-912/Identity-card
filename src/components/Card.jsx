export default function ({sgender,sname,semail,studentcode}) {
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
  <img className="h-20 w-6xl" src="https://th.bing.com/th/id/R.f83c07d0f3b9b5b675978840fb853a94?rik=yKuXjlBMWPzsRA&riu=http%3a%2f%2f4.bp.blogspot.com%2f-dZ4VlGvH9vc%2fUBlJXsjGreI%2fAAAAAAAARvA%2fSKXP-99TZaM%2fs1600%2ffunny-cat-pictures-009-045.jpg&ehk=grXffVQODzBpt9kVJIK8a8AiYziWaeb6tev7AIOtw4I%3d&risl=&pid=ImgRaw&r=0"/>
<p className="text-[20px] text-black" >{studentcode}</p>
</div>
</div>
</div>
</div>  );
}
