import React from 'react'
import ContainerGrid from '../ui/container-grid'
import TitleSection from '../ui/title-section'

import ReviewCard from '../ui/review-card';

// Dummy data for review cards
const reviewData = [
  {
    imageSrc: '/profile-1.png',
    reviewText: 'Engaging plot, vivid characters; a captivating read that lingers in your thoughts.',
    reviewerName: 'Ahmad Saugi',
    reviewerTitle: 'College Student',
  },
  {
    imageSrc: '/profile-2.png',
    reviewText: 'A masterful blend of suspense and emotion, keeping you hooked till the last page.',
    reviewerName: 'Jane Doe',
    reviewerTitle: 'Book Critic',
  },
  {
    imageSrc: '/profile-3.png',
    reviewText: 'An inspiring tale that resonates deeply, leaving a lasting impact on the reader.',
    reviewerName: 'John Smith',
    reviewerTitle: 'Author',
  },
];

const Reviews = () => {
  return (
    <ContainerGrid>
      <div className="col-span-6">
        <TitleSection
          sectionTitle='REVIEWS'
          sectionSubtitle='💬• Reviews of Others'
        />
      </div>
      <div className="col-span-12 flex justify-between">
        {/* Components card */}
        {reviewData.map((review, index) => (
          <ReviewCard
            key={index}
            imageSrc={review.imageSrc}
            reviewText={review.reviewText}
            reviewerName={review.reviewerName}
            reviewerTitle={review.reviewerTitle}
          />
        ))}
      </div>
    </ContainerGrid>
  )
}

export default Reviews