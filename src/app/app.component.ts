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
  hospitalDataSelected: any = 1;

  constructor() {}

  ngOnInit(): void {
    let hospitalData = (Jsondata as any).default;
    // console.log(this.hospitalData);

    // this.hospitalData.forEach((element: any) => {
    //   if (element.hosptialCode==this.hospitalDataSelected) {
    //   console.log(element);

    //   }
    //    })

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
            console.log('search code', feature.graphic.attributes.HOSP_CODE);

            let ContainerDiv = document.createElement('div');
            ContainerDiv.innerHTML = `<div class="container">    </div>`;

            let gisData = document.createElement('div');
            gisData.innerHTML = ` <table class="popupTableInfo">
                  <tr>
                    <td>اسم المستشفى </td>
                    <td>${feature.graphic.attributes.AR_NAME}</td>
                  </tr>

                  <tr>
                    <td>المحافظة</td>
                    <td>${feature.graphic.attributes.GOV_NAME}</td>
                  </tr>

                  <tr>
                    <td>المدينة</td>
                    <td>${feature.graphic.attributes.EDARA_NAME}</td>
                  </tr>

                </table>
              </br>`;

            let tabWrap = document.createElement('div');
            tabWrap.innerHTML = `
            <h5 style="float:right">الأقسام</h5>
            </br>
            </br>
            `;

            ContainerDiv.appendChild(gisData);
            let arr: any = [];
            hospitalData.forEach((element: any) => {
              if (
                element.hosptialCode == feature.graphic.attributes.HOSP_CODE
              ) {
                // console.log(element);
                arr.push(element.DepartmentName);
                // console.log(arr);
              }
            });

            function removeDup(arr: any) {
              let result: any = [];
              arr.forEach((item: any, index: any) => {
                if (arr.indexOf(item) == index) result.push(item);
              });
              return result;
            }

            let ar = removeDup(arr);
            ar.forEach((ele: any, index: any) => {
              let department = document.createElement('div');
              department.innerHTML = `
              </br>
              <input type="radio" id="tab${index}"  name="tabGroup${index}" class="tab">
              <label for="tab${index}"  style="font-weight: bolder;">${ele}</label>
              `;
              tabWrap.appendChild(department);

              let deviceTable = document.createElement('table');
              deviceTable.classList.add('popupTableInfo');

              let divDevicesTrTH = document.createElement('tr');

              let diviceNameTh = document.createElement('th');
              diviceNameTh.textContent = 'اسم الجهاز';

              let diviceThDate = document.createElement('th');
              diviceThDate.textContent = 'تاريخ التركيب';

              let diviceFact = document.createElement('th');
              diviceFact.textContent = 'المصنع';

              let divicePrice = document.createElement('th');
              divicePrice.textContent = 'السعر';

              deviceTable.appendChild(divDevicesTrTH);

              hospitalData.forEach((element: any) => {
                if (
                  element.hosptialCode ==
                    feature.graphic.attributes.HOSP_CODE &&
                  element.DepartmentName == ele
                ) {
                  console.log(
                    element.hosptialCode +
                      ' _' +
                      ele +
                      ' _' +
                      element.EquipmentName
                  );

                  let divDevicesTrBody = document.createElement('tr');

                  let divDevicesTdNameValue = document.createElement('td');
                  divDevicesTdNameValue.textContent = element.EquipmentName;

                  let diviceTdDate = document.createElement('td');
                  diviceTdDate.textContent = element.EquipmentInstallDate;

                  let divicetdFact = document.createElement('td');
                  divicetdFact.textContent = element.ManufacturerName;

                  let diviceTdPrice = document.createElement('td');
                  diviceTdPrice.textContent = 'لا يوجد';

                  divDevicesTrTH.appendChild(diviceNameTh);
                  divDevicesTrTH.appendChild(diviceThDate);
                  divDevicesTrTH.appendChild(diviceFact);
                  divDevicesTrTH.appendChild(divicePrice);

                  divDevicesTrBody.appendChild(divDevicesTdNameValue);
                  divDevicesTrBody.appendChild(diviceTdDate);
                  divDevicesTrBody.appendChild(divicetdFact);
                  divDevicesTrBody.appendChild(diviceTdPrice);

                  deviceTable.appendChild(divDevicesTrBody);

                  tabWrap.appendChild(deviceTable);
                }
              });
            });

            ContainerDiv.appendChild(tabWrap);

            return ContainerDiv;
          }

          var popupHOSPLayer = {
            title: '{ADDRESS}',
            content: buildPopupHOSPLayer,
          };

          const HOSPLayer = new FeatureLayer({
            url:
              'https://services9.arcgis.com/vpYrvEKDJvmCwoQX/ArcGIS/rest/services/new_NHealth_gdb/FeatureServer/0',
            popupEnabled: true,
            renderer: HOSPLayerSymbol,
            labelingInfo: [HOSPLayerLabel],
            popupTemplate: popupHOSPLayer,

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
              'https://services9.arcgis.com/vpYrvEKDJvmCwoQX/ArcGIS/rest/services/new_NHealth_gdb/FeatureServer/2',
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
          <td>إجمالى السكان</td>
          <td>{TOTAL_POPU}</td>
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
              'https://services9.arcgis.com/vpYrvEKDJvmCwoQX/ArcGIS/rest/services/new_NHealth_gdb/FeatureServer/3',
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
          <tr>
          <td>القسم</td>
          <td>{SEC_NAME}</td>
          </tr>

          <tr>
          <td>الشياخة</td>
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
              'https://services9.arcgis.com/vpYrvEKDJvmCwoQX/ArcGIS/rest/services/new_NHealth_gdb/FeatureServer/4',
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
