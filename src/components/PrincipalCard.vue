<template>
  <div class="principal-card">
    <nav>
      <ul>
        <li>
          <a
            :class="activePage === 'about' ? 'active' : 'normal'"
            href="#"
            @click.prevent="activePage = 'about'"
          >{{ $t('nav_a_propos_de_moi') }}</a>
        </li>
        <li>
          <a
            :class="activePage === 'formations' ? 'active' : 'normal'"
            href="#"
            @click.prevent="activePage = 'formations'"
          >{{ $t('nav_Formations') }}</a>
        </li>
        <li>
          <a
            :class="activePage === 'projets' ? 'active' : 'normal'"
            href="#"
            @click.prevent="activePage = 'projets'"
          >{{ $t('nav_Projets') }}</a>
        </li>
        <li>
          <a
            :class="activePage === 'competences' ? 'active' : 'normal'"
            href="#"
            @click.prevent="activePage = 'competences'"
          >{{ $t('nav_Competences') }}</a>
        </li>
      </ul>
    </nav>

    <div v-if="activePage === 'about'" class="about-pages">
      <div class="about-card">
        <div class="about-banner"></div>
        <div class="about-me">
          <img src="/card/pp_alexis.png" alt="">
          <div class="text-about">
            <h4>{{ $t('about_name') }}</h4>
            <a class="about-cv" href="/cv/cv_alexis_dejesus_07.pdf" target="_blank">
              {{ $t('mon_cv') }}
            </a>
          </div>
        </div>
      </div>
    </div>

    <div v-if="activePage === 'formations'" class="formation-pages">
      <div class="formation-container">
        <h4 class="formation-title">{{ $t('titre_formations') }}</h4>
        <div class="stud-container">
          <StudCard
            StudImage="./icon-f/ynov.png"
            StudImgName="Ynov Logo"
            :TitleStud="$t('ynov_titre')"
            :NameStud="$t('ynov_description')"
            :DateStud="$t('ynov_date')"
          />
          <StudCard
            StudImage="./icon-f/simone_weil.png"
            StudImgName="Simone Weil Logo"
            :TitleStud="$t('simone_weil_titre')"
            :NameStud="$t('simone_weil_description')"
            :DateStud="$t('simone_weil_date')"
          />
        </div>
      </div>
      <div class="formation-container">
        <h4 class="formation-title">{{ $t('titre_experience') }}</h4>
        <div class="works-container">
          <WorkCard
            workImage="./icon-f/new_mat.png"
            workImgName="New Mat Logo"
            :TitleWorks="$t('new_mat_titre')"
            :NameWorks="$t('new_mat_nom')"
            :DateWorks="$t('new_mat_date')"
            :work_description="$t('new_mat_description')"
            :tags="[
              $t('new_mat_tags1'),
              $t('new_mat_tags2'),
              $t('new_mat_tags3'),
              $t('new_mat_tags4'),
            ]"
          />
          <WorkCard
            workImage="./icon-f/eiffage.png"
            workImgName="Eiffage Logo"
            :TitleWorks="$t('eiffage_titre')"
            :NameWorks="$t('eiffage_nom')"
            :DateWorks="$t('eiffage_date_4')"
            :work_description="$t('eiffage_description_4')"
            :tags="[
              $t('eiffage_tags1_4'),
              $t('eiffage_tags2_4'),
              $t('eiffage_tags3_4'),
              $t('eiffage_tags4_4'),
            ]"
          />
          <WorkCard
            workImage="./icon-f/eiffage.png"
            workImgName="Eiffage Logo"
            :TitleWorks="$t('eiffage_titre')"
            :NameWorks="$t('eiffage_nom')"
            :DateWorks="$t('eiffage_date_3')"
            :work_description="$t('eiffage_description_3')"
            :tags="[
              $t('eiffage_tags1_3'),
              $t('eiffage_tags2_3'),
              $t('eiffage_tags3_3'),
              $t('eiffage_tags4_3'),
            ]"
          />
          <WorkCard
            workImage="./icon-f/eiffage.png"
            workImgName="Eiffage Logo"
            :TitleWorks="$t('eiffage_titre')"
            :NameWorks="$t('eiffage_nom')"
            :DateWorks="$t('eiffage_date_2')"
            :work_description="$t('eiffage_description_2')"
            :tags="[
              $t('eiffage_tags1_2'),
              $t('eiffage_tags2_2'),
              $t('eiffage_tags3_2'),
              $t('eiffage_tags4_2'),
            ]"
          />
          <WorkCard
            workImage="./icon-f/eiffage.png"
            workImgName="Eiffage Logo"
            :TitleWorks="$t('eiffage_titre')"
            :NameWorks="$t('eiffage_nom')"
            :DateWorks="$t('eiffage_date_1')"
            :work_description="$t('eiffage_description_1')"
            :tags="[
              $t('eiffage_tags1_1'),
              $t('eiffage_tags2_1'),
              $t('eiffage_tags3_1'),
              $t('eiffage_tags4_1'),
            ]"
          />
        </div>
      </div>
    </div>

    <div v-if="activePage === 'projets'" class="projets-pages">
      <h4 class="projets-title">{{ $t('titre_projets') }}</h4>
      <div class="projects-container">
        <ProjectCard
          link="https://github.com/FlytziTv/ZnCard"
          :Titre ="$t('titre_projets_znfolio')"
          :visibilité ="$t('visibilité_projects1')"
          :description ="$t('description_projets_znfolio')"
          :date_maj = "$t('date_projets_znfolio')"
          :tags="[
            { lang: 'VUEJS' },
            { lang: 'CSS' },
            { lang: 'JAVASCRIPT' },
            { lang: 'NODEJS' }
          ]"
        />
        <ProjectCard
          :Titre ="$t('titre_projets_zn_nui')"
          :visibilité ="$t('visibilité_projects2')"
          :description ="$t('description_projets_zn_nui')"
          :date_maj = "$t('date_projets_zn_nui')"
          :tags="[
            { lang: 'VUEJS' },
            { lang: 'CSS' },
            { lang: 'JAVASCRIPT' },
            { lang: 'LUA' }

          ]"
        />
        <ProjectCard
          :Titre ="$t('titre_projets_discordbot')"
          :visibilité ="$t('visibilité_projects2')"
          :description ="$t('description_projets_discordbot')"
          :date_maj = "$t('date_projets_discordbot')"
          :tags="[
            { lang: 'JAVASCRIPT' },
            { lang: 'NODEJS' }
          ]"
        />
      </div>
    </div>

    <div v-if="activePage === 'competences'" class="skill-pages">
      <div class="skill-container">
        <h4 class="skill-title">{{ $t('titre_language') }}</h4>
        <div class="language-container">
          <SkillCard
            skillName="Html 5"
            :skillCategory="$t('Html_categorie')"
            skillImage="./icon-ll/html5.svg"
            skillImgName="Html 5 Logo"
          />
          <SkillCard
            skillName="Css 3"
            :skillCategory="$t('Css_categorie')"
            skillImage="./icon-ll/css3.svg"
            skillImgName="Css 3 Logo"
          />
          <SkillCard
            skillName="JavaScript"
            :skillCategory="$t('JavaScript_categorie')"
            skillImage="./icon-ll/javascript.svg"
            skillImgName="JavaScript Logo"
          />
          <SkillCard
            skillName="Vue.js"
            :skillCategory="$t('Vuejs_categorie')"
            skillImage="./icon-ll/vuejs.svg"
            skillImgName="Vue.js Logo"
          />
          <SkillCard
            skillName="Node.js"
            :skillCategory="$t('Nodejs_categorie')"
            skillImage="./icon-ll/nodejs.svg"
            skillImgName="Node.js Logo"
          />
          <SkillCard
            skillName="Python"
            :skillCategory="$t('Python_categorie')"
            skillImage="./icon-ll/python.svg"
            skillImgName="Python Logo"
          />
          <SkillCard
            skillName="Mysql"
            :skillCategory="$t('Mysql_categorie')"
            skillImage="./icon-ll/mysql.svg"
            skillImgName="Mysql Logo"
          />
        </div>
      </div>

      <div class="skill-container">
        <h4 class="skill-title">{{ $t('titre_logiciels') }}</h4>
        <div class="software-container">
          <SkillCard
            skillName="Figma"
            :skillCategory="$t('Figma_categorie')"
            skillImage="./icon-ll/figma.svg"
            skillImgName="Figma Logo"
          />
          <SkillCard
            skillName="Solidworks"
            :skillCategory="$t('Solidworks_categorie')"
            skillImage="./icon-ll/dassaultsystemes.svg"
            skillImgName="Solidworks Logo"
          />
          <SkillCard
            skillName="AutoCAD"
            :skillCategory="$t('AutoCAD_categorie')"
            skillImage="./icon-ll/autocad.svg"
            skillImgName="AutoCAD Logo"
          />
          <SkillCard
            skillName="Blender"
            :skillCategory="$t('Blender_categorie')"
            skillImage="./icon-ll/blender.svg"
            skillImgName="Blender Logo"
          />
          <SkillCard
            skillName="Git"
            :skillCategory="$t('Git_categorie')"
            skillImage="./icon-ll/git.svg"
            skillImgName="Git Logo"
          />
          <SkillCard
            skillName="Git Extension"
            :skillCategory="$t('Git_Extension_categorie')"
            skillImage="./icon-ll/gitextensions.svg"
            skillImgName="Git Extension Logo"
          />
        </div>
      </div>
    </div>

  </div>
