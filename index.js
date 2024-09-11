import fs from 'fs'
import { UserVotes, VoteOption, VoteController } from 'ranked-voting'

// 'default', 'borda', or 'tally
const mode = 'tally'

// 8a section
// const voteController = new VoteController([
//   new VoteOption('Fable and Fur'),
//   new VoteOption('Going Toastal'),
//   new VoteOption('Beats Beat Beets!'),
//   new VoteOption('Rum Runners'),
//   new VoteOption('Submerged'),
//   new VoteOption('The Adaptive Element'),
//   new VoteOption('Tubular'),
//   new VoteOption('Fistikarts'),
//   new VoteOption('The Party is One'),
//   new VoteOption('Hamster Ball Heroes'),
//   new VoteOption('Apt. 20'),
//   new VoteOption('False Light'),
//   new VoteOption('Factory Farming 2255')
// ], (mode === 'borda' ? 3 : 0), mode === 'tally')

// voteController.acceptUserVotes(new UserVotes(['False Light', 'The Party is One', 'Factory Farming 2255'], 'Guinness Bruce'))
// voteController.acceptUserVotes(new UserVotes(['Factory Farming 2255', 'Fable and Fur', 'Going Toastal'], 'Kayla Lemke'))
// voteController.acceptUserVotes(new UserVotes(['The Party is One', 'The Adaptive Element', 'False Light'], 'Jayden Marx'))
// voteController.acceptUserVotes(new UserVotes(['Going Toastal', 'Submerged', 'Fistikarts'], 'Zach adler'))
// voteController.acceptUserVotes(new UserVotes(['The Adaptive Element', 'Apt. 20', 'The Party is One'], 'Kayla Staples'))
// voteController.acceptUserVotes(new UserVotes(['The Party is One', 'False Light', 'The Adaptive Element'], 'Nathan Morgan-Shimmin'))
// voteController.acceptUserVotes(new UserVotes(['Fistikarts', 'Rum Runners', 'The Adaptive Element'], 'Parker Hagen'))
// voteController.acceptUserVotes(new UserVotes(['Factory Farming 2255', 'The Party is One', 'Rum Runners'], 'Josh Pederson '))
// voteController.acceptUserVotes(new UserVotes(['Tubular', 'Going Toastal', 'Fistikarts'], 'Nick Pautsch'))
// voteController.acceptUserVotes(new UserVotes(['Factory Farming 2255', 'Hamster Ball Heroes', 'Rum Runners'], 'Jon Wolfe'))
// voteController.acceptUserVotes(new UserVotes(['Tubular', 'Rum Runners', 'Factory Farming 2255'], 'Mae Zinn'))
// voteController.acceptUserVotes(new UserVotes(['The Adaptive Element', 'Submerged', 'Hamster Ball Heroes'], 'Ben Moon'))
// voteController.acceptUserVotes(new UserVotes(['Fable and Fur', 'Factory Farming 2255', 'Apt. 20'], 'Elaine Kelling'))
// voteController.acceptUserVotes(new UserVotes(['Fable and Fur', 'Factory Farming 2255', 'Apt. 20'], 'Lucy Balles'))
// voteController.acceptUserVotes(new UserVotes(['Submerged', 'Going Toastal'], 'Eleanor Berg'))
// voteController.acceptUserVotes(new UserVotes(['Apt. 20', 'Tubular', 'Submerged'], 'Conner Moses'))
// voteController.acceptUserVotes(new UserVotes(['The Adaptive Element', 'The Party is One', 'Beats Beat Beets!'], 'Madison Melland'))
// voteController.acceptUserVotes(new UserVotes(['Tubular', 'Rum Runners', 'Hamster Ball Heroes'], 'Creed Zetzman'))
// voteController.acceptUserVotes(new UserVotes(['Submerged', 'False Light', 'Factory Farming 2255'], 'Samuel Lambert'))
// voteController.acceptUserVotes(new UserVotes(['Submerged', 'Fistikarts', 'Going Toastal'], 'Benjamin Rowan'))
// voteController.acceptUserVotes(new UserVotes(['Tubular', 'Going Toastal', 'Apt. 20'], 'Ben Jiang'))
// voteController.acceptUserVotes(new UserVotes(['Hamster Ball Heroes', 'Going Toastal', 'Rum Runners'], 'Rose Laux'))
// voteController.acceptUserVotes(new UserVotes(['Rum Runners', 'Tubular', 'Submerged'], 'Sarah Ziebarth'))
// voteController.acceptUserVotes(new UserVotes(['Rum Runners', 'Factory Farming 2255', 'Tubular'], 'cole nugteren'))
// voteController.acceptUserVotes(new UserVotes(['Rum Runners', 'Going Toastal', 'Apt. 20'], 'Isaac Guggisberg'))
// voteController.acceptUserVotes(new UserVotes(['Going Toastal', 'Fistikarts', 'Submerged'], 'Tyler Betanski'))
// voteController.acceptUserVotes(new UserVotes(['Submerged', 'Going Toastal', 'Tubular'], 'Jacob Richardt'))
// voteController.acceptUserVotes(new UserVotes(['Fable and Fur', 'Factory Farming 2255', 'Beats Beat Beets!'], 'Keolani'))
// voteController.acceptUserVotes(new UserVotes(['Factory Farming 2255', 'Apt. 20', 'Rum Runners'], 'Mackenzie Kusa'))
// voteController.acceptUserVotes(new UserVotes(['Apt. 20', 'Tubular', 'Fable and Fur'], 'Cat Merila'))
// voteController.acceptUserVotes(new UserVotes(['Apt. 20', 'The Party is One', 'Fable and Fur'], 'Rebecca Durst'))
// voteController.acceptUserVotes(new UserVotes(['Going Toastal', 'Submerged', 'Apt. 20'], 'Brandon Baier'))
// voteController.acceptUserVotes(new UserVotes(['Apt. 20', 'Tubular', 'Submerged'], 'Matthew Bohm'))
// voteController.acceptUserVotes(new UserVotes(['Submerged', 'Going Toastal', 'Rum Runners'], 'Ryan Thiede'))
// voteController.acceptUserVotes(new UserVotes(['Fistikarts', 'Submerged', 'Going Toastal'], 'Austin Wedeking'))
// voteController.acceptUserVotes(new UserVotes(['Fable and Fur', 'Factory Farming 2255', 'Apt. 20'], 'Ryan Guy'))
// voteController.acceptUserVotes(new UserVotes(['Going Toastal', 'Tubular', 'Submerged'], 'Scott Schwantes'))
// voteController.acceptUserVotes(new UserVotes(['Submerged', 'Apt. 20', 'Fistikarts'], 'Nathan Gosswiller'))
// voteController.acceptUserVotes(new UserVotes(['Going Toastal', 'Tubular', 'Beats Beat Beets!'], 'Kelsey Garrigan'))
// voteController.acceptUserVotes(new UserVotes(['Fistikarts', 'Submerged', 'Hamster Ball Heroes'], 'Gabe Anderson'))
// voteController.acceptUserVotes(new UserVotes(['Tubular', 'Rum Runners', 'Beats Beat Beets!'], 'Aden Weisser'))
// voteController.acceptUserVotes(new UserVotes(['Going Toastal', 'Fistikarts', 'Submerged'], 'Victor Mondragon'))
// voteController.acceptUserVotes(new UserVotes(['Submerged', 'Fistikarts', 'Tubular'], 'Graham Higdon'))
// voteController.acceptUserVotes(new UserVotes(['False Light', 'Fable and Fur', 'Hamster Ball Heroes'], 'Trisha Yang'))
// voteController.acceptUserVotes(new UserVotes(['The Adaptive Element', 'Submerged', 'False Light'], 'Wyatt Treinen'))

