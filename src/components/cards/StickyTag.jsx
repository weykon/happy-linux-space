import { stickyPalette } from '../../utils/constants'

export default function StickyTag({ label, index }) {
  return (
    <span
      className={`inline-flex origin-top-right rotate-1 items-center rounded-2xl border border-white/70 px-4 py-1 text-sm font-medium shadow-[0_8px_20px_rgba(251,113,133,0.2)] ${stickyPalette[index % stickyPalette.length]}`}
    >
      {label}
    </span>
  )
}
