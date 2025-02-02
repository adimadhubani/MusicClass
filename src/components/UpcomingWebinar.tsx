'use client'


import React from 'react'
import Link from 'next/link'
import { HoverEffect } from './ui/card-hover-effect';

function UpcomingWebinar() {

    const featuredWebinars = [
        { 
          title: "Mastering Guitar Techniques", 
          description: "Learn advanced guitar techniques, including fingerpicking, chord progressions, and solo improvisation, from expert musicians.", 
          slug: "mastering-guitar-techniques", 
          isFeatured: true 
        },
        { 
          title: "Vocal Training for Beginners", 
          description: "Develop your singing skills with proper breathing techniques, vocal warm-ups, and pitch control exercises.", 
          slug: "vocal-training-for-beginners", 
          isFeatured: false 
        },
        { 
          title: "Piano Essentials: From Beginner to Pro", 
          description: "A comprehensive guide to piano playing, covering scales, chords, and song performance techniques.", 
          slug: "piano-essentials-beginner-to-pro", 
          isFeatured: true 
        },
        { 
          title: "Music Production 101", 
          description: "Discover the fundamentals of music production, including DAWs, mixing, and mastering techniques.", 
          slug: "music-production-101", 
          isFeatured: true 
        },
        { 
          title: "Songwriting and Lyric Composition", 
          description: "Unlock your creativity and learn how to write compelling lyrics and melodies.", 
          slug: "songwriting-and-lyric-composition", 
          isFeatured: false 
        },
        { 
          title: "Jazz Improvisation Workshop", 
          description: "Explore jazz improvisation techniques, scales, and rhythm variations with experienced jazz musicians.", 
          slug: "jazz-improvisation-workshop", 
          isFeatured: true 
        },
        { 
          title: "Electronic Music and Synths", 
          description: "Learn how to create electronic music using synthesizers, drum machines, and sound design techniques.", 
          slug: "electronic-music-and-synths", 
          isFeatured: false 
        },
        { 
          title: "Classical Music Appreciation", 
          description: "Dive into the history of classical music, exploring famous composers and their masterpieces.", 
          slug: "classical-music-appreciation", 
          isFeatured: false 
        },
        { 
          title: "Beat Making for Hip-Hop", 
          description: "A step-by-step guide to creating hip-hop beats using drum patterns, samples, and production tools.", 
          slug: "beat-making-for-hip-hop", 
          isFeatured: true 
        },
        { 
          title: "Live Performance Mastery", 
          description: "Gain confidence on stage with expert tips on stage presence, audience engagement, and live sound setup.", 
          slug: "live-performance-mastery", 
          isFeatured: false 
        }
      ];
      
     
      

  return (
    <div className='p-12 bg-gray-900'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6'>
            <div className='text-center'>
                 <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase'>FEATURED WEBINAR</h2>
                 <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>Enhance Your Musical Journey</p>
            </div>
            <div className='mt-10'>
               <HoverEffect items={featuredWebinars.map((webinar)=>(
                {
                    title:webinar.title,
                    description:webinar.description,
                    link:`/${webinar.title}`
                }
               ))}/>
            </div>
            <div className='mt-10 text-center'>
                <Link href={"/"} className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200">
                    View All webinars

                </Link>
            </div>

        </div>
     
    </div>
  )
}

export default UpcomingWebinar