// 2:30p Section
const voteController = new VoteController([
  new VoteOption('Aqua Ducks (Cody / Madeline)'),
  new VoteOption('Dung Hole (Bennett / Dyani / Kyle)'),
  new VoteOption('Gnome Cleaning Service (Austin / Hayden / Rylee)'),
  new VoteOption('Magicats (Megan / Terra)'),
  new VoteOption('Memories in Reverse (Charlie / Kris / Rowan)'),
  new VoteOption('Night Terrors (Emma / Ian)'),
  new VoteOption('O Corvo (Eilis / Julia / Lauryn)'),
  new VoteOption('PAINT (Garrett / John)'),
  new VoteOption('Portal Bound (Devan / Mattie)'),
  new VoteOption('Reflections (Chong / Walker)'),
  new VoteOption('Roguelike Kart Racer (Carter / Emily)'),
  new VoteOption('Rune Caster PvE (Andrew / Jaden / Rocky)'),
  new VoteOption('Rune Caster PvP (Eli / Erica / Jose)'),
  new VoteOption('Souls-Like Game (Aly / Joshua / Nick)'),
  new VoteOption('Surrounded (Carter / Laura / Nicole)'),
  new VoteOption('Treble Thieves (Isabel / Luke)'),
  new VoteOption('Z-Cader (Aidan / Matthew)')
], (mode === 'borda' ? 3 : 0), mode === 'tally')

