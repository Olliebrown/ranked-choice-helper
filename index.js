import fs from 'fs'
import { UserVotes, VoteOption, VoteController } from 'ranked-voting'

// Chose the scoring mode:
// - 'borda': Score choices weighted by rank (1st, 2nd, 3rd, etc.)
// - 'tally': Count all votes equally regardless of rank
// - Anything else: Score 1st rank votes only (traditional rank choice)
const mode = 'default'

// 8a section
const rawData = fs.readFileSync('input/450-fa24-230p.json', { encoding: 'utf8' })
const voteData = JSON.parse(rawData)

// Build controller with options and indicated score mode
const voteController = new VoteController(
  voteData.choices.map(choice => new VoteOption(choice)),
  (mode === 'borda' ? 3 : 0),
  mode === 'tally'
)

// Add all ballots
voteData.ballots.forEach(ballot => {
  voteController.acceptUserVotes(new UserVotes(ballot.votes, ballot.username))
})

// Run elimination rounds until we have a winner
const result = voteController.getFinalResult()

// Report the winner (or a tie)
if (result.winner !== null) {
  console.log(`${result.winner} won after ${result.stageResults.length - 1} stages`)
} else {
  console.log(`tie between ${result.tieOptions.join(', ')}`)
}

// Write out full results
fs.writeFileSync('output/result.json', JSON.stringify(result, userVotesReplacer, 2))

// Print a summary of each stage
result.stageResults.forEach(summarizeStage)

// JSON.stringify replacer function to output usernames w/ userVotes objects
function userVotesReplacer (key, value) {
  if (key === 'userVotes') {
    return value.map(userVote => ({
      userName: userVote.username,
      votes: userVote
    }))
  }

  return value
}

// Print a summary of this stage to the console
function summarizeStage (stageResult, i) {
  // Gather all results in a simple array
  const resultArray = []
  for (const gameName in stageResult.rankedVoteCounts) {
    const voteCounts = stageResult.rankedVoteCounts[gameName].voteCounts.slice(0, 3)
    resultArray.push({
      gameName,
      voteCounts,
      score: (mode === 'borda'
        ? stageResult.rankedVoteCounts[gameName].bordaScore
        : (mode === 'tally'
            ? stageResult.rankedVoteCounts[gameName].tallyCount
            : voteCounts[0])
      )
    })
  }

  // Sort that array by the chosen score
  resultArray.sort((a, b) => b.score - a.score)

  // Output the stage number and summary for each choice
  console.log(`Stage ${i + 1}:`)
  resultArray.forEach(({ gameName, voteCounts, score }) => {
    console.log(`\t${(gameName + ':').padEnd(52, ' ')} ${voteCounts.map(x => x.toString().padStart(2, ' ')).join(', ')} (Score: ${score.toString().padStart(2)})`)
  })

  // Make array of empty ballots
  const emptyBallots = stageResult.userVotes.reduce(
    (acc, userVote) => {
      if (userVote.length === 0) {
        return [...acc, userVote.username]
      }
      return acc
    }, []
  )

  // Output empty ballots if there are any
  if (emptyBallots.length > 0) {
    console.log(`Empty Ballots: ${emptyBallots.join(', ')}`)
  }

  // Output a blank line to keep things neat
  console.log('')
}