</template>


<style>

.about-cv {
  font-family: 'Satoshi-Medium';
  font-weight: 500;
  font-size: 12px;
  color: var(--secondary-color-description);
  text-decoration: none;
  padding: 2px 8px;
  border-radius: 20px;
  border: 1px solid var(--secondary-color-description);
  cursor: pointer;
}

.about-me img {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  border: 4px solid var(--primary-color-background);
  top: 60px;
  left: 40px;
  position: absolute;
}

.about-banner {
  width: 100%;
  height: 150px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url(/card/banner-about.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.about-card {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
}

.about-pages h4 {
  font-family: 'Satoshi-BlackItalic';
  font-weight: 900;
  color: var(--primary-color-text);
  font-size: 24px;
}

.text-about {
  display: flex;
  height: 52px;
  padding-left: 200px;
  align-items: center;
  gap: 10px;
}


.about-pages {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  height: 100%;
  justify-content: center;
}

.formation-pages,
.skill-pages {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
}

.formation-title,
.skill-title,
.projets-title {
  font-family: 'Satoshi-Bold';
  font-weight: 700;
  color: var(--primary-color-text);
  font-size: 16px;
  padding-bottom: 20px;
}

.works-container,
.stud-container,
.projects-container,
.software-container,
.language-container {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

nav {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--primary-color-background);
  padding-bottom: 20px;
}

ul {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
}

li {
  list-style: none;
}

.normal {
  font-family: 'Satoshi-Bold';
  font-weight: 700;
  text-decoration: none;
  color: var(--primary-color-text);
}

.active {
  font-family: 'Satoshi-Bold';
  font-weight: 700;
  text-decoration: none;
  color: var(--color-zn-background);
}

.principal-card {
  background-color: var(--primary-color-background);
  border-radius: var(--padding-8px);
  width: 1270px;
  height: 751px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  /* justify-content: center;
  align-items: center; */
}

</style>

<script setup>
import { ref } from 'vue';
const activePage = ref('about'); // ou 'formations', 'projets', 'competences'

import WorkCard from './formations/WorkCard.vue';
import StudCard from './formations/StudCard.vue';
import SkillCard from './competences/SkillCard.vue';
import ProjectCard from './projet/ProjectCard.vue';
</script>
