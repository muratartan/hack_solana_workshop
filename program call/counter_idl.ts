export type IDL_TYPE = {
  version: "0.1.0";
  name: "counter";
  instructions: [
    {
      name: "close";
      accounts: [
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "counter";
          isMut: true;
          isSigner: false;
        }
      ];
      args: [];
    },
    {
      name: "decrement";
      accounts: [
        {
          name: "counter";
          isMut: true;
          isSigner: false;
        }
      ];
      args: [];
    },
    {
      name: "increment";
      accounts: [
        {
          name: "counter";
          isMut: true;
          isSigner: false;
        }
      ];
      args: [];
    },
    {
      name: "initialize";
      accounts: [
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "counter";
          isMut: true;
          isSigner: true;
        },
        {
          name: "system_program";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [];
    },
    {
      name: "set";
      accounts: [
        {
          name: "counter";
          isMut: true;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "value";
          type: "u8";
        }
      ];
    }
  ];
  accounts: [
    {
      name: "Counter";
      type: {
        kind: "struct";
        fields: [
          {
            name: "count";
            type: "u8";
          }
        ];
      };
    }
  ];
};

export const IDL: IDL_TYPE = {
  name: "counter",
  version: "0.1.0",
  instructions: [
    {
      name: "close",
      accounts: [
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "counter",
          isMut: true,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: "decrement",
      accounts: [
        {
          name: "counter",
          isMut: true,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: "increment",
      accounts: [
        {
          name: "counter",
          isMut: true,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: "initialize",
      accounts: [
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "counter",
          isMut: true,
          isSigner: true,
        },
        {
          name: "system_program",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: "set",
      accounts: [
        {
          name: "counter",
          isMut: true,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "value",
          type: "u8",
        },
      ],
    },
  ],
  accounts: [
    {
      name: "Counter",
      type: {
        kind: "struct",
        fields: [
          {
            name: "count",
            type: "u8",
          },
        ],
      },
    },
  ],
};
