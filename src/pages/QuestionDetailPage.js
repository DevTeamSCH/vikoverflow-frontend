import React from 'react'

export const QuestionDetailPage = ({match}) => {
  return (
    <div>
      Hello Question detail id: {match.params.id}
    </div>
  )
}
