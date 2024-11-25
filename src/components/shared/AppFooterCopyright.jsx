function AppFooterCopyright() {
	return (
	  <div className="font-general-regular flex justify-center items-center text-center">
		<div className="text-lg text-ternary-dark dark:text-ternary-light">
		  &copy; {new Date().getFullYear()}
		  <a
			href="https://github.com/aymanerachid"  // Ton profil GitHub (ajuste l'URL si nécessaire)
			target="__blank"
			className="hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500"
		  >
			Aymane Rachid Portfolio
		  </a>
		  .
		  <a
			href="https://www.linkedin.com/in/aymane-rachid-106700317/"
			target="__blank"
			className="text-secondary-dark dark:text-secondary-light font-medium uppercase hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500"
		  >
			LinkedIn
		  </a>
		</div>
	  </div>
	);
  }
  
  export default AppFooterCopyright;
  