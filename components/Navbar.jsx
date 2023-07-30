import Link from "next/link";

export default function Navbar() {
  return (

    <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <Link href={"/"}>  <div class="flex items-center flex-shrink-0 text-white mr-6">

        <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg>

        <span class="font-semibold text-xl tracking-tight">Crud </span>

      </div>
      </Link>



      <div>
        <Link href="/addtodo" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Add Todo</Link>

      </div>
    </nav>
    // <nav className="flex justify-between items-center bg-slate-800 px-8 py-3">
    //   <Link className="text-white font-bold" href={"/"}>
    //     GTCoding.
    //   </Link>
    //   <Link className="bg-white p-2" href={"/addTopic"}>
    //     Add Topic
    //   </Link>
    // </nav>
  );
}
