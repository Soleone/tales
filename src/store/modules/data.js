/* eslint-disable */
export const state = {
  scenes: [
    {
      id: 'start',
      title: 'In your bed',
      moments: [
        {
          id: 'knock-bed',
          description: 'You hear a loud knock on the door.'
        },
        {
          id: 'door',
          description: 'You get close to the inside of your front door.'
        },
        {
          id: 'phone',
          description:
            'You look at your phone home screen which is slightly overcrowded with icons.'
        },
        {
          id: 'intensify',
          description: 'After a few seconds the knocking becomes even louder.'
        }
      ]
    }
  ],
  options: [
    {
      id: 'time',
      description: 'Look at the time',
      contexts: [
        {
          moment: 'knock-bed'
        }
      ],
      result: "It's 11:55am in the morning."
    },
    {
      id: 'wait',
      description: 'Wait until it stops',
      contexts: [
        {
          moment: 'knock-bed'
        }
      ],
      result: 'You wait and hope it will just go away.',
      moment: 'intensify'
    },
    {
      id: 'up',
      description: 'Get up and walk to the door',
      contexts: [
        {
          moment: 'knock-bed'
        }
      ],
      result: 'You quietly get out of bed and tippy-toe towards the door.',
      moment: 'door'
    },
    {
      id: 'doorspy',
      description: 'Cautiously look through the door spy',
      contexts: [
        {
          moment: 'door'
        }
      ],
      result:
        'You see what looks to be a man and a woman talking to each other.'
    },
    {
      id: 'wait-door',
      description: 'Wait until they leave',
      contexts: [
        {
          moment: 'door'
        }
      ],
      result:
        "It's been several minutes now and they are arguing with each other, but don't seem to want to leave yet.",
      moment: 'intensify'
    },
    {
      id: 'irrigation',
      description: 'Turn on front yard smart irrigation system',
      contexts: [
        {
          moment: 'phone'
        }
      ],
      result: 'You hear yelling from more than one person.',
      moment: 'intensify'
    },
    {
      id: 'doorbell',
      description: 'Use the DoorSnoop app to look through your doorbell camera',
      contexts: [
        {
          moment: 'phone'
        }
      ],
      result:
        'You see a man and a woman talking to each other and few more people in the background on the street.'
    }
  ],
  items: [
    {
      id: 'lighter',
      name: 'Lighter',
      description:
        'A golden metal lighter with a small gas compartment. Not empty yet.',
      options: [
        {
          contexts: [
            {
              moment: 'knock-bed'
            }
          ],
          result:
            'You look at the pillow. You look at the lighter. Your finger twitches, but you decide to keep the moral high ground.'
        }
      ],
      usageMessages: [
        'It lights up briefly but you decide to not waste any gas.',
        "You don't feel like trying to set fire here."
      ]
    },
    {
      id: 'phone',
      name: 'Phone',
      description:
        "A fairly modern phone with a mobile operating system. You haven't added a credit card to the account so the set of apps is somewhat limited.",
      options: [
        {
          contexts: [
            {
              moment: 'knock-bed'
            }
          ],
          result: 'You unlock it with your fingerprint.',
          moment: 'phone'
        }
      ],
      usageMessages: [
        'You check your emails, but nothing new.',
        'You open social media, but get angry pretty quickly and decide to close it again.'
      ]
    }
  ]
}
