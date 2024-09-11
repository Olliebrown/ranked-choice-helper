Ranked Choice Helper
====================
This is a simple tool to help you calculate the results of a ranked choice election. It is designed to be used with a ranked choice election where voters rank candidates in order of preference. The tool will calculate the winner of the election based on the ranked choices of the voters and will output each stage where it eliminates the lowest ranked candidate until a winner is determined.

It is designed to choose a single winner and will continue until this happens.  However, you can look at the stage results to see how the election would have gone if it had stopped sooner. When there is a tie for lowest ranked candidate at a given stage, all tied candidates are eliminated.

Scoring
-------
There are three ways the tool can score candidates:
- default: Only the first choice of each voter is counted. This is the most common way to score ranked choice elections.
- borda: Applies a "Borda" count where each ranking is given a score weighted by the number of candidates ranked below it + 1. this allows all votes (not just the first) to be counted but gives more weight to higher rankings.
- tally: Counts all votes equally regardless of rank. Will have the most "consensus" based result, but is the least common way to score ranked choice elections.

Input
-----
See `input/example.json` for the format of the input. You must provide a list of all candidates and then a list of all ballots. Each ballot has the name of the caster (can be left blank) and then their list of choices in rank order from 1st to last.

Vote choices and the list of candidates must match EXACTLY!

Usage
-----
After creating your input json, just adjust the filename in index.js to point to your input data. Adjust the 'mode' variable to your desired scoring method. Then run:
- `npm start`

This is a standard node.js package, so be sure to run `npm install` once to gather dependencies before running `npm start`.

Credits
-------
This script was written by Seth Berrier (Olliebrown) and is based largely on the [`ranked-voting-ts` module by mikey-t](https://github.com/mikey-t/ranked-voting-ts). It uses a modified form of mikey's module available at [Olliebrown/ranked-voting-ts](https://github.com/Olliebrown/ranked-voting-ts).
