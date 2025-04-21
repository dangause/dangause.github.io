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
          description: "A growing collection of your cool projects.",
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
          description: "This is a description of the page. You can modify it in &#39;_pages/cv.md&#39;. You can also change or remove the top pdf download button.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-first-blog-post",
        
          title: "First Blog Post",
        
        description: "Welcome to Dan Galaxy...",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/first-blog-post/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "projects-expedition-clustering",
          title: 'expedition clustering',
          description: "Using unsupervised learning techniques to recreate expedition clusters from archival museum collections data",
          section: "Projects",handler: () => {
              window.location.href = "/projects/expedition_clustering/";
            },},{id: "projects-hyperspectral-biodiversity",
          title: 'hyperspectral biodiversity',
          description: "A CAS research project predicting local species absence of pine trees using hyperspectral remote sensing data and machine learning.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/hyperspectral_biodiversity_project/";
            },},{id: "projects-lsst-science-pipelines-adaptation",
          title: 'lsst science pipelines adaptation',
          description: "Adapting the LSST Science Pipelines to Lick&#39;s Nickel Telescope",
          section: "Projects",handler: () => {
              window.location.href = "/projects/lsst_nickel/";
            },},{id: "projects-nickel-reduction-tutorial",
          title: 'nickel reduction tutorial',
          description: "Creating an educational tutorial walking through the image reduction process for the Nickel telescope",
          section: "Projects",handler: () => {
              window.location.href = "/projects/nickel_reduction_tutorial/";
            },},{id: "projects-rock-daisies",
          title: 'rock daisies',
          description: "Creating visualizations for a CAS botany research project looking at endemic rock daisy species living on sky islands in North America.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/rock_daisies/";
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
