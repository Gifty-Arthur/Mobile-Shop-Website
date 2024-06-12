import { Link } from "react-router-dom";

const MobileProductPage = () => {
  return (
    <div className="flex sm:hidden">
      <div>
        <Link>
          <div className="h-[58px] w-[164px]">
            <h1>Filters</h1>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MobileProductPage;
