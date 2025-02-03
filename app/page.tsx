import Header from "@/components/Header";
import MainButton from "@/components/MainButton";

export default function Home() {
  return (
      <div className="bg-black text-white">
      <Header/>
        <hr className="bg-white"/>
        <div className="flex justify-evenly m-2 mt-32">
        <MainButton name="Videos" />
        <MainButton name="Socials"/>
        <MainButton name="Analytics"/>
        </div>
    </div>
  );
}
