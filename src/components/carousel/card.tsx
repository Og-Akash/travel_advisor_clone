import { Heart } from "lucide-react";
import Rate from "../Icons/Rate";

interface CardProps {
    title?: string;
    image?: string;
    rating?: string;
    reviews?: string;
    price?: string;
  }
  
export const Card: React.FC<CardProps> = ({
  title,
  image,
  rating,
  reviews,
  price,
}) => {
  return (
    <div className="card-container">
      <button className="favorite-button">
        <Heart className="size-6" />
      </button>
      <img src={image} alt={title} />
      <div className="card-content">
        <div className="text-[17px] font-medium tracking-tight">{title}</div>
      {rating &&  <div className="rating">
          <span>{rating}</span>
          <Rate
            width={68}
            height={12}
            className="fill-current text-[#00A568]"
          />
          <span className="text-tripadvisor-darkGray">({reviews})</span>
        </div>
      }
        {price && <div className="price">from {price}</div>}
      </div>
    </div>
  );
};
