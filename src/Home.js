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
        style={{ paddingTop: "1em", paddingBottom: "2em" }}
      >
        <Grid item xs={5}>
          <span class="home-top"></span>
          <h2>Yale 2021 | B.A. Economics | 2020 Truman Scholar</h2>
          <span class="home-subdesc">
            I care deeply about reducing economic inequality, so I’ve focused on
            studying tax policy, welfare programs, and community development. I
            have experience in direct service, legal and academic research, and
            policy.
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
            I've been named a 2020{" "}
            <strong>
              <a href="https://www.truman.gov/whats-new/2020-truman-scholars">
                Truman Scholar
              </a>
            </strong>
            , a 2017{" "}
            <strong>
              {" "}
              <a href="https://www.kansascity.com/news/local/community/joco-913/article153111499.html">
                United States Presidential Scholar
              </a>
            </strong>
            , and a 2017{" "}
            <strong>
              <a href="https://www.jkcf.org/our-stories/meet-the-2017-cooke-college-scholars/">
                Jack Kent Cooke College Scholar
              </a>
            </strong>
            . I'm so grateful to have the support of my friends, mentors, and
            family as I pursue a career in public service.
          </span>
          <span class="home-subdesc">
            If you’re interested in getting in touch with me, please don’t
            hesitate to reach out! You can send me an{" "}
            <strong>
              <a href="mailto:bessie.bauman@gmail.com">email</a>
            </strong>{" "}
            or connect with me on{" "}
            <strong>
              <a href="https://www.linkedin.com/in/bessiebauman35/">
                LinkedIn.
              </a>
            </strong>
          </span>
          <span class="home-bottom"></span>
        </Grid>
        <Grid item xs={3}>
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
            I am a child of deaf adults, a second-generation Cuban-American, and
            a passionate advocate for economic justice.
          </span>
          <span class="home-subdesc">
            I come from a family that has faced a difficult set of economic
            circumstances. I lost my father to cancer in my freshman year of
            high school, and in that year, I learned so much about how to
            navigate the American welfare system. By extension, I discovered how
            hard it is for Americans to get help when they need it most.
            Additionally, my maternal grandmother escaped economic hardship in
            Cuba by immigrating to Miami, FL in 1958. These experiences and many
            others have inspired me to relentlessly pursue compassionate and
            effective policies that can help all people access economic
            stability and prosperity.
          </span>
          <span class="home-subdesc">
            In college, I fell in love with doing direct work to help low- and
            moderate-income families while also studying how we can broadly
            restructure our economy for the benefit of all people. My urgency
            for working in economic justice has only grown as I’ve seen the
            importance of amplifying marginalized voices to initiate real,
            sustainable change in vulnerable communities. I’m committed to
            leveraging my skills to advocate alongside people to push for
            progress.
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
                <a href="https://prosperitynow.org/blog/supporting-vita-supporting-families-through-pandemic">
                  VITA
                </a>{" "}
              </strong>
              and{" "}
              <strong>
                <a href="https://prosperitynow.org/blog/seven-ways-congress-can-help-working-families-next-stimulus-bill">
                  Congressional Stimulus Priorities
                </a>
              </strong>
              , as well as wrote policy briefs about Prosperity Now’s 2021
              policy goals and universal banking.
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
                <a href="https://isps.yale.edu/team/bessie-bauman">
                  Director's Fellow
                </a>{" "}
              </strong>{" "}
              for the Institute. Through this program, I have received extensive
              training in public policy. I have collaboratively written a policy
              memo on potential VITA expansion in the Navajo Nation, and I am
              currently working on a longer whitepaper on the feasibility of
              universal banking in the United States.
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
                <a href="https://www.legalfoodhub.org/services/education/">
                  Legal Food Hub of the Conservation Law Foundation.
                </a>
              </strong>
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
                <a href="https://yhhap.org/vita">
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
            <strong>Stacey Knoell for Kansas State Senate</strong> (July -
            November 2020)
          </span>
        </Grid>
        <Grid item xs={8}>
          <ul class="list-arrows">
            <li>
              I joined the{" "}
              <strong>
                <a href="https://staceyknoell.com/">Stacey Knoell Campaign</a>
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
                <a href="https://microgrants.net/">MicroGrants</a>{" "}
              </strong>
              to evaluate their program and grant efficacy. I produced an{" "}
              <strong>
                <a href="https://microgrants.net/wp-content/uploads/2020/01/2018-MG-Annual-Eval-Report.pdf">
                  an annual evaluation report
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
                <a href="https://poorvucenter.yale.edu/meet-our-mentors">
                  Academic Strategies Mentor
                </a>
              </strong>
              , I strategize with students (particularly first-generation and/or
              low-income students) to navigate academic difficulties by
              providing 1-1 mentorship and facilitating workshops. As a{" "}
              <strong>
                <a href="https://ezrastiles.yalecollege.yale.edu/people/first-year-counselors-2020-21">
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
        <Grid item xs={4}>
          <img id="iceland-pic" src={icelandPic} alt=""></img>
        </Grid>
        <Grid item xs={4}>
          <ul class="list-arrows">
            <li style={{ paddingBottom: "1.5em" }}>
              I am fluent in American Sign Language and proficient in Spanish. I
              am passionate about Deaf community and culture.
            </li>
            <li style={{ paddingBottom: "1.5em" }}>
              I have traveled to Cuba to study Spanish and meet my extended
              family. My favorite comfort foods are picadillo, Cuban pork,
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
