import Layouts from '@/components/Layouts';
import { Skills } from '@/data/Skills';
import { motion } from 'framer-motion';
import { ContentAnimation, FadeAnimation } from '@/components/Animations';

const About = () => {
  return (
    <Layouts pageTitle=" | About">
      <section className="relative flex w-full flex-col items-center justify-evenly py-40 md:h-screen md:flex-row md:overflow-hidden">
        <motion.span {...FadeAnimation} className="title-page">
          ABOUT
        </motion.span>

        <motion.div {...ContentAnimation} className="relative order-2 flex w-3/4 flex-col items-end justify-end md:order-1 md:w-1/3">
          <div className="my-5 mr-2 text-left font-semibold text-primary-light">My Skills</div>
          <div className="flex w-4/5 flex-wrap justify-evenly">
            {Skills.map((skill) => (
              <div key={skill.id} className="skills-icon">
                <svg className="p-2" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d={skill.svg} />
                </svg>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div {...ContentAnimation} className="relative order-1 my-10 w-3/4 text-justify md:order-2 md:my-0 md:w-1/4">
          <p className="text-md font-light text-primary-light">
            {`Hello! Saya Hadi Ramdhani, seorang siswa SMK yang memiliki minat besar di bidang programming. Saya aktif belajar dan mengembangkan keterampilan pemrograman melalui berbagai proyek pribadi dan kegiatan sekolah. Fokus utama saya adalah memahami dasar-dasar pengembangan perangkat lunak, mempelajari bahasa pemrograman modern, serta membangun aplikasi sederhana yang bermanfaat.

Saya memiliki ketertarikan kuat pada bidang frontend development, mobile development, serta eksplorasi teknologi seperti Flutter, Python, dan web development. Selain itu, saya senang memecahkan masalah melalui logika pemrograman dan terus berusaha meningkatkan kemampuan melalui praktik langsung, membaca dokumentasi, serta mengikuti perkembangan teknologi terbaru.

Sebagai pelajar, saya berkomitmen untuk terus berkembang, beradaptasi dengan teknologi baru, serta mempersiapkan diri untuk berkarier di dunia IT sebagai pengembang perangkat lunak yang profesional.`}
          </p>
        </motion.div>
      </section>
    </Layouts>
  );
};

export default About;
