var cricketWorldCupWinners = [
    { team: "WestIndies", yearsWon: [1975, 1979] },
    { team: "India", yearsWon: [1983, 2011] },
    { team: "Australia", yearsWon: [1987, 1999, 2003, 2007, 2015] },
    { team: "Pakistan", yearsWon: [1992] },
    { team: "Sri Lanka", yearsWon: [1996] },
    { team: "England", yearsWon: [2019] }
  ];


// //Print team with number of worldcup wins

// cricketWorldCupWinners.forEach((t)=>console.log(t.team,t.yearsWon.length))

//How many teams are won World Cup before 19's

var teamsWon= new Set()

for (let teams of cricketWorldCupWinners){
  for (let year of teams.yearsWon){
    if (year>1899 && year<2000){
      teamsWon.add(teams.team)
    }
  }
}
console.log(teamsWon);