import { useSession } from "next-auth/react";
import { ChevronDownIcon } from "@heroicons/react/outline";

function Center() {
  const { data: session } = useSession();

  return (
    <div className="flex flex-grow">
      <header>
        <div className="flex items-center text-white space-x-3 opacity-90 hover:opacity-80">
          <img
            className="rounded-full w-10 h-10"
            src={session?.user.image}
            alt="Image"
          />
          <h2>{session?.user.name}</h2>
          <ChevronDownIcon className="h-5 w-5" />
        </div>
      </header>
    </div>
  );
}

export default Center;
