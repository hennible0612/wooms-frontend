import React, { useState } from 'react';
import Modal from '../../common/Modal';

const ItemModal = ({ group, onImageClick, onClose }) => {
  const itemsPerPage = 6; // 한 페이지당 표시할 이미지 수
  const totalPages = Math.ceil(group.images.length / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(0);

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const currentImages = group.images.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  // 빈 div를 추가하여 항상 6개의 요소가 있도록 함
  const emptyDivs = Array.from(
    { length: itemsPerPage - currentImages.length },
    (_, index) => <div key={`empty-${index}`} className='w-[138px] h-[161px]' />
  );

  return (
    <Modal onClose={onClose}>
      <div className='flex justify-center mt-4'>
        <div className='grid grid-cols-3 gap-4'>
          {currentImages.map((src, index) => (
            <div key={index} className='cursor-pointer'>
              <img
                src={src}
                alt={`detail-${index}`}
                className='w-[138px] h-[161px] object-cover'
                onClick={() => onImageClick(src)}
              />
            </div>
          ))}
          {emptyDivs} {/* 빈 div 추가 */}
        </div>
      </div>
      <div>
        {/* 이전페이지 이동 버튼 */}
        {/* 다음페이지 이동 버튼 */}
        <div className='absolute left-2 right-2 flex justify-between items-center transform -translate-y-1/2 top-1/2'>
          <button
            className={`w-8 h-8 bg-left-bt bg-cover ${currentPage === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={handlePrevPage}
            disabled={currentPage === 0}
          />
          <button
            className={`w-8 h-8 bg-right-bt bg-cover ${currentPage >= totalPages - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={handleNextPage}
            disabled={currentPage >= totalPages - 1}
          />
        </div>
      </div>
    </Modal>
  );
};

export default ItemModal;
