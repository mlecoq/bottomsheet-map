import {
  BottomSheetModalProvider,
  BottomSheetModal,
} from "@gorhom/bottom-sheet";
import React, { useMemo, useRef } from "react";
import { StyleSheet, View, Button } from "react-native";
import MapboxGL from "@react-native-mapbox-gl/maps";

MapboxGL.setAccessToken("MAPBOX_ACCESS_TOKEN");

export default function App() {
  const snapPoints = useMemo(() => ["90%"], []);

  const bottomSheet = useRef(null);

  return (
    <BottomSheetModalProvider>
      <View style={styles.container}>
        <Button
          title="open bottom sheet"
          onPress={() => bottomSheet.current?.present()}
        />
      </View>
      <BottomSheetModal
        name="example"
        ref={bottomSheet}
        snapPoints={snapPoints}
      >
        <View flex={1}>
          <MapboxGL.MapView compassViewPosition={3} style={styles.mapView}>
            <MapboxGL.Camera zoomLevel={3} />
          </MapboxGL.MapView>
        </View>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mapView: { flex: 1 },
});
