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
        'esri/tasks/RouteTask',
        'esri/tasks/support/RouteParameters',
        'esri/tasks/support/FeatureSet',
        'esri/config',
        'esri/geometry/geometryEngine',
        'esri/layers/GraphicsLayer',
        'esri/geometry/Point',
        'esri/tasks/QueryTask',
        'esri/tasks/support/Query',
        'esri/tasks/support/DistanceParameters',
        'esri/tasks/GeometryService',
        'esri/geometry/support/geodesicUtils',
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
          RouteTask,
          RouteParameters,
          FeatureSet,
          esriConfig,
          geometryEngine,
          GraphicsLayer,
          Point,
          QueryTask,
          Query,
          DistanceParameters,
          GeometryService,
          geodesicUtils,
        ]) => {
          //#region HOSPLayer(Point)
          const unit = 'kilometers';

          const apiKey =
            'AAPK3dec25c93f77440089acb335a76a63aeRp1-RNQrf3ZDSmSdPcr0qALRsafRK1ieC5iBM7mNBcmj30-BjG0Bucuu5kwLCkLV';

          esriConfig.apiKey = apiKey;

          // Create layers
          const bufferLayer = new GraphicsLayer({
            blendMode: 'hard-light',
          });
          (window as any)._bufferLayer = bufferLayer;
          var HOSPLayerSymbol = {
            type: 'simple',
            symbol: {
              type: 'picture-marker',
              url: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Hospital_pointer.png',
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
                  divDevicesTdNameValue.addEventListener('click', function () {
                    console.log((window as any).view.popup.selectedFeature);

                    var enterNumOfBuffer = prompt(
                      ' يرجي ادخال قيمه الحرم المراد البحث بداخله بالكيلومتر',
                      '100'
                    );
                    if (enterNumOfBuffer == null || enterNumOfBuffer == '') {
                      console.log('not enter any data from prompt');
                    } else {
                      let numBuffer = parseInt(enterNumOfBuffer);
                      if (isNaN(numBuffer)) {
                        alert(' يرجي ادخال رقم باللغه الانجليزيه');
                      } else {
                        // alert(numBuffer);

                        // createBuffer(
                        //   (window as any).view.popup.selectedFeature.geometry,
                        //   numBuffer
                        // );
                        view.graphics.removeAll();
                        bufferLayer.removeAll();
                        createBuffer(
                          (window as any).view.popup.selectedFeature.geometry,
                          numBuffer
                        );

                        let queryTaskS = new QueryTask({
                          url: 'https://services9.arcgis.com/vpYrvEKDJvmCwoQX/ArcGIS/rest/services/new_NHealth_gdb/FeatureServer/0',
                        });
                        let queryS = new Query();

                        queryS.geometry = (
                          window as any
                        )._bufferLayer.graphics.items[0].geometry;
                        queryS.spatialRelationship = 'contains';
                        queryS.returnGeometry = true;
                        queryS.outFields = ['*'];
                        queryS.spatialRelationship = 'intersects';
                        queryS.returnDistinctValues = true;
                        queryS.returnQueryGeometry = true;

                        queryTaskS.execute(queryS).then((results: any) => {
                          console.log('results', results);

                          const join = geodesicUtils.geodesicDistance(
                            new Point({
                              x: (window as any).view.popup.selectedFeature
                                .geometry.longitude,
                              y: (window as any).view.popup.selectedFeature
                                .geometry.latitude,
                            }),
                            new Point({
                              x: results.features[0].geometry.longitude,
                              y: results.features[0].geometry.latitude,
                            }),
                            'kilometers'
                          );
                          const { distance, azimuth } = join;

                          console.log(
                            'Distance: ',
                            distance,
                            ', Direction: ',
                            azimuth
                          );

                          let latitude = Number(
                            (window as any).view.popup.selectedFeature.geometry
                              .latitude
                          ); // The Number() only visualizes the type and is not needed
                          let roundedlatitude = latitude.toFixed(3);
                          let rounlatitude = Number(roundedlatitude); // toFixed() returns a string (often suitable for printing already)
                          console.log('rounded', rounlatitude);

                          let longitude = Number(
                            (window as any).view.popup.selectedFeature.geometry
                              .longitude
                          ); // The Number() only visualizes the type and is not needed
                          let roundedlongitude = longitude.toFixed(3);
                          let rounlongitude = Number(roundedlongitude); // toFixed() returns a string (often suitable for printing already)
                          console.log('rounded', rounlongitude);

                          //second point
                          let latitude2 = Number(
                            results.features[0].geometry.latitude
                          ); // The Number() only visualizes the type and is not needed
                          let roundedlatitude2 = latitude2.toFixed(3);
                          let rounlatitude2 = Number(roundedlatitude2); // toFixed() returns a string (often suitable for printing already)
                          console.log('rounded', rounlatitude2);

                          let longitude2 = Number(
                            results.features[0].geometry.longitude
                          ); // The Number() only visualizes the type and is not needed
                          let roundedlongitude2 = longitude2.toFixed(3);
                          let rounlongitude2 = Number(roundedlongitude2); // toFixed() returns a string (often suitable for printing already)
                          console.log('rounded', rounlongitude2);

                          if (
                            rounlatitude === rounlatitude2 ||
                            rounlongitude === rounlongitude2
                          ) {
                            console.log('point 1 = point 2 , fix it');

                            getRoute(
                              (window as any).view.popup.selectedFeature
                                .geometry,
                              results.features[1].geometry
                            );
                          } else {
                            getRoute(
                              (window as any).view.popup.selectedFeature
                                .geometry,
                              results.features[0].geometry
                            );
                          }
                        });

                        function createBuffer(point: any, length: any) {
                          // buffer
                          const buffer = geometryEngine.geodesicBuffer(
                            point,
                            length,
                            unit
                          );

                          let bufferGraphic = new Graphic({
                            geometry: buffer,
                            symbol: {
                              type: 'simple-fill',
                              color: [81.6, 11.8, 11.8, 0.3],
                              outline: {
                                color: '#FFEB00',
                                width: 2,
                              },
                            },
                          });

                          // Update the buffer polygon
                          bufferGraphic.geometry = buffer;

                          // Create a symbol for drawing the point
                          var textSymbol = {
                            type: 'text', // autocasts as new TextSymbol()
                            color: '#77d01e',
                            text: length + ' km ',
                            labelPlacement: 'above-left',
                            xoffset: 30,
                            yoffset: 30,
                            font: {
                              // autocasts as new Font()
                              size: 30,
                              // family: "CalciteWebCoreIcons"
                            },
                          };

                          // Create a graphic and add the geometry and symbol to it
                          var LineGraphic = new Graphic({
                            geometry: point,
                            symbol: textSymbol,
                          });

                          bufferLayer.addMany([bufferGraphic, LineGraphic]);
                        }
                      }

                      function createLineText(text: any, geometry: any) {
                        var midIndex = Math.round(geometry.paths[0].length / 2);
                        console.log('midIndex', midIndex);
                        console.log('geometry.paths', geometry.paths);

                        var midPoint = new Point({
                          x: geometry.paths[0][midIndex][0],
                          y: geometry.paths[0][midIndex][1],
                          spatialReference: geometry.spatialReference,
                        });

                        // Create a symbol for drawing the point
                        var textSymbol = {
                          type: 'text', // autocasts as new TextSymbol()
                          color: '#f01313',
                          text: text + ' km ',
                          labelPlacement: 'above-left',
                          haloColor: 'black',
                          haloSize: '1px',
                          font: {
                            // autocasts as new Font()
                            size: 30,
                            // family: "CalciteWebCoreIcons"
                          },
                        };

                        // const polyline = {
                        //   type: "polyline", // autocasts as new Polyline()
                        //   paths: geometry
                        // };
                        // Create a graphic and add the geometry and symbol to it
                        var textGraphic = new Graphic({
                          geometry: midPoint,
                          symbol: textSymbol,
                        });
                        view.graphics.add(textGraphic);
                      }

                      function getRoute(geo1: any, geo2: any) {
                        const routeTask = new RouteTask({
                          url: 'https://route-api.arcgis.com/arcgis/rest/services/World/Route/NAServer/Route_World',
                        });

                        const routeParams = new RouteParameters({
                          stops: new FeatureSet({
                            features: [
                              new Graphic({
                                geometry: geo1,
                              }),
                              new Graphic({
                                geometry: geo2,
                              }),
                            ],
                          }),
                          returnDirections: true,
                          directionsLanguage: 'es',
                        });
                        routeTask
                          .solve(routeParams)
                          .then((data: any) => {
                            if (data.routeResults.length > 0) {
                              console.log('data', data);
                              console.log(
                                'Total_Kilometers',
                                data.routeResults[0].route.attributes
                                  .Total_Kilometers
                              );
                              console.log(
                                'path',
                                data.routeResults[0].route.geometry.paths
                              );

                              let numLine = Number(
                                data.routeResults[0].route.attributes
                                  .Total_Kilometers
                              ); // The Number() only visualizes the type and is not needed
                              let roundedLine = numLine.toFixed(4);
                              let roundedNum = Number(roundedLine); // toFixed() returns a string (often suitable for printing already)

                              createLineText(
                                roundedNum,
                                data.routeResults[0].route.geometry
                              );

                              showRoute(data.routeResults[0].route);
                              setTimeout(() => {
                                (window as any).view.goTo({
                                  target: (window as any).view.popup
                                    .selectedFeature.geometry,
                                  zoom: 9,
                                });
                              }, 1000);
                            }
                          })
                          .catch((error: any) => {
                            console.log(error);
                          });
                      }

                      function showRoute(routeResult: any) {
                        routeResult.symbol = {
                          type: 'simple-line',
                          color: [5, 150, 255],
                          width: 3,
                        };
                        view.graphics.add(routeResult, 0);
                      }
                    }
                    // hospitalData.forEach((element: any) => {
                    //   if (
                    //     element.hosptialCode ==
                    //     feature.graphic.attributes.HOSP_CODE
                    //   ) {
                    //     console.log(element);
                    //   }
                    // });
                  });
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
            url: 'https://services9.arcgis.com/vpYrvEKDJvmCwoQX/ArcGIS/rest/services/new_NHealth_gdb/FeatureServer/0',
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
              color: [255, 255, 0, 0.5],
              style: 'backward-diagonal',
              outline: {
                width: 1,
                color: [255, 255, 0, 0.2],
                style: 'solid',
              },
            },
          };
          const GOVLayer = new FeatureLayer({
            url: 'https://services9.arcgis.com/vpYrvEKDJvmCwoQX/ArcGIS/rest/services/new_NHealth_gdb/FeatureServer/2',
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
              color: [133, 160, 214, 0.4],
              style: 'solid',
              outline: {
                width: 1,
                color: [133, 160, 214, 0.2],
                style: 'solid',
              },
            },
          };
          const ADMINLLayer = new FeatureLayer({
            url: 'https://services9.arcgis.com/vpYrvEKDJvmCwoQX/ArcGIS/rest/services/new_NHealth_gdb/FeatureServer/3',
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
            url: 'https://services9.arcgis.com/vpYrvEKDJvmCwoQX/ArcGIS/rest/services/new_NHealth_gdb/FeatureServer/4',
            outFields: ['*'],
            renderer: SHAYAKALayerSymbol,
            popupEnabled: true,
            popupTemplate: popupSHAYAKALayer,
          });
          //#endregion

          // then we load a web map from an id
          var map = new Map({
            basemap: 'satellite',
            layers: [bufferLayer],
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
