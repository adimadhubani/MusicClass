'use client'


import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards';


const musicSchoolTestemonials = [
  
    { 
      quote: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it.", 
      name: "Steve Jobs", 
      title: "Co-founder of Apple Inc." 
    },
    { 
      quote: "It is not the critic who counts; not the man who points out how the strong man stumbles, or where the doer of deeds could have done them better. The credit belongs to the man who is actually in the arena, whose face is marred by dust and sweat and blood; who strives valiantly; who errs, who comes short again and again, because there is no effort without error and shortcoming; but who does actually strive to do the deeds; who knows great enthusiasms, the great devotions; who spends himself in a worthy cause; who at the best knows in the end the triumph of high achievement, and who at the worst, if he fails, at least fails while daring greatly.", 
      name: "Theodore Roosevelt", 
      title: "26th President of the United States" 
    },
    { 
      quote: "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.", 
      name: "Mark Twain", 
      title: "Author and Humorist" 
    },
    { 
      quote: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.", 
      name: "Albert Schweitzer", 
      title: "Theologian, Philosopher, and Physician" 
    },
    { 
      quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.", 
      name: "Ralph Waldo Emerson", 
      title: "Philosopher and Poet" 
    },
    { 
      quote: "I have walked that long road to freedom. I have tried not to falter; I have made missteps along the way. But I have discovered the secret that after climbing a great hill, one only finds that there are many more hills to climb. I have taken a moment here to rest, to steal a view of the glorious vista that surrounds me, to look back on the distance I have come. But I can only rest for a moment, for with freedom comes responsibilities, and I dare not linger, for my long walk is not ended.", 
      name: "Nelson Mandela", 
      title: "Former President of South Africa" 
    },
    { 
      quote: "The best way to find yourself is to lose yourself in the service of others. You may never know what results come of your actions. But if you do nothing, there will be no result.", 
      name: "Mahatma Gandhi", 
      title: "Leader of the Indian Independence Movement" 
    },
    { 
      quote: "A ship is safe in harbor, but that’s not what ships are for. We must be willing to let go of the life we planned so as to have the life that is waiting for us. Security is mostly a superstition. It does not exist in nature, nor do the children of men as a whole experience it. Avoiding danger is no safer in the long run than outright exposure.", 
      name: "Helen Keller", 
      title: "Author and Activist" 
    },
    { 
      quote: "Courage is not simply one of the virtues, but the form of every virtue at the testing point, which means at the point of highest reality. To love at all is to be vulnerable. Love anything, and your heart will certainly be wrung and possibly be broken.", 
      name: "C.S. Lewis", 
      title: "Author and Theologian" 
    },
    { 
      quote: "People often say that motivation doesn’t last. Well, neither does bathing—that’s why we recommend it daily. You don’t have to be great to start, but you have to start to be great.", 
      name: "Zig Ziglar", 
      title: "Motivational Speaker and Author" 
    }
  ];
  
  
  


function MusicSchoolTestemonials() {
  return (
    <div className='h-[40rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2]  relative flex flex-col items-center justify-center overflow-hidden '>
      <h2 className='text-3xl font-bold text-center mb-8 text-white z-10'>Hear our Harmony: Voices of success</h2>
      <div className='flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8'>
         <div>
         <InfiniteMovingCards
        items={musicSchoolTestemonials}
        direction="right"
        speed="slow"
      />
         </div>
      </div>
    </div>
       
  )
}

export default MusicSchoolTestemonials
