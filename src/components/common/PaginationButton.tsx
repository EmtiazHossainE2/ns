import Image from "next/image";

interface PaginationButtonProps {
  onClick: () => void;
  iconSrc: string;
  iconAlt: string;
  iconWidth: number;
}

const PaginationButton: React.FC<PaginationButtonProps> = ({
  onClick,
  iconSrc,
  iconAlt,
  iconWidth,
}) => (
  <button
    onClick={onClick}
    className="relative flex items-center hover:border-[#0B80CC] rounded-full hover:border"
  >
    <div className="absolute left-1/2 transform -translate-x-1/2">
      <Image src={iconSrc} alt={iconAlt} width={iconWidth} height={20} />
    </div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
    >
      <circle cx="20" cy="20" r="20" fill="#F4F5F9" />
    </svg>
  </button>
);

export default PaginationButton;
