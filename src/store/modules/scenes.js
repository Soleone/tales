/* eslint-disable */
export const state = {
  scenes: [
    {
      id: "start",
      title: "In your bed",
      moments: [
        {
          id: "knock",
          description: "You hear a loud knock on the door.",
          options: [
            {
              id: "time",
              description: "Look at the time",
              result: "It's 11:55am in the morning."
            },
            {
              id: "wait",
              description: "Wait until it stops",
              result: "You wait and hope it will just go away.",
              moment: "intensify"
            },
            {
              id: "up",
              description: "Get up and walk to the door",
              result: "You quietly get out of bed and tippy toe towards the door.",
              moment: "door"
            }
          ],
          items: [
            {
              id: "lighter",
              result: "It lights up briefly but you decide to not waste any gas."
            },
            {
              id: "phone",
              result: "You unlock it with your fingerprint.",
              moment: "phone"
            }
          ]
        },
        {
          id: "door",
          description: "You get close to your front door.",
          options: [
            {
              id: "doorspy",
              description: "Cautiously look through the door spy",
              result: "You see what looks to be a man and a woman talking to each other."
            }
          ]
        },
        {
          id: "phone",
          description: "You look at your phone home screen which is slightly overcrowded with icons.",
          options: [
            {
              id: "irrigation",
              description: "Turn on front yard smart irrigation system",
              result: "You hear yelling from more than one person.",
              moment: "intensify"
            },
            {
              id: "doorbell",
              description: "Use the DoorSnoop app to look through your doorbell camera",
              result: "You see a man and a woman talking to each other and few more people in the background on the street."
            }
          ]
        },
        {
          id: "intensify",
          description: "After a few seconds the knocking becomes even louder.",
          options: []
        }
      ]
    }
  ]
}
