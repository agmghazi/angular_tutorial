import { Component, OnInit } from '@angular/core';
import { loadModules } from 'esri-loader';
import { setDefaultOptions } from 'esri-loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
    setDefaultOptions({ version: '4.18' });

    const options = {
      css: true,
      insertCssBefore: 'style',
    };
    loadModules(
      ['esri/views/MapView', 'esri/Map', 'esri/layers/FeatureLayer'],
      options
    )
      .then(([MapView, Map, FeatureLayer]) => {
        //#region HOSPLayer(Point)
        var HOSPLayerSymbol = {
          type: 'simple',
          symbol: {
            type: 'picture-marker',
            url: '/assets/images/hospital.png',
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
              family: 'Noto Sans',
              style: 'italic',
              weight: 'normal',
            },
          },
          labelPlacement: 'above-center',
          labelExpressionInfo: {
            expression: '$feature.HC_NUM',
          },
        };

        var popupHOSPLayer = {
          title: '{AR_NAME}',
          content: `<table class="popupTableInfo">
          <tr>
          <td>GOV_CODE</td>
          <td>{GOV_CODE}</td>
          </tr>
          <tr>
          <td>EDARA_CODE</td>
          <td>{EDARA_CODE}</td>
          </tr>
          <tr>
          <td>GOV_NAME</td>
          <td>{GOV_NAME}</td>
          </tr>
          <tr>
          <td>EDARA_NAME</td>
          <td>{EDARA_NAME}</td>
          </tr>
          <tr>
          <td>HOSP_CODE</td>
          <td>{HOSP_CODE}</td>
          </tr>
        </table>`,
        };

        const HOSPLayer = new FeatureLayer({
          url:
            'https://services9.arcgis.com/vpYrvEKDJvmCwoQX/ArcGIS/rest/services/Health_gdb/FeatureServer/0',
          outFields: ['*'],
          popupEnabled: true,
          renderer: HOSPLayerSymbol,
          labelingInfo: [HOSPLayerLabel],
          popupTemplate: popupHOSPLayer,
        });
        //#endregion

        var EGYPTLayerSymbol = {
          type: 'simple', // autocasts as new SimpleRenderer()
          symbol: {
            type: 'simple-fill', // autocasts as new SimpleFillSymbol()
            color: 'rgba(138,43,226)',
            style: 'backward-diagonal',
            outline: {
              color: 'rgb(255,0,0)',
              width: 1.5,
              style: 'dash',
            },
          },
        };
        const EGYPTLayer = new FeatureLayer({
          url:
            'https://services9.arcgis.com/vpYrvEKDJvmCwoQX/ArcGIS/rest/services/Health_gdb/FeatureServer/1',
          renderer: EGYPTLayerSymbol,
        });

        // then we load a web map from an id
        var map = new Map({
          basemap: 'satellite',
          layers: [HOSPLayer, EGYPTLayer],
        });
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
      })
      .catch((err) => {
        // handle any errors
        console.error(err);
      });
  }
}
