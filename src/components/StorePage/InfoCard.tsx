interface InfoCardProps {
  icon?: React.ReactNode;
  title: string;
  value: string | number;
}
export default function InfoCard(props: InfoCardProps) {
  const { icon, title, value } = props;
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center gap-x-1">
        {icon}
        <span className="text-sm font-bold lg:text-lg lg:font-semibold text-myBlack">
          {value}
        </span>
      </div>
      <span className="text-xs text-center text-gray-700">{title}</span>
    </div>
  );
}
