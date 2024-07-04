"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";
import courseData from "../data/music.json";
import { Button } from "./ui/moving-border";
import Link from "next/link";

// interface Course {
//   id: number;
//   title: string;
//   slug: string;
//   description: string;
//   price: number;
//   instructor: string;
//   isFeatured: boolean;
//   //   image: "/courses/guitar.jpg";
// }
const FeaturedCourses = () => {
//   const featuredCourse = courseData?.courses?.filter(
//     (course) => course.isFeatured
//   );
  return (
    <div className="py-12 bg-gray-900">
      <div>
        <div className="text-center">
          <h2 className="text-3xl text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED COURESES
          </h2>
          <p className="mt-2 text-2xl text-white">Learn With the Best</p>
        </div>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {courseData?.courses?.slice(0,6).map((course) => (
            <div className="flex justify-center" key={course.id}>
              <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
                <Image
                  src={course.image}
                  alt="jordans"
                  height="400"
                  width="400"
                  className="object-contain"
                />
                <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                  Air Jordan 4 Retro Reimagined
                </p>

                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  The Air Jordan 4 Retro Reimagined Bred will release on
                  Saturday, February 17, 2024. Your best opportunity to get
                  these right now is by entering raffles and waiting for the
                  official releases.
                </p>
                <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                  <span>Buy now </span>
                  <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                    $100
                  </span>
                </button>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 text-center">
        <Link href={`/courses`}>
          <Button
            borderRadius="1.75rem"
            className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            View All Coureses
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedCourses;
