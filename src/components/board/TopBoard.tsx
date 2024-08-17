interface RegionCardProps {
  region: string;
}

const TopBoard: React.FC<RegionCardProps> = ({ region }) => {
  return (
    <div className="text-center">
      <div className="w-3/4 mx-auto text-center bg-bgGray rounded-lg px-2 py-2">
        {region}
      </div>
    </div>
  );
};

export default TopBoard;
