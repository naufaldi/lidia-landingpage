import Image from "next/image";

// Define the props interface for the ReviewCard component
interface ReviewCardProps {
  imageSrc: string;
  reviewText: string;
  reviewerName: string;
  reviewerTitle: string;
}

// Reusable ReviewCard component
const ReviewCard: React.FC<ReviewCardProps> = ({ imageSrc, reviewText, reviewerName, reviewerTitle }) => {
  return (
    <div className="bg-white border border-border flex flex-col items-center shadow-2xl max-w-[366px] w-full pt-[40px] pb-[46px] px-[58px] text-center">
      <div className="overflow-hidden rounded-full mb-[30px]">
        <Image src={imageSrc} width={150} height={150} alt={reviewerName} className='mb-[30px]' />
      </div>
      <p className='text-base font-medium mb-[26px]'>{reviewText}</p>
      <h6 className='mb-[16px] text-[#23A6F0] font-medium'>{reviewerName}</h6>
      <p className='text-heading font-medium'>{reviewerTitle}</p>
    </div>
  );
};
export default ReviewCard;