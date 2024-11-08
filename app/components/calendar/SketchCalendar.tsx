"use-client";
import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { PickersDay } from "@mui/x-date-pickers/PickersDay";
import Badge from "@mui/material/Badge";
import DoneOutlineOutlinedIcon from "@mui/icons-material/DoneOutlineOutlined";
import dayjs from "dayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

interface Props {
	selectedDate: Dayjs | null;
	setSelectedDate: Dispatch<SetStateAction<Dayjs | null>>;
	dialogOpen: boolean;
	setDialogOpen: Dispatch<SetStateAction<boolean>>;
}

const labelColor = "#000000";
const badgeColor = "#38BDF8";

const SketchCalendar = ({
	selectedDate,
	setSelectedDate,
	dialogOpen,
	setDialogOpen,
}: Props) => {
	const currentDate = new Date();
	const [highlightedDays, setHighlightedDays] = useState([1, 2, 13]);

	const dateClick = (newValue: Dayjs) => {
		setSelectedDate(newValue);
		setDialogOpen(!dialogOpen);
	};

	return (
		<div className="rounded-b-2xl bg-white pb-4 shadow-lg">
			<div className="h-18 p-6 bg-blue-400 flex justify-center">
				{selectedDate
					? dayjs(selectedDate).format("dddd MMMM DD YYYY")
					: dayjs(currentDate).format("dddd MMMM DD YYYY")}
			</div>
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<DateCalendar
					slotProps={{
						calendarHeader: { sx: { color: labelColor } },
						leftArrowIcon: { sx: { color: labelColor } },
						rightArrowIcon: { sx: { color: labelColor } },
						day: {
							sx: {
								border: "1px solid",
								borderColor: "lightgray",
								borderRadius: "0px",
							},
						},
					}}
					value={selectedDate}
					onChange={(newValue) => dateClick(newValue)}
					views={["day"]}
					disableFuture
					minDate={dayjs("2024-11-01")}
					slots={{
						day: (props) => {
							const date = props.day;
							const isSelected =
								!props.outsideCurrentMonth &&
								highlightedDays.indexOf(Number(dayjs(date).format("DD"))) >= 0;
							return (
								<Badge
									key={props.day.toString()}
									overlap="circular"
									style={{
										backgroundColor: isSelected ? badgeColor : undefined,
									}}
									badgeContent={
										isSelected ? (
											<DoneOutlineOutlinedIcon
												htmlColor={"white"}
												style={{
													paddingTop: "4px",
													paddingLeft: "0px",
													paddingRight: "12px",
												}}
											/>
										) : undefined
									}
								>
									<PickersDay {...props} />
								</Badge>
							);
						},
					}}
				/>
			</LocalizationProvider>
		</div>
	);
};

export default SketchCalendar;
