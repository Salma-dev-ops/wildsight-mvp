# WildSight: Satellite-Guided Reforestation for Kenya

## 💡 Overview

**WildSight** is a geospatial platform designed to transform forest restoration efforts in Kenya. We move beyond generalized tree planting by using **advanced satellite and government & community data integration** to pinpoint the *exact locations* most urgently in need of reforestation, ensuring every planted tree counts.

##  The Problem

Kenya is facing unsustainable forest loss due to illegal activities and encroachment. Current reforestation initiatives often lack the **data precision** to identify the most critically degraded, high-priority areas, resulting in inefficient resource allocation and sub-optimal survival rates for new seedlings.

## ✨ Solution: Targeted Restoration

**WildSight** develops a **Geospatial Prioritization Platform** that creates a dynamic, high-resolution map of Kenya's forests based on two primary, layered data sources:

1.  **Remote Sensing Data:** Real-time analysis of **satellite imagery** (e.g., measuring **Normalized Difference Vegetation Index (NDVI)** and recent canopy loss) to quantify degradation.
2.  **Operational Data:** Integration of geo-referenced **Kenya Wildlife Service (KWS) and Kenya Forest Service (KFS) reports** (e.g., recorded incident locations, previous planting successes/failures).

### 🎯 Key Feature: The Prioritization Score

The platform generates a **Prioritization Score** for every square kilometer of forest land. This score is calculated based on factors like:
* Severity of degradation (from satellite data).
* Proximity to reported illegal activity (from KWS/KFS data).
* Ecological importance (if data allows).

**This score directs planting teams to the highest-impact coordinates.**

## 🛠️ Technology Stack (Example Placeholder)

* **Geospatial Analysis:** Google Earth Engine / ArcGIS / QGIS (or similar platform)
* **Backend/Data Processing:** Python (with libraries like GeoPandas, Rasterio, Scikit-learn for scoring algorithm)
* **Front-End Visualization:** Leaflet.js / Mapbox GL JS (to display the final interactive priority map)
* **Data Sources:** Sentinel-2 Satellite Data, Publicly available KWS/KFS Data (or simulated/dummy data for the Hackathon)

## ➡️ Impact and Next Steps

By providing **actionable geographic intelligence**, **WildSight** can:
1.  **Increase efficiency** by focusing resources on high-need areas.
2.  **Improve survival rates** by planting in strategically chosen, monitored locations.
3.  **Support KWS/KFS decision-making** with clear data visualizations.

---

 🤝 Collaboration & Contribution

**📢 WildSight is currently an EXTREMELY EXPERIMENTAL project.**

I welcome contributions from developers, geospatial analysts, and conservation experts, but please be aware that the codebase, algorithms, and data integration methods are under rapid development and subject to frequent, breaking changes.

### How to Contribute:

1.  **Fork the Repository:** Start by forking this repository to your own GitHub account.
2.  **Report Issues:** Found a bug in the prioritization algorithm or the data processing pipeline? Please open a detailed issue describing the problem and the steps to reproduce it.
3.  **Submit Pull Requests (PRs):** We are primarily looking for help in these areas:
    * **Algorithm Refinement:** Improving the accuracy of the Prioritization Score calculation (Layer 2).
    * **Data Integration:** Developing robust APIs to handle KWS/KFS data feeds.
    * **Visualization:** Enhancing the front-end map display (Layer 3).
4.  **Testing:** Help us validate the algorithm's output against real-world forest degradation data in Kenya.

**Before submitting a PR, please open an issue first to discuss your proposed change.**
