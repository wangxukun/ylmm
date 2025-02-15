// 在你的页面组件中
import List from "@/components/list/List";
import Image from "next/image";

const sampleItems = [
  {
    imageUrl: "/static/images/1.png",
    label: "NEWS",
    subtitle: "Apple News Today",
    source: "Apple News",
  },
  {
    imageUrl: "/static/images/2.png",
    label: "ENGLISH",
    subtitle: "Learning Easy English",
    source: "BBC Learning English",
  },
  {
    imageUrl: "/static/images/3.png",
    label: "NEWS",
    subtitle: "Apple News Today",
    source: "Apple News",
  },
  {
    imageUrl: "/static/images/4.png",
    label: "ENGLISH",
    subtitle: "Learning Easy English",
    source: "BBC Learning English",
  },
  {
    imageUrl: "/static/images/5.png",
    label: "NEWS",
    subtitle: "Apple News Today",
    source: "Apple News",
  },
  {
    imageUrl: "/static/images/6.png",
    label: "ENGLISH",
    subtitle: "Learning Easy English",
    source: "BBC Learning English",
  },
  {
    imageUrl: "/static/images/7.png",
    label: "NEWS",
    subtitle: "Apple News Today",
    source: "Apple News",
  },
  {
    imageUrl: "/static/images/8.png",
    label: "ENGLISH",
    subtitle: "Learning Easy English",
    source: "BBC Learning English",
  },
  {
    imageUrl: "/static/images/8.png",
    label: "ENGLISH",
    subtitle: "Learning Easy English",
    source: "BBC Learning English",
  },
];

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <List title="热门节目" items={sampleItems} />
        <List title="会员专享" items={sampleItems} />
        <List title="最近更新" items={sampleItems} />
        <List title="最近收听" items={sampleItems} />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <Image
          src="/static/images/logo.png"
          alt="远路漫漫"
          width={40}
          height={40}
        />
      </footer>
    </div>
  );
}
