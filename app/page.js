import CustomCard from "@/components/card";
import Header from "@/components/header";

export default function Home() {
  return (
    <div className='h-[100vh]'>
      <Header />
      <div className="flex justify-center">
        <CustomCard />
      </div>
    </div>
  );
}
