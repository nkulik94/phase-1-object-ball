function gameObject() {
    return {
        home: {
            teamName: 'Brooklyn Nets',
            colors: ['Black', 'White'],
            players: {
                'Alan Anderson': {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                'Reggie Evans': {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                'Brook Lopez': {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                'Mason Plumlee': {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                'Jason Terry': {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                }
            },
        },
        away: {
            teamName: 'Charlotte Hornets',
            colors: ['Turquoise', 'Purple'],
            players: {
                'Jeff Adrien': {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                'Bismak Biyombo': {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                'DeSagna Diop': {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                'Ben Gordon': {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                'Brendan Haywood': {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                }
            }
        },
    }
}
const info = gameObject()
function numPointsScored(player) {
    for (let p in info) {
        debugger
        let place = info[p]
        for (let to in place) {
            debugger
            let teamInfo = place[to]
            if (typeof teamInfo === 'object') {
                for (let p in teamInfo) {
                    debugger
                    if (p === player) {
                        let rightPlayer = teamInfo[p]
                        return rightPlayer.points
                    }
                }
            }
        }
    }
}
function shoeSize(player) {
    for (let p in info) {
        debugger
        let place = info[p]
        for (let to in place) {
            debugger
            let teamInfo = place[to]
            if (typeof teamInfo === 'object') {
                for (let p in teamInfo) {
                    debugger
                    if (p === player) {
                        let rightPlayer = teamInfo[p]
                        debugger
                        return rightPlayer.shoe
                    }
                }
            }
        }
    }
}
function teamColors(team) {
    debugger
    for (let p in info) {
        debugger
        let rightTeam = info[p]
        if (rightTeam.teamName === team) {
            debugger
            return rightTeam.colors
        }
    }
}
function teamNames() {
    const namesArray = []
    debugger
    for (let p in info) {
        debugger
        let team = info[p]
        namesArray.push(team.teamName)
    }
    debugger
    return namesArray
}
function playerNumbers(team) {
    const numbersArray = []
    debugger
    for (let p in info) {
        debugger
        const rightTeam = info[p]
        if (rightTeam.teamName === team) {
            debugger
            const players = rightTeam.players
            debugger
            for (let n in players) {
                debugger
                numbersArray.push(players[n].number)
            }
        }
    }
    debugger
    return numbersArray
}
function playerStats(name) {
    for (let p in info) {
        debugger
        const players = info[p].players
        debugger
        for (let n in players) {
            if (n === name) {
                debugger
                const rightStats = players[n]
                debugger
                return rightStats
            }
        }
    }
}
function bigShoeRebounds() {
    const shoeArray = []
    debugger
    for (let p in info) {
        debugger
        const playerList = info[p].players
        debugger
        for (let p in playerList) {
            debugger
            shoeArray.push(playerList[p].shoe)
            debugger
        }
    }
    const biggestShoe = Math.max(...shoeArray)
    debugger
    for (let p in info) {
        debugger
        const playerList = info[p].players
        debugger
        for (let p in playerList) {
            debugger
            const player = playerList[p]
            debugger
            if (player.shoe === biggestShoe) {
                const rebounds = player.rebounds
                debugger
                return rebounds
            }
        }
    }
}
function mostPointScored() {
    
}