import React from "react";
import "./ResumePage.css";
import data from "../../data.json";
import javascript from "../../images/tech/javascript.svg";
import git from "../../images/tech/git.svg";
import python from "../../images/tech/python.svg";
import linux from "../../images/tech/linux.png";
import sql from "../../images/tech/sql.svg";
import react from "../../images/tech/react.svg";
import nodejs from "../../images/tech/nodejs.svg";
import html5 from "../../images/tech/html5.svg";
import css3 from "../../images/tech/css3.svg";
import flask from "../../images/tech/flask.svg";

const ResumePage = () => {
	return (
		<section className="resume-page">
			<header className="resume-page__header">
				<h1 className="resume-page__heading resume-page__heading--main">
					Resume
				</h1>
				<p className="resume-page__subheading">
					Learn more about my skills, qualifications and experiences.
				</p>
			</header>
			<div className="resume-page__body">
				<div className="resume-page__content">
					<div className="resume-page__content-left">
						<h2 className="resume-page__heading">Work Experience</h2>
						<p className="resume-page__subheading--body">
							PRESENT & PREVIOUS JOBS
						</p>
					</div>
					<div className="resume-page__content-right">
						<div class="work-wrapper">
							{data.work.map((work, i) => (
								<div class="work" key={i}>
									<p className="work__timeline">
										{work.timeline.from} - {work.timeline.to}
									</p>
									<h3 className="work__role">{work.role}</h3>
									<p className="work__company">{work.company}</p>
									<p className="work__summary">{work.summary} </p>
								</div>
							))}
						</div>
					</div>
				</div>

				<div className="resume-page__content">
					<div className="resume-page__content-left">
						<h2 className="resume-page__heading">Education</h2>
						<p className="resume-page__subheading--body">ACADEMIC CAREER</p>
					</div>
					<div className="resume-page__content-right">
						<div class="education-wrapper">
							{data.education.reverse().map((edu, i) => (
								<div class="education" key={i}>
									<h3 className="education__degree">{edu.degree}</h3>
									<p className="education__school">{edu.school}</p>
									<p className="education__timeline">
										{edu.timeline.from} - {edu.timeline.to}
									</p>
									<p className="education__summary">{edu.summary} </p>
								</div>
							))}
						</div>
					</div>
				</div>

				<div className="resume-page__content">
					<div className="resume-page__content-left">
						<h2 className="resume-page__heading">Tech Stack</h2>
						<p className="resume-page__subheading--body">
							TOOLS & TECHNOLOGIES
						</p>
					</div>
					<div className="resume-page__content-right">
						{/* 
						JavaScript,
						ReactJS,
						NodeJS,
						Python,
						Flask,
						Linux,
						HTML,
						CSS,
						Git,
						SQL
						
						
						*/}
						<div className="tech">
							<img src={javascript} alt="javascript" className="tech__logo" />
							<img src={react} alt="React JS" className="tech__logo" />
							<img src={python} alt="Python" className="tech__logo" />
							<img src={flask} alt="Flask" className="tech__logo" />
							<img src={nodejs} alt="NodeJS" className="tech__logo" />
							<img src={sql} alt="SQL" className="tech__logo" />
							<img src={html5} alt="HTML5" className="tech__logo" />
							<img src={css3} alt="CSS3" className="tech__logo" />
							<img src={git} alt="Git" className="tech__logo" />
							<img src={linux} alt="Linux" className="tech__logo" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ResumePage;
