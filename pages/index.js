import SideBar from "../components/SideBar"
import HeadBar from "../components/HeadBar";
import Announcement from "../components/home/announcement";
export default function Home() {
  return (
    <div className="mx-auto w-full max-w-[1900px] h-screen bg-[#E5F9F5] p-5 flex justify-start items-start gap-5">
      <SideBar />
      <div className="w-full h-full flex flex-col gap-1">
        <HeadBar />
        <Announcement/>
      </div>
    </div>
  );
}
