import { useEffect, useState } from 'react';

function useActiveSection(sectionIds = []) {
	const [activeSection, setActiveSection] = useState(sectionIds[0] ?? 'home');

	useEffect(() => {
		if (!sectionIds.length) return undefined;

		const elements = sectionIds
			.map((id) => document.getElementById(id))
			.filter(Boolean);

		if (!elements.length) return undefined;

		const observer = new IntersectionObserver(
			(entries) => {
				const visibleEntries = entries.filter((entry) => entry.isIntersecting);

				if (!visibleEntries.length) return;

				const topEntry = visibleEntries.reduce((currentTop, entry) => {
					if (!currentTop) return entry;
					return entry.boundingClientRect.top < currentTop.boundingClientRect.top
						? entry
						: currentTop;
				}, null);

				if (topEntry?.target?.id) {
					setActiveSection(topEntry.target.id);
				}
			},
			{
				rootMargin: '-20% 0px -55% 0px',
				threshold: 0.15,
			},
		);

		elements.forEach((element) => observer.observe(element));

		return () => observer.disconnect();
	}, [sectionIds]);

	return activeSection;
}

export default useActiveSection;
