<template>
  <main>
    <section className="hero">
      <div className="hero-content">
        <p>My name is</p>
        <h1 className="my_name">DENNAR DAVID</h1>
        <div className="job-desc">
          <p>I am a Frontend developer</p>
        </div>
      </div>
      <div>
        <img src="../assets/me.jpg" :alt className="soft-boy" />
      </div>
    </section>
  </main>
</template>
<script setup>
import { ref } from "vue";

const alt = ref("David Dennar");
</script>
<style scoped>
.hero {
  display: flex;
  padding: 20px 100px 20px 100px;
  justify-content: space-between;
}
/* Image style */
.soft-boy {
  width: 300px;
  height: 500px;
  border-radius: 10px;
  border: 2px solid #013440;
  box-shadow: 0 7px 8px 0 rgba(0, 0, 0, 0.5), 0 5px 20px 0 rgba(0, 0, 0, 0.19);
}
.hero-content {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.hero-content p {
  text-align: left;
}
p {
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 20px;
  color: #013440;
}
.job-desc {
  background-color: #013440;
  width: 80%;
  padding: 10px;
  margin-top: 10px;
  text-align: center;
}
.job-desc p {
  color: #fff;
  text-align: center;
}
.my_name {
  font-family: "Ojuju", sans-serif;
  font-optical-sizing: auto;
  font-weight: 800;
  font-size: 60px;
  margin-left: -3px;
  margin-bottom: 5px;
  line-height: 50px;
  font-style: normal;
  color: #f05323;
}
@media screen and (max-width: 940px) {
  .hero {
    padding: 20px 50px 20px 50px;
  }
  p {
    font-weight: 600;
    font-size: 16px;
  }
  .my_name {
    font-weight: 800;
    font-size: 50px;
  }
  .job-desc {
    width: 90%;
  }
}

@media screen and (max-width: 790px) {
  .hero {
    padding: 20px 40px 20px 40px;
  }
  p {
    font-weight: 600;
    font-size: 16px;
  }
  .my_name {
    font-weight: 800;
    font-size: 30px;
  }
  .job-desc {
    width: 100%;
  }
}

@media screen and (max-width: 600px) {
  .hero {
    padding: 20px 40px 20px 40px;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  p {
    font-weight: 600;
    font-size: 16px;
  }
  .my_name {
    font-weight: 800;
    font-size: 30px;
  }
  .job-desc {
    width: 100%;
    margin-bottom: 20px;
  }
}
</style>