voteController.acceptUserVotes(new UserVotes(['Magicats (Megan / Terra)', 'Gnome Cleaning Service (Austin / Hayden / Rylee)', 'Dung Hole (Bennett / Dyani / Kyle)'], 'Megan Ellis'))
voteController.acceptUserVotes(new UserVotes(['Roguelike Kart Racer (Carter / Emily)', 'Treble Thieves (Isabel / Luke)', 'Dung Hole (Bennett / Dyani / Kyle)'], 'Andrew Rice'))
voteController.acceptUserVotes(new UserVotes(['Surrounded (Carter / Laura / Nicole)', 'Aqua Ducks (Cody / Madeline)', 'Treble Thieves (Isabel / Luke)'], 'Austin Pico'))
voteController.acceptUserVotes(new UserVotes(['PAINT (Garrett / John)', 'Treble Thieves (Isabel / Luke)', 'Dung Hole (Bennett / Dyani / Kyle)'], 'John Liebl'))
voteController.acceptUserVotes(new UserVotes(['O Corvo (Eilis / Julia / Lauryn)', 'Portal Bound (Devan / Mattie)', 'Night Terrors (Emma / Ian)'], 'Lauryn Shackleton '))
voteController.acceptUserVotes(new UserVotes(['O Corvo (Eilis / Julia / Lauryn)', 'Portal Bound (Devan / Mattie)', 'Z-Cader (Aidan / Matthew)'], 'Eilis Feaster'))
voteController.acceptUserVotes(new UserVotes(['Dung Hole (Bennett / Dyani / Kyle)', 'PAINT (Garrett / John)', 'Rune Caster PvP (Eli / Erica / Jose)'], 'Kyle Boatwright '))
voteController.acceptUserVotes(new UserVotes(['Dung Hole (Bennett / Dyani / Kyle)', 'PAINT (Garrett / John)', 'Surrounded (Carter / Laura / Nicole)'], 'Dyani Larson'))
voteController.acceptUserVotes(new UserVotes(['Z-Cader (Aidan / Matthew)', 'Aqua Ducks (Cody / Madeline)', 'Surrounded (Carter / Laura / Nicole)'], 'Matthew Becker'))
voteController.acceptUserVotes(new UserVotes(['Gnome Cleaning Service (Austin / Hayden / Rylee)', 'Dung Hole (Bennett / Dyani / Kyle)', 'Portal Bound (Devan / Mattie)'], 'Hayden Eshbaugh'))
voteController.acceptUserVotes(new UserVotes(['Souls-Like Game (Aly / Joshua / Nick)', 'Surrounded (Carter / Laura / Nicole)', 'Night Terrors (Emma / Ian)'], 'Chong Vang'))
voteController.acceptUserVotes(new UserVotes(['Dung Hole (Bennett / Dyani / Kyle)', 'Gnome Cleaning Service (Austin / Hayden / Rylee)', 'Portal Bound (Devan / Mattie)'], 'Bennett Schoenborn'))
voteController.acceptUserVotes(new UserVotes(['O Corvo (Eilis / Julia / Lauryn)', 'Portal Bound (Devan / Mattie)', 'Night Terrors (Emma / Ian)'], 'julia jacques'))
voteController.acceptUserVotes(new UserVotes(['Night Terrors (Emma / Ian)', 'Gnome Cleaning Service (Austin / Hayden / Rylee)', 'Z-Cader (Aidan / Matthew)'], 'Ian Bruhn'))
voteController.acceptUserVotes(new UserVotes(['Z-Cader (Aidan / Matthew)', 'Dung Hole (Bennett / Dyani / Kyle)', 'Gnome Cleaning Service (Austin / Hayden / Rylee)'], 'Aidan Brausen'))
voteController.acceptUserVotes(new UserVotes(['Aqua Ducks (Cody / Madeline)', 'Surrounded (Carter / Laura / Nicole)', 'Gnome Cleaning Service (Austin / Hayden / Rylee)'], 'Nicole Harsh'))
voteController.acceptUserVotes(new UserVotes(['Aqua Ducks (Cody / Madeline)', 'Magicats (Megan / Terra)', 'Reflections (Chong / Walker)'], 'Walker Arand'))
voteController.acceptUserVotes(new UserVotes(['Surrounded (Carter / Laura / Nicole)', 'O Corvo (Eilis / Julia / Lauryn)', 'Dung Hole (Bennett / Dyani / Kyle)'], 'Carter Meyer'))
voteController.acceptUserVotes(new UserVotes(['Roguelike Kart Racer (Carter / Emily)', 'PAINT (Garrett / John)', 'Aqua Ducks (Cody / Madeline)'], 'Emily Richards'))
voteController.acceptUserVotes(new UserVotes(['Aqua Ducks (Cody / Madeline)', 'Gnome Cleaning Service (Austin / Hayden / Rylee)', 'Surrounded (Carter / Laura / Nicole)'], 'Rylee Maki'))
voteController.acceptUserVotes(new UserVotes(['Aqua Ducks (Cody / Madeline)', 'Treble Thieves (Isabel / Luke)', 'O Corvo (Eilis / Julia / Lauryn)'], 'Cody Jantzen'))
voteController.acceptUserVotes(new UserVotes(['Surrounded (Carter / Laura / Nicole)', 'Magicats (Megan / Terra)', 'Portal Bound (Devan / Mattie)'], 'Joshua Gear-Heitman'))
voteController.acceptUserVotes(new UserVotes(['Treble Thieves (Isabel / Luke)', 'Memories in Reverse (Charlie / Kris / Rowan)', 'Aqua Ducks (Cody / Madeline)'], 'Charlie Mueller'))
voteController.acceptUserVotes(new UserVotes(['Magicats (Megan / Terra)', 'O Corvo (Eilis / Julia / Lauryn)', 'Surrounded (Carter / Laura / Nicole)'], 'Terra Tvedt'))
voteController.acceptUserVotes(new UserVotes(['Rune Caster PvP (Eli / Erica / Jose)', 'PAINT (Garrett / John)', 'Aqua Ducks (Cody / Madeline)'], 'Erica Halvorson'))
voteController.acceptUserVotes(new UserVotes(['Roguelike Kart Racer (Carter / Emily)', 'Surrounded (Carter / Laura / Nicole)', 'Dung Hole (Bennett / Dyani / Kyle)'], 'Carter Bontje'))
voteController.acceptUserVotes(new UserVotes(['Aqua Ducks (Cody / Madeline)', 'Portal Bound (Devan / Mattie)', 'Magicats (Megan / Terra)'], 'Madeline Dudley'))
voteController.acceptUserVotes(new UserVotes(['Memories in Reverse (Charlie / Kris / Rowan)', 'Aqua Ducks (Cody / Madeline)', 'Treble Thieves (Isabel / Luke)'], 'Kris Deising'))
voteController.acceptUserVotes(new UserVotes(['Rune Caster PvP (Eli / Erica / Jose)', 'Rune Caster PvE (Andrew / Jaden / Rocky)', 'PAINT (Garrett / John)'], 'Rocky Blixt'))
voteController.acceptUserVotes(new UserVotes(['Portal Bound (Devan / Mattie)', 'Surrounded (Carter / Laura / Nicole)', 'Treble Thieves (Isabel / Luke)'], 'Devan Olson'))
voteController.acceptUserVotes(new UserVotes(['Treble Thieves (Isabel / Luke)', 'Aqua Ducks (Cody / Madeline)', 'PAINT (Garrett / John)'], 'Luke Gifford'))
voteController.acceptUserVotes(new UserVotes(['Dung Hole (Bennett / Dyani / Kyle)', 'PAINT (Garrett / John)', 'Aqua Ducks (Cody / Madeline)'], 'Garrett Grabau '))
voteController.acceptUserVotes(new UserVotes(['Rune Caster PvE (Andrew / Jaden / Rocky)', 'Magicats (Megan / Terra)', 'Gnome Cleaning Service (Austin / Hayden / Rylee)'], 'Eli Morgan'))
voteController.acceptUserVotes(new UserVotes(['Portal Bound (Devan / Mattie)', 'Rune Caster PvE (Andrew / Jaden / Rocky)', 'Treble Thieves (Isabel / Luke)'], 'Mattie Mihalko'))
voteController.acceptUserVotes(new UserVotes(['Rune Caster PvP (Eli / Erica / Jose)', 'Rune Caster PvE (Andrew / Jaden / Rocky)', 'Gnome Cleaning Service (Austin / Hayden / Rylee)'], 'Jaden'))
voteController.acceptUserVotes(new UserVotes(['Surrounded (Carter / Laura / Nicole)', 'Treble Thieves (Isabel / Luke)', 'Reflections (Chong / Walker)'], 'Laura Supinski'))
voteController.acceptUserVotes(new UserVotes(['Souls-Like Game (Aly / Joshua / Nick)', 'Surrounded (Carter / Laura / Nicole)', 'Rune Caster PvP (Eli / Erica / Jose)'], 'Nick Maier'))
voteController.acceptUserVotes(new UserVotes(['Treble Thieves (Isabel / Luke)', 'Aqua Ducks (Cody / Madeline)', 'Portal Bound (Devan / Mattie)'], 'Isabel Smith'))
voteController.acceptUserVotes(new UserVotes(['Rune Caster PvP (Eli / Erica / Jose)', 'Rune Caster PvE (Andrew / Jaden / Rocky)', 'Treble Thieves (Isabel / Luke)'], 'Jose Lucero '))
voteController.acceptUserVotes(new UserVotes(['Night Terrors (Emma / Ian)', 'Portal Bound (Devan / Mattie)', 'O Corvo (Eilis / Julia / Lauryn)'], 'Emma Mandera'))
voteController.acceptUserVotes(new UserVotes(['Z-Cader (Aidan / Matthew)', 'Souls-Like Game (Aly / Joshua / Nick)', 'Memories in Reverse (Charlie / Kris / Rowan)'], 'Rowan Peters'))

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
