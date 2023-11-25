<template>
  <q-layout view="hHh lpR fFf" class="bg-accent">
    <q-header elevated>
      <q-toolbar dark class="bg-primary text-white">
        <div class="col text-center text-weight-bold">
          <q-toolbar-title>NUEVO ANUNCIO</q-toolbar-title>
        </div>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <div
        class="col-12 col-sm-6 col-md-12 col-lg-6"
        v-if="$q.screen.width < 768"
      >
        <q-card>
          <q-card-section>
            <div class="q-pa-xs q-ma-xs">
              <q-carousel
                swipeable
                animated
                v-model="slide"
                thumbnails
                infinite
                @click="selectImage(index)"
                :class="{ selected: index === selectedImageIndex }"
              >
                <q-carousel-slide
                  v-for="(image, index) in images"
                  :key="index"
                  :name="index + 1"
                  :img-src="image.url"
                />
              </q-carousel>
            </div>
          </q-card-section>
        </q-card>
        <div class="q-pa-md q-gutter-sm">
          <input
            type="file"
            @change="addImage"
            ref="fileInput"
            style="display: none"
          />
          <q-btn
            color="primary"
            icon="ion-add-circle"
            label="Agregar foto"
            @click="openFileInput"
          />
          <q-btn @click="removeImage" icon="delete" color="primary" />
        </div>
      </div>

      <div class="q-pa-md row items-start q-gutter-md justify-evenly">
        <q-card class="my-card col-sm-6 col-md-6 col-lg-6">
          <q-card-section>
            <q-card-section horizontal>
              <div col text-left text-weight-bold class="text-h6 q-pt-md">
                Estado:
              </div>
              <q-card-section>
                <q-option-group
                  v-model="group"
                  :options="options"
                  color="secondary"
                  inline
                />
              </q-card-section>
            </q-card-section>
            <q-card-section horizontal>
              <div col text-left text-weight-bold class="text-h6 q-pt-lg">
                Marca:
              </div>
              <q-card-section>
                <q-input
                  v-model="marca"
                  standout="bg-primary text-white"
                  class="q-pl-md"
                />
              </q-card-section>
            </q-card-section>
            <q-card-section horizontal>
              <div col text-left text-weight-bold class="text-h6 q-pt-lg">
                Modelo:
              </div>
              <q-card-section>
                <q-input
                  v-model="modelo"
                  standout="bg-primary text-white"
                  class="q-pl-sm"
                />
              </q-card-section>
            </q-card-section>
            <q-card-section horizontal>
              <div col text-left text-weight-bold class="text-h6 q-pt-lg">
                Pantalla:
              </div>
              <q-card-section>
                <q-input
                  v-model="pantalla"
                  type="number"
                  standout="bg-primary text-white"
                />
              </q-card-section>
              <div
                col
                text-left
                text-weight-bold
                class="text-subtitle1 q-pt-lg"
              >
                Pulgadas
              </div>
            </q-card-section>
            <q-card-section horizontal>
              <div col text-left text-weight-bold class="text-h6 q-pt-lg">
                Sistema:
              </div>
              <q-card-section>
                <q-select
                  v-model="sistema"
                  standout="bg-primary text-white"
                  :options="opcionesGrupo2"
                  class="q-pl-xs"
                />
              </q-card-section>
            </q-card-section>
            <q-card-section horizontal>
              <div col text-left text-weight-bold class="text-h6 q-pt-lg">
                Rom
              </div>
              <q-card-section>
                <q-input
                  v-model="rom"
                  type="number"
                  standout="bg-primary text-white"
                  class="q-pl-xl"
                  suffix="GB"
                />
              </q-card-section>
              <div
                col
                text-left
                text-weight-bold
                class="text-subtitle1 q-pt-lg"
              >
                Almacenamiento interno
              </div>
            </q-card-section>
            <q-card-section horizontal>
              <div col text-left text-weight-bold class="text-h6 q-pt-lg">
                Ram
              </div>
              <q-card-section>
                <q-input
                  v-model="ram"
                  type="number"
                  standout="bg-primary text-white"
                  class="q-pl-xl"
                  suffix="GB"
                />
              </q-card-section>
            </q-card-section>
          </q-card-section>
        </q-card>

        <!-- Puedes hacer esta sección una función y después solo la invoco?-->
        <div col text-left text-weight-bold class="entradas text-h6">
          Título breve del anuncio
          <q-input outlined bg-color="white primary" v-model="titulo" />
          Vendedor:
          <q-input outlined bg-color="white primary" v-model="vendedor" />
          Teléfono:
          <q-input outlined bg-color="white primary" v-model="telefono" />
          DESCRIPCIÓN
          <q-input
            v-model="textareaModel"
            filled
            bg-color="white"
            type="textarea"
            color="primary"
            :shadow-text="textareaShadowText"
            @keydown="processTextareaFill"
            @focus="processTextareaFill"
          />
          Precio:
          <q-input
            v-model="precio"
            type="number"
            outlined
            bg-color="white primary"
            prefix="$"
          />
          <div class="q-pa-md q-gutter-sm">
            <q-btn
              @click="mostrarDialogoCancelar"
              color="primary"
              icon="cancel"
              label="Cancelar"
            />
            <q-btn
              @click="mostrarDialogoGuardar"
              color="primary"
              icon="ion-save"
              label="Guardar"
            />
          </div>
          <q-dialog v-model="alert" ref="alertDialog">
            <q-card>
              <q-card-section> </q-card-section>

              <q-card-section class="q-pt-none">
                ¿Está seguro de que desea eliminar todos los campos?
              </q-card-section>

              <q-card-actions align="right">
                <q-btn flat label="OK" color="primary" @click="limpiarCampos" />
              </q-card-actions>
            </q-card>
          </q-dialog>

          <q-dialog v-model="confirm" ref="confirmDialog">
            <q-card>
              <q-card-section> </q-card-section>

              <q-card-section class="q-pt-none">
                ¿Está seguro de que desea guardar todos los cambios?
                <br />
                <strong>NOTA:</strong> Todos los campos deben estar completados,
                sino no se guardará el anuncio.
              </q-card-section>

              <q-card-actions align="right">
                <q-btn
                  flat
                  label="OK"
                  color="primary"
                  @click="agregarAnuncio"
                />
              </q-card-actions>
            </q-card>
          </q-dialog>
        </div>

        <q-card
          class="my-card col-12 col-md-8"
          flat
          bordered
          v-if="$q.screen.width >= 768"
        >
          <q-card-section horizontal>
            <q-card-section>
              <q-card-section
                class="q-col-sm-10 q-col-md-12 q-col-lg-6 q-mt-xl"
              >
                <q-card-section>
                  <input
                    type="file"
                    @change="addImage"
                    ref="fileInput"
                    style="display: none"
                  />
                  <q-btn
                    push
                    round
                    @click="openFileInput"
                    color="primary"
                    icon="add"
                    class="col-xs-2 col-sm-2 col-md-1 col-lg-1"
                  />
                </q-card-section>
                <q-card-section>
                  <q-btn
                    push
                    round
                    @click="removeImage"
                    color="primary"
                    icon="remove"
                    class="col-xs-2 col-sm-2 col-md-1 col-lg-1"
                  />
                </q-card-section>
              </q-card-section>
            </q-card-section>
            <q-card-section>
              <div class="q-pa-md">
                <q-markup-table
                  :separator="separator"
                  flat
                  bordered
                  class="q-col-md-4 q-col-lg-6"
                >
                  <thead>
                    <tr>
                      <th class="text-left">N</th>
                      <th class="text-right">Tamaño</th>
                      <th class="text-right">Tipo</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(image, index) in images"
                      :key="index"
                      @click="selectImage(index)"
                      :class="{ selected: index === selectedImageIndex }"
                    >
                      <td class="text-left">{{ index + 1 }}</td>
                      <td class="text-right">{{ getFileSize(image.size) }}</td>
                      <td class="text-right">{{ image.type }}</td>
                    </tr>
                  </tbody>
                </q-markup-table>
              </div>
            </q-card-section>
            <div
              class="col-5 q-my-lg q-mr-md q-mt-xl"
              @click="selectImage(index)"
              :class="{ selected: index === selectedImageIndex }"
            >
              <q-img v-if="selectedImageUrl" :src="selectedImageUrl" />
            </div>
          </q-card-section>
        </q-card>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue';
