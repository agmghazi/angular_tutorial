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
        'esri/widgets/Search',
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
          Search,
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

          function buildPopupHOSPLayer(feature: any) {
            // console.log(feature.graphic.attributes.GOV_NAME);
            // console.log(feature.graphic.attributes);
            let DepartmentName_1;
            let EquipmentSystemCode_1;
            let EquipmentName_1;
            let region_1;
            let GovName_1;
            let CityName_1;
            let HospitalName_1;
            let EquipmentCondition_1;
            let EquipmentStatus_1;
            let EquipmentOrgin_1;
            let ManufacturerName_1;
            let VendorName_1;
            let EquipmentPurchaseCost_1;
            let EquipmentPurchaseDate_1;
            let EquipmentInstallDate_1;
            let EquipmentExpectedLifeTime_1;
            let EquipmentWarrantyExpiresDate_1;

            let DepartmentName_2;
            let EquipmentSystemCode_2;
            let EquipmentName_2;
            let region_2;
            let GovName_2;
            let CityName_2;
            let HospitalName_2;
            let EquipmentCondition_2;
            let EquipmentStatus_2;
            let EquipmentOrgin_2;
            let ManufacturerName_2;
            let VendorName_2;
            let EquipmentPurchaseCost_2;
            let EquipmentPurchaseDate_2;
            let EquipmentInstallDate_2;
            let EquipmentExpectedLifeTime_2;
            let EquipmentWarrantyExpiresDate_2;

            let DepartmentName_3;
            let EquipmentSystemCode_3;
            let EquipmentName_3;
            let region_3;
            let GovName_3;
            let CityName_3;
            let HospitalName_3;
            let EquipmentCondition_3;
            let EquipmentStatus_3;
            let EquipmentOrgin_3;
            let ManufacturerName_3;
            let VendorName_3;
            let EquipmentPurchaseCost_3;
            let EquipmentPurchaseDate_3;
            let EquipmentInstallDate_3;
            let EquipmentExpectedLifeTime_3;
            let EquipmentWarrantyExpiresDate_3;

            function getData(id: any) {
              hospitalData.forEach((element: any) => {
                if (element.HospitalName == id) {
                  if (element.DepartmentName == 'مبتسرين') {
                    console.log('departmant', element.DepartmentName);
                    EquipmentSystemCode_1 = element.EquipmentSystemCode;
                    EquipmentName_1 = element.EquipmentName;
                    region_1 = element.region;
                    GovName_1 = element.GovName;
                    CityName_1 = element.CityName;
                    HospitalName_1 = element.HospitalName;
                    EquipmentCondition_1 = element.EquipmentCondition;
                    EquipmentStatus_1 = element.EquipmentStatus;
                    DepartmentName_1 = element.DepartmentName;
                    EquipmentOrgin_1 = element.EquipmentOrgin;
                    ManufacturerName_1 = element.ManufacturerName;
                    VendorName_1 = element.VendorName;
                    EquipmentPurchaseCost_1 = element.EquipmentPurchaseCost;
                    EquipmentPurchaseDate_1 = element.EquipmentPurchaseDate;
                    EquipmentInstallDate_1 = element.EquipmentInstallDate;
                    EquipmentExpectedLifeTime_1 =
                      element.EquipmentExpectedLifeTime;
                    EquipmentWarrantyExpiresDate_1 =
                      element.EquipmentWarrantyExpiresDate;
                  } else if (element.DepartmentName == 'الغسيل الكلوي') {
                    EquipmentSystemCode_2 = element.EquipmentSystemCode;
                    EquipmentName_2 = element.EquipmentName;
                    region_2 = element.region;
                    GovName_2 = element.GovName;
                    CityName_2 = element.CityName;
                    HospitalName_2 = element.HospitalName;
                    EquipmentCondition_2 = element.EquipmentCondition;
                    EquipmentStatus_2 = element.EquipmentStatus;
                    DepartmentName_2 = element.DepartmentName;
                    EquipmentOrgin_2 = element.EquipmentOrgin;
                    ManufacturerName_2 = element.ManufacturerName;
                    VendorName_2 = element.VendorName;
                    EquipmentPurchaseCost_2 = element.EquipmentPurchaseCost;
                    EquipmentPurchaseDate_2 = element.EquipmentPurchaseDate;
                    EquipmentInstallDate_2 = element.EquipmentInstallDate;
                    EquipmentExpectedLifeTime_2 =
                      element.EquipmentExpectedLifeTime;
                    EquipmentWarrantyExpiresDate_2 =
                      element.EquipmentWarrantyExpiresDate;
                  } else if (element.DepartmentName == 'Physical Therapy') {
                    EquipmentSystemCode_3 = element.EquipmentSystemCode;
                    EquipmentName_3 = element.EquipmentName;
                    region_3 = element.region;
                    GovName_3 = element.GovName;
                    CityName_3 = element.CityName;
                    HospitalName_3 = element.HospitalName;
                    EquipmentCondition_3 = element.EquipmentCondition;
                    EquipmentStatus_3 = element.EquipmentStatus;
                    DepartmentName_3 = element.DepartmentName;
                    EquipmentOrgin_3 = element.EquipmentOrgin;
                    ManufacturerName_3 = element.ManufacturerName;
                    VendorName_3 = element.VendorName;
                    EquipmentPurchaseCost_3 = element.EquipmentPurchaseCost;
                    EquipmentPurchaseDate_3 = element.EquipmentPurchaseDate;
                    EquipmentInstallDate_3 = element.EquipmentInstallDate;
                    EquipmentExpectedLifeTime_3 =
                      element.EquipmentExpectedLifeTime;
                    EquipmentWarrantyExpiresDate_3 =
                      element.EquipmentWarrantyExpiresDate;
                  }
                }
              });
            }
            console.log('search name', feature.graphic.attributes.NAME);

            getData(feature.graphic.attributes.NAME);

            let div = document.createElement('div');
            div.innerHTML = `<div class="container">
            <div class="tab-wrap">

              <input type="radio" id="tab1" name="tabGroup1" class="tab">
              <label for="tab1">GIS Data</label>

              <input type="radio" id="tab2" name="tabGroup1" class="tab" checked>
              <label for="tab2">مبتسرين</label>

              <input type="radio" id="tab3" name="tabGroup1" class="tab">
              <label for="tab3">الغسيل الكلوي</label>

              <input type="radio" id="tab4" name="tabGroup1" class="tab">
              <label for="tab4">Physical Therapy</label>



              <div class="tab__content">
                <table class="popupTableInfo">
                  <tr>
                    <td>المحافظة</td>
                    <td>${feature.graphic.attributes.GOV_NAME}</td>
                  </tr>

                  <tr>
                    <td>المركز</td>
                    <td>${feature.graphic.attributes.MARKAZ}</td>
                  </tr>

                  <tr>
                    <td>المدينة</td>
                    <td>${feature.graphic.attributes.EDARA_NAME}</td>
                  </tr>

                  <tr>
                    <td>العنوان</td>
                    <td>${feature.graphic.attributes.ADDRESS}</td>
                  </tr>

                  <tr>
                    <td>HOSP_CODE</td>
                    <td>${feature.graphic.attributes.HOSP_CODE}</td>
                  </tr>

                  <tr>
                    <td>GOV_CODE</td>
                    <td>${feature.graphic.attributes.GOV_CODE}</td>
                  </tr>

                  <tr>
                    <td>EDARA_CODE</td>
                    <td>${feature.graphic.attributes.EDARA_CODE}</td>
                  </tr>

                  <tr>
                    <td>code</td>
                    <td>${feature.graphic.attributes.NAME}</td>
                  </tr>
                </table>
              </div>

              <div class="tab__content">
                <table class="popupTableInfo">
                  <tr>
                    <td>DepartmentName</td>
                    <td>${DepartmentName_1}</td>
                  </tr>

                  <tr>
                    <td>EquipmentSystemCode</td>
                    <td>${EquipmentSystemCode_1}</td>
                  </tr>

                  <tr>
                    <td>EquipmentName</td>
                    <td>${EquipmentName_1}</td>
                  </tr>

                  <tr>
                    <td>region</td>
                    <td>${region_1}</td>
                  </tr>

                  <tr>
                    <td>GovName</td>
                    <td>${GovName_1}</td>
                  </tr>

                  <tr>
                    <td>CityName</td>
                    <td>${CityName_1}</td>
                  </tr>

                  <tr>
                    <td>HospitalName</td>
                    <td>${HospitalName_1}</td>
                  </tr>


                  <tr>
                    <td>EquipmentCondition</td>
                    <td>${EquipmentCondition_1}</td>
                  </tr>

                  <tr>
                    <td>EquipmentOrgin</td>
                    <td>${EquipmentOrgin_1}</td>
                  </tr>

                  <tr>
                  <td>ManufacturerName</td>
                  <td>${ManufacturerName_1}</td>
                </tr>

                <tr>
                <td>VendorName</td>
                <td>${VendorName_1}</td>
              </tr>

              <tr>
              <td>EquipmentPurchaseCost</td>
              <td>${EquipmentPurchaseCost_1}</td>
            </tr>


            <tr>
            <td>EquipmentPurchaseDate</td>
            <td>${EquipmentPurchaseDate_1}</td>
            </tr>

            <tr>
            <td>EquipmentInstallDate</td>
            <td>${EquipmentInstallDate_1}</td>
            </tr>

            <tr>
            <td>EquipmentExpectedLifeTime</td>
            <td>${EquipmentExpectedLifeTime_1}</td>
            </tr>

            <tr>
            <td>EquipmentWarrantyExpiresDate</td>
            <td>${EquipmentWarrantyExpiresDate_1}</td>
            </tr>


                </table>
              </div>

              <div class="tab__content">

                <table class="popupTableInfo">
                <tr>
                <td>DepartmentName</td>
                <td>${DepartmentName_2}</td>
              </tr>

              <tr>
                <td>EquipmentSystemCode</td>
                <td>${EquipmentSystemCode_2}</td>
              </tr>

              <tr>
                <td>EquipmentName</td>
                <td>${EquipmentName_2}</td>
              </tr>

              <tr>
                <td>region</td>
                <td>${region_2}</td>
              </tr>

              <tr>
                <td>GovName</td>
                <td>${GovName_2}</td>
              </tr>

              <tr>
                <td>CityName</td>
                <td>${CityName_2}</td>
              </tr>

              <tr>
                <td>HospitalName</td>
                <td>${HospitalName_2}</td>
              </tr>


              <tr>
                <td>EquipmentCondition</td>
                <td>${EquipmentCondition_2}</td>
              </tr>

              <tr>
                <td>EquipmentOrgin</td>
                <td>${EquipmentOrgin_2}</td>
              </tr>

              <tr>
              <td>ManufacturerName</td>
              <td>${ManufacturerName_2}</td>
            </tr>

            <tr>
            <td>VendorName</td>
            <td>${VendorName_2}</td>
          </tr>

          <tr>
          <td>EquipmentPurchaseCost</td>
          <td>${EquipmentPurchaseCost_2}</td>
        </tr>


        <tr>
        <td>EquipmentPurchaseDate</td>
        <td>${EquipmentPurchaseDate_2}</td>
        </tr>

        <tr>
        <td>EquipmentInstallDate</td>
        <td>${EquipmentInstallDate_2}</td>
        </tr>

        <tr>
        <td>EquipmentExpectedLifeTime</td>
        <td>${EquipmentExpectedLifeTime_2}</td>
        </tr>

        <tr>
        <td>EquipmentWarrantyExpiresDate</td>
        <td>${EquipmentWarrantyExpiresDate_2}</td>
        </tr>

                </table>
              </div>


              <div class="tab__content">

              <table class="popupTableInfo">
              <tr>
              <td>DepartmentName</td>
              <td>${DepartmentName_3}</td>
            </tr>

            <tr>
              <td>EquipmentSystemCode</td>
              <td>${EquipmentSystemCode_3}</td>
            </tr>

            <tr>
              <td>EquipmentName</td>
              <td>${EquipmentName_3}</td>
            </tr>

            <tr>
              <td>region</td>
              <td>${region_3}</td>
            </tr>

            <tr>
              <td>GovName</td>
              <td>${GovName_3}</td>
            </tr>

            <tr>
              <td>CityName</td>
              <td>${CityName_3}</td>
            </tr>

            <tr>
              <td>HospitalName</td>
              <td>${HospitalName_3}</td>
            </tr>


            <tr>
              <td>EquipmentCondition</td>
              <td>${EquipmentCondition_3}</td>
            </tr>

            <tr>
              <td>EquipmentOrgin</td>
              <td>${EquipmentOrgin_3}</td>
            </tr>

            <tr>
            <td>ManufacturerName</td>
            <td>${ManufacturerName_3}</td>
          </tr>

          <tr>
          <td>VendorName</td>
          <td>${VendorName_3}</td>
        </tr>

        <tr>
        <td>EquipmentPurchaseCost</td>
        <td>${EquipmentPurchaseCost_3}</td>
      </tr>


      <tr>
      <td>EquipmentPurchaseDate</td>
      <td>${EquipmentPurchaseDate_3}</td>
      </tr>

      <tr>
      <td>EquipmentInstallDate</td>
      <td>${EquipmentInstallDate_3}</td>
      </tr>

      <tr>
      <td>EquipmentExpectedLifeTime</td>
      <td>${EquipmentExpectedLifeTime_3}</td>
      </tr>

      <tr>
      <td>EquipmentWarrantyExpiresDate</td>
      <td>${EquipmentWarrantyExpiresDate_3}</td>
      </tr>

              </table>
            </div>
            </div>
          </div>
          `;
            return div;
          }

          var popupHOSPLayer = {
            title: '{AR_NAME}',
            content: buildPopupHOSPLayer,
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
            position: 'bottom-right',
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

          var searchWidget = new Search({
            view: view,
            allPlaceholder: 'البحث باسم المدينة',
            sources: [
              {
                layer: HOSPLayer,
                searchFields: ['AR_NAME'],
                displayField: 'AR_NAME',
                exactMatch: false,
                outFields: ['AR_NAME'],
                name: 'البحث باسم المستشفى',
                placeholder: 'البحث باسم المستشفى',
                popupEnabled: false,
              },
            ],
          });

          // Add the search widget to the top left corner of the view
          view.ui.add(searchWidget, {
            position: 'top-right',
          });
        }
      )
      .catch((err) => {
        // handle any errors
        console.error(err);
      });
  }
}
