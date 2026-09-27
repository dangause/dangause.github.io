// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Research and software projects in astronomy, botany, and data science.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "The code behind my projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-building-astro-buddy",
        
          title: "building astro buddy",
        
        description: "How I turned past work into a live, full-stack web app",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/astro-buddy/";
          
        },
      },{id: "post-hyperspectral-101",
        
          title: "Hyperspectral 101",
        
        description: "An introduction to hyperspectral imagery",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/hyperspectral-101/";
          
        },
      },{id: "post-first-blog-post",
        
          title: "First Blog Post",
        
        description: "Welcome to Dan Galaxy...",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/first-blog-post/";
          
        },
      },{id: "projects-astro-buddy",
          title: 'astro buddy',
          description: "A quasar specific question answering tool",
          section: "Projects",handler: () => {
              window.location.href = "/projects/astro_buddy/";
            },},{id: "projects-cataclysmic-variables",
          title: 'cataclysmic variables',
          description: "An observational research project to study cataclysmic variables at the City College of San Francisco.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ccsf_cv/";
            },},{id: "projects-expedition-clustering",
          title: 'expedition clustering',
          description: "Using unsupervised learning techniques to recreate expedition clusters from archival museum collections data",
          section: "Projects",handler: () => {
              window.location.href = "/projects/expedition_clustering/";
            },},{id: "projects-hyperspectral-biodiversity",
          title: 'hyperspectral biodiversity',
          description: "A CAS research project predicting where tree species are absent, using hyperspectral satellite imagery and machine learning.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/hyperspectral_biodiversity_project/";
            },},{id: "projects-manna",
          title: 'MANNA',
          description: "Letting AI assistants search professional astronomy archives",
          section: "Projects",handler: () => {
              window.location.href = "/projects/manna/";
            },},{id: "projects-nickel-reduction-tutorial",
          title: 'nickel reduction tutorial',
          description: "Creating an educational tutorial walking through the image reduction process for the Nickel telescope",
          section: "Projects",handler: () => {
              window.location.href = "/projects/nickel_reduction_tutorial/";
            },},{id: "projects-protostellar-outflows",
          title: 'protostellar outflows',
          description: "A multiwavelength look at the jets and winds of forming stars, using archival data",
          section: "Projects",handler: () => {
              window.location.href = "/projects/protostellar_outflows/";
            },},{id: "projects-balqso-classifier",
          title: 'BALQSO classifier',
          description: "Spotting broad absorption line quasars in Sloan Digital Sky Survey spectra with machine learning",
          section: "Projects",handler: () => {
              window.location.href = "/projects/qso_classifier/";
            },},{id: "projects-rock-daisies",
          title: 'rock daisies',
          description: "Mapping where rock daisies grow across North America for a CAS botany research project",
          section: "Projects",handler: () => {
              window.location.href = "/projects/rock_daisies/";
            },},{id: "projects-stips",
          title: 'STIPS',
          description: "The Small Telescope Image Processing Suite, bringing Rubin Observatory&#39;s software to 1-meter class telescopes",
          section: "Projects",handler: () => {
              window.location.href = "/projects/stips/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%64%61%6E%70%67%61%75%73%65@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/dangause", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/daniel-gause-b48633174", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0004-8062-3810", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
