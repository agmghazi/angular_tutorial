import { Component, OnInit } from '@angular/core';
import { loadModules } from 'esri-loader';
import { setDefaultOptions } from 'esri-loader';
import '../assets/Data/data.json';
import * as Jsondata from '../assets/Data/data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let hospitalData: any = (Jsondata as any).default;

    function getData(id: any) {
      hospitalData.forEach((element: any) => {
        if (element.HospitalName == id) {
          for (let i = 0; i < element.length; i++) {
            console.log(element[i]);
          }
        }
      });
    }

    getData('98 hospital');
    
    let name = 'ahmed';

    setDefaultOptions({ version: '4.18' });

    const options = {
      css: true,
      insertCssBefore: 'style',
    };
    loadModules(
      [
        'esri/views/MapView',
        'esri/Map',
        'esri/layers/FeatureLayer',
        'esri/widgets/BasemapToggle',
        'esri/widgets/Compass',
        'esri/widgets/Home',
        'esri/widgets/ScaleBar',
        'esri/Graphic',
      ],
      options
    )
      .then(
        ([
          MapView,
          Map,
          FeatureLayer,
          BasemapToggle,
          Compass,
          Home,
          ScaleBar,
          Graphic,
        ]) => {
          //#region HOSPLayer(Point)
          var HOSPLayerSymbol = {
            type: 'simple',
            symbol: {
              type: 'picture-marker',
              url:
                'https://upload.wikimedia.org/wikipedia/commons/1/18/Hospital_pointer.png',
              width: '30px',
              height: '30px',
            },
          };
          4;
          var HOSPLayerLabel = {
            symbol: {
              type: 'text',
              color: 'red',
              haloColor: 'white',
              haloSize: '1.5px',
              font: {
                size: '12px',
                // style: 'italic',
                weight: 'normal',
              },
            },
            labelPlacement: 'above-center',
            labelExpressionInfo: {
              expression: '$feature.AR_NAME',
            },
          };

          var popupHOSPLayer = {
            title: '{AR_NAME}',
            content: `<table class="popupTableInfo">
          <tr>
          <td>المحافظة</td>
          <td>{GOV_NAME}</td>
          </tr>

          <tr>
          <td>المركز</td>
          <td>{MARKAZ}</td>
          </tr>

          <tr>
          <td>المدينة</td>
          <td>{EDARA_NAME}</td>
          </tr>

          <tr>
          <td>العنوان</td>
          <td>{ADDRESS}</td>
          </tr>

          <tr>
          <td>HOSP_CODE</td>
          <td>{HOSP_CODE}</td>
          </tr>

          <tr>
          <td>GOV_CODE</td>
          <td>{GOV_CODE}</td>
          </tr>

          <tr>
          <td>EDARA_CODE</td>
          <td>{EDARA_CODE}</td>
          </tr>


          <tr>
          <td>EDARA_CODE</td>
          <td>${name}</td>
          </tr>
        </table>

        <p> البيانات الوصفية المرتبطة ب {AR_NAME}</p>
        `,
          };

          const HOSPLayer = new FeatureLayer({
            url:
              'https://services9.arcgis.com/vpYrvEKDJvmCwoQX/ArcGIS/rest/services/new_Health_gdb/FeatureServer/0',
            popupEnabled: true,
            renderer: HOSPLayerSymbol,
            labelingInfo: [HOSPLayerLabel],
            popupTemplate: popupHOSPLayer,
            // popupTemplate: {
            //   title: '{AR_NAME}',
            //   content: [
            //     {
            //       type: 'fields', // FieldsContentElement
            //       fieldInfos: [
            //         {
            //           fieldName: 'GOV_NAME',
            //           label: 'المحافظة',
            //         },
            //         {
            //           fieldName: 'MARKAZ',
            //           visible: true,
            //           label: 'المركز',
            //         },
            //         {
            //           fieldName: 'EDARA_NAME',
            //           label: 'المدينة',
            //         },
            //         {
            //           fieldName: 'ADDRESS',
            //           visible: true,
            //           label: 'العنوان',
            //         },
            //         {
            //           fieldName: 'HOSP_CODE',
            //           visible: true,
            //           label: 'HOSP_CODE',
            //         },
            //         {
            //           fieldName: 'GOV_CODE',
            //           visible: true,
            //           label: 'GOV_CODE',
            //         },
            //         {
            //           fieldName: 'EDARA_CODE',
            //           visible: true,
            //           label: 'EDARA_CODE',
            //         },
            //       ],
            //     },
            //     {
            //       type: 'text', // TextContentElement
            //       text:
            //         ' البيانات الوصفية المرتبطة ب {AR_NAME}',
            //     },
            //     {
            //       type: 'fields', // MediaContentElement
            //       fieldInfos: [
            //         {
            //           title: '<b>Count by type</b>',
            //           type: 'pie-chart',
            //           caption: '',
            //           value: {
            //             fields: ['relationships/0/Point_Count_COMMON'],
            //             normalizeField: null,
            //             tooltipField: 'relationships/0/COMMON',
            //           },
            //         },
            //         {
            //           title: '<b>Mexican Fan Palm</b>',
            //           type: 'image',
            //           caption: 'tree species',
            //           value: {
            //             sourceURL:
            //               'https://www.sunset.com/wp-content/uploads/96006df453533f4c982212b8cc7882f5-800x0-c-default.jpg',
            //           },
            //         },
            //         {
            //           title: '<b>Indian Laurel Fig</b>',
            //           caption: 'tree species',
            //           value: {
            //             sourceURL:
            //               'https://selectree.calpoly.edu/images/0600/09/original/ficus-microcarpa-tree-3.jpg',
            //           },
            //         },
            //       ],
            //     },
            //     {
            //       // You can set a attachment element(s) within the popup as well.
            //       // Similar to text and media elements, attachments can only be set
            //       // within the content. Any attachmentInfos associated with the feature
            //       // will be listed in the popup.
            //       type: 'attachments', // AttachmentsContentElement
            //     },
            //   ],
            // },
            outFields: ['*'],
          });
          //#endregion

          //#region GOVLayer
          var popupGOVLayer = {
            title: '{Gov_name_E}',
            content: `<table class="popupTableInfo">
          <tr>
          <td>اسم المحافظة</td>
          <td>{اسم_ا}</td>
          </tr>
        </table>`,
          };

          let GOVLayerSymbol = {
            type: 'simple',
            symbol: {
              type: 'simple-fill',
              color: [255, 255, 0, 0.7],
              style: 'backward-diagonal',
              outline: {
                width: 1,
                color: [255, 255, 0, 0.7],
                style: 'solid',
              },
            },
          };
          const GOVLayer = new FeatureLayer({
            url:
              'https://services9.arcgis.com/vpYrvEKDJvmCwoQX/ArcGIS/rest/services/new_Health_gdb/FeatureServer/2',
            outFields: ['*'],
            renderer: GOVLayerSymbol,
            popupEnabled: true,
            popupTemplate: popupGOVLayer,
          });
          //#endregion

          //#region ADMINLayer
          var popupADMINLayer = {
            title: '{EDARA_NAME}',
            content: `<table class="popupTableInfo">
          <tr>
          <td>TOTAL_POPU</td>
          <td>{TOTAL_POPU}</td>
          </tr>

          <tr>
          <td>HEALTH1_SP</td>
          <td>{HEALTH1_SP}</td>
          </tr>

          <tr>
          <td>DENSITY</td>
          <td>{DENSITY}</td>
          </tr>
        </table>`,
          };

          let ADMINLayerSymbol = {
            type: 'simple',
            symbol: {
              type: 'simple-fill',
              color: [133, 160, 214, 0.7],
              style: 'solid',
              outline: {
                width: 1,
                color: [133, 160, 214, 0.7],
                style: 'solid',
              },
            },
          };
          const ADMINLLayer = new FeatureLayer({
            url:
              'https://services9.arcgis.com/vpYrvEKDJvmCwoQX/ArcGIS/rest/services/new_Health_gdb/FeatureServer/3',
            outFields: ['*'],
            renderer: ADMINLayerSymbol,
            popupEnabled: true,
            popupTemplate: popupADMINLayer,
          });
          //#endregion

          //#region SHAYAKALayer
          var popupSHAYAKALayer = {
            title: '{GOV_NAME}',
            content: `<table class="popupTableInfo">
          <tr>
          <td>GOV_CODE</td>
          <td>{GOV_CODE}</td>
          </tr>

          <tr>
          <td>SEC_NAME</td>
          <td>{SEC_NAME}</td>
          </tr>

          <tr>
          <td>SSEC_NAME</td>
          <td>{SSEC_NAME}</td>
          </tr>
        </table>`,
          };
          let SHAYAKALayerSymbol = {
            type: 'simple',
            symbol: {
              type: 'simple-fill',
              color: [209, 117, 136, 0.7],
              style: 'solid',
              outline: {
                width: 1,
                color: [209, 117, 136, 0.7],
                style: 'solid',
              },
            },
          };
          const SHAYAKALayer = new FeatureLayer({
            url:
              'https://services9.arcgis.com/vpYrvEKDJvmCwoQX/ArcGIS/rest/services/new_Health_gdb/FeatureServer/4',
            outFields: ['*'],
            renderer: SHAYAKALayerSymbol,
            popupEnabled: true,
            popupTemplate: popupSHAYAKALayer,
          });
          //#endregion

          // then we load a web map from an id
          var map = new Map({
            basemap: 'satellite',
          });
          map.addMany([GOVLayer, ADMINLLayer, SHAYAKALayer, HOSPLayer]);
          // and we show that map in a container w/ id #viewDiv
          var view = new MapView({
            map: map,
            container: 'viewDiv',
            center: [31.31652832030437, 30.417887641063995],
            zoom: 8,
            popup: {
              dockEnabled: true,
              dockOptions: {
                buttonEnabled: true,
                breakpoint: {
                  width: 600,
                  height: 1000,
                },
                position: 'top-left',
              },
            },
          });

          (window as any).view = view;

          //widgets
          var basemapToggle = new BasemapToggle({
            view: view,
            nextBasemap: 'streets',
          });

          view.ui.add(basemapToggle, {
            position: 'top-right',
          });

          var compass = new Compass({
            view: view,
          });

          view.ui.add(compass, 'top-left');

          var homeWidget = new Home({
            view: view,
          });

          view.ui.add(homeWidget, 'top-left');

          var scaleBar = new ScaleBar({
            view: view,
            style: 'ruler',
            unit: 'metric',
          });
          view.ui.add(scaleBar, {
            position: 'bottom-left',
          });
        }
      )
      .catch((err) => {
        // handle any errors
        console.error(err);
      });
  }
}
