"use client";
import { useState } from "react";

import type { Dayjs } from "dayjs";
import SketchCalendar from "./SketchCalendar";
import DailyDialog from "../dialogs/DailyDialog";

const CalendarSection = () => {
	const [dialogOpen, setDialogOpen] = useState(false);
	const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);

	return (
		<div className="bg-white w-full h-5/6 flex flex-col items-center justify-center py-4 px-10">
			<SketchCalendar
				selectedDate={selectedDate}
				setSelectedDate={setSelectedDate}
				dialogOpen={dialogOpen}
				setDialogOpen={setDialogOpen}
			/>
			{dialogOpen ? (
				<DailyDialog
					selectedDate={selectedDate}
					setSelectedDate={setSelectedDate}
					dialogOpen={dialogOpen}
					setDialogOpen={setDialogOpen}
				/>
			) : null}
		</div>
	);
};

export default CalendarSection;
