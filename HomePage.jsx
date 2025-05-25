import React from "react";
import { Calendar, BookOpen, Clock, NotebookPen } from "lucide-react";

export default function HomePage() {
  return (
    <main className="bg-yellow-50 min-h-screen p-6 text-gray-800">
      <header className="text-center mb-10">
        <img
          src="/logo-brain-pickaxe.png"
          alt="Deeper Digger Logo"
          className="mx-auto w-24 mb-4"
        />
        <h1 className="text-3xl font-bold">深度挖掘 Deeper Digger</h1>
        <p className="text-lg mt-2">深度考古、挖掘知識 ~ 你專屬的 AI 學習助理！</p>
      </header>

      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mb-12">
        {[
          { icon: <BookOpen className="h-8 w-8 text-yellow-500 mb-2" />, label: "題庫" },
          { icon: <Calendar className="h-8 w-8 text-yellow-500 mb-2" />, label: "行事曆" },
          { icon: <Clock className="h-8 w-8 text-yellow-500 mb-2" />, label: "錯題複習" },
          { icon: <NotebookPen className="h-8 w-8 text-yellow-500 mb-2" />, label: "筆記共享" }
        ].map((item, i) => (
          <div key={i} className="bg-white rounded-lg p-6 hover:shadow-lg">
            <div className="flex flex-col items-center">{item.icon}<p className="font-semibold">{item.label}</p></div>
          </div>
        ))}
      </section>

      <section className="grid md:grid-cols-2 gap-6">
        {[
          { title: "智慧題庫", text: "融合 AI 系統，進行錯題分析與考點提取，並統計答題時間、正確率等關鍵數據。" },
          { title: "客製化行事曆", text: "連結學校課程系統，自動加入作業與考試時間，提供即時提醒功能。" },
          { title: "碎片式複習", text: "錯題依據重要性推播，配合小單元複習，強化記憶效率。" },
          { title: "錯題本共享", text: "學生可上傳錯題筆記，讓其他使用者學習不同的解題方式與重點提示。" }
        ].map((block, i) => (
          <div key={i} className="bg-white rounded-xl p-6 shadow">
            <h2 className="text-xl font-semibold mb-2 text-yellow-600">{block.title}</h2>
            <p>{block.text}</p>
          </div>
        ))}
      </section>
    </main>
  );
}