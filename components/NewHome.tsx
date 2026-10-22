"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { StoredPhoto } from '@/lib/photoStore';

interface VideoItemDisplay {
  id: string;
  youtubeId: string;
  title: string;
  description: string;
  thumbnail?: string;
  publishedDate?: string;
  category: string;
  youtubeUrl: string;
}

// Design System Primitives
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';

export default function NewHome() {
  const [photos, setPhotos] = useState<StoredPhoto[]>([]);
  const [videos, setVideos] = useState<VideoItemDisplay[]>([]);

  useEffect(() => {
    async function load() {
      try {
        const [photoRes, videoRes] = await Promise.all([
          fetch('/api/photos'),
          fetch('/api/youtube/videos'),
        ]);
        const photoData = await photoRes.json();
        const videoData = await videoRes.json();
        if (photoData.success && Array.isArray(photoData.photos)) setPhotos(photoData.photos);
        if (videoData.status === 'success' && Array.isArray(videoData.videos)) setVideos(videoData.videos);
      } catch (e) {
        console.error('Error loading media', e);
      }
    }
    load();
  }, []);

  // Hero – first photo marked as hero or fallback to first
  const heroPhoto = photos.find((p) => p.hero) ?? photos[0];
  const heroVideo = videos[0];

  // Scroll‑based animation helpers
  const { scrollYProgress } = useViewportScroll();
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1.2, 1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);

  return (
    <>
      {/* ==== HERO ==== */}
      <section className="relative w-full min-h-[80vh] overflow-hidden bg-white">
        {heroPhoto && (
          <motion.div
            className="absolute inset-0"
            style={{ scale: heroScale, opacity: heroOpacity }}
          >
            <Image
              src={heroPhoto.src}
              alt={heroPhoto.alt || 'Cristian Văduva'}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        )}
        <Container className="relative z-10 flex flex-col justify-center h-full py-24 lg:py-32">
          <Heading as="h1" className="text-5xl sm:text-7xl font-bold text-[#1D1D1F] leading-tight">
            Cristian Văduva
          </Heading>
          <p className="mt-4 text-xl sm:text-2xl text-[#1D1D1F] max-w-2xl">
            Luxury Real Estate • Asset Protection • Investments
          </p>
          <div className="mt-8 flex space-x-4">
            <Link
              href="https://wa.me/436509536345"
              target="_blank"
              className="px-6 py-3 rounded-full bg-[#B89B72] text-black font-medium hover:bg-[#C9AE85] transition"
            >
              Direct Private Consultation
            </Link>
            <Link href="/gallery" className="px-6 py-3 rounded-full bg-gray-100 text-gray-900 font-medium hover:bg-gray-200 transition">
              Photo Gallery
            </Link>
            <Link href="/tv" className="px-6 py-3 rounded-full bg-red-600 text-white font-medium hover:bg-red-700 transition">
              YouTube TV
            </Link>
          </div>
        </Container>
      </section>

      {/* ==== INTRO ==== */}
      <section className="py-24 bg-[#F5F5F7]">
        <Container>
          <Heading as="h2" className="text-3xl font-semibold mb-6">
            Identity • Narrative
          </Heading>
          <p className="text-lg text-[#1D1D1F] max-w-3xl">
            Cristian Văduva operates at the intersection of high-value real estate transactions, asset protection, and strategic capital allocation. With a multidisciplinary academic foundation and specialized master&#39;s degrees, each mandate provides thorough risk, return, and confidentiality analysis.
          </p>
        </Container>
      </section>

      {/* ==== EDUCATION / INTERNATIONAL ==== */}
      <section className="py-24">
        <Container>
          <Heading as="h2" className="text-3xl font-semibold mb-6">
            Education & International Experience
          </Heading>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-medium mb-2">Bachelor&#39;s Degrees</h3>
              <ul className="list-disc pl-5 text-[#1D1D1F]">
                <li>Economics</li>
                <li>Law</li>
                <li>Ecology</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Master&#39;s Degrees</h3>
              <ul className="list-disc pl-5 text-[#1D1D1F]">
                <li>Financial Management</li>
                <li>Environmental Impact</li>
                <li>Private Security</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* ==== REAL ESTATE ==== */}
      <section className="py-24 bg-[#FAFAFA]">
        <Container>
          <Heading as="h2" className="text-3xl font-semibold mb-6">
            Luxury Real Estate – BUY • SELL • INVEST
          </Heading>
          <p className="text-lg text-[#1D1D1F] max-w-2xl mb-8">
            Exclusive representation for buyers and sellers of luxury residences, heritage properties, and strategic development land in Monaco, Dubai, Bucharest, and other European hubs.
          </p>
          <Link href="/real-estate" className="inline-block px-6 py-3 rounded-full bg-gray-100 text-gray-900 font-medium hover:bg-gray-200 transition">
            Explore Portfolio
          </Link>
        </Container>
      </section>

      {/* ==== DECISION / EXPERTISE ==== */}
      <section className="py-24">
        <Container>
          <Heading as="h2" className="text-3xl font-semibold mb-6">
            Asset Protection & Strategic Decision‑Making
          </Heading>
          <ul className="list-disc pl-5 text-[#1D1D1F] space-y-2">
            <li>Comprehensive coverage for prime residential and commercial assets</li>
            <li>Advisory for risk mitigation and investment security</li>
            <li>Continuity planning for private capital</li>
          </ul>
        </Container>
      </section>

      {/* ==== PHOTO ARCHIVE ==== */}
      <section className="py-24 bg-[#F5F5F7]">
        <Container>
          <Heading as="h2" className="text-3xl font-semibold mb-6">
            Visual Gallery & Official Portraits
          </Heading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {photos.slice(0, 4).map((photo) => (
              <Link key={photo.id} href={`/gallery#${photo.id}`}> 
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden group">
                  <Image src={photo.src} alt={photo.alt || photo.title} fill className="object-cover group-hover:scale-105 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* ==== TV / YOUTUBE ==== */}
      <section className="py-24 bg-[#FAFAFA]">
        <Container>
          <Heading as="h2" className="text-3xl font-semibold mb-6">
            Cristian Văduva Video Journal
          </Heading>
          {heroVideo && (
            <Link href={`/tv#${heroVideo.id}`}> 
              <div className="relative aspect-[16/9] rounded-lg overflow-hidden mb-6 group">
                <Image
                  src={heroVideo.thumbnail || `https://img.youtube.com/vi/${heroVideo.youtubeId}/maxresdefault.jpg`}
                  alt={heroVideo.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-colors">
                  <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center text-white">
                    ▶
                  </div>
                </div>
              </div>
            </Link>
          )}
        </Container>
      </section>

      {/* ==== ECOSYSTEM ==== */}
      <section className="py-24 bg-[#F5F5F7]">
        <Container>
          <Heading as="h2" className="text-3xl font-semibold mb-6">
            Integrated Ecosystem
          </Heading>
          <p className="text-lg text-[#1D1D1F] max-w-3xl mb-8">
            Connected platforms and divisions: cristianvaduva.com, aixluxury.com, HomeFind, Dubai, and AiX OS.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="https://cristianvaduva.com" target="_blank" className="block p-6 border rounded-lg hover:border-[#B89B72] transition">
              <h3 className="text-lg font-semibold mb-2">CristianVaduva.com</h3>
              <p className="text-sm text-[#1D1D1F]">Central digital presence and executive advisory.</p>
            </Link>
            <Link href="https://aixluxury.com" target="_blank" className="block p-6 border rounded-lg hover:border-[#B89B72] transition">
              <h3 className="text-lg font-semibold mb-2">AiXLuxury.com</h3>
              <p className="text-sm text-[#1D1D1F]">Ultra‑prime real estate portfolio and premium lifestyle.</p>
            </Link>
            <Link href="https://homefind.cristianvaduva.com" target="_blank" className="block p-6 border rounded-lg hover:border-[#B89B72] transition">
              <h3 className="text-lg font-semibold mb-2">HomeFind</h3>
              <p className="text-sm text-[#1D1D1F]">AI-assisted property acquisition and search intelligence.</p>
            </Link>
          </div>
        </Container>
      </section>

      {/* ==== CONTACT ==== */}
      <section className="py-24 bg-white" id="contact">
        <Container>
          <Heading as="h2" className="text-3xl font-semibold mb-6">
            Contact & Private Intake
          </Heading>
          <p className="mb-4 text-[#1D1D1F]">For private advisory inquiries, submit the intake form or contact directly.</p>
          <Link href="/contact" className="inline-block px-6 py-3 rounded-full bg-gray-100 text-gray-900 font-medium hover:bg-gray-200 transition">
            Open Contact Desk
          </Link>
        </Container>
      </section>
    </>
  );
}
