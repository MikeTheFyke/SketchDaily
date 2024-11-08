import { useState, type Dispatch, type SetStateAction } from "react";
import CloseIcon from "@mui/icons-material/Close";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";

interface Props {
	selectedDate: Dayjs | null;
	setSelectedDate: Dispatch<SetStateAction<Dayjs | null>>;
	dialogOpen: boolean;
	setDialogOpen: Dispatch<SetStateAction<boolean>>;
}

const DailyDialog = ({
	selectedDate,
	setSelectedDate,
	dialogOpen,
	setDialogOpen,
}: Props) => {
	const startingImage = { name: "", file: "" };
	const [imageData, setImageData] = useState(startingImage);

	const onImageSubmit = () => {
		const name = "image";
		const button = document.getElementById("imageButton");
		const input = document.getElementById("getImage") as HTMLInputElement;

		button!.onclick = () => {
			input.click();
		};

		input?.addEventListener("change", (event) => {
			event.preventDefault(), saveImage(event);
		});

		const saveImage = async (event: Event) => {
			const myFiles = input.files![0];
			const reader = new FileReader();

			reader.readAsDataURL(myFiles);

			reader.onload = function (e) {
				if (reader.result) {
					const data = reader.result;
					setImageData({
						name: input.files![0].name,
						file: data.toString() as string,
					});
				}
			};
		};
	};

	return (
		<div
			className="relative z-10"
			aria-labelledby="modal-title"
			role="dialog"
			aria-modal="true"
		>
			<div
				className="fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity"
				aria-hidden="true"
			></div>

			<div className="fixed inset-0 z-10 w-screen overflow-y-auto flex items-center justify-center">
				<div className="flex items-end justify-center p-4 text-center sm:items-center sm:p-0">
					<div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
						{/* //Header// */}
						<div className="flex justify-between bg-blue-400 px-6 py-4">
							<div className="flex flex-col">
								<h3 className="text-xl font-semibold text-gray-900 mb-2 mt-1">
									Your daily sketch challenge
								</h3>
								<h3
									className="text-base font-semibold font text-slate-100"
									id="modal-title"
								>
									{dayjs(selectedDate).format("dddd MMMM DD YYYY")}
								</h3>
							</div>
							<CloseIcon
								className="cursor-pointer text-gray-900 h-10 w-8"
								onClick={() => setDialogOpen(!dialogOpen)}
							/>
						</div>
						{/* /// */}
						<div className="bg-white px-6 pb-4">
							<div className="sm:flex sm:items-start">
								<div className="text-left">
									{/* //Content// */}
									<div className="my-4">
										<p className="text-md text-gray-800">
											Create a whimsical scene where everyday household objects
											come to life. Imagine a teapot leading a parade of
											marching spoons, or a lamp having a conversation with a
											bookshelf. Focus on giving personality to inanimate
											objects through expressive poses and facial features (if
											applicable). Try to include at least 3-5 different
											household items in your composition, and pay attention to
											lighting and shadows to enhance the sense of life and
											movement in the scene.
										</p>
									</div>
									{/* //Content// */}
									<div className="mt-2 border border-slate-400 rounded-md p-4">
										<form
											encType="multipart/form-data"
											className="flex flex-row justify-between w-full"
											id="imageForm"
										>
											<div className="flex flex-row">
												<button
													type="button"
													value="Upload"
													id="imageButton"
													onClick={() => onImageSubmit()}
													className="h-[40px] text-white bg-gradient-to-tr from-gray-900 to-gray-800 focus:ring-4 focus:outline-none font-medium uppercase rounded-lg text-sm px-4 py-2 flex justify-center place-items-center mr-4"
												>
													<UploadFileIcon className="w-4 h-4 text-white mr-4 -mt-0.5" />
													Upload
												</button>
												<input
													type="file"
													name="file"
													id="getImage"
													className="hidden"
													accept="image/*"
												/>
												{imageData?.name !== "" ? (
													<div className="flex justify-center place-items-center">
														<h6 className="font-sans text-base antialiased font-semibold  tracking-normal text-inherit cursor-pointer">
															{imageData?.name}
														</h6>
													</div>
												) : (
													<div className="flex justify-center place-items-center">
														<h6 className="font-sans text-base antialiased font-semibold text-slate-500 tracking-normal text-inherit">
															No image selected
														</h6>
													</div>
												)}
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
						<div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
							<button
								className="block w-full select-none rounded-lg bg-blue-400 py-3 px-6 text-center text-xl font-semibold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
								type="button"
								// onClick={(e) => createRecipe(e)}
							>
								Submit
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DailyDialog;
