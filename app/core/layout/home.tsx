"use client";
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import styles from './styles.module.css'
import { TFunction } from 'i18next';
export function HomeLayout({home_lang} : {home_lang : TFunction}) {
  // const intro1 = "As a budding backend developer specializing in JavaScript, Node.js, and NestJS, I’m eager to dive into web development. With a solid foundation in server-side logic, APIs, and database management, I bring a fresh perspective and a strong desire to learn and contribute."
  // const intro2="Armed with a foundational understanding of server-side logic, APIs, and database management, I bring a fresh perspective and a strong desire to learn and contribute"
  const skillList = [
    {
      id:1,
      name:"Github",
      img:'/github_icon.svg',
      detail:['Github action','Git command']
    },
    {
      id:2,
      name:"Gitlab",
      img:'/icon_gitlab.svg',
      detail:['Gitlab Pipeline','Gitlab Runner']
    },
    {
      id:3,
      name:"Javascript",
      img:'/js_icon.svg',
      detail:['Core javascript','ES6+ Features','Oauth2']
    },
    {
      id:4,
      name:"Nodejs",
      img:'/nodejs_icon.svg',
      detail:['Restful API','Middleware','Authentication']
    },
    {
      id:5,
      name:"Nestjs",
      img:'/nestjs_icon.svg',
      detail:['Decorator','Interceptors']
    },
    {
      id:6,
      name:"Linux",
      img:'/icon_linux.svg',
      detail:['Shell Script','Crontab']
    },
    {
      id:7,
      name:"Docker",
      img:'/icon_docker.svg',
      detail:['Container','Image','Volume']
    },
    {
      id:8,
      name:"AWS",
      img:'/icon_aws-ec2.svg',
      detail:['EC2 Instance','S3 Storage']
    },
    {
      id:9,
      name:"React",
      img:'/react-js_icon.svg',
      detail:['useState', 'useEffect', 'React Router']
    },
    {
      id:10,
      name:"Typescript",
      img:'/icon-typescript.svg',
      detail:['Interfaces', 'Type Inference']
    },
    {
      id:11,
      name:"SQLServer",
      img:'/sql-server_icon.svg',
      detail: ['T-SQL Queries', 'Stored Procedures']
    },
    {
      id:12,
      name:"Postgre",
      img:'/postgres_icon.svg',
      detail: ['SQL Queries', 'Indexing & Joins']
    }
  ]
  
  useEffect(()=>{
    const elementLeft = document.getElementById('left_body');
    const elementRight = document.getElementById('right_body');
    const elementSkillTitle = document.getElementById('skillTitle')
    const elementSkillLayout = document.getElementById('skillLayout')
    const introElement = document.getElementById('intro')
    const elementExLayout = document.getElementById('exLayout')
    const titleExLayout = document.getElementById('exTitle')
    // Thêm class để áp dụng animation sau khi trang đã render xong
    elementLeft?.classList.add('animate-slide-left');
    setTimeout(()=>{
      elementLeft?.classList.add('animate-slide-left');
      setTimeout(()=>{
        elementRight?.classList.add('animate-slide-right');
      setTimeout(()=>{
        introElement?.classList.add('animate-slide-right')
        },300)
      },300)
      
    },300)
    const defaultPosition = window.scrollY + window.innerHeight;
    if(defaultPosition > 700){
      setTimeout(()=>{
        elementSkillTitle?.classList.add('animate-slide-left')
        setTimeout(()=>{
          elementSkillLayout?.classList.add('animate-slide-left')
        },500)
      }
        ,200)
   }
   if(defaultPosition > 1200) {
    setTimeout(()=>{
      titleExLayout?.classList.add('animate-slide-left')
      setTimeout(()=>{
        elementExLayout?.classList.add('animate-slide-left')
      },500)
    },200)
   }
    const handleScroll = () => {
      const scrollingPosition = window.scrollY + window.innerHeight;
     if(scrollingPosition > 700){
      setTimeout(()=>{
        elementSkillTitle?.classList.add('animate-slide-left')
        setTimeout(()=>{
          elementSkillLayout?.classList.add('animate-slide-left')
        },500)
      }
        ,200)
     }
     if(scrollingPosition > 1200) {
      setTimeout(()=>{
        titleExLayout?.classList.add('animate-slide-left')
        setTimeout(()=>{
          elementExLayout?.classList.add('animate-slide-left')
        },500)
      },200)
     }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      // window.removeEventListener('scroll', handleScroll);
    };
    // elementTop?.classList.add('animate-slide-in')
  })

 
const SkillLayout = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % skillList.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + skillList.length) % skillList.length);
  };

  const getItemPosition = (index: number) => {
    const diff = index - currentIndex;
    const total = skillList.length;
    
    let position = diff;
    if (diff > total / 2) position = diff - total;
    if (diff < -total / 2) position = diff + total;
    
    return position;
  };

  const getItemStyle = (position: number, isMobile: boolean) => {
    if (isMobile) {
      const styles: Record<number, { scale: number; zIndex: number; opacity: number; y: number }> = {
        0: { scale: 1, zIndex: 50, opacity: 1, y: 0 },
      };
      return styles[position] || { scale: 0, zIndex: 0, opacity: 0, y: 0 };
    }
    
    const styles: Record<number, { scale: number; zIndex: number; opacity: number; y: number }> = {
      0: { scale: 1.2, zIndex: 50, opacity: 1, y: 0 },
      1: { scale: 0.85, zIndex: 45, opacity: 0.7, y: 80 },
      [-1]: { scale: 0.85, zIndex: 45, opacity: 0.7, y: 80 },
      2: { scale: 0.5, zIndex: 30, opacity: 0.4, y: 60 },
      [-2]: { scale: 0.5, zIndex: 30, opacity: 0.4, y: 60 }
    };
    
    return styles[position] || { scale: 0, zIndex: 0, opacity: 0, y: 80 };
  };

  return (
    <div id="skillLayout" className="w-full py-8 md:py-16 px-4 opacity-0" style={{ flex: 1, marginBottom: '6%' }}>
      <div id='skillTitle' style={{display:'flex',alignItems:'center'}} className="flex opacity-0">
        <div className={styles.horizontal_line}></div>
        <p className="text-2xl md:text-4xl font-bold italic ml-1 md:ml-2" style={{letterSpacing:4}}>
          {home_lang('common:skill')}
        </p>
      </div>

      <div className="relative w-full h-[450px] md:h-[500px] flex items-center justify-center overflow-hidden mt-8">
        {/* Carousel Items */}
        <div className="relative w-full h-full flex items-center justify-center">
          {skillList.map((item, index) => {
            const position = getItemPosition(index);
            const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
            const style = getItemStyle(position, isMobile);
            const isVisible = isMobile ? position === 0 : Math.abs(position) <= 2;
            
            if (!isVisible) return null;

            const spacing = isMobile ? 0 : 280;

            return (
              <div
                key={item.id}
                className="absolute transition-all duration-500 ease-out"
                style={{
                  transform: `translateX(${position * spacing}px) translateY(${style.y}px) scale(${style.scale})`,
                  zIndex: style.zIndex,
                  opacity: style.opacity,
                  pointerEvents: position === 0 ? 'auto' : 'none'
                }}
              >
                <div className="bg-black shadow-2xl p-6 md:p-8 w-64 md:w-72 border-2 border-white-100 hover:border-blue-400 transition-all duration-300">
                  <div className="flex flex-col items-center mb-4 md:mb-6">
                    <img 
                      width={56} 
                      height={56} 
                      alt={item.name} 
                      src={item.img} 
                      className="mb-3 md:mb-4 md:w-16 md:h-16 transition-transform duration-300 hover:scale-110" 
                    />
                    <p className="text-xl md:text-2xl font-bold text-white-800">{item.name}</p>
                  </div>
                  
                  <ul className="space-y-2">
                    {item.detail.map((detail, i) => (
                      <li key={detail + i} className="flex items-start">
                        <span className="text-white-500 mr-2">•</span>
                        <p className="text-white-600 text-xs md:text-sm">{detail}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-2 md:left-4 z-50 p-2 md:p-3 shadow-lg bg-white/10 hover:bg-white/20 active:scale-95 transition-all duration-200"
          aria-label="Previous skill"
        >
          <img 
            width={32} 
            height={32} 
            alt={'chevron-left'} 
            src={'./chevron_left.svg'} 
            className="md:w-11 md:h-11" 
          />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-2 md:right-4 z-50 p-2 md:p-3 shadow-lg bg-white/10 hover:bg-white/20 active:scale-95 transition-all duration-200"
          aria-label="Next skill"
        >
          <img 
            width={32} 
            height={32} 
            alt={'chevron-right'} 
            src={'./chevron_left.svg'} 
            className="transform rotate-180 md:w-11 md:h-11" 
          />
        </button>
      </div>

      {/* Dots Indicator */}
      {/* <div className="flex justify-center gap-2 mt-6 md:mt-8">
        {skillList.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-blue-500 w-8' 
                : 'bg-gray-300 hover:bg-gray-400 w-2'
            }`}
            aria-label={`Go to skill ${index + 1}`}
          />
        ))}
      </div> */}
    </div>
  );
};


  const ExpLayout = () => {
    const data = [
      {
        company: "NorthStudio",
        duration_time:"06-2023 / 02-2024",
        position:home_lang("common:company_position_1"),
        description :home_lang("common:company_description_1")
      },
      {
        company: "Innorix",
        duration_time:"02-2024 / Present",
        position:home_lang("common:company_position_2"),
        description :home_lang("common:company_description_2")
      }
    ]
    return (
      <div className="opacity-1"  style={{flex:1}}>
      <div id='exTitle' style={{display:'flex',alignItems:'center',marginBottom:'2%'}} className="flex opacity-0">
        <div className={styles.horizontal_line}></div>
        <p style={{fontSize:42,fontWeight:'bold',fontStyle:'italic',marginLeft:4,letterSpacing:4}}>{home_lang('common:experience')}</p>
      </div>
      <div id='exLayout' className="opacity-0">
      {data.map((item,key) =>{
        return (
          <div key={item.company+key} style={{flexDirection:'row',minWidth:'80%', display: 'flex', alignItems: 'start', flexWrap: 'wrap', maxWidth: '100%',gap:20, justifyContent:'center', marginBottom:20 }}>
          <div style={{borderColor:'white',border:'solid',width:'90%',borderWidth:'1px',padding:'10px'}}>
          <p className={styles.border_title}>{item.company}</p>
          <div className={styles.exp_item}>
                  <div className='flex'>
                    <div className="flex" style={{minWidth:400}}>
                    <p style={{lineHeight:2,marginBottom:2,fontWeight:'bolder',letterSpacing : '1px',flex:1}} className='text-xl'>{item.position}</p>
                    </div>
                      </div> 
                  <div style={{alignItems:'center',justifyContent:'center'}} className='flex'><p className='text-sm'>{item.duration_time}</p></div>
                </div>
               <div className="flex" style={{alignSelf:'start'}}><p style={{lineHeight:1.4}}>{item.description}</p> </div> 
          </div>
        </div>
        )
      })}
      </div>
    </div>
    )
  }


  return (
    <div style={{display:'flex',flexDirection:'column'}}>
    <div style={{borderWidth:0,borderColor:'white',borderRadius:12,display:'flex',alignItems:'center',justifyContent:'center',flex:1,marginBottom:'6%'}}>
      <div id='left_body' style={{flex:1,justifyContent:'center',maxWidth:800,display:'flex'}} className="opacity-0">
      <Image style={{borderRadius:2, }} alt='image_home' width={280} height={250} src='/home.svg'  />
      </div>
      <div id='right_body' className='opacity-0' style={{flex:1,display:'flex',flexDirection:'column',maxWidth:500,justifyContent:'left'}} >
        <p style={{textAlign:'right',margin:4,fontStyle:'italic',letterSpacing:1.5,maxWidth:350,fontSize:12}}>#Backend #Devops</p>
        <p style={{fontSize:60,fontWeight:'bolder',lineHeight:1.25,letterSpacing:4}}>{home_lang("common:intro")} <br />{home_lang("common:intro1")}</p>
        <p id='intro' className='opacity-0' style={{maxWidth:350,lineHeight:2}}>{home_lang("common:info")}</p>
      </div>
    </div>
    <SkillLayout/>
    <ExpLayout/>
    </div>
  )
}
