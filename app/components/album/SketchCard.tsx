const SketchCard = () => {
	return (
		<div className="mx-4 mt-6">
			<div className="bg-white w-[200px] h-[200px] rounded-t-lg border border-slate-400"></div>
			<div className="bg-blue-400 px-2 min-h-[50px] w-[200px] rounded-b-lg flex flex-col justify-center">
				<h3 className="text-sm font-semibold text-gray-900 text-center">
					Title
				</h3>
				<h3 className="text-xs font-semibold text-slate-100 whitespace-nowrap mt-1">
					Wednesday November 06 2024
				</h3>
			</div>
		</div>
	);
};

export default SketchCard;
