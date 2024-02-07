import Image from "next/image";

export default function Home() {
  return (
    <>
    <h2>welcome</h2>
    hello WEB!
    <br />
    <Image src="/hand.jpg" alt="Hand Image" priority={true} width={100} height={100} />
    </>
  );
}
