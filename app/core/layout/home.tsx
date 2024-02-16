"use client";
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import styles from './styles.module.css'
export function HomeLayout() {
  const item = [1,2,3,4,5,6,7,8]
  const intro1 = "As a budding backend developer with a focus on JavaScript, Node.js, and NestJS, I am eager to embark on a journey within the dynamic realm of web development."
  const intro2="Armed with a foundational understanding of server-side logic, APIs, and database management, I bring a fresh perspective and a strong desire to learn and contribute"
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
      detail:['Core javascript','ES6+ Features']
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

  // useEffect(()=>{
  //   const randomNumber =( Math.random() * 10).toFixed()
  //   fetch("https://type.fit/api/quotes").then((data)=>data.json()).then(data=> setQuote(data[randomNumber]))
  // },[])
  useEffect(()=>{
    const elementLeft = document.getElementById('left_body');
    const elementRight = document.getElementById('right_body');
    const elementTop = document.getElementById('skillLayout')
    // Thêm class để áp dụng animation sau khi trang đã render xong
    elementLeft?.classList.add('animate-slide-left');
    elementRight?.classList.add('animate-slide-right');
    elementTop?.classList.add('animate-slide-in')
  },[])

  const SkillLayout = () =>{
  return (
  <div className="opacity-0" id='skillLayout' style={{flex:1,marginBottom:'6%'}}>
  <div style={{display:'flex',alignItems:'center'}} className="flex">
    <div className={styles.horizontal_line}></div>
    <p style={{fontSize:42,fontWeight:'bold',fontStyle:'italic',marginLeft:4,letterSpacing:4}}>Skill</p>
  </div>
  <div style={{minWidth:'80%', display: 'flex', alignItems: 'center', justifyContent: 'space-around', flexWrap: 'wrap', maxWidth: '100%' }}>
    {
      skillList.map((item)=>{
        return (
            <div className={styles.item} key={item.id}>
              <ul className={styles.skill_detail}>
                {item.detail.map((item)=>{
                  return(
                    <li style={{textAlign:'left'}} key={item}>{item}</li>
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
    return (
      <div className="opacity-1" id='skillLayout' style={{flex:1}}>
      <div style={{display:'flex',alignItems:'center'}} className="flex">
        <div className={styles.horizontal_line}></div>
        <p style={{fontSize:42,fontWeight:'bold',fontStyle:'italic',marginLeft:4,letterSpacing:4}}>Experience</p>
      </div>
      <div style={{flexDirection:'column',minWidth:'80%', display: 'flex', alignItems: 'center', flexWrap: 'wrap', maxWidth: '100%',gap:20 }}>
        <div style={{borderColor:'white',border:'solid',width:'100%',borderWidth:'1px',padding:'10px'}}>
        <div className={styles.exp_item}>
                <div style={{fontWeight:'bold'}} className='flex'>NorthStudio</div>
                <div className='flex'>09-2023 / Present</div>
              </div>
             <div className="flex" style={{alignSelf:'start',fontStyle:'italic',letterSpacing:'1px'}}>Fresher backend nodejs</div> 
             <div className="flex" style={{alignSelf:'start'}}>During my role as a Backend Developer at [Company Name], I had the opportunity to contribute to the development of robust and scalable backend systems using Node.js and TypeScript.</div> 
        </div>
         <div style={{borderColor:'white',border:'solid',width:'100%',borderWidth:'1px',padding:'10px'}}>
        <div className={styles.exp_item}>
                <div style={{fontWeight:'bold'}} className='flex'>NorthStudio</div>
                <div className='flex'>09-2023 / Present</div>
              </div>
             <div className="flex" style={{alignSelf:'start',fontStyle:'italic',letterSpacing:'1px'}}>Fresher backend nodejs</div> 
             <div className="flex" style={{alignSelf:'start'}}>During my role as a Backend Developer at [Company Name], I had the opportunity to contribute to the development of robust and scalable backend systems using Node.js and TypeScript.</div> 
        </div>
            
        {/* {
          skillList.map((item)=>{
            return (
                <div className={styles.item} key={item.id}>
                  <ul className={styles.skill_detail}>
                    {item.detail.map((item)=>{
                      return(
                        <li style={{textAlign:'left'}} key={item}>{item}</li>
                      )})}
                </ul>
                  <div className={styles.skill_item}>
                  <Image width={24} height={24} alt='icon' src={item.img} />
                  <p style={{padding:10}}>{item.name}</p>
            </div>
                </div>
            )
          }) 
        } */}
      </div>
    </div>
    )
  }


  return (
    <div style={{display:'flex',flexDirection:'column'}}>
    <div style={{borderWidth:0,borderColor:'white',borderRadius:12,display:'flex',alignItems:'center',flex:1,marginBottom:'6%'}}>
      <div id='left_body' style={{flex:1,justifyContent:'center',maxWidth:800,display:'flex'}} className="opacity-0">
      <Image alt='image_home' width={280} height={250} src='/home.svg'  />
      </div>
      <div id='right_body' className='opacity-0' style={{flex:1,display:'flex',flexDirection:'column',maxWidth:500,justifyContent:'left'}} >
        <p style={{textAlign:'right',margin:4,fontStyle:'italic',letterSpacing:2,maxWidth:300}}>#Backend #Devops</p>
        <p style={{fontSize:60,fontWeight:'bold'}}>Hi,<br /><span>I&apos;m Luong !</span></p>
        <p style={{maxWidth:300}}>{intro1}</p>
        <p style={{maxWidth:300}}>{intro2}</p>
        {/* <p id='demo' className={styles.typing}>{quote?.text}</p>
        <p style={{fontStyle:'italic',textAlign:'right'}}>#{quote?.author ? `${quote.author.split(',')[0]}`  : ''}</p> */}
      </div>
    </div>
    <SkillLayout/>
    <ExpLayout/>
    </div>
  )
}