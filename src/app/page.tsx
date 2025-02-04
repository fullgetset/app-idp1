import { Button } from "@components";
import Link from "next/link";

export default function Home() {
  return (
    <div className=''>
      <Link href={'/login'}>
        <Button>login</Button>
        s
      </Link>
    </div>
  );
}
