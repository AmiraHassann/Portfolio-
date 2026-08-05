import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import useActiveSection from '../../hooks/useActiveSection';

const navItems = [
	{ label: 'Home', href: '#home' },
	{ label: 'Projects', href: '#projects' },
	{ label: 'Skills', href: '#skills' },
	{ label: 'About', href: '#about' },
	{ label: 'Contact', href: '#contact' },
];

function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const activeSection = useActiveSection(navItems.map((item) => item.href.slice(1)));

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 12);
		};

		handleScroll();
		window.addEventListener('scroll', handleScroll, { passive: true });

		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	useEffect(() => {
		document.body.style.overflow = menuOpen ? 'hidden' : '';

		return () => {
			document.body.style.overflow = '';
		};
	}, [menuOpen]);

	const handleLinkClick = () => {
		setMenuOpen(false);
	};

	return (
		<header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
			<motion.nav
				initial={{ y: -24, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.45, ease: 'easeOut' }}
				className={`mx-auto flex w-full max-w-6xl items-center justify-between rounded-full border px-4 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-300 ${
					isScrolled
						? 'border-white/14 bg-black/72 py-2.5'
						: 'border-white/10 bg-black/40 py-3'
				}`}
			>
				<a href="#home" onClick={handleLinkClick} className="group flex items-center gap-3">
					<span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/8 text-sm font-semibold text-white">
						P
					</span>
					<span className="hidden flex-col leading-none sm:flex">
						<span className="text-sm font-semibold tracking-[0.22em] text-white uppercase">
							Portfolio
						</span>
						<span className="mt-1 text-[11px] tracking-[0.28em] text-white/45 uppercase">
							Selected work
						</span>
					</span>
				</a>

				<div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 md:flex">
					{navItems.map((item) => {
						const isActive = activeSection === item.href.slice(1);

						return (
							<a
								key={item.href}
								href={item.href}
								onClick={handleLinkClick}
								className={`relative rounded-full px-4 py-2 text-sm transition ${
									isActive
										? 'text-black'
										: 'text-white/70 hover:text-white'
								}`}
							>
								{isActive ? (
									<motion.span
										layoutId="nav-active-pill"
										className="absolute inset-0 rounded-full bg-white"
										transition={{ type: 'spring', stiffness: 500, damping: 36 }}
									/>
								) : null}
								<span className="relative z-10">{item.label}</span>
							</a>
						);
					})}
				</div>

				<div className="hidden md:flex">
					<a
						href="#contact"
						onClick={handleLinkClick}
						className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-white hover:text-black"
					>
						Let’s Talk
					</a>
				</div>

				<button
					type="button"
					onClick={() => setMenuOpen((current) => !current)}
					className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10 md:hidden"
					aria-label={menuOpen ? 'Close menu' : 'Open menu'}
					aria-expanded={menuOpen}
				>
					{menuOpen ? <FiX size={18} /> : <FiMenu size={18} />}
				</button>
			</motion.nav>

			<motion.div
				initial={false}
				animate={{ opacity: isScrolled ? 1 : 0 }}
				transition={{ duration: 0.25 }}
				className="mx-auto mt-2 h-px w-full max-w-6xl overflow-hidden rounded-full bg-white/5"
			>
				<div className="h-px w-full bg-gradient-to-r from-transparent via-white/40 to-transparent" />
			</motion.div>

			<AnimatePresence>
				{menuOpen ? (
					<>
						<motion.button
							type="button"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.2 }}
							className="fixed inset-0 z-40 bg-black/50 backdrop-blur-[2px] md:hidden"
							onClick={handleLinkClick}
							aria-label="Close menu overlay"
						/>

						<motion.div
							initial={{ opacity: 0, y: -12, scale: 0.98 }}
							animate={{ opacity: 1, y: 0, scale: 1 }}
							exit={{ opacity: 0, y: -12, scale: 0.98 }}
							transition={{ duration: 0.2 }}
							className="absolute left-4 right-4 top-[4.75rem] z-50 mx-auto w-auto max-w-6xl rounded-3xl border border-white/10 bg-black/82 p-3 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl md:hidden"
						>
							<div className="flex flex-col gap-2">
								{navItems.map((item) => {
									const isActive = activeSection === item.href.slice(1);

									return (
										<a
											key={item.href}
											href={item.href}
											onClick={handleLinkClick}
											className={`rounded-2xl px-4 py-3 text-sm transition ${
												isActive
													? 'bg-white text-black'
													: 'text-white/75 hover:bg-white/8 hover:text-white'
											}`}
										>
											{item.label}
										</a>
									);
								})}

								<a
									href="#contact"
									onClick={handleLinkClick}
									className="mt-1 rounded-2xl bg-white px-4 py-3 text-center text-sm font-medium text-black"
								>
									Let’s Talk
								</a>
							</div>
						</motion.div>
					</>
				) : null}
			</AnimatePresence>
		</header>
	);
}

export default Navbar;
