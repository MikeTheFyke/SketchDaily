import AlbumSection from "./components/album/AlbumSection";
import CalendarSection from "./components/calendar/CalendarSection";
import Header from "./components/Header";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between">
			<Header />
			<CalendarSection />
			<AlbumSection />
		</main>
	);
}
