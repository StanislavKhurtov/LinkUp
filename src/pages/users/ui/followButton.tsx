import { useTranslation } from 'react-i18next'

import { Button, Linear } from '@/components/ui'
import {
  useFollowMutation,
  useGetFollowUnfollowQuery,
  useUnfollowMutation,
} from '@/services/follow'
type Props = {
  userId: number
}
export const FollowButton = (props: Props) => {
  const { userId } = props
  const { data: followStatus } = useGetFollowUnfollowQuery({ userId })
  const [followUser, { isLoading: followLoading }] = useFollowMutation()
  const [unFollowUser, { isLoading: unfollowLoading }] = useUnfollowMutation()
  const { t } = useTranslation()

  if (followLoading || unfollowLoading) {
    return <Linear />
  }

  const handleFollow = () => {
    followUser({ userId })
  }

  const handleUnfollow = () => {
    unFollowUser({ userId })
  }

  if (followStatus) {
    return (
      <Button disabled={unfollowLoading} onClick={handleUnfollow} variant={'primary'}>
        {t('Unfriend')}
      </Button>
    )
  } else {
    return (
      <Button disabled={followLoading} onClick={handleFollow} variant={'primary'}>
        {t('Follow')}
      </Button>
    )
  }
}
