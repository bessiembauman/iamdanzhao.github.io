import React from "react";
import { Grid } from "@material-ui/core";
import "./styles/home.css";

function Home() {
  const profilePic = require("./Bauman_Bessie.jpg");
  const icelandPic = require("./IMG_7802.jpg");
  return (
    <div>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="top"
        style={{ paddingBottom: "2em" }}
      >
        <Grid item xs={8} md={5}>
          <span class="home-top"></span>
          <h2>Yale 2021 | B.A. Economics | 2020 Truman Scholar</h2>
          <span class="home-subdesc">
            I am a recent graduate of Yale University, with a degree in
            Economics. I care deeply about reducing economic inequality, so I
            have studied tax policy, welfare programs, and community development
            both academically and personally. I have experience in direct
            service, legal and academic research, and policy.
          </span>
          <span class="home-subdesc">
            I’m always looking for opportunities to help low- and
            moderate-income families gain economic stability and prosperity --
            whether that be through volunteering with the Volunteer Income Tax
            Assistance (VITA) program, researching how federal policies can
            assist communities in building wealth, or working on local
            campaigns.
          </span>
          <span class="home-subdesc">
            If you’re interested in getting in touch with me, please don’t
            hesitate to reach out! You can send me an{" "}
            <strong>
              <a href="mailto:bessie.bauman@gmail.com">email</a>
            </strong>{" "}
            or connect with me on{" "}
            <strong>
              <a
                href="https://www.linkedin.com/in/bessiebauman35/"
                target="_blank"
              >
                LinkedIn.
              </a>
            </strong>
          </span>
          <span class="home-bottom"></span>
        </Grid>
        <Grid item s={10} md={3} style={{ paddingTop: "2em" }}>
          <img id="bio-prof-pic" src={profilePic} alt=""></img>
        </Grid>
      </Grid>
      <hr class="rounded-divider"></hr>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{ paddingTop: "1em", paddingBottom: "2em" }}
      >
        <Grid item xs={8} style={{ textAlign: "center" }}>
          <h2> My Backstory </h2>
        </Grid>
        <Grid item xs={8}>
          <span class="home-subdesc">
            I am a child of Deaf adults, a second-generation Cuban-American, and
            a passionate advocate for economic justice.
          </span>
          <span class="home-subdesc">
            Economic justice is an issue near to my heart. I lost my father to
            cancer in my freshman year of high school, and in that year, I
            learned so much about how to navigate the American welfare system.
            By extension, I discovered how hard it is for Americans, especially
            for those who are disabled or speak languages other than English, to
            get help when they need it most. These experiences, among others,
            have inspired me to pursue compassionate and effective policies that
            can help all people access economic stability and prosperity.
          </span>
          <span class="home-subdesc">
            In college, I fell in love with doing direct work to help low- and
            moderate-income families while also studying how we can broadly
            restructure our economy for the benefit of all people. My urgency
            for working in economic justice has only grown as I’ve seen the
            importance of amplifying marginalized voices to enact substantial
            and sustainable change. I’m committed to leveraging my skills to
            advocate alongside people to push for progress.
          </span>
        </Grid>
      </Grid>
      <hr class="rounded-divider"></hr>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{ paddingTop: "1em", paddingBottom: "2em" }}
      >
        <Grid item xs={8} style={{ textAlign: "center" }}>
          <h2> My Work </h2>
        </Grid>
        <Grid item xs={8}>
          <span class="home-subdesc">
            <strong>Redstone Strategy Group</strong> (Beginning August 2021)
          </span>
        </Grid>
        <Grid item xs={8}>
          <ul class="list-arrows">
            <li>
              Starting August 2021, I will work as an{" "}
              <strong>
                <a
                  href="https://www.redstonestrategy.com/people/bessie-bauman/"
                  target="_blank"
                >
                  analyst
                </a>
              </strong>{" "}
              for Redstone Strategy Group to help nonprofits, philanthropies,
              and governments maximize their social returns in the sectors of
              shared prosperity, climate & energy, education, environment, and
              health.
            </li>
          </ul>
        </Grid>
        <Grid item xs={8}>
          <span class="home-subdesc">
            <strong>Department of Labor Civil Rights Center</strong> (June -
            July 2021)
          </span>
        </Grid>
        <Grid item xs={8}>
          <ul class="list-arrows">
            <li>
              With the support of the Truman Foundation, I am working as an
              intern with the DOL CRC Office of External Enforcement to process,
              investigate, and adjudicate discrimination claims in programs that
              receive federal financial assistance. I am largely working on
              cases related to access to unemployment insurance for individuals
              with disabilities and/or limited English proficiency.
            </li>
          </ul>
        </Grid>
        <Grid item xs={8}>
          <span class="home-subdesc">
            <strong>Prosperity Now</strong> (May - August 2020)
          </span>
        </Grid>
        <Grid item xs={8}>
          <ul class="list-arrows">
            <li>
              I worked with Prosperity Now’s policy team as a summer intern to
              provide research support on federal policies related to economic
              stability and the COVID-19 crisis. I published two blog posts on{" "}
              <strong>
                <a
                  href="https://prosperitynow.org/blog/supporting-vita-supporting-families-through-pandemic"
                  target="_blank"
                >
                  VITA
                </a>{" "}
              </strong>
              and{" "}
              <strong>
                <a
                  href="https://prosperitynow.org/blog/seven-ways-congress-can-help-working-families-next-stimulus-bill"
                  target="_blank"
                >
                  Congressional Stimulus Priorities
                </a>
              </strong>
              , as well as wrote policy briefs about Prosperity Now’s 2021
              policy goals and universal banking. I was funded by the Yale Law
              School Arthur C. Liman Center for Public Interest Law as a{" "}
              <strong>
                <a
                  href="https://law.yale.edu/centers-workshops/arthur-liman-center-public-interest-law/undergraduate-summer-fellowship/summer-fellows-host-organizations"
                  target="_blank"
                >
                  summer fellow
                </a>{" "}
              </strong>
              to pursue this opportunity.
            </li>
          </ul>
        </Grid>
        <Grid item xs={8}>
          <span class="home-subdesc">
            <strong>Volunteer Income Tax Assistance Program</strong> (May 2019 -
            June 2020)
          </span>
        </Grid>
        <Grid item xs={8}>
          <ul class="list-arrows">
            <li>
              I served as the Co-President of{" "}
              <strong>
                <a href="https://yhhap.org/vita" target="_blank">
                  one of the largest service organizations on Yale’s campus
                </a>
              </strong>
              . I managed 150 volunteers across Yale University and coordinated
              free tax preparation for approximately 1,200 clients. In the 2020
              tax season, we returned $1.3 million to taxpayers in the New Haven
              area. Upon the closure of Yale University due the pandemic, I
              worked with my Co-President Tylar Bloch to transition VITA to a
              totally virtual operation to continue serving clients.
            </li>
          </ul>
        </Grid>
        <Grid item xs={8}>
          <span class="home-subdesc">
            <strong>Yale Institute of Social and Policy Studies</strong>{" "}
            (January - December 2020)
          </span>
        </Grid>
        <Grid item xs={8}>
          <ul class="list-arrows">
            <li>
              I was selected as a{" "}
              <strong>
                <a
                  href="https://isps.yale.edu/team/bessie-bauman"
                  target="_blank"
                >
                  Director's Fellow
                </a>{" "}
              </strong>{" "}
              for the Institute. Through this program, I have received extensive
              training in public policy. I have collaboratively written a policy
              memo on potential VITA expansion in the Navajo Nation, and I have
              co-authored{" "}
              <strong>
                <a
                  href="https://prosperitynow.org/resources/financial-access-all"
                  target="_blank"
                >
                  a report on universal financial access
                </a>
              </strong>{" "}
              with experts from Prosperity now.
            </li>
          </ul>
        </Grid>
        <Grid item xs={8}>
          <span class="home-subdesc">
            <strong>
              Yale Law School Ludwig Center for Community & Economic Development
            </strong>{" "}
            (October 2019 - January 2020)
          </span>
        </Grid>
        <Grid item xs={8}>
          <ul class="list-arrows">
            <li>
              Under the supervision of Professor Anika Singh Lemar, I worked as
              a research assistant to the Community & Economic Development
              Clinic at Yale Law School. I researched New Haven and Connecticut
              food laws to help create presentations for food business
              entrepreneurs in the Collab New Haven Food Business Accelerator
              and for the{" "}
              <strong>
                <a
                  href="https://www.legalfoodhub.org/services/education/"
                  target="_blank"
                >
                  Legal Food Hub of the Conservation Law Foundation.
                </a>
              </strong>
            </li>
          </ul>
        </Grid>
        <Grid item xs={8}>
          <span class="home-subdesc">
            <strong>Stacey Knoell for Kansas State Senate</strong> (July -
            November 2020)
          </span>
        </Grid>
        <Grid item xs={8}>
          <ul class="list-arrows">
            <li>
              I joined the{" "}
              <strong>
                <a href="https://staceyknoell.com/" target="_blank">
                  Stacey Knoell Campaign
                </a>
              </strong>{" "}
              as one of its first few Youth Fellows. In this role, I’ve helped
              the campaign with youth voter outreach efforts, phone banking,
              opposition research, and more.
            </li>
          </ul>
        </Grid>
        <Grid item xs={8}>
          <span class="home-subdesc">
            <strong>MicroGrants</strong> (May - July 2019)
          </span>
        </Grid>
        <Grid item xs={8}>
          <ul class="list-arrows">
            <li>
              I worked as an intern with Minneapolis-based nonprofit{" "}
              <strong>
                <a href="https://microgrants.net/" target="_blank">
                  MicroGrants
                </a>{" "}
              </strong>
              to evaluate their program and grant efficacy. I produced an{" "}
              <strong>
                <a
                  href="https://microgrants.net/wp-content/uploads/2020/01/2018-MG-Annual-Eval-Report.pdf"
                  target="_blank"
                >
                  annual evaluation report
                </a>
              </strong>
              , spoke with donors, and presented recommendations to the Board of
              Directors to improve MicroGrants ability to provide people of
              potential with financial boosts.
            </li>
          </ul>
        </Grid>
        <Grid item xs={8}>
          <span class="home-subdesc">
            <strong>Student Mentorship</strong>
          </span>
        </Grid>
        <Grid item xs={8}>
          <ul class="list-arrows">
            <li>
              Throughout my time at Yale, I’ve tried to serve as an effective
              and empathetic mentor to other students. As an{" "}
              <strong>
                <a
                  href="https://poorvucenter.yale.edu/meet-our-mentors"
                  target="_blank"
                >
                  Academic Strategies Mentor
                </a>
              </strong>
              , I strategize with students (particularly first-generation and/or
              low-income students) to navigate academic difficulties by
              providing 1-1 mentorship and facilitating workshops. As a{" "}
              <strong>
                <a
                  href="https://ezrastiles.yalecollege.yale.edu/people/first-year-counselors-2020-21"
                  target="_blank"
                >
                  First Year Counselor
                </a>
              </strong>
              , I am helping ten first-year students in their transition to
              college amid a pandemic. As a Communication and Consent Educator,
              I worked with a diverse team to promote a positive sexual culture
              on campus.
            </li>
          </ul>
        </Grid>
      </Grid>
      <hr class="rounded-divider"></hr>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{ paddingTop: "1em", paddingBottom: "2em" }}
      >
        <Grid item xs={8} style={{ textAlign: "center" }}>
          <h2> Awards </h2>
        </Grid>
        <Grid item xs={8}>
          <span class="home-subdesc">
            <strong>2021</strong>
          </span>
        </Grid>
        <Grid item xs={8}>
          <ul class="list-arrows">
            <li>
              <strong>Yale David Everett Chantler Award:</strong> This award is
              to be presented in the spring to that graduating member of the
              Senior Class who has best exemplified qualities of courage,
              strength of character, and high moral purpose.
            </li>
            <li>
              <strong>Ezra Stiles Richard B. Sewall Cup:</strong> This award is
              given to a senior for outstanding scholarly achievement and
              creative promise.
            </li>
          </ul>
        </Grid>
        <Grid item xs={8}>
          <span class="home-subdesc">
            <strong>2020</strong>
          </span>
        </Grid>
        <Grid item xs={8}>
          <ul class="list-arrows">
            <li>
              <strong>Truman Scholarship: </strong>
              <strong>
                <a
                  href="https://www.truman.gov/whats-new/2020-truman-scholars"
                  target="_blank"
                >
                  Students
                </a>
              </strong>{" "}
              are named Truman Scholars based on their records of leadership,
              public service, and academic achievement.
            </li>
            <li>
              <strong>Yale John C. Schroeder Award: </strong>
              This
              <strong>
                <a
                  href="https://news.yale.edu/2020/05/14/juniors-win-prizes-leadership-service-character"
                  target="_blank"
                >
                  {" "}
                  award
                </a>
              </strong>{" "}
              is given to students who have contributed to residential college
              life and who, in the opinion of the committee, will “play a part
              in the good labor of the world.”
            </li>
          </ul>
        </Grid>
        <Grid item xs={8}>
          <span class="home-subdesc">
            <strong>2017</strong>
          </span>
        </Grid>
        <Grid item xs={8}>
          <ul class="list-arrows">
            <li>
              <strong>U.S. Presidential Scholar: </strong>
              This
              <strong>
                <a
                  href="https://www2.ed.gov/programs/psp/2017/awards.html"
                  target="_blank"
                >
                  {" "}
                  award
                </a>
              </strong>{" "}
              was designed to recognize and honor some of our nation's most
              distinguished graduating high school seniors.
            </li>
            <li>
              <strong>Jack Kent Cooke College Scholar: </strong>
              The Jack Kent Cooke Foundation awards one of the largest
              scholarships in the United States, the
              <strong>
                <a
                  href="https://www.jkcf.org/our-stories/meet-the-2017-cooke-college-scholars/"
                  target="_blank"
                >
                  {" "}
                  College Scholarship
                </a>
              </strong>
              , to outstanding students with financial need. Cooke College
              Scholars are selected based on exceptional academic ability and
              achievement, financial need, persistence, service to others and
              leadership.
            </li>
            <li>
              <strong>Horatio Alger State Scholar</strong>
            </li>
          </ul>
        </Grid>
        <Grid item xs={8}>
          <span class="home-subdesc">
            <strong>2016</strong>
          </span>
        </Grid>
        <Grid item xs={8}>
          <ul class="list-arrows">
            <li>
              <strong>
                Leadership Enterprise for a Diverse America Scholar
              </strong>
            </li>
          </ul>
        </Grid>
      </Grid>
      <hr class="rounded-divider"></hr>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{ paddingTop: "1em", paddingBottom: "2em" }}
      >
        <Grid item xs={8} style={{ textAlign: "center" }}>
          <h2> Classes I've Taken </h2>
        </Grid>
        <Grid item xs={8}>
          <span class="home-subdesc">
            <strong>Policy & Political Science</strong>
          </span>
        </Grid>
        <Grid item xs={8}>
          <ul class="list-arrows">
            <li>
              In{" "}
              <strong class="class-names">
                Poverty & Social Welfare Policy in the United States
              </strong>{" "}
              (SOCY 341), I studied several of the United States’ foundational
              welfare programs, such as Temporary Assistance for Needy Families,
              Supplemental Nutrition Assistance Program, and Medicaid. I wrote
              my final policy memo on the need to expand the Child Tax Credit.
            </li>
            <li>
              In <strong class="class-names">Capitalism and Crisis</strong>{" "}
              (PLSC 387), I studied the historical and political developments of
              welfare states in advanced economies such as Sweden, the UK, and
              Germany.
            </li>
            <li>
              In{" "}
              <strong class="class-names">
                Inequality and Social Mobility
              </strong>{" "}
              (SOCY 234), I learned about important sociological trends in
              inequality and relevant policy responses.
            </li>
            <li>
              In{" "}
              <strong class="class-names">Politics of Economic Security</strong>{" "}
              (PLSC 265), I studied the politics and public support of the
              American social safety net. I wrote my final paper on public
              support (or lack thereof) for making socioeconomic status a
              suspect class.
            </li>
            <li>
              In the Yale School of Management Course{" "}
              <strong class="class-names">
                Urban Poverty and Economic Development
              </strong>{" "}
              (MGT 536), I worked with MBA students to understand development
              patterns in American cities and analyze policies to alleviate
              poverty. I wrote my final project on the status of Individual
              Development Account projects across the country.
            </li>
          </ul>
        </Grid>
        <Grid item xs={8}>
          <span class="home-subdesc">
            <strong>Law</strong>
          </span>
        </Grid>
        <Grid item xs={8}>
          <ul class="list-arrows">
            <li>
              In <strong class="class-names">Anti-Slavery in Building</strong>{" "}
              (ARCH 2242), a course cross listed between the Yale School of
              Architecture and Yale Law School, I studied the prevalence of
              slavery in building industries and methods to combat it using
              supply chain tracking, legal recourse, and more.
            </li>
            <li>
              In{" "}
              <strong class="class-names">
                Modern Slavery and the 13th Amendment
              </strong>{" "}
              (HIST 122), I analyzed domestic and international approaches to
              slavery. I studied the legal consequences of cornerstone
              legislation like the Trafficking Victims Protection Act and the
              Modern Slavery Act of 2015. I wrote my final paper on the dark
              history of forced labor in the natural rubber industry.
            </li>
            <li>
              In <strong class="class-names">Constitutional Law</strong> (PLSC
              233), I honed my skills in constitutional interpretation and
              learned about landmark cases in taxation, discrimination, and
              more. I wrote my final paper for the course about the power of the
              judiciary to combat housing discrimination.
            </li>
            <li>
              In{" "}
              <strong class="class-names">
                Thinking and Writing About the Law
              </strong>{" "}
              (ENGL 121), I explored moral, political, and philosophical
              approaches to the law. I worked extensively to make my writing
              more concise and simple.
            </li>
          </ul>
        </Grid>
        <Grid item xs={8}>
          <span class="home-subdesc">
            <strong>Economics</strong>
          </span>
        </Grid>
        <Grid item xs={8}>
          <ul class="list-arrows">
            <li>
              I completed the Yale economics core (microeconomics,
              macroeconomics, and econometrics).
            </li>
            <li>
              In <strong class="class-names">American Economics History</strong>{" "}
              (ECON 184), I learned how to read and understand empirical
              economics papers, especially those related to inequality and
              development. In this class, I became fascinated with the work of
              Daron Acemoglu and James Robinson, especially their book “Why
              Nations Fail.”
            </li>
            <li>
              In{" "}
              <strong class="class-names">Institutional Design & Change</strong>{" "}
              (ECON 457), I studied the efficiency and distributive consequences
              of institutions, seeking to understand why some bad institutions
              persist over time. I wrote my final paper on the explanatory
              variables of the racial wealth gap.
            </li>
            <li>
              In{" "}
              <strong class="class-names">
                Economics and Psychology of Poverty
              </strong>{" "}
              (ECON 479), I reviewed randomized control trials in behavioral
              economics to understand the impact of unconditional cash transfers
              and other specially psychologically-designed policy levers on
              households’ economic prosperity. For my final paper, I conducted a
              meta-analysis on economic papers evaluating the average effect of
              tax salience on consumer behavior.
            </li>
          </ul>
        </Grid>
        <Grid item xs={8}>
          <span class="home-subdesc">
            <strong>Data Visualization</strong>
          </span>
        </Grid>
        <Grid item xs={8}>
          <ul class="list-arrows">
            <li>
              In{" "}
              <strong class="class-names">Data Analysis & Exploration</strong>{" "}
              (S&DS 230), I greatly improved my coding skills in R to more
              effectively clean and present data.
            </li>
            <li>
              In{" "}
              <strong class="class-names">
                Introduction to Computer Science
              </strong>{" "}
              or CS50, I learned the fundamentals of coding in C and Python,
              along with a bit of SQL.
            </li>
          </ul>
        </Grid>
      </Grid>
      <hr class="rounded-divider"></hr>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="top"
        style={{ paddingTop: "1em", paddingBottom: "1em" }}
      >
        <Grid item xs={12} style={{ textAlign: "center" }}>
          <h2>More About Me</h2>
        </Grid>
        <Grid item s={8} md={4}>
          <img id="iceland-pic" src={icelandPic} alt=""></img>
        </Grid>
        <Grid item s={8} md={4}>
          <ul class="list-arrows">
            <li style={{ paddingBottom: "1.5em" }}>
              I am fluent in American Sign Language and proficient in Spanish. I
              am passionate about Deaf community and culture.
            </li>
            <li style={{ paddingBottom: "1.5em" }}>
              I have traveled to Cuba to study Spanish and meet my extended
              family. My favorite comfort foods are picadillo, lechon asado,
              morro, and plaintains.
            </li>
            <li style={{ paddingBottom: "1.5em" }}>
              Some of my favorite books are{" "}
              <strong class="class-names">The Yellow House</strong> by Sarah
              Broom, <strong class="class-names">Atomic Habits</strong> by James
              Clear, and <strong class="class-names">A House in the Sky</strong>{" "}
              by Amanda Lindhout.
            </li>
            <li>
              I love to travel. I especially love to take road trips. In the
              picture to the left, you'll see me in Iceland, where I drove
              across the frozen south coast.
            </li>
          </ul>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
