"use client"

import Image from 'next/image'
import Link from 'next/link';
import { usePathname } from 'next/navigation'

export default function Banner() {

  const bannerContentByPath = {
    "/": {
      title: "Lográ tus objetivos de inglés",
      subtitle: "Ya seas estudiante o profesional, estoy para ayudarte a avanzar",
      buttonText: "Consultame"
    },
    "/about": {
      title: "About Tom",
      subtitle: "Discover the story behind the classes",
      buttonText: null,
    },
    "/contact": {
      title: "Contact",
      subtitle: "Get in touch with Tom today",
      buttonText: null,
    },
    // fallback
    default: {
      title: "Learn English with Tom",
      subtitle: "",
      buttonText: null,
    },
  };

  const pathname = usePathname()

  const bannerData =
    bannerContentByPath[pathname as keyof typeof bannerContentByPath] ||
    bannerContentByPath.default

  const { title, subtitle, buttonText } = bannerData

  return (
    <div className="relative flex responsive-container px-2! md:px-8! h-fit items-center justify-center">
      <Image
        src="/banner.jpg"
        style={{ objectFit: "cover" }}
        className="opacity-15 rounded-md"
        sizes="100vw"
        fill
        alt="Students at university"
      />
      <div className='z-40 flex flex-col gap-4 responsive-container py-8'>
        <div className='flex flex-col gap-2'>
          <h1 className='text-4xl md:text-5xl font-bold'>{title}</h1>
          <h2 className='text-lg md:text-xl'>{subtitle}</h2>
        </div>
        {buttonText &&
          <Link href="/contact" className="py-2 px-4 bg-[#FFF951] w-fit rounded-md">
            {buttonText}
          </Link>
        }
      </div>
    </div>
  )
}