<template>
  <footer className="footer">
    <h2>DOUBLED</h2>

    <ul className="footer-list">
      <li>
        <a href="https://github.com/Dennardavid" className="socials">
          <FaGithub />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/david-dennar/" className="socials">
          <FaLinkedin />
        </a>
      </li>
      <li>
        <a href="https://twitter.com/dennar_david" className="socials">
          <FaSquareXTwitter />
        </a>
      </li>
    </ul>
  </footer>
</template>

<style scoped>
.footer h2 {
  font-family: "Ojuju", sans-serif;
  font-optical-sizing: auto;
  font-weight: 800;
  font-style: normal;
  color: #f05323;
}
.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 90px 20px 90px;
  justify-content: space-between;
  background-color: #013440;
}
.footer-list {
  display: flex;
  list-style: none;
  width: 20%;
  justify-content: space-evenly;
  font-size: 20px;
}
.socials {
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
@media screen and (max-width: 600px) {
  .footer {
    padding: 20px 50px 20px 50px;
  }
  .footer-list {
    width: 30%;
  }
}
@media screen and (max-width: 400px) {
  .footer {
    padding: 20px 30px 20px 30px;
  }
  .footer h2 {
    font-size: 20px;
  }
  .footer-list {
    width: 30%;
  }
}
</style>
