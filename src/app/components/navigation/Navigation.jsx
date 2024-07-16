import Link from 'next/link';

const Navigation = () => {
  return (
    <nav className=" p-2 flex items-center justify-center">
      <ul className="flex items-center md:space-x-4 space-x-2 text-black ">
        {[1, 2, 3, 4, 5].map((number) => (
          <li key={number} className="hover:bg-[#9dc5e0] md:px-4 px-2 md:py-2 py-1 rounded-md">
            <Link href={`/page${number}`}>
          {number}
                </Link>
          </li>
        ))}
        <li className="">
          <Link href="/next" className="hover:underline cursor-pointer text-[#007ACC]">
           Next
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
