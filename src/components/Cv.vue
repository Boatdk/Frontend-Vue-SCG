<template>
  <b-card>
    <div>
      <img
        class="logo"
        src="https://scontent-sin6-2.xx.fbcdn.net/v/t1.0-9/38614711_125674078365567_5606899867273134080_n.jpg?_nc_cat=100&_nc_eui2=AeH1LuBMvne9QVZp351fOfQz1rwpja6ZKy6HovqIRyirUOSphQpn7NdaEJ65NN-O1BFX5CQVuVW1-ZqK8gyfSyZI4FGISgCgPGD2m-GHScHmRQ&_nc_ohc=dK6hIrvRGjMAX8KqVFt&_nc_ht=scontent-sin6-2.xx&oh=969b72e8f36c70951dab96263811ff2e&oe=5EB7B2DE"
        alt
      />
      <h1 class="name">Panitarn Duangkhwan</h1>
      <span class="slogan">Web Developer</span>
      <div class="social-img">
        <ul>
          <li>
            <a href target="_blank">
              <i class="fa tw fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href target="_blank">
              <i class="fa tw fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href target="_blank">
              <i class="fa github fa-github"></i>
            </a>
          </li>
        </ul>
      </div>
      <div class="bio">
        <h4>Bio</h4>Hello, My name is Boat. I lived in Phuket.I graduated from Prince of
        Songkhla University ( PSU ). I am a hard-working man and I love to
        coding program.
      </div>
      <div class="mt-2">
        <div>
          <h4>Education</h4>
          <div>
            <div>
              Prince of Songkhla University
              <b-badge variant="success">2014</b-badge>
            </div>
            <div class="sub">Bachelor of Engineering Program in Computer Engineering</div>
            <span></span>
          </div>
        </div>
        <div class="mt-2">
          <h4>Work Experience & Activities</h4>
          <ul>
            <li>
              <div>
                Internship Pic Phuket
                <b-badge variant="success">2018</b-badge>(
                <span class="sub">backend, restful API, nodeJS</span> )
              </div>
            </li>
            <li>
              <div>
                President of the Faculty of Engineer
                <b-badge variant="success">2018</b-badge>(
                <span class="sub">
                  Manage all activity of
                  faculty
                </span> )
              </div>
            </li>
            <li>
              <div>
                Data visualisation Hackaton
                <b-badge variant="success">2018</b-badge>(
                <span class="sub">Qualified made by Depa Thailand</span>)
              </div>
            </li>
            <li>
              <div>
                Freelance with team programmer
                <b-badge variant="success">2019</b-badge>(
                <span class="sub">
                  Using PHP, nodeJs, mySql,
                  digital ocean, seo, Restful API
                </span> )
              </div>
            </li>
          </ul>
        </div>
        <div class="mt-2">
          <h4>Skill</h4>
          <div>
            NodeJs, ReactJs, Docker, Firebase, MySQL, MongoDB, Restful API, PHP,
            Laravel Java OOP, Line API, Dialog flow
          </div>
        </div>
        <div class="mt-2">
          <h4>Contact</h4>
          <div>
            <i class="fa fa-mobile fa-lg" style="color: lightblue;"></i>
            <b>Mobile:</b> +66 82-834-5356
          </div>
          <div>
            <i class="fa fa-envelope" style="color: red"></i>
            <b>Email:</b>
            boat.panitarn@gmail.com
          </div>
          <div>
            <i class="fa fa-home" style="color: green"></i>
            <b>Home:</b> Phuket,
            Thailand
          </div>
        </div>
      </div>
    </div>
  </b-card>
</template>

<script>
export default {};
</script>

<style>
.container {
  max-width: 600px;
  margin: 0 auto;
  margin-top: 50px;
}

p.bio {
  text-align: center;
}

hr {
  width: 100px;
  height: 2px;
  background-color: #2199e8;
  margin-bottom: 50px;
  margin-top: 10px;
}

img.logo {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.7);
}

h1.name {
  text-transform: uppercase;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
}

h4 {
  text-transform: uppercase;
}

span.slogan {
  display: block;
  text-align: center;
  text-transform: uppercase;
  font-size: 14px;
  color: rgba(51, 51, 51, 07);
  margin-bottom: 15px;
}

.social-img ul {
  margin: 0;
  text-align: center;
  width: 100%;
  margin-bottom: 10px;
}

.social-img ul li {
  display: inline;
  background: rgba(204, 204, 204, 0.5);
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  transition: background 150ms ease-in-out;
}

.social-img ul li:hover {
  background: #ccc;
}

h5.title {
  text-align: center;
  font-size: 1.1rem;
  margin-top: 50px;
  margin-bottom: 0px;
  text-transform: uppercase;
}

.work {
  margin-bottom: 20px;
}

.footer {
  text-align: center;
  padding: 20px 0;
  color: rgba(51, 51, 51, 0.5);
}

.sub {
  font-size: 13px;
  color: grey;
  font-weight: bold;
}
</style>
