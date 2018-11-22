export const geohashToPolygon = (geohash) => {
    var Geohash = {};

    /* (Geohash-specific) Base32 map */
    Geohash.base32 = '0123456789bcdefghjkmnpqrstuvwxyz';
        function bounds(geohash) {
            if (geohash.length === 0) return false;
        
            geohash = geohash.toLowerCase();
        
            var evenBit = true;
            var latMin =  -90, latMax =  90;
            var lonMin = -180, lonMax = 180;
            
            for (var i=0; i < geohash.length; i++) {
                var chr = geohash.charAt(i);
                var idx = Geohash.base32.indexOf(chr);
                if (idx == -1) return false;
        
                for (var n=4; n>=0; n--) {
                    var bitN = idx >> n & 1;
                    if (evenBit) {
                        // longitude
                        var lonMid = (lonMin+lonMax) / 2;
                        if (bitN == 1) {
                            lonMin = lonMid;
                        } else {
                            lonMax = lonMid;
                        }
                    } else {
                        // latitude
                        var latMid = (latMin+latMax) / 2;
                        if (bitN == 1) {
                            latMin = latMid;
                        } else {
                            latMax = latMid;
                        }
                    }
                    evenBit = !evenBit;
                }
            }
            
            var bounds = {
                sw: { lat: latMin, lon: lonMin },
                ne: { lat: latMax, lon: lonMax },
            };
        
            return bounds;
        };
        if (geohash === 'none'){
            var polygon = [];
        }else{
            var bounds = bounds(geohash); // <-- the hard work
            // now just determine the centre of the cell...
            var latMin = bounds.sw.lat, lonMin = bounds.sw.lon;
            var latMax = bounds.ne.lat, lonMax = bounds.ne.lon;
        var polygon = [
            {lat: latMin, lng: lonMin},
            {lat: latMax, lng: lonMin},
            {lat: latMax, lng: lonMax},
            {lat: latMin, lng: lonMax}
          ];
    }
    return polygon;
}

export const stringToArray = (string) => {
    string = string.replace(/'/g, '"');
    return JSON.parse(string);
}