import { MainLayoutScript } from 'src/components/telefonos';
import { collection, addDoc } from 'firebase/firestore';
import { db, storage } from 'boot/firebase';
import {
  ref as refStorage,
  uploadBytes,
  getDownloadURL,
} from 'firebase/storage';
import { Loading } from 'quasar';

export default {
  setup() {
    const images = ref([]);
    const alert = ref(false);
    const confirm = ref(false);
    const selectedImageIndex = ref(null);
    const selectedImageUrl = ref(null);
    const slide = ref(1);
    const group = ref();
    const sistema = ref();
    const anunciosURL = ref([]);
    const mostrarDialogoCancelar = () => {
      alert.value = true;
    };
    const cerrarDialogoCancelar = () => {
      alert.value = false;
    };
    const mostrarDialogoGuardar = () => {
      confirm.value = true;
    };
    const cerrarDialogoGuardar = () => {
      confirm.value = false;
    };
    const options = [
      {
        label: 'Nuevo',
        value: 'Nuevo',
      },
      {
        label: 'Usado',
        value: 'Usado',
      },
    ];

    const addImage = (event) => {
      const files = event.target.files;
      if (files && files.length > 0) {
        const file = files[0];
        const newImage = {
          name: file.name,
          size: file.size,
          type: file.type,
          url: URL.createObjectURL(file),
        };
        images.value.push(newImage);
        selectedImageUrl.value = newImage.url;
      } else {
        console.error('No se han seleccionado archivos.');
      }
    };

    const selectImage = (index) => {
      selectedImageIndex.value = index;
      selectedImageUrl.value = images.value[index].url; // Maneja la selección de la imagen
    };

    const removeImage = () => {
      if (selectedImageIndex.value !== null) {
        images.value.splice(selectedImageIndex.value, 1); // Elimina la imagen seleccionada
        selectedImageIndex.value = null; // Reinicia la selección

        // Actualizar la imagen seleccionada
        if (images.value.length > 0) {
          // Verificar si hay imágenes restantes
          // Establecer la imagen seleccionada como la primera de la lista
          selectedImageIndex.value = 0;
          selectedImageUrl.value = images.value[0].url;
        } else {
          // Si no hay imágenes restantes, establecer la URL de la imagen seleccionada como nula
          selectedImageUrl.value = null;
        }
      }
    };

    const fileInput = ref(null);

    // Método para abrir el campo de entrada de archivo
    const openFileInput = () => {
      fileInput.value.click();
    };

    const { opcionesGrupo2 } = MainLayoutScript();
    const marca = ref('');
    const modelo = ref('');
    const pantalla = ref('');
    const rom = ref('');
    const ram = ref('');
    const separator = ref('None');

    // Variables para cada campo de entrada
    const titulo = ref('');
    const vendedor = ref('');
    const telefono = ref('');
    const precio = ref('');

    const textareaFillCancelled = ref(false);
    const textareaModel = ref('');
    const textareaShadowText = ref('');

    //const selectedSistema = ref(opcionesGrupo2[0].value);

    const processTextareaFill = (e) => {
      if (e === void 0) {
        return;
      }

      if (e.keyCode === 27) {
        if (textareaFillCancelled.value !== true) {
          textareaFillCancelled.value = true;
        }
      } else if (e.keyCode === 9) {
        if (
          textareaFillCancelled.value !== true &&
          textareaShadowText.value.length > 0
        ) {
          stopAndPrevent(e);
          textareaModel.value =
            (typeof textareaModel.value === 'string'
              ? textareaModel.value
              : '') + textareaShadowText.value;
        }
      } else if (textareaFillCancelled.value === true) {
        textareaFillCancelled.value = false;
      }
    };

    const limpiarCampos = () => {
      cerrarDialogoCancelar();
      images.value = [];
      titulo.value = '';
      vendedor.value = '';
      telefono.value = '';
      precio.value = '';
      textareaModel.value = '';
      rom.value = '';
      pantalla.value = '';
      ram.value = '';
      modelo.value = '';
      marca.value = '';
      sistema.value = null;
      group.value = null;
      selectedImageUrl.value = null;
      selectedImageIndex.value = null;
    };

    const agregarAnuncio = async () => {
      // Validar si los campos obligatorios están vacíos
      if (
        !titulo.value ||
        !vendedor.value ||
        !telefono.value ||
        !precio.value ||
        !textareaModel.value ||
        !rom.value ||
        !pantalla.value ||
        !ram.value ||
        !modelo.value ||
        !marca.value ||
        !sistema.value ||
        !group.value ||
        images.value.length === 0
      ) {
        // Mostrar un mensaje de error o realizar alguna acción
        console.error(
          'Todos los campos son obligatorios. Por favor, completa todos los campos.'
        );
        return; // Detener el proceso si hay campos vacíos
      }

      // Si todos los campos obligatorios están completos, continuar con la lógica para agregar el anuncio a la base de datos
      try {
        const docRef = await addDoc(collection(db, 'anuncios'), {
          titulo: titulo.value,
          vendedor: vendedor.value,
          numero: telefono.value,
          precio: precio.value,
          descripcion: textareaModel.value,
          Almacenamiento: rom.value,
          Tamaño: pantalla.value,
          os: sistema.value.value,
          ram: ram.value,
          modelo: modelo.value,
          marca: marca.value,
          estado: group.value,
          imagen: anunciosURL.value,
        });

        // Limpiar campos después de agregar el anuncio
        titulo.value = '';
        vendedor.value = '';
        telefono.value = '';
        precio.value = '';
        textareaModel.value = '';
        rom.value = '';
        pantalla.value = '';
        ram.value = '';
        modelo.value = '';
        marca.value = '';
        sistema.value = null;
        group.value = null;
        selectedImageUrl.value = null;
        selectedImageIndex.value = null;

        console.log('Documento escrito con ID: ', docRef.id);

        if (images.value && images.value.length > 0) {
          const storageRef = refStorage(
            storage,
            '/anuncios/' + docRef.id + '/'
          );

          images.value.forEach(async (image, index) => {
            try {
              const imageRef = refStorage(storageRef, `image_${index + 1}`);
              const file = await fetch(image.url);
              const blob = await file.blob();

              await uploadBytes(imageRef, blob);

              console.log('Imagen subida:', image.url);
              console.log(anunciosURL.value);
              cargarImagenes(docRef, imageRef);
              Loading.value = false;
            } catch (error) {
              console.error('Error al subir la imagen:', error);
            }
          });
        }
      } catch (e) {
        console.error('Error al agregar el documento:', e);
        Loading.value = false;
      }

      images.value = []; // Limpiar las imágenes
    };

    const cargarImagenes = async (docRef, imageRef) => {
      console.log('cargando imagenes');
      anunciosURL.value = [];

      // Obtener las URLs de las imágenes subidas
      images.value.forEach(async () => {
        try {
          const storageRef = refStorage(
            storage,
            `/anuncios/${docRef.id}/${imageRef.name}`
          );
          console.log('Hoy si paso aquí', imageRef.name);
          const url = await getDownloadURL(storageRef);
          anunciosURL.value.push(url);
          // En algún punto dentro de tu código
        } catch (error) {
          console.error('Error al obtener la URL de la imagen:', error);
          anunciosURL.value.push(''); // O manejo de error adecuado
        }
      });
    };

    const getFileSize = (sizeInBytes) => {
      if (sizeInBytes >= 1000000000) {
        return (sizeInBytes / 1000000000).toFixed(2) + ' GB';
      } else if (sizeInBytes >= 1000000) {
        return (sizeInBytes / 1000000).toFixed(2) + ' MB';
      } else if (sizeInBytes >= 1000) {
        return (sizeInBytes / 1000).toFixed(2) + ' KB';
      } else {
        return sizeInBytes + ' bytes';
      }
    };

    return {
      alert,
      confirm,
      mostrarDialogoGuardar,
      cerrarDialogoGuardar,
      mostrarDialogoCancelar,
      cerrarDialogoCancelar,
      anunciosURL,
      selectedImageUrl,
      limpiarCampos,
      fileInput,
      openFileInput,
      images,
      selectedImageIndex,
      addImage,
      selectImage,
      removeImage,
      slide,
      group,
      options,
      sistema,
      opcionesGrupo2,
      marca,
      modelo,
      pantalla,
      rom,
      ram,
      separator,
      titulo,
      vendedor,
      telefono,
      precio,
      textareaFillCancelled,
      textareaModel,
      textareaShadowText,
      processTextareaFill,
      agregarAnuncio,
      getFileSize,
    };
  },
};
</script>
