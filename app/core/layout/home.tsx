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

  const SkillLayout = () =>{
  return (
  <div className="opacity-1"  style={{flex:1,marginBottom:'6%'}}>
  <div id='skillTitle' style={{display:'flex',alignItems:'center'}} className="flex opacity-0">
    <div className={styles.horizontal_line}></div>
    <p  style={{fontSize:42,fontWeight:'bold',fontStyle:'italic',marginLeft:4,letterSpacing:4}}>{home_lang('common:skill')}</p>
  </div>
  <div id='skillLayout' className="opacity-0" style={{minWidth:'80%', display: 'flex', alignItems: 'center', justifyContent: 'space-around', flexWrap: 'wrap', maxWidth: '100%' }}>
    {
      skillList.map((item)=>{
        return (
            <div className={styles.item} key={item.id}>
              <ul className={styles.skill_detail}>
                {item.detail.map((item,i)=>{
                  return(
                    <li key={item+i}><p>{item}</p></li>
                  )})}
              </ul>
              <div className={styles.skill_item}>
              <Image width={24} height={24} alt='icon' src={item.img} />
              <p style={{padding:10}}>{item.name}</p>
              </div>
            </div>
        )
      }) 
    }
  </div>
</div>
)
  }

  const ExpLayout = () => {
    const data = [
      {
        company: "NorthStudio",
        duration_time:"09-2023 / 02-2024",
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