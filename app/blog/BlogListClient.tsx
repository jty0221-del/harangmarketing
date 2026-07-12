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

interface NaverPost {
  title: string;
  link: string;
  thumbnail: string | null;
  pubDate: string;
  category: string;
  excerpt: string;
}

interface Props {
  staticPosts: StaticPost[];
  dynamicPosts: DynamicPost[];
  naverPosts: NaverPost[];
}

const NAVER_TAG = "네이버 블로그";
const DYNAMIC_TAG = "관리자 작성";

export default function BlogListClient({ staticPosts, dynamicPosts, naverPosts }: Props) {
  const staticTags = Array.from(new Set(staticPosts.map((p) => p.tag)));
  const allTags = [
    "전체",
    ...(naverPosts.length > 0 ? [NAVER_TAG] : []),
    ...(dynamicPosts.length > 0 ? [DYNAMIC_TAG] : []),
    ...staticTags,
  ];

  const [activeTab, setActiveTab] = useState("전체");

  const showNaver = activeTab === "전체" || activeTab === NAVER_TAG;
  const showDynamic = activeTab === "전체" || activeTab === DYNAMIC_TAG;
  const showStatic = activeTab !== NAVER_TAG && activeTab !== DYNAMIC_TAG;
  const visibleStatic = showStatic
    ? activeTab === "전체" ? staticPosts : staticPosts.filter((p) => p.tag === activeTab)
    : [];

  const isEmpty =
    (showNaver ? naverPosts.length : 0) +
    (showDynamic ? dynamicPosts.length : 0) +
    visibleStatic.length === 0;

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
              {cat === NAVER_TAG && naverPosts.length > 0 && (
                <span className="ml-1.5 text-[10px] font-black opacity-70">{naverPosts.length}</span>
              )}
            </button>
          ))}
        </div>
      </div>

      {isEmpty && (
        <div className="text-center py-16 text-gray-400 text-sm">
          해당 카테고리의 글이 없습니다.
        </div>
      )}

      <div className="space-y-4">
        {/* 네이버 블로그 RSS 포스트 */}
        {showNaver && naverPosts.map((post, i) => (
          <a
            key={i}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white rounded-2xl border-l-4 border-l-green-500 border border-gray-100 p-5 md:p-6 hover:shadow-md transition-all group"
          >
            <div className="flex items-start gap-4">
              {/* 썸네일 */}
              {post.thumbnail ? (
                <img
                  src={post.thumbnail}
                  alt={post.title}
                  className="shrink-0 w-24 md:w-32 h-24 md:h-28 rounded-xl object-cover bg-gray-100"
                  loading="lazy"
                />
              ) : (
                <div className="shrink-0 w-24 md:w-32 h-24 md:h-28 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center">
                  <BookOpen size={28} className="text-green-300" />
                </div>
              )}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg border text-[11px] font-black bg-green-50 text-green-700 border-green-100">
                    <span className="w-3 h-3 rounded bg-green-600 text-white text-[8px] font-black flex items-center justify-center leading-none">N</span>
                    네이버 블로그
                  </span>
                  {post.category && (
                    <span className="text-[11px] text-gray-400 border border-gray-100 rounded-md px-1.5 py-0.5">{post.category}</span>
                  )}
                  <span className="text-[11px] text-gray-400">{post.pubDate}</span>
                </div>
                <h2 className="font-black text-gray-900 text-sm md:text-base leading-snug mb-1.5 group-hover:text-green-700 transition-colors line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-xs text-gray-500 leading-relaxed line-clamp-2 hidden sm:block">
                  {post.excerpt}
                </p>
              </div>
              <div className="shrink-0 flex flex-col items-center justify-center w-8 h-8 rounded-lg bg-gray-100 group-hover:bg-green-600 transition-colors self-start mt-1">
                <ExternalLink size={13} className="text-gray-400 group-hover:text-white transition-colors" />
              </div>
            </div>
          </a>
        ))}

        {/* 관리자 작성 포스트 (admin panel) */}
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
                    마케팅 인사이트
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

        {/* 하드코딩 정적 포스트 */}
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
      </div>
    </>
  );
}
