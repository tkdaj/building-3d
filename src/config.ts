export const config = {
  scenes: [
    {
      id: 'default',
      label: 'Default',
      skybox: 'sunnysky',
      ground: {
        texture: 'green1.jpg',
        normal: 'green1_normal.jpg',
        repeatX: 200,
        repeatY: 200,
      },
    },
    {
      id: 'east_texas',
      label: 'East Texas',
      skybox: 'sunnysky',
      ground: {
        texture: 'green1.jpg',
        normal: 'green1_normal.jpg',
        repeatX: 600,
        repeatY: 600,
      },
      objects: [
        {
          id: 'pinetree',
          x: -45,
          y: 40,
          scale: 2,
          rotation: 170,
        },
        {
          id: 'pinetree',
          x: 45,
          y: -30,
          scale: 1.5,
          rotation: 45,
        },
        {
          id: 'pinetree',
          x: 50,
          y: 32,
          scale: 2.5,
          rotation: 112,
        },
        {
          id: 'pinetree',
          x: -39,
          y: 70,
          scale: 1.8,
          rotation: 64,
        },
        {
          id: 'pinetree',
          x: 45,
          y: 56,
          scale: 2.2,
          rotation: 189,
        },
        {
          id: 'pinetree',
          x: -50,
          y: -42,
          scale: 2.1,
          rotation: 220,
        },
        {
          id: 'pinetree',
          x: -55,
          y: 45,
          scale: 1.2,
          rotation: 0,
        },
        {
          id: 'pinetree',
          x: -55,
          y: -15,
          scale: 1.2,
          rotation: 225,
        },
        {
          id: 'pinetree',
          x: -80,
          y: -12,
          scale: 2.1,
          rotation: 200,
        },
        {
          id: 'pinetree',
          x: 62,
          y: 45,
          scale: 1.82,
          rotation: 25,
        },
        {
          id: 'pinetree',
          x: 62,
          y: -55,
          scale: 2.1,
          rotation: 312,
        },
        {
          id: 'pinetree',
          x: 55,
          y: -10,
          scale: 2.4,
          rotation: 96,
        },
        {
          id: 'pinetree',
          x: 40,
          y: -64,
          scale: 2.1,
          rotation: 17,
        },
        {
          id: 'pinetree',
          x: -40,
          y: -69,
          scale: 2.2,
          rotation: 33,
        },
        {
          id: 'pinetree',
          x: -60,
          y: -75,
          scale: 2.6,
          rotation: 173,
        },
      ],
    },
    {
      id: 'mountains',
      label: 'Mountains',
      skybox: 'barren',
      ground: {
        texture: 'mountains.jpg',
        repeatX: 30,
        repeatY: 30,
      },
      objects: [],
    },
    {
      id: 'west_texas',
      label: 'West Texas',
      skybox: 'sunnysky',
      ground: {
        texture: 'desert1.jpg',
        repeatX: 200,
        repeatY: 200,
      },
      objects: [
        {
          id: 'mesquite_tree',
          x: -40,
          y: 20,
          scale: 2,
          rotation: 170,
        },
        {
          id: 'mesquite_tree',
          x: 40,
          y: -10,
          scale: 1.5,
          rotation: 45,
        },
        {
          id: 'mesquite_tree',
          x: 45,
          y: 12,
          scale: 2.5,
          rotation: 112,
        },
        {
          id: 'mesquite_tree',
          x: -40,
          y: -22,
          scale: 2.1,
          rotation: 220,
        },
        {
          id: 'mesquite_tree',
          x: -45,
          y: 25,
          scale: 1.2,
          rotation: 0,
        },
        {
          id: 'mesquite_tree',
          x: -45,
          y: -35,
          scale: 1.2,
          rotation: 225,
        },
        {
          id: 'mesquite_tree',
          x: 42,
          y: 25,
          scale: 1.82,
          rotation: 25,
        },
        {
          id: 'mesquite_tree',
          x: 2,
          y: -100,
          scale: 2.1,
          rotation: 312,
        },
        {
          id: 'tumbelweed',
          x: -20,
          y: 40,
          scale: 2.1,
          rotation: 312,
        },
        {
          id: 'tumbelweed',
          x: 15,
          y: 45,
          scale: 1.6,
          rotation: 0,
        },
        {
          id: 'tumbelweed',
          x: -23,
          y: 7,
          scale: 2.8,
          rotation: 45,
        },
        {
          id: 'tumbelweed',
          x: 7,
          y: -41,
          scale: 1.1,
          rotation: 10,
        },
        {
          id: 'tumbelweed',
          x: -30,
          y: 40,
          scale: 2.1,
          rotation: 312,
        },
      ],
    },
  ],
  view: {
    distance: {
      initial: 70.0,
      min: 2.0,
      max: 300.0,
    },
    easing: {
      distance: 0.1,
      rotation: 0.1,
    },
  },
  accessories: [
    {
      id: 'truck',
      rotation: [0, 0, 0],
      position: [22, 0, 0],
    },
    {
      id: 'person',
      rotation: [0, 0, 0],
      position: [14, 0, 40],
    },
  ],
  building: {
    label: 'Building Size',
    orderId: 1,
    fields: [
      {
        id: 'width',
        label: 'Width:',
        value: 30,
        min: 5,
        max: 60,
        units: 'ft.',
        tabIndex: 1,
      },
      {
        id: 'length',
        label: 'Length:',
        value: 60,
        min: 5,
        max: 200,
        units: 'ft.',
        tabIndex: 2,
      },
      {
        id: 'height',
        label: 'Height:',
        value: 16,
        min: 5,
        max: 24,
        units: 'ft.',
        tabIndex: 3,
      },
      {
        id: 'pitch',
        label: 'Pitch:',
        value: 2,
        min: 1,
        max: 5,
        units: '/12',
        tabIndex: 4,
      },
      {
        id: 'no_walls',
        label: 'Remove walls:',
        value: false,
        values: [
          {
            id: false,
            label: 'No',
          },
          {
            id: true,
            label: 'Yes',
          },
        ],
        type: 'select',
      },
      {
        id: 'single_slope',
        label: 'Single slope:',
        value: 'none',
        values: [
          {
            id: 'none',
            label: 'None',
          },
          {
            id: 'right',
            label: 'Right',
          },
        ],
        type: 'select',
      },
    ],
  },
  overhang: {
    label: 'Overhangs',
    orderId: 2,
    fields: [
      {
        id: 'overhang_sides',
        label: 'Sides:',
        value: 0,
        min: 0,
        max: 5,
        units: 'ft.',
        tabIndex: 5,
      },
      {
        id: 'overhang_end',
        label: 'End:',
        value: 0,
        min: 0,
        max: 5,
        units: 'ft.',
        tabIndex: 6,
      },
    ],
  },
  leanto: {
    label: 'Lean-to',
    orderId: 3,
    enabled: false,
    length: {
      value: 15,
      min: 6,
      max: 25,
    },
    pitch: {
      value: 1,
      min: 1,
      max: 5,
    },
    drop: {
      value: 2,
      min: {
        left: 0,
        right: 0,
        back: 1,
        front: 1,
      },
      max: 20,
    },
    cut_front: {
      value: 0,
      min: 0,
    },
    cut_back: {
      value: 0,
      min: 0,
    },
    fields: [
      {
        id: 'wall',
        label: 'Wall:',
        value: 'off',
        values: [
          {
            id: 'on',
            label: 'On',
          },
          {
            id: 'off',
            label: 'Off',
          },
        ],
        type: 'select',
      },
    ],
  },
  insetbay: {
    label: 'Inset bay',
    orderId: null,
    count: {
      value: 0,
      min: 0,
      max: 2,
    },
    drop: {
      value: 0,
      min: 0,
      max: 4,
    },
    length: {
      value: 20,
      min: 8,
      max: 25,
    },
    fields: [
      {
        id: 'front',
        label: 'Front Endwall:',
        value: 0,
        min: 0,
        max: 2,
        type: 'number',
      },
      {
        id: 'front_length_1',
        label: '#1 length:',
        value: 20,
        min: 8,
        max: 25,
        type: 'range',
        units: 'ft.',
      },
      {
        id: 'front_length_2',
        label: '#2 length:',
        value: 20,
        min: 8,
        max: 25,
        type: 'range',
        units: 'ft.',
      },
      {
        id: 'back',
        label: 'Back Endwall:',
        value: 0,
        min: 0,
        max: 2,
        type: 'number',
      },
      {
        id: 'back_length_1',
        label: '#1 length:',
        value: 20,
        min: 8,
        max: 25,
        type: 'range',
        units: 'ft.',
      },
      {
        id: 'back_length_2',
        label: '#2 length:',
        value: 20,
        min: 8,
        max: 25,
        type: 'range',
        units: 'ft.',
      },
    ],
  },
  wainscot: {
    label: 'Wainscot',
    orderId: 5,
    fields: [
      {
        id: 'wainscot',
        label: 'Enabled:',
        value: 0,
        values: [
          {
            id: 0,
            label: 'Off',
          },
          {
            id: 4,
            label: 'On',
          },
        ],
        type: 'select',
      },
    ],
  },
  gutter: {
    label: 'Gutter',
    orderId: 6,
    fields: [
      {
        id: 'gutter',
        label: 'Enabled:',
        value: false,
        values: [
          {
            id: false,
            label: 'Off',
          },
          {
            id: true,
            label: 'On',
          },
        ],
        type: 'select',
      },
    ],
  },
  ridge_vent: {
    label: 'Ridge Vent',
    orderId: 7,
    fields: [
      {
        id: 'ridge_vent_type',
        label: 'Type:',
        value: 'none',
        values: [
          {
            id: 'none',
            label: 'None',
          },
          {
            id: 'standard',
            label: 'Standard',
          },
          {
            id: 'low',
            label: 'Low',
          },
        ],
        type: 'select',
      },
      {
        id: 'ridge_vent_mode',
        label: 'Spread:',
        value: 'continuous',
        values: [
          {
            id: 'continuous',
            label: 'Continuous',
          },
          {
            id: 'even',
            label: 'Evenly Spread',
          },
        ],
        disabled: true,
        type: 'select',
      },
    ],
  },
  colors: {
    label: 'Color Selections',
    orderId: 8,
    fields: [
      {
        id: 'color_wall',
        type: 'color',
        label: 'Wall:',
        value: '#8a7967',
      },
      {
        id: 'color_roof',
        type: 'color',
        label: 'Roof:',
        value: '#E3DFEB',
      },
      {
        id: 'color_trim',
        type: 'color',
        label: 'Trim:',
        value: '#4b3d2a',
      },
      {
        id: 'color_rollUp',
        type: 'color',
        label: 'Rollup:',
        value: '#E3DFEB',
      },
      {
        id: 'color_wainscot',
        type: 'color',
        label: 'Wainscot:',
        value: '#ffffff',
      },
      {
        id: 'color_vent',
        type: 'color',
        label: 'Ridge vent:',
        value: '#ffffff',
      },
    ],
    values: [
      {
        id: 'galvalume_plus',
        hex: '#D0D6D6',
        label: 'Galvalume Plus',
      },
      {
        id: 'twilight_gray',
        hex: '#dad0ca',
        label: 'Twilight Gray',
      },
      {
        id: 'smokey_pewter',
        hex: '#bbb0a3',
        label: 'Smokey Pewter',
      },
      {
        id: 'light_gray',
        hex: '#a4a89c',
        label: 'Light Gray',
      },
      {
        id: 'silver_metallic',
        hex: '#8b8c8d',
        label: 'Silver Metallic',
      },
      {
        id: 'smokestack_gray',
        hex: '#949ca1',
        label: 'Smokestack Gray',
      },
      {
        id: 'black',
        hex: '#200000',
        label: 'Black',
      },
      {
        id: 'matte_black',
        hex: '#363436',
        label: 'Matte Black',
      },
      {
        id: 'charcoal',
        hex: '#636466',
        label: 'Charcoal',
      },
      {
        id: 'deep_river_blue',
        hex: '#425968',
        label: 'Deep River Blue',
      },
      {
        id: 'deep_blue',
        hex: '#004769',
        label: 'Deep Blue',
      },
      {
        id: 'hawaiian_blue',
        hex: '#217497',
        label: 'Hawaiian Blue',
      },
      {
        id: 'marine_green',
        hex: '#398e8a',
        label: 'Marine Green',
      },
      {
        id: 'forest_green',
        hex: '#374c48',
        label: 'Forest Green',
      },
      {
        id: 'deep_green',
        hex: '#376351',
        label: 'Deep Green',
      },
      {
        id: 'ivy_green',
        hex: '#004833',
        label: 'Ivy Green',
      },
      {
        id: 'colony_green',
        hex: '#627f70',
        label: 'Colony Green',
      },
      {
        id: 'mansard_brown',
        hex: '#301e00',
        label: 'Mansard Brown',
      },
      {
        id: 'burnished_slate',
        hex: '#4e4436',
        label: 'Burnished Slate',
      },
      {
        id: 'coco_brown',
        hex: '#4b3d2a',
        label: 'Coco Brown',
      },
      {
        id: 'chestnut_brown',
        hex: '#7c6a55',
        label: 'Chestnut Brown',
      },
      {
        id: 'saddle_leather_brown',
        hex: '#8a7967',
        label: 'Saddle Leather Brown',
      },
      {
        id: 'rustic_brown',
        hex: '#91665a',
        label: 'Rustic Brown',
      },
      {
        id: 'rustic_red',
        hex: '#933c06',
        label: 'Rustic Red',
      },
      {
        id: 'burgundy',
        hex: '#6a2316',
        label: 'Burgundy',
      },
      {
        id: 'patriot_red',
        hex: '#a11d21',
        label: 'Patriot Red',
      },
      {
        id: 'sunset_red',
        hex: '#b45340',
        label: 'Sunset Red',
      },
      {
        id: 'bright_copper',
        hex: '#8e654c',
        label: 'Bright Copper',
      },
      {
        id: 'tan',
        hex: '#baa273',
        label: 'Tan',
      },
      {
        id: 'gold',
        hex: '#c1a870',
        label: 'Gold',
      },
      {
        id: 'desert_tan',
        hex: '#b3a88b',
        label: 'Desert Tan',
      },
      {
        id: 'light_stone',
        hex: '#cfcaa8',
        label: 'Light Stone',
      },
      {
        id: 'bright_white',
        hex: '#E3DFEB',
        label: 'Bright White',
      },
    ],
  },
  insulation: {
    label: 'Insulation',
    orderId: 9,
    fields: [
      {
        id: 'insulation',
        label: '3" Vinyl Reinforced Insulation:',
        value: 'no',
        values: [
          {
            id: 'no',
            label: 'No',
          },
          {
            id: 'yes',
            label: 'Yes',
          },
        ],
        type: 'select',
      },
    ],
  },
  translucentPanels: {
    label: 'Translucent Panels',
    orderId: 10,
    fields: [
      {
        id: 'translucent_panels',
        label: "Fiberglass Translucent Light Panels - 12' - White: Quantity",
        value: 0,
        min: 0,
        max: 99,
        type: 'number',
      },
    ],
  },
  wallLinerPanels: {
    label: "8' Wall Liner Panels",
    orderId: 11,
    fields: [
      {
        id: 'wall_liner_panels',
        label: "8' Wall Liner Panels",
        value: 0,
        values: [
          {
            id: 0,
            label: 'NONE',
          },
          {
            id: 2,
            label: 'Tan',
          },
          {
            id: 3,
            label: 'Light Stone',
          },
          {
            id: 4,
            label: 'Light Gray',
          },
          {
            id: 5,
            label: 'Hawaiian Blue',
          },
          {
            id: 6,
            label: 'Marine Green',
          },
          {
            id: 7,
            label: 'Colony Green',
          },
          {
            id: 8,
            label: 'Gold',
          },
          {
            id: 9,
            label: 'Ivy Green',
          },
          {
            id: 10,
            label: 'Burgundy',
          },
          {
            id: 11,
            label: 'Coco Brown',
          },
          {
            id: 12,
            label: 'Burnished Slate',
          },
          {
            id: 13,
            label: 'Charcoal',
          },
          {
            id: 14,
            label: 'Patriot Red',
          },
          {
            id: 15,
            label: 'Rustic Red',
          },
          {
            id: 16,
            label: 'Deep Green',
          },
          {
            id: 17,
            label: 'Mansard Brown',
          },
          {
            id: 18,
            label: 'Deep Blue',
          },
          {
            id: 20,
            label: 'Galvalume Plus',
          },
          {
            id: 21,
            label: 'Bright Copper',
          },
          {
            id: 23,
            label: 'Black',
          },
          {
            id: 35,
            label: 'Matte Black',
          },
          {
            id: 24,
            label: 'Silver Metallic',
          },
          {
            id: 25,
            label: 'Forest Green',
          },
          {
            id: 26,
            label: 'Desert Tan',
          },
          {
            id: 27,
            label: 'Smokey Pewter',
          },
          {
            id: 28,
            label: 'Twilight Gray',
          },
          {
            id: 29,
            label: 'Sunset Red',
          },
          {
            id: 30,
            label: 'Rustic Brown',
          },
          {
            id: 31,
            label: 'Chestnut Brown',
          },
          {
            id: 32,
            label: 'Smokestack Gray',
          },
          {
            id: 33,
            label: 'Deep River Blue',
          },
          {
            id: 34,
            label: 'Saddle Leather Brown',
          },
          {
            id: 36,
            label: 'Bright White',
          },
        ],
        type: 'select',
      },
    ],
  },
  getAQuote: {
    label: 'Get a Quote',
    orderId: 12,
  },
  supportBeam: {
    label: 'Interior Framework',
    orderId: 9,
    fields: [
      {
        id: 'supportBeam',
        label: 'Show:',
        value: true,
        values: [
          {
            id: false,
            label: 'Off',
          },
          {
            id: true,
            label: 'On',
          },
        ],
        type: 'select',
      },
    ],
  },
  assets: {
    path: 'assets/models/scene.glb',
    addon: {
      constraints: {
        edge: 2,
      },
      items: [
        {
          label: 'Walk Doors',
          items: [
            {
              id: 'door_3x7',
              label: 'Walk Door (3x7)',
              mesh: 'Walk Door - 3x7',
              type: 'wall',
              verticalAlign: 'bottom',
              size: {
                width: 3.186862967,
                height: 7,
              },
              color: 'door',
            },
            {
              id: 'door_4x7',
              label: 'Walk Door (4x7)',
              mesh: 'Walk Door - 4x7',
              type: 'wall',
              verticalAlign: 'bottom',
              size: {
                width: 4.138165345,
                height: 7,
              },
              color: 'door',
            },
            {
              id: 'door_6x7',
              label: 'Double Walk Door (6x7)',
              mesh: 'Walk Door, Double - 6x7',
              type: 'wall',
              verticalAlign: 'bottom',
              size: {
                width: 6.040770102,
                height: 7,
              },
              color: 'door',
            },
          ],
        },
        {
          label: 'Windows',
          items: [
            {
              id: 'window_3x3',
              label: 'Window (3x3)',
              mesh: 'Window - 3x3',
              type: 'wall',
              size: {
                width: 3.018333333333333,
                height: 3.019666666666666,
              },
              color: 'window',
            },
            {
              id: 'window_6x3',
              label: 'Window (6x3)',
              mesh: 'Window - 6x3',
              type: 'wall',
              size: {
                width: 6.018333333333333,
                height: 3.019666666666666,
              },
              color: 'window',
            },
          ],
        },
        {
          id: 'rollups',
          label: 'Roll-Up Doors',
          items: [
            {
              id: 'rollup_8x8',
              label: 'Roll-Up (8x8)',
              mesh: 'Rollup - 8x8',
              type: 'wall',
              verticalAlign: 'bottom',
              size: {
                width: 8,
                height: 8,
              },
              color: 'rollup',
            },
            {
              id: 'rollup_8x10',
              label: 'Roll-Up (8x10)',
              mesh: 'Rollup - 8x10',
              type: 'wall',
              verticalAlign: 'bottom',
              size: {
                width: 8,
                height: 10,
              },
              color: 'rollup',
            },
            {
              id: 'rollup_10x8',
              label: 'Roll-Up (10x8)',
              mesh: 'Rollup - 10x8',
              type: 'wall',
              verticalAlign: 'bottom',
              size: {
                width: 10,
                height: 8,
              },
              color: 'rollup',
            },
            {
              id: 'rollup_10x10',
              label: 'Roll-Up (10x10)',
              mesh: 'Rollup - 10x10',
              type: 'wall',
              verticalAlign: 'bottom',
              size: {
                width: 10,
                height: 10,
              },
              color: 'rollup',
            },
            {
              id: 'rollup_10x12',
              label: 'Roll-Up (10x12)',
              mesh: 'Rollup - 10x12',
              type: 'wall',
              verticalAlign: 'bottom',
              size: {
                width: 10,
                height: 12,
              },
              color: 'rollup',
            },
            {
              id: 'rollup_12x10',
              label: 'Roll-Up (12x10)',
              mesh: 'Rollup - 12x10',
              type: 'wall',
              verticalAlign: 'bottom',
              size: {
                width: 12,
                height: 10,
              },
              color: 'rollup',
            },
            {
              id: 'rollup_12x12',
              label: 'Roll-Up (12x12)',
              mesh: 'Rollup - 12x12',
              type: 'wall',
              verticalAlign: 'bottom',
              size: {
                width: 12,
                height: 12,
              },
              color: 'rollup',
            },
            {
              id: 'rollup_12x14',
              label: 'Roll-Up (12x14)',
              mesh: 'Rollup - 12x14',
              type: 'wall',
              verticalAlign: 'bottom',
              size: {
                width: 12,
                height: 14,
              },
              color: 'rollup',
            },
            {
              id: 'rollup_14x14',
              label: 'Roll-Up (14x14)',
              mesh: 'Rollup - 14x14',
              type: 'wall',
              verticalAlign: 'bottom',
              size: {
                width: 14,
                height: 14,
              },
              color: 'rollup',
            },
            {
              id: 'rollup_16x8',
              label: 'Roll-Up (16x8)',
              mesh: 'Rollup - 16x8',
              type: 'wall',
              verticalAlign: 'bottom',
              size: {
                width: 16,
                height: 8,
              },
              color: 'rollup',
            },
            {
              id: 'rollup_16x16',
              label: 'Roll-Up (16x16)',
              mesh: 'Rollup - 16x16',
              type: 'wall',
              verticalAlign: 'bottom',
              size: {
                width: 16,
                height: 16,
              },
              color: 'rollup',
            },
          ],
        },
        {
          type: 'frames',
          label: 'Framed Opening Only',
          source: 'rollups',
        },
      ],
    },
  },
  defaultSettings: {
    building: {
      width: 30,
      length: 60,
      height: 16,
      pitch: 2,
      overhang_sides: 0,
      overhang_end: 0,
      no_walls: false,
      single_slope: false,
      ridge_vent_type: 'none',
      ridge_vent_mode: 'continuous',
    },
    wainscot: 0,
    gutter: false,
    insetbay: {
      front: {
        count: 0,
        length_1: 20,
        length_2: 20,
      },
      back: {
        count: 0,
        length_1: 20,
        length_2: 20,
      },
    },
    leanto: {
      back: {
        enabled: false,
        length: 15,
        pitch: 1,
        drop: 2,
        cut_front: 0,
        cut_back: 0,
      },
      front: {
        enabled: false,
        length: 15,
        pitch: 1,
        drop: 2,
        cut_front: 0,
        cut_back: 0,
      },
      left: {
        enabled: false,
        length: 15,
        pitch: 1,
        drop: 2,
        cut_front: 0,
        cut_back: 0,
      },
      right: {
        enabled: false,
        length: 15,
        pitch: 1,
        drop: 2,
        cut_front: 0,
        cut_back: 0,
      },
      wraparound_front_left: false,
      wraparound_front_right: false,
      wraparound_back_left: false,
      wraparound_back_right: false,
      wall: false,
    },
    colors: {
      wall: '#8a7967',
      roof: '#E3DFEB',
      trim: '#4b3d2a',
      rollUp: '#E3DFEB',
      vent: '#E3DFEB',
      wainscot: '#E3DFEB',
    },
    insulation: 'no',
    translucentPanels: 0,
    wallLinerPanels: 'none',
    addons: [],
    accessories: [
      {
        id: 'truck',
        enabled: false,
        modelPath: '',
        rotation: [0, 0, 0],
        position: [22, 0, 0],
      },
      {
        id: 'person',
        enabled: false,
        modelPath: '',
        rotation: [0, 0, 0],
        position: [14, 0, 40],
      },
    ],
  },
} as const;
