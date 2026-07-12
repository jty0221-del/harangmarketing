"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ExternalLink, TrendingUp, Filter, BookOpen } from "lucide-react";
import PhotoPlaceholder from "../components/PhotoPlaceholder";

interface StaticPost {
  tag: string;
  tagColor: string;
  accentColor: string;
  title: string;
  preview: string;
  readTime: string;
  result: string;
  href: string;
  internal: boolean;
}

interface DynamicPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
}

interface Props {
  staticPosts: StaticPost[];
  dynamicPosts: DynamicPost[];
}

const DYNAMIC_TAG = "마케팅 인사이트";

export default function BlogListClient({ staticPosts, dynamicPosts }: Props) {
  const allTags = ["전체", ...Array.from(new Set(staticPosts.map((p) => p.tag))), ...(dynamicPosts.length > 0 ? [DYNAMIC_TAG] : [])];

  const [activeTab, setActiveTab] = useState("전체");

  const filteredStatic = activeTab === "전체" || activeTab === DYNAMIC_TAG ? [] :
    activeTab === "전체" ? staticPosts : staticPosts.filter((p) => p.tag === activeTab);

  const showDynamic = activeTab === "전체" || activeTab === DYNAMIC_TAG;
  const showStatic = activeTab !== DYNAMIC_TAG;

  const visibleStatic = showStatic
    ? (activeTab === "전체" ? staticPosts : staticPosts.filter((p) => p.tag === activeTab))
    : [];

  return (
    <>
      {/* Category tabs */}
      <div className="flex items-center gap-2 mb-6">
        <Filter size={13} className="text-gray-400 shrink-0" strokeWidth={2.5} />
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {allTags.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold whitespace-nowrap border shrink-0 transition-colors ${
                cat === activeTab
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-500 border-gray-200 hover:border-blue-200 hover:text-blue-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {/* Dynamic posts (admin-written) — shown first */}
        {showDynamic && dynamicPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block bg-white rounded-2xl border-l-4 border-l-blue-600 border border-gray-100 p-5 md:p-6 hover:shadow-md transition-all group"
          >
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-24 md:w-32 h-24 md:h-28 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center">
                <BookOpen size={28} className="text-blue-300" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span className="inline-block px-2.5 py-0.5 rounded-lg border text-[11px] font-black bg-blue-50 text-blue-700 border-blue-100">
                    {DYNAMIC_TAG}
                  </span>
                  <span className="text-[11px] text-gray-400">{post.date}</span>
                </div>
                <h2 className="font-black text-gray-900 text-sm md:text-base leading-snug mb-1.5 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {post.title}
                </h2>
                {post.excerpt && (
                  <p className="text-xs text-gray-500 leading-relaxed line-clamp-2 hidden sm:block">
                    {post.excerpt}
                  </p>
                )}
              </div>
              <div className="shrink-0 flex flex-col items-center justify-center w-8 h-8 rounded-lg bg-gray-100 group-hover:bg-blue-600 transition-colors self-start mt-1">
                <ArrowRight size={13} className="text-gray-400 group-hover:text-white transition-colors" />
              </div>
            </div>
          </Link>
        ))}

        {/* Static hardcoded posts */}
        {visibleStatic.map((post, i) => {
          const inner = (
            <div className="flex items-start gap-4">
              <PhotoPlaceholder
                label="썸네일"
                width="w-24 md:w-32"
                height="h-24 md:h-28"
                className="shrink-0 rounded-xl"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span className={`inline-block px-2.5 py-0.5 rounded-lg border text-[11px] font-black ${post.tagColor}`}>
                    {post.tag}
                  </span>
                  <span className="text-[11px] text-gray-400">{post.readTime} 읽기</span>
                  {post.internal && (
                    <span className="text-[10px] font-bold text-blue-500 bg-blue-50 px-1.5 py-0.5 rounded">전문 읽기</span>
                  )}
                </div>
                <h2 className="font-black text-gray-900 text-sm md:text-base leading-snug mb-1.5 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-xs text-gray-500 leading-relaxed line-clamp-2 mb-2 hidden sm:block">
                  {post.preview}
                </p>
                <div className="flex items-center gap-1.5 text-xs font-bold text-blue-600">
                  <TrendingUp size={11} strokeWidth={2.5} />
                  {post.result}
                </div>
              </div>
              <div className="shrink-0 flex flex-col items-center justify-center w-8 h-8 rounded-lg bg-gray-100 group-hover:bg-blue-600 transition-colors self-start mt-1">
                <ExternalLink size={13} className="text-gray-400 group-hover:text-white transition-colors" />
              </div>
            </div>
          );
          const cls = `block bg-white rounded-2xl border-l-4 ${post.accentColor} border border-gray-100 p-5 md:p-6 hover:shadow-md transition-all group`;
          return post.internal ? (
            <Link key={i} href={post.href} className={cls}>{inner}</Link>
          ) : (
            <a key={i} href={post.href} target="_blank" rel="noopener noreferrer" className={cls}>{inner}</a>
          );
        })}

        {visibleStatic.length === 0 && (!showDynamic || dynamicPosts.length === 0) && (
          <div className="text-center py-16 text-gray-400 text-sm">
            해당 카테고리의 글이 없습니다.
          </div>
        )}
      </div>
    </>
  );
}
