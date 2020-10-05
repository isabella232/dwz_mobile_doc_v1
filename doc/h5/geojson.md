## SVG to GeoJSON

主要用于地图上画出规划交通路线，和自定义多边形。因为高德地图上只有现状，没有规划，有时需要画规划交通和自定义区域多边形，使用SVG to GeoJSON比较方便。

### SVG to GeoJSON步骤
1. UI设计画SVG多边形，并给出"东北角"，"西南角"经纬度
2. SVG 转换工具编写测试页面 svn://dev.innodev.cn/HTML5/svg-to-geojson/trunk
3. 点击 View on a map, as GeoJSON
4. 复制geojson代码，保存文件

```js
// svg标签上必须有width="653px" height="557px"
var geoJson = svgtogeojson.svgToGeoJson([
    [31.0308, 121.1146], // 东北角
    [30.7589, 120.7440],  // 西南角
], document.getElementById('mysvg'), 3);

document.getElementById('demolink').href = "http://wandergis.com/geojson.io/#data=data:application/json," + encodeURIComponent(JSON.stringify(geoJson));

```
![](../_media/h5/geojson/d1f28648.png)

### 参考资料
* [在线画GeoJSON工具 - 国内](http://wandergis.com/geojson.io/#map=10/29.9305/119.7908)
* [在线画GeoJSON工具 - 国外](http://geojson.io/#map=10/29.9305/119.7908)
* [地图geojson数据](http://datav.aliyun.com/tools/atlas/#&lat=40.34654412118006&lng=87.01171875&zoom=4)
* [部分一二线城市的建筑物矢量图](https://blog.csdn.net/u012248603/article/details/88019259)
* [shp数据转换为geojson格式](http://mapshaper.org/)
* [OpenStreetMap初探（六）——获取地图数据](https://blog.csdn.net/scy411082514/article/details/7543929)
* [行政区域查询](https://restapi.amap.com/v3/config/district?keywords=%E5%98%89%E5%96%84&subdistrict=2&extensions=all&key=87b025677e2be4672f1baa2b71b5f742)
* [SVG to GeoJSON](https://labs.mapbox.com/svg-to-geojson/)
* [svg-to-geojson](https://github.com/mapbox/svg-to-geojson)
* [地图东北角西南角坐标SVG转GeoJSON](https://github.com/davecranwell/svg-to-geojson)
