"use client";

import React from "react";
import Image from "next/image";

interface ListItem {
  imageUrl: string;
  subtitle: string;
  source: string;
  label: string;
}

interface ListProps {
  title: string;
  items: ListItem[];
}

export default function List({ title, items }: ListProps) {
  // 只保留前8个条目
  const displayedItems = items.slice(0, 8);
  const showMoreLink = items.length > 8;

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-7xl">
      {/* 标题行 */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>

        {/* 更多链接（条件渲染） */}
        {showMoreLink && (
          <a
            href="#"
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <span className="text-sm font-medium">更多</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        )}
      </div>

      {/* 四列网格布局 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {displayedItems.map((item, index) => (
          <div
            key={index}
            className="group relative border border-gray-100 rounded-lg p-4 hover:shadow-md transition-all"
          >
            {/* 图片展示 */}
            <div className="relative h-40 mb-4 rounded-md overflow-hidden">
              <Image
                src={item.imageUrl}
                alt={item.label}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>

            {/* 内容区块 */}
            <div className="space-y-2">
              <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">
                {item.label}
              </span>
              <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
                {item.subtitle}
              </h3>
              <p className="text-sm text-gray-500">{item.source}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
