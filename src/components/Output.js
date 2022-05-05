import { Button, Typography } from '@mui/material'
import React from 'react'

function Output(props) {
  const { out } = props
  return (
    <div>
      {out ?
        <>
          <Typography variant='h5' >We feel that you might be addicted to following:</Typography>
          <br />
          {out.includes('Entertainment') &&
            <>
              <Typography>Entertainment:</Typography>
              <ul>
                <li>
                  <Button variant='text' onClick={() => window.open("https://www.lifehack.org/articles/featured/6-steps-to-remove-tv-from-your-life.html")}>6 Steps To Remove TV From Your Life</Button>
                </li>
                <li>
                  <Button variant='text' onClick={() => window.open("https://parenting.flinto.in/parenting/screen-addiction-harms")}>Quick & Easy Ways To Reduce Your Child's Time On TV / Mobile Phones</Button>
                </li>
                <li>
                  <Button variant='text' onClick={() => window.open("https://gamequitters.com/stop-binge-watching-netflix/")}>How to Stop Binge-Watching Netflix - 2 Methods</Button>
                </li>
                <li>
                  <Button variant='text' onClick={() => window.open("https://www.mic.com/articles/170571/how-to-cure-a-netflix-addiction-an-expert-reveals-the-remedy-for-excessive-binge-watching")}>How to cure a Netflix addiction: An expert reveals the remedy for excessive binge watching</Button>
                </li>
                <li>
                  <Button variant='text' onClick={() => window.open("https://www.dailycal.org/2021/07/09/how-to-get-over-your-youtube-addiction/")}>How to get over your YouTube addiction</Button>
                </li>
              </ul>
            </>
          }
          {out.includes('Social Media') &&
            <>
              <Typography>Social Media:</Typography>
              <ul>
                <li>
                  <Button variant='text' onClick={() => window.open("https://www.almondsolutions.com/blog/how-to-spend-less-time-on-social-media")}>How to Spend Less Time on Social Media</Button>
                </li>
                <li>
                  <Button variant='text' onClick={() => window.open("https://theeverygirl.com/easy-habits-to-help-you-spend-less-time-on-social-media/")}>10 Easy Habits to Help You Spend Less Time on Social Media (That Will Actually Work)</Button>
                </li>
                <li>
                  <Button variant='text' onClick={() => window.open("https://au.reachout.com/articles/5-ways-to-tame-your-social-media-use")}>5 ways to tame your social media use</Button>
                </li>
                <li>
                  <Button variant='text' onClick={() => window.open("https://www.vogue.in/wellness/content/how-i-trained-myself-to-spend-less-time-on-social-media")}>How I trained myself to spend less time on social media</Button>
                </li>
                <li>
                  <Button variant='text' onClick={() => window.open("https://wethegeek.com/best-apps-to-track-limit-social-media-usage/")}>Best Apps To Track & Limit Social Media Usage On iPhone & Android</Button>
                </li>
              </ul>
            </>
          }
          {out.includes('Gaming') &&
            <>
              <Typography>Gaming:</Typography>
              <ul>
                <li>
                  <Button variant='text' onClick={() => window.open("https://freedom.to/blog/how-to-stop-playing-video-games-a-complete-guide/")}>How to Stop Playing Video Games, A Complete Guide</Button>
                </li>
                <li>
                  <Button variant='text' onClick={() => window.open("https://blog.innerdrive.co.uk/5-ways-students-can-manage-gaming-time")}>5 Ways Students can manage gaming time</Button>
                </li>
                <li>
                  <Button variant='text' onClick={() => window.open("https://lifehacker.com/how-i-cut-back-on-playing-video-games-1796340031")}>How to cut on playing Video games</Button>
                </li>
                <li>
                  <Button variant='text' onClick={() => window.open("https://childmind.org/article/healthy-limits-on-video-games/")}>Healthy limits on video games</Button>
                </li>
                <li>
                  <Button variant='text' onClick={() => window.open("https://www.newsheads.in/tech/news/pubg-mobile-game-these-five-apps-can-control-gaming-addiction-article-57373")}>How to control gaming addiction</Button>
                </li>
              </ul>
            </>
          }
        </> :
        <Typography textAlign='center' >We don't think you are addicted to any of the apps</Typography>
      }
    </div>
  )
}

export default Output