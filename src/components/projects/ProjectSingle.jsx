import { motion } from 'framer-motion';

const ProjectSingle = ({ title, category, image, src, publishDate }) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.7,
				delay: 0.15,
			}}
			className="w-full max-w-sm mx-auto mb-10"
		>
			<a href={src} target="_blank" rel="noopener noreferrer">
				<div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer bg-secondary-light dark:bg-ternary-dark">
					<div>
						<img
							src={image}
							className="rounded-t-xl border-none object-cover w-full h-64"
							alt="Single Project"
						/>
					</div>
					<div className="text-center px-4 py-6 flex flex-col">
						<p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
							{title}
						</p>
						<span className="text-lg text-ternary-dark dark:text-ternary-light">
							{category}
						</span>
						<span className="text-lg text-ternary-dark dark:text-ternary-light">
							{publishDate}
						</span>
					</div>
				</div>
			</a>
		</motion.div>
	);
};

export default ProjectSingle;
