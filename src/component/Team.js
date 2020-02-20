import React, { Component } from 'react';
import '../style/team.css';


export default class Team extends Component{
    render(){
        return(
      <div id="team" className="team-body">
         <div className="container-fluid padding">
            <div className="row section welcome text-center">
               <div className="col-12">
                  <h1 className="display-4 team-title">Meet the Team</h1>
               </div>
               <hr/>
            </div>
         </div>

            <div className="row padding justify-content-center">
               <div className="col-md-3 col-sm-6 col-xl-2 text-center" data-aos="fade-right">
                     <img src="images/team/Niko.png" className="rounded-circle" width="150" height="150"/>
               </div>
               <div className="col-md-5  col-sm-6 col-xl-5 text-left">
                     <h2 className="team-name">Niko Perez</h2>
                     <h4 className="team-name2 lead">President</h4>
                     <p className="team-details">Niko is a game developer for about 4 years. He has managed a small freelance game and web development
                           studio and worked with over 60 projects and 30 clients since 2015. He is currently the lead of Games
                           Studio Development.
                     </p>
               </div>
            </div>
            <div className="row padding justify-content-center">
               <div className="col-md-3 col-sm-6 col-xl-2 text-center" data-aos="fade-left">
                  <img src="images/team/Wiljan.png" className="rounded-circle" width="150" height="150"/>
               </div>
               <div className="col-md-5 col-sm-6 col-xl-5 text-left">
                     <h2 className="team-name">Wiljan Torrefiel</h2>
                     <h4 className="team-name2 lead">Vice President</h4>
                     <p className="team-details">Wiljan is passionate, fun loving guy that sees the glass is half full.Wanting to have a name for himself
                     is his prime motivation for working hard.
                     </p>
               </div>
            </div>
            <div className="row padding justify-content-center">
               <div className="col-md-3 col-sm-6 col-xl-2 text-center" data-aos="fade-right">
                  <img src="images/team/Kaille.png" className="rounded-circle" width="150" height="150"/>
               </div>
               <div className="col-md-5 col-sm-6 col-xl-5 text-left">
                     <h2 className="team-name">Kaille Etorma</h2>
                     <h4 className="team-name2 lead">Board Member</h4>
                     <p className="team-details">Kaille currently designs and creates assets for Game Studio Development. He once
                        led a Mobile Game Development project for elementary students.
                     </p>
               </div>
            </div>
            <div className="row padding justify-content-center">
               <div className="col-md-3 col-sm-6 col-xl-2 text-center" data-aos="fade-left">
                  <img src="images/team/Alfred.png" className="rounded-circle" width="150" height="150"/>
               </div>
               <div className="col-md-5 col-sm-6 col-xl-5 text-left">
                     <h2 className="team-name">Alfred Armea</h2>
                     <h4 className="team-name2 lead">Board Member</h4>
                     <p className="team-details">Alfred previously worked both as an IT support specialist and as a web developer for
                        Japanese companies in the past. He is currently working as a member of the development
                        team for Game Studio Development.
                     </p>
               </div>
            </div>
         </div>       
        )
    }
}




