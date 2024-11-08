import SketchCard from "./SketchCard";

const AlbumSection = () => {
	return (
		<div className="bg-white w-full">
			{/* //Header Section// */}
			<div className="border-b border-blue-400">
				<div className="bg-blue-400 text-white uppercase font-bold h-10 w-[160px] p-4 rounded-tr-full flex justify-start items-center">
					Your Album
				</div>
			</div>
			{/* //Header Section// */}
			<div className="w-full px-8 pb-6 flex flex-wrap justify-center items-center">
				<SketchCard />
				<SketchCard />
				<SketchCard />
				<SketchCard />
				<SketchCard />
				<SketchCard />
				<SketchCard />
				<SketchCard />
				<SketchCard />
				<SketchCard />
				<SketchCard />
			</div>
		</div>
	);
};

export default AlbumSection;
