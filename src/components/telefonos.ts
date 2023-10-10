export default {
  phones: [
    {
      modelo: 'iPhone 14 Pro Max',
      imagen: [
        'https://cdn.quasar.dev/img/parallax2.jpg',
        'https://cdn.quasar.dev/img/mountains.jpg',
        'https://cdn.quasar.dev/img/parallax1.jpg',
        'https://cdn.quasar.dev/img/quasar.jpg',
      ],
      precio: 1299,
      os: 'iOS 16',
      Tamaño: 6.7,
      Almacenamiento: 128,
      ram: 6,
      vendedor: 'Juan Perez',
      numero: '7374-2312',
    },
    {
      modelo: 'Samsung Galaxy S23 Ultra',
      imagen: [
        'https://cdn.quasar.dev/img/parallax2.jpg',
        'https://cdn.quasar.dev/img/mountains.jpg',
        'https://cdn.quasar.dev/img/parallax1.jpg',
        'https://cdn.quasar.dev/img/quasar.jpg',
      ],
      precio: 1199,
      os: 'Android 13',
      Tamaño: 6.8,
      Almacenamiento: 256,
      ram: 8,
      vendedor: 'Juan Perez',
      numero: '7374-2312',
    },
    {
      modelo: 'Google Pixel 7 Pro',
      imagen: [
        'https://cdn.quasar.dev/img/parallax2.jpg',
        'https://cdn.quasar.dev/img/mountains.jpg',
        'https://cdn.quasar.dev/img/parallax1.jpg',
        'https://cdn.quasar.dev/img/quasar.jpg',
      ],
      precio: 899,
      os: 'Android 13',
      Tamaño: 6.7,
      Almacenamiento: 128,
      ram: 12,
      vendedor: 'Juan Perez',
      numero: '7374-2312',
    },
    {
      modelo: 'OnePlus 9T',
      imagen: [
        'https://cdn.quasar.dev/img/parallax2.jpg',
        'https://cdn.quasar.dev/img/mountains.jpg',
        'https://cdn.quasar.dev/img/parallax1.jpg',
        'https://cdn.quasar.dev/img/quasar.jpg',
      ],
      precio: 799,
      os: 'OxygenOS 12',
      Tamaño: 6.55,
      Almacenamiento: 256,
      ram: 8,
      vendedor: 'Juan Perez',
      numero: '7374-2312',
    },
    {
      modelo: 'Xiaomi Mi 12',
      imagen: [
        'https://cdn.quasar.dev/img/parallax2.jpg',
        'https://cdn.quasar.dev/img/mountains.jpg',
        'https://cdn.quasar.dev/img/parallax1.jpg',
        'https://cdn.quasar.dev/img/quasar.jpg',
      ],
      precio: 899,
      os: 'MIUI 14',
      Tamaño: 6.8,
      Almacenamiento: 128,
      ram: 10,
      vendedor: 'Juan Perez',
      numero: '7374-2312',
    },
    {
      modelo: 'Sony Xperia 5 III',
      imagen: [
        'https://cdn.quasar.dev/img/parallax2.jpg',
        'https://cdn.quasar.dev/img/mountains.jpg',
        'https://cdn.quasar.dev/img/parallax1.jpg',
        'https://cdn.quasar.dev/img/quasar.jpg',
      ],
      precio: 999,
      os: 'Android 13',
      Tamaño: 6.1,
      Almacenamiento: 128,
      ram: 8,
      vendedor: 'Juan Perez',
      numero: '7374-2312',
    },
    {
      modelo: 'LG G9 ThinQ',
      imagen: [
        'https://cdn.quasar.dev/img/parallax2.jpg',
        'https://cdn.quasar.dev/img/mountains.jpg',
        'https://cdn.quasar.dev/img/parallax1.jpg',
        'https://cdn.quasar.dev/img/quasar.jpg',
      ],
      precio: 749,
      os: 'Android 12',
      Tamaño: 6.4,
      Almacenamiento: 256,
      ram: 6,
      vendedor: 'Juan Perez',
      numero: '7374-2312',
    },
    {
      modelo: 'Huawei P50 Pro',
      imagen: [
        'https://cdn.quasar.dev/img/parallax2.jpg',
        'https://cdn.quasar.dev/img/mountains.jpg',
        'https://cdn.quasar.dev/img/parallax1.jpg',
        'https://cdn.quasar.dev/img/quasar.jpg',
      ],
      precio: 1099,
      os: 'HarmonyOS 3.0',
      Tamaño: 6.6,
      Almacenamiento: 512,
      ram: 8,
      vendedor: 'Juan Perez',
      numero: '7374-2312',
    },
    {
      modelo: 'Motorola Moto G7',
      imagen: [
        'https://cdn.quasar.dev/img/parallax2.jpg',
        'https://cdn.quasar.dev/img/mountains.jpg',
        'https://cdn.quasar.dev/img/parallax1.jpg',
        'https://cdn.quasar.dev/img/quasar.jpg',
      ],
      precio: 249,
      os: 'Android 11',
      Tamaño: 6.2,
      Almacenamiento: 64,
      ram: 4,
      vendedor: 'Juan Perez',
      numero: '7374-2312',
    },
    {
      modelo: 'Nokia 9 PureView',
      imagen: [
        'https://cdn.quasar.dev/img/parallax2.jpg',
        'https://cdn.quasar.dev/img/mountains.jpg',
        'https://cdn.quasar.dev/img/parallax1.jpg',
        'https://cdn.quasar.dev/img/quasar.jpg',
      ],
      precio: 599,
      os: 'Android 10',
      Tamaño: 5.99,
      Almacenamiento: 128,
      ram: 6,
      vendedor: 'Juan Perez',
      numero: '7374-2312',
    },
  ],
};

export function MainLayoutScript() {
  return {
    opcionesGrupo1: [
      {
        label: 'Samsung',
        value: 'op1',
      },
      {
        label: 'Huawei',
        value: 'op2',
      },
      {
        label: 'Nokia',
        value: 'op3',
      },
      {
        label: 'iPhone',
        value: 'op4',
      },
      {
        label: 'Xiaomi',
        value: 'op5',
      },
    ],

    opcionesGrupo2: [
      {
        label: 'Android',
        value: 'op6',
      },
      {
        label: 'iOS',
        value: 'op7',
      },
      {
        label: 'Windows',
        value: 'op8',
      },
    ],

    opcionesGrupo3: [
      {
        label: '6.0',
        value: 'op9',
      },
      {
        label: '5.5',
        value: 'op10',
      },
      {
        label: '5',
        value: 'op11',
      },
    ],
  };
}
