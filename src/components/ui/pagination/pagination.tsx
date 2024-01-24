import React from 'react'

import KeyboardArrowLeft from '@/assets/icons/keyboard-arrow-left'
import KeyboardArrowRight from '@/assets/icons/keyboard-arrow-right'

import pgn from './pagination.module.scss'

export type PaginationPropsType = {
  onChange: (page: number) => void
  page: number
  totalCount?: number
}

export const Pagination: React.FC<PaginationPropsType> = ({ onChange, page, totalCount }) => {
  const pageSize = 10

  if (!totalCount) {
    return null
  }
  const totalPages = Math.ceil(totalCount / pageSize)

  const onChangeCallback = (targetPage: number) => {
    if (targetPage >= 1 && targetPage <= totalPages) {
      onChange(targetPage)
    }
  }

  const renderPageButton = (pageNumber: number) => (
    <button
      className={pgn.pageButton + (pageNumber === page ? ` ${pgn.active}` : '')}
      key={`page_${pageNumber}`}
      onClick={() => onChangeCallback(pageNumber)}
    >
      {pageNumber}
    </button>
  )

  const renderFirstPage = () => renderPageButton(1)
  const renderLastPage = () => renderPageButton(totalPages)

  const renderPagination = () => {
    const paginationItems = []

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        paginationItems.push(renderPageButton(i))
      }
    } else {
      if (page <= 3) {
        for (let i = 1; i <= 5; i++) {
          paginationItems.push(renderPageButton(i))
        }
        paginationItems.push(
          <span className={pgn.pageButton} key={'ellipsis_1'}>
            ...
          </span>
        )
        paginationItems.push(renderLastPage())
      } else if (page >= totalPages - 2) {
        paginationItems.push(renderFirstPage())
        paginationItems.push(
          <span className={pgn.pageButton} key={'ellipsis_2'}>
            ...
          </span>
        )
        for (let i = totalPages - 3; i <= totalPages; i++) {
          paginationItems.push(renderPageButton(i))
        }
      } else {
        paginationItems.push(renderFirstPage())
        paginationItems.push(
          <span className={pgn.pageButton} key={'ellipsis_3'}>
            ...
          </span>
        )
        paginationItems.push(renderPageButton(page - 1))
        paginationItems.push(renderPageButton(page))
        paginationItems.push(renderPageButton(page + 1))
        paginationItems.push(
          <span className={pgn.pageButton} key={'ellipsis_4'}>
            ...
          </span>
        )
        paginationItems.push(renderLastPage())
      }
    }

    return paginationItems
  }

  const isPrevButtonDisabled = page === 1
  const isNextButtonDisabled = page === totalPages

  return (
    <div className={pgn.pagination}>
      <button
        className={pgn.prevButton}
        disabled={isPrevButtonDisabled}
        onClick={() => onChangeCallback(page - 1)}
      >
        <KeyboardArrowLeft color={isPrevButtonDisabled ? '#808080' : '#fff'} />
      </button>
      {renderPagination()}
      <button
        className={pgn.nextButton}
        disabled={isNextButtonDisabled}
        onClick={() => onChangeCallback(page + 1)}
      >
        <KeyboardArrowRight color={isNextButtonDisabled ? '#808080' : '#fff'} />
      </button>
    </div>
  )
}
