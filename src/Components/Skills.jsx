import React, { useEffect } from 'react'
import './skills.css'
import jsPng from '../assets/js.png'
import bootstrapPng from '../assets/botstrap.png'
import cssPng from '../assets/css.png'
import htmlPng from '../assets/html.png'
import reactjsPng from '../assets/reactjs.png'
import mongodbPng from '../assets/mongodb.png'
import postgresqlPng from '../assets/elephant.png'
import angularPng from '../assets/angularr.png'
import nodePng from '../assets/node.png'
import materialPng from '../assets/material.png'
import expressPng from '../assets/express.png'
import mysqlPng from '../assets/mysql.png'
import postmanPng from '../assets/post.png'
import githubPng from '../assets/githubb.png'
import tailwindPng from '../assets/tailwind.png'
import vitePng from '../assets/vite.png'
import vsCodePng from '../assets/vs.png'
import fireBasePng from '../assets/fire.png'
import Aos from 'aos'

function Skills() {

    useEffect(()=>{
        Aos.init({duration:1000});
      },[])

  return (
    <div className='container mainSkillDiv' id='skills'>
        <h2>MY SKILLS</h2>
        <div className='divCenter'>What I Know?</div>
        <div className="row w-100 container text-center r my-5" data-aos='fade-right'  data-aos-once='true' >
            <div className="col-lg-2 col-4 ">
            <img src={htmlPng} alt="" />
            <p>HTML</p>
            </div>
            <div className="col-lg-2 col-4">
            <img src={cssPng} alt="" />
            <p>CSS</p>
            </div>
            <div className="col-lg-2 col-4">
            <img src={bootstrapPng} alt="" />
            <p>BOOTSTRAP</p>
            </div>
            <div className="col-lg-2 col-4 ">
            <img src={jsPng} alt="" />
            <p>JAVASCRIPT</p>
            </div>
            <div className="col-lg-2 col-4">
            <img src={reactjsPng} alt="" />
            <p>REACT JS</p>
            </div>
            <div className="col-lg-2 col-4">
            <img src={mongodbPng} alt="" />
            <p>MONGO DB</p>
            </div>
        </div>
        <div className="row w-100 container my-5 text-center " data-aos-once='true'  data-aos='fade-right'>
            <div className="col-lg-2 col-4">
            <img src={nodePng} alt="" />
            <p>NODE JS</p>
            </div>
            <div className="col-lg-2 col-4">
            <img src={expressPng} alt="" />
            <p>EXPRESS JS</p>
            </div>
            <div className="col-lg-2 col-4">
            <img src={materialPng} alt="" />
            <p>MATERIAL UI</p>
            </div>
            <div className="col-lg-2 col-4">
            <img src={fireBasePng} alt="" />
            <p>FIREBASE</p>
            </div>
            <div className="col-lg-2 col-4">
            <img src={vitePng} alt="" />
            <p>VITE JS</p>
            </div>
            <div className="col-lg-2 col-4">
            <img src={angularPng} alt="" />
            <p>ANGULAR</p>
            </div>
        </div>
        <div className="row w-100 container text-center my-5"  data-aos-once='true' data-aos='fade-right'>
            <div className="col-lg-12 col-12">
            <img src={githubPng} alt="" />
            <p>GITHUB</p>
            </div>
            
        </div>
        {/* <div className="row w-100 container text-center my-5">
            <div className="col-lg-3 col-4">
            <img src={mysqlPng} alt="" />
            </div>
            <div className="col-lg-3 col-4">
            <img src={postgresqlPng} alt="" />
            </div>
            <div className="col-lg-3 col-4">
            <img src={tailwindPng} alt="" />
            </div>
            <div className="col-lg-3 col-4">
            <img src={vitePng} alt="" />
            </div>
        </div> */}

    </div>
  )
}

export default Skills