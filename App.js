import React from "react";

export default function App() {
  return (
    <div className="bg-yellow-50 min-h-screen text-gray-800 font-sans">
      <header className="flex items-center justify-between px-6 py-4 bg-white shadow">
        <div className="flex items-center space-x-3">
          <img src="/logo-deepdig.png" alt="Deeper Digger Logo" className="h-10" />
          <div>
            <h1 className="text-xl font-bold text-blue-900">深度挖掘 Deeper Digger</h1>
            <p className="text-sm text-gray-600">大專研究所考古題系統 | AI測驗分析 | 學習助理</p>
          </div>
        </div>
      </header>

      <main className="p-6 max-w-5xl mx-auto">
        <section className="text-center mb-10">
          <h2 className="text-2xl font-semibold text-gray-800">深度考古、挖掘知識 ~ 你專屬的 AI 學習助理！</h2>
        </section>

        <section className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-12">
          {[
            { title: "題庫", icon: "📘" },
            { title: "行事曆", icon: "🗓️" },
            { title: "錯題複習", icon: "⏰" },
            { title: "筆記共享", icon: "📝" },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl shadow p-4 hover:bg-yellow-100"
            >
              <div className="text-4xl mb-2">{item.icon}</div>
              <h3 className="text-lg font-medium text-gray-700">{item.title}</h3>
            </div>
          ))}
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: "智慧題庫",
              desc: "融合AI系統，將錯題分析、解答和考點整理，統計出答題時間等數據。",
            },
            {
              title: "客製化行事曆",
              desc: "與學校課程系統連動，自動匯入考試與作業時間，提供通知提醒。",
            },
            {
              title: "碎片式複習",
              desc: "將錯題依重要程度排序，定期推播小單元題目，強化記憶。",
            },
            {
              title: "錯題本共享",
              desc: "學生可上傳錯題筆記與解題思路，供其他人參考學習。",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-yellow-400"
            >
              <h4 className="text-xl font-semibold text-yellow-600 mb-2">
                {item.title}
              </h4>
              <p className="text-gray-700 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
