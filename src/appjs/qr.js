import React, { useState } from "react";
import { Fab, TextareaAutosize } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { QrReader } from "react-qr-reader";

function QRscanner() {
  const [qrscan, setQrscan] = useState("No result");

  const handleScan = (data) => {
    if (data) {
      setQrscan(data);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  const handleResult = (result) => {
    // Handle the result here, similar to handleScan
    if (result) {
      setQrscan(result);
    }
  };

  return (
    <div>
      <Link to="/">
        <Fab style={{ marginRight: 10 }} color="primary">
          <ArrowBack />
        </Fab>
      </Link>
      <span>QR Scanner</span>

      <center>
        <div style={{ marginTop: 30 }}>
          <QrReader
            delay={300}
            onError={handleError}
            onScan={handleScan}
            onResult={handleResult} // Add this line
            style={{ height: 240, width: 320 }}
          />
        </div>
      </center>

      <TextareaAutosize
        style={{ fontSize: 18, width: 320, height: 100, marginTop: 100 }}
        maxRows={4}
        value={qrscan}
      />
    </div>
  );
}

export default QRscanner;
