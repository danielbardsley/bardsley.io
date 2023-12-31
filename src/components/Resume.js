import React, { Component } from 'react';
export default  class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">

         <div className="row education">

            <div className="three columns header-col">
               <h1><span>Education</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.education && resumeData.education.map((item)=>{
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.UniversityName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                          <p>
                          {item.Achievements}
                          </p>
                       </div>
                    </div>
                  )
                })
              }
            </div>
         </div>
          <div className="row education">

              <div className="three columns header-col">
                  <h1><span>Publications</span></h1>
              </div>

              <div className="nine columns main-col">
                  {
                      resumeData.education && resumeData.publications.map((item)=>{
                          return(
                              <div className="row item">
                                  <div className="twelve columns">
                                      <h4>{item.title}</h4>
                                      <p className="info">
                                          {item.journal}
                                          <span>&bull;</span> <em className="date">{item.year}</em></p>
                                  </div>
                              </div>
                          )
                      })
                  }
              </div>
          </div>
          <div className="row work">
              <div className="three columns header-col">
                  <h1><span>Work</span></h1>
              </div>

              <div className="nine columns main-col">
                  <div className={"row item"}>
                      <div className="twelve columns">
                          <p>{resumeData.resumeSummary}</p>
                      </div>
                  </div>
                  {
                      resumeData.work && resumeData.work.map((item, index) => {
                          return (
                              <div key={index} className="row item">
                                  <div className="twelve columns">
                                      <h3>{item.CompanyName}</h3>
                                      <p className="info">
                                          {item.specialization}
                                          <span>&bull;</span> <em
                                          className="date">{item.employmentPeriod}</em></p>
                                      <p>
                                          {item.Achievements}
                                      </p>
                                      <p>
                                          {item.additionalAchievements}
                                      </p>
                                  </div>
                              </div>
                          )
                      })
                  }
              </div>
          </div>

      </section>
    );
  }
}