const InfoCard = ({ icon: Icon, color, value, label }) => {
  return (
    <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow hover:shadow-md transition-all border m-7">
      {/* ICON */}
      <div
        className="w-12 h-12 flex items-center justify-center rounded-lg"
        style={{ backgroundColor: color + "22", color: color }}
      >
        <Icon size={26} />
      </div>

      {/* TEXT */}
      <div>
        <p className="text-xl font-semibold">${value}</p>
        <p className="text-gray-500 font-medium text-sm">{label}</p>
      </div>
    </div>
  );
};

export default InfoCard;